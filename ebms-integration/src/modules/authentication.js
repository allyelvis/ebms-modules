const axios = require('axios');

async function authenticate(username, password) {
    try {
        const response = await axios.post('https://ebms.obr.gov.bi:9443/ebms_api/auth', {
            username,
            password
        });
        const token = response.data.token;
        return token;
    } catch (error) {
        console.error('Authentication failed:', error);
        throw new Error('Authentication failed');
    }
}

module.exports = { authenticate };
