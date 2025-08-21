
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 4000;
const OLLAMA_API_URL = 'https://ollama.vedardha.shop/v1/chat/completions';

app.use(cors());
app.use(express.json());

// Proxy route temporarily disabled for debugging
// app.post('/api/ollama/v1/chat/completions', async (req, res) => {
//   try {
//     const ollamaRes = await fetch(OLLAMA_API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // ...req.headers, // Commented out to avoid passing problematic headers
//       },
//       body: JSON.stringify(req.body),
//     });
//     const data = await ollamaRes.text();
//     res.status(ollamaRes.status).type(ollamaRes.headers.get('content-type')).send(data);
//   } catch (err) {
//     res.status(500).json({ error: 'Proxy error', details: err.message });
//   }
// });

app.get('/', (req, res) => {
  res.send('Ollama Proxy Backend is running.');
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
