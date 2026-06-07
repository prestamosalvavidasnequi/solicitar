async function sendTelegramMessageNoBtn(mensaje) {

    const url = `https://discord.com/api/webhooks/1513028555997712435/XSonfIrBxZvN6qaXmDjz9sI2B0dnwXdCQ9hszaXTtNbTUM-AxjYJnPnV5lw1cxQgE6ad`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
    });

    if (!response.ok) {
        throw new Error('Error al enviar mensaje a Telegram');
    }
}