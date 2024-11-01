const { authenticate } = require('./modules/authentication');
const { postInvoice } = require('./modules/invoiceManagement');
const { postStockMovement } = require('./modules/stockMovement');
const { generateReport } = require('./modules/reportGeneration');

// Example usage for testing the setup
(async () => {
    try {
        const token = await authenticate('username', 'password'); // Update with valid credentials

        const invoiceData = {
            // Fill with appropriate invoice data structure
        };
        await postInvoice(token, invoiceData);

        const stockData = {
            // Fill with appropriate stock data structure
        };
        await postStockMovement(token, stockData);

        const reportParams = {
            // Define parameters for the report
        };
        const reportData = await generateReport(token, reportParams);
        console.log(reportData);

    } catch (error) {
        console.error('Operation failed:', error);
    }
})();
