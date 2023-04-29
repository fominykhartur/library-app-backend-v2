import fetch from 'node-fetch';

async function request(options: { type: any; url: any; body: any; headers: any; })
{
    const {
        type,
        url,
        body,
        headers,
    } = options;

    const fetchOptions = {
        method: type,
        headers: headers,
        body: JSON.stringify(body)
    }

    try {
        const response = await fetch(url, fetchOptions);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = {
    request,
}
