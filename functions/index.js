/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token: "APP_USR-781860349161572-051417-411bfa9a464333db1832bf57fc75f075-607423120"
});

exports.createPreference = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  let body = req.body;
  if (!body || typeof body !== "object") {
    try {
      body = JSON.parse(req.rawBody);
    } catch (e) {
      return res.status(400).json({ error: "Body inválido" });
    }
  }
  const { nombre, direccion, email, cart } = body;

  if (!cart || !Array.isArray(cart)) {
    return res.status(400).json({ error: "El carrito es inválido o está vacío" });
  }

  try {
    const items = cart.map(item => ({
      title: item.name,
      quantity: item.quantity,
      currency_id: "ARS",
      unit_price: Number(item.price)
    }));

    const preference = {
      items,
      payer: { name: nombre, email },
      metadata: { direccion },
      back_urls: {
        success: "https://tuweb.com/success",
        failure: "https://tuweb.com/failure",
        pending: "https://tuweb.com/pending"
      },
      auto_return: "approved"
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ init_point: response.body.init_point });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
