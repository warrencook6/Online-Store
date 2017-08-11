var stripe = require('stripe')(process.env.STRIPE_API_KEY);

exports.charge = function(token, amount) {
    return stripe.charges.create({
        amount: amount,
        currency: 'usd',
        source: token,
        description: 'Statement description'
    });
}