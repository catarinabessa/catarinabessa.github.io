async function checkFormStatus() {
    try {
        const response = await fetch('http://localhost:3000/check-form-status');
        const data = await response.json();

        if (data.isOpen) {
            document.getElementById('commission-status').innerHTML =
                '<a href="https://docs.google.com/forms/d/e/1FAIpQLScJ90IWf4vAImuPQhIBu35K3_3otwpHyJaRMenO5RfhwalPug/viewform" target="_blank">my commissions are open</a>';
        } else {
            document.getElementById('commission-status').textContent = 'my commissions are closed';
        }
    } catch (error) {
        console.error("Error checking form status:", error);
        document.getElementById('commission-status').textContent = 'unable to determine commission status';
    }
}

checkFormStatus();

setInterval(checkFormStatus, 60000);  // Check every 60 seconds
