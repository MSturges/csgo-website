const pay = require('../actions/pay.js');

module.exports = (req, res) => {
  console.log(req.body);
  if (req.body.stripe &&
      req.body.stripe.id &&
      req.body.user &&
      req.body.user.firstName &&
      req.body.user.lastName &&
      req.body.amount) {
      pay(req, res)
      .then((payRes) => {
        if (payRes.success) {
          res.json({
            success: payRes.success
          });
        } else {
          res.json({
            error: payRes.error
          });
        }
      })
      .catch((err) => {
        res.json({
          error: err
        });
      })

    } else {
      res.json({
        error: 'Insufficient information provided'
      });
    }
  };
