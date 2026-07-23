function buildPaymentRequest(order) {

    return {

        id: "NS-" + Date.now(),

        currency: "USD",

        amount: order.amount,

        description: "Nova Select Order",

        callback_url:
        "https://nova-ai-fulfillment.onrender.com/pesapal/payment-status",

        notification_id: process.env.PESAPAL_IPN_ID,
        billing_address: {

            email_address: order.email,

            phone_number: order.phone,

            first_name: order.firstName,

            last_name: order.lastName

        }

    };

}

module.exports = {
    buildPaymentRequest
};
