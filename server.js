import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM me __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const uploadFolder = path.join(__dirname, 'uploads');

// Uploads folder banana agar na ho
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// File Uploading Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadFolder),
  filename: (req, file, cb) => cb(null, file.originalname),
});
const upload = multer({ storage });

// Upload files
app.post('/upload', upload.any(), (req, res) => {
  res.send('📁 Files uploaded!');
});

// Create new file
app.post('/create', (req, res) => {
  const { filename, content } = req.body;
  const filepath = path.join(uploadFolder, filename);
  fs.writeFileSync(filepath, content);
  res.send('✅ File created.');
});

// Edit file
app.post('/edit', (req, res) => {
  const { filename, content } = req.body;
  const filepath = path.join(uploadFolder, filename);
  if (fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, content);
    res.send('✏️ File edited.');
  } else {
    res.status(404).send('❌ File not found.');
  }
});

// Delete file
app.post('/delete', (req, res) => {
  const { filename } = req.body;
  const filepath = path.join(uploadFolder, filename);
  if (fs.existsSync(filepath)) {
    fs.unlinkSync(filepath);
    res.send('🗑️ File deleted.');
  } else {
    res.status(404).send('❌ File not found.');
  }
});

// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
