const axios = require('axios');

async function postStockMovement(token, stockData) {
    try {
        const response = await axios.post('https://ebms.obr.gov.bi:9443/ebms_api/addStockmovement', stockData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to post stock movement:', error);
        throw new Error('Failed to post stock movement');
    }
}

module.exports = { postStockMovement };
