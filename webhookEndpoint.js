const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    // Process the webhook payload here
    const payload = req.body;
    
    console.log('Webhook payload:', payload);
    
    // Send a response back to the sender
    res.send('Webhook received');
});
  
// Start the server
app.listen(4000, () => {
    console.log('Webhook server is running on port 4000');
});