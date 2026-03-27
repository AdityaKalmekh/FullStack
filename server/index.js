import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/artword', async (req, res) => {
    const response = await fetch('https://api.artic.edu/api/v1/artworks?limit=20');
    if (!response.ok) throw new Error("Not able to get art work data");
    const data = await response.json()
    res.json(data);
})

app.get('/api/detail/:artistId', async (req, res) => {
    const id = req.params.artistId;
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
    if (!response.ok) {
        return res.json({ success: false, message: 'Detail not found' });
    }
    const data = await response.json();
    res.json(data);
})

app.get('/api/image/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const response = await fetch(
      `https://www.artic.edu/iiif/2/${id}/full/400,/0/default.jpg`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
          "Referer": "https://www.artic.edu/"
        }
      }
    );

    if (!response.ok) {
      return res.status(response.status).send('Failed to fetch image');
    }

    const buffer = await response.arrayBuffer();

    res.set(
      'Content-Type',
      response.headers.get('content-type') || 'image/jpeg'
    );

    res.send(Buffer.from(buffer));

  } catch (err) {
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});