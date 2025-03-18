const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
const app = express();

// Stripe Secret Key'i buraya ekle
const stripe = Stripe('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'); // Stripe Secret Key buraya

// Middleware'ler
app.use(cors()); // CORS sorunlarını önlemek için
app.use(express.json()); // JSON verilerini işlemek için

// Ödeme linki oluşturma endpoint'i
app.post('/create-payment-link', async (req, res) => {
    const { priceId, description, productName } = req.body;

    try {
        console.log('Gelen İstek:', { priceId, description, productName });

        // Stripe API'si ile ödeme linki oluştur
        const paymentLink = await stripe.paymentLinks.create({
            line_items: [
                {
                    price: priceId, // Stripe Dashboard'dan aldığın Price ID
                    quantity: 1, // Miktar (1 adet)
                },
            ],
            metadata: {
                discordUsername: description.split("'")[0], // Discord kullanıcı adını metadata'ya ekle
                productName: productName, // Ürün adını metadata'ya ekle
            },
            payment_intent_data: {
                description: description, // Ödeme sayfasında gösterilecek açıklama
            },
        });

        console.log('Ödeme Linki Oluşturuldu:', paymentLink.url);
        res.json({ url: paymentLink.url }); // Ödeme linkini frontend'e gönder
    } catch (error) {
        console.error('Stripe Error:', error);
        res.status(500).json({ error: 'Ödeme linki oluşturulamadı.' });
    }
});

// Sunucuyu başlat
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});