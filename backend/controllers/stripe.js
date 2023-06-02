import Stripe from "stripe";
const stripe = new Stripe(`${process.env.STRIPE_KEY}`);

export const initializePayment = async (req, res) => {
  try {
    const token = req.body.token;
    const customer = stripe.customers
      .create({
        email: "iyiolafisayo@gmail.com",
        source: token.id,
      })
      .then((customer) => {
        return stripe.charges.create({
          amount: parseInt(req.body.amount * 100),
          description: "Purchase of orion products",
          currency: "USD",
          customer: customer.id,
        });
      })
      .then((charge) => {
        console.log(charge);
        res.json({
          data: "success",
        });
      })
      .catch((err) => {
        res.json({
          data: "failure",
        });
      });
    return true;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment initialization failed" });
  }
};
// app.post("/api/payments/verify", async (req, res) => {
//   const { clientSecret, paymentDetails } = req.body;

// });
