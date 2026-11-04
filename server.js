const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const commentsPath = path.join(__dirname, 'data', 'comments.json');
const ownerPassword = process.env.OWNER_PASSWORD || 'temmy123';

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

function ensureCommentsFile() {
  const dir = path.dirname(commentsPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(commentsPath)) {
    fs.writeFileSync(commentsPath, JSON.stringify({}, null, 2));
  }
}

function readComments() {
  ensureCommentsFile();
  try {
    const raw = fs.readFileSync(commentsPath, 'utf8');
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (error) {
    return {};
  }
}

function writeComments(data) {
  ensureCommentsFile();
  fs.writeFileSync(commentsPath, JSON.stringify(data, null, 2));
}

function normalizeComment(comment) {
  if (!comment || typeof comment !== 'object') {
    return null;
  }

  const text = String(comment.text || '').trim();
  const date = comment.date || new Date().toISOString();
  const id = comment.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  return text ? { id, text, date } : null;
}

function getAllCommentsSorted(commentsMap) {
  return Object.entries(commentsMap)
    .flatMap(([product, comments]) => {
      const items = Array.isArray(comments) ? comments : [];
      return items
        .map((comment) => normalizeComment(comment))
        .filter(Boolean)
        .map((item) => ({ ...item, product }));
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

app.get('/api/comments', (req, res) => {
  const { product } = req.query;
  const commentsByProduct = readComments();

  if (product) {
    const productComments = Array.isArray(commentsByProduct[product]) ? commentsByProduct[product] : [];
    const normalized = productComments
      .map((comment) => normalizeComment(comment))
      .filter(Boolean)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    return res.json({ comments: normalized });
  }

  res.json({ comments: getAllCommentsSorted(commentsByProduct) });
});

app.post('/api/comments', (req, res) => {
  const { product, text } = req.body || {};
  const normalizedProduct = String(product || '').trim();
  const normalizedText = String(text || '').trim();

  if (!normalizedProduct || !normalizedText) {
    return res.status(400).json({ error: 'Product and comment text are required.' });
  }

  const commentsByProduct = readComments();
  const productComments = Array.isArray(commentsByProduct[normalizedProduct])
    ? commentsByProduct[normalizedProduct]
    : [];

  const newComment = normalizeComment({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    text: normalizedText,
    date: new Date().toISOString()
  });

  if (!newComment) {
    return res.status(400).json({ error: 'Comment is empty.' });
  }

  productComments.push(newComment);
  commentsByProduct[normalizedProduct] = productComments.sort((a, b) => new Date(b.date) - new Date(a.date));
  writeComments(commentsByProduct);

  res.status(201).json({ comment: newComment, product: normalizedProduct });
});

app.delete('/api/comments/:productName/:id', (req, res) => {
  const { productName, id } = req.params;
  const { ownerPassword: payloadPassword } = req.query;

  if (payloadPassword !== ownerPassword) {
    return res.status(401).json({ error: 'Unauthorized owner access.' });
  }

  const commentsByProduct = readComments();
  const productKey = decodeURIComponent(productName);
  const currentComments = Array.isArray(commentsByProduct[productKey]) ? commentsByProduct[productKey] : [];
  const filteredComments = currentComments.filter((comment) => String(comment?.id || comment?.date) !== String(id));

  if (filteredComments.length) {
    commentsByProduct[productKey] = filteredComments;
  } else {
    delete commentsByProduct[productKey];
  }

  writeComments(commentsByProduct);
  res.json({ success: true, product: productKey, deletedId: id });
});

app.get('/api/comments/all', (req, res) => {
  const { ownerPassword: payloadPassword } = req.query;

  if (payloadPassword !== ownerPassword) {
    return res.status(401).json({ error: 'Unauthorized owner access.' });
  }

  const commentsMap = readComments();
  res.json({ comments: getAllCommentsSorted(commentsMap) });
});

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API route not found.' });
  }

  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Temmy Wears backend running on http://localhost:${port}`);
});
