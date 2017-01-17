require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY);
const dollars_to_cents = require('../helpers/dollars_to_cents.js');

module.exports = (req, res, next) => {
  return stripe.charges.create({
    amount: dollars_to_cents(req.body.amount),
    currency: 'usd',
    source: req.body.stripe.id,
    description: `Donation of ${req.body.amount} made by ${req.body.user.firstName} ${req.body.user.lastName}`,
    metadata: {
      firstName: req.body.user.firstName,
      lastName: req.body.user.lastName,
      amount: req.body.amount
    }
  })
  .then((result) => {
    return {
      success: result
    };
  })
  .catch((err) => {
    return {
      error: err
    };
  });
};
