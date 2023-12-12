import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()
const port = 3000 // You can choose any available port

app.use(cors()) // Enable CORS for all routes

app.get('/fetch-medium-posts', async (req, res) => {
  try {
    const rssUrl = 'https://medium.com/feed/@edgington.m.w'
    const apiEndpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`

    const response = await fetch(apiEndpoint)
    const data = await response.json()

    res.json(data) // Send the data back to the client
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    res.status(500).send('Error fetching blog posts')
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
