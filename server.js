const express = require('express');
const cors = require('cors');
const axios = require('axios');  // Import Axios for HTTP requests

const app = express();
const PORT = 3000;

app.use(cors());  // Enable CORS for all routes

const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScJ90IWf4vAImuPQhIBu35K3_3otwpHyJaRMenO5RfhwalPug/viewform';  // Replace with your Google Form URL
const formResponseUrl = formUrl.replace('viewform', 'formResponse');  // Response URL

// Function to check if the form is accepting responses
async function isFormOpen() {
    try {
        const response = await axios.get(formResponseUrl);
        const html = response.data;

        // Check if the form is closed (look for a specific "closed" message in the HTML)
        if (html.includes("my commissions are closed right now!")) {
            return false;  // Form is closed
        }
        return true;  // Form is open
    } catch (error) {
        console.error('Error fetching form response page:', error);
        return false;  // In case of an error, assume the form is closed
    }
}

// Endpoint to check the form status
app.get('/check-form-status', async (req, res) => {
    const open = await isFormOpen();  // Check if the form is open
    res.json({ isOpen: open });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
