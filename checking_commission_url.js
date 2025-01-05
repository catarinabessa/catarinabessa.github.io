const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScJ90IWf4vAImuPQhIBu35K3_3otwpHyJaRMenO5RfhwalPug/viewform';  // Replace with your Google Form URL
const formResponseUrl = formUrl.replace('viewform', 'formResponse');  // Response URL

// Function to check if the form is accepting responses
async function isFormOpen() {
    try {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const formResponseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScJ90IWf4vAImuPQhIBu35K3_3otwpHyJaRMenO5RfhwalPug/formResponse';  // Your form's response URL
        const response = await fetch(proxyUrl + formResponseUrl);  // Use the CORS proxy
        const html = await response.text();  // Use .text() instead of .data
        console.log(html);
        if (html.includes("my commissions are closed right now!")) {
            return false;  // Form is closed
        }
        return true;  // Form is open
    } catch (error) {
        console.error('Error fetching form response page:', error);
        return false;  // In case of an error, assume the form is closed
    }
}


async function checkFormStatus() {
    const response = await isFormOpen();

    if (response) {
        document.getElementById('commission-status').innerHTML =
            '<a class="headline" href="https://docs.google.com/forms/d/e/1FAIpQLScJ90IWf4vAImuPQhIBu35K3_3otwpHyJaRMenO5RfhwalPug/viewform" target="_blank">commissions are open!!</a>';
    } else {
        document.getElementById('commission-status').textContent = 'commissions are closed';
    }
}

checkFormStatus();

