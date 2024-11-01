const axios = require('axios');

async function postInvoice(token, invoiceData) {
    try {
        const response = await axios.post('https://ebms.obr.gov.bi:9443/ebms_api/addInvoice', invoiceData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to post invoice:', error);
        throw new Error('Failed to post invoice');
    }
}

module.exports = { postInvoice };
