// ساده حافظه-based store
let store = {};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "URL is required" });

    const shortId = Math.random().toString(36).substring(2, 8);
    store[shortId] = url;

    return res.status(200).json({
      short: `${req.headers.origin}/${shortId}`
    });
  }

  res.status(405).json({ error: "Method not allowed" });
}

// دا function به [id].js کې کاروو
export function getUrl(id) {
  return store[id];
} 
