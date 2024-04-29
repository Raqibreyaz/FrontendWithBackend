import express from "express"
import cors from 'cors'

const app = express()

const corsOptions = {
    origin:"http://127.0.0.1:3001"
}

app.use(cors(corsOptions))

const jokes = [
    {
        id: 1,
        title: 'joke',
        content: 'A joke'
    },
    {
        id: 2,
        title: 'joke',
        content: 'A joke'
    },
    {
        id: 3,
        title: 'joke',
        content: 'A joke'
    },
    {
        id: 4,
        title: 'joke',
        content: 'A joke'
    },
    {
        id: 5,
        title: 'joke',
        content: 'A joke'
    },
]

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('welcome to the backend')
}
)
app.get('/api/jokes', (req, res) => {
    res.send(jokes)
}
)

app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`);
}
)