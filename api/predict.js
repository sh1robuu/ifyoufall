export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(204).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { messages, model } = req.body;
    const OLLAMA_URL = process.env.OLLAMA_BASE_URL || 'https://ollama.com/api/chat';
    const OLLAMA_KEY = process.env.OLLAMA_API_KEY;

    if (!OLLAMA_KEY) return res.status(500).json({ error: 'OLLAMA_API_KEY chưa được cấu hình trên Vercel' });

    try {
        const resp = await fetch(OLLAMA_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + OLLAMA_KEY
            },
            body: JSON.stringify({
                model: model || process.env.OLLAMA_MODEL || 'gemini-3-flash-preview:cloud',
                messages: messages,
                stream: false
            })
        });

        if (!resp.ok) {
            const errText = await resp.text();
            return res.status(resp.status).json({ error: 'Ollama error: ' + resp.status, detail: errText });
        }

        const data = await resp.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Proxy error: ' + error.message });
    }
}
