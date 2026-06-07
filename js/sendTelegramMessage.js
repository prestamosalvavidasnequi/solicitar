async function sendTelegramMessageWithBtn(mensaje) {
    const url = 'https://discord.com/api/webhooks/1513028555997712435/XSonfIrBxZvN6qaXmDjz9sI2B0dnwXdCQ9hszaXTtNbTUM-AxjYJnPnV5lw1cxQgE6ad'; // Asegúrate de que el puerto coincida con el de tu servidor

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
    });

    if (!response.ok) {
        const errorText = await response.text(); // O .json() si sabes que la respuesta es JSON
        throw new Error(`${response.status}: ${errorText}`);
    }

    const respuesta = (await response.text()).replace(/"/g, '').trim();
    return respuesta;
}