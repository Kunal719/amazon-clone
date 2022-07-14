/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51KOFsrSFjenqOaRuhGySFXfzCaDUYxeEBJz2J6rEaCJ2bwrgkmotSNmcDTpOkm4ma8y7kfhhegej1tGxxofbFswQ00RCrabAuC'
);

// API

// App Configuration
const app = express();

// Middlewares
app.use(cors({ origin: true })); // for security purpose
app.use(express.json()); // send data in json format

// API Routes
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;

  console.log('Payment Request Received for >>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // in paise
    currency: 'inr',
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen To Port
exports.api = functions.https.onRequest(app);

// API Endpoint (use in axios baseURL)
// http://localhost:5001/clone-abcf4/us-central1/api
