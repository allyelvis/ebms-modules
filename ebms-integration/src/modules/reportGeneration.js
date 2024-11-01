const axios = require('axios');

async function generateReport(token, reportParams) {
    try {
        const response = await axios.get('https://ebms.obr.gov.bi:9443/ebms_api/report', {
            params: reportParams,
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to generate report:', error);
        throw new Error('Failed to generate report');
    }
}

module.exports = { generateReport };
