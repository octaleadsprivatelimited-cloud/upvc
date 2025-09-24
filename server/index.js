const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors({ origin: ['http://localhost:5173'], credentials: false }))
app.use(express.json())

// Serve static frontend build
const clientDist = path.join(__dirname, '..', 'client', 'dist')
app.use(express.static(clientDist))

app.post('/api/contact', (req, res) => {
  const { name, phone, email, message } = req.body || {}
  if (!name || !phone) return res.status(400).json({ ok: false, error: 'Missing fields' })
  // Here you could integrate nodemailer or a CRM webhook
  console.log('Lead:', { name, phone, email, message })
  res.json({ ok: true })
})

// SPA fallback for non-API routes
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) return res.status(404).json({ ok: false })
  res.sendFile(path.join(clientDist, 'index.html'))
})

const PORT = process.env.PORT || 5175
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`))

