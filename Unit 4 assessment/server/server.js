const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
const fortuneCookies = [
    'Do not mistake temptation for opportunity.',
    'He who laughs at himself never runs out of things to laugh at',
    'You will be hungry again in one hour.',
    'The road to riches is paved with homework.',
    'Fortune not found? Abort, Retry, Ignore.',
    'Never forget a friend. Especially if he owes you.',
    'Only listen to the fortune cookie; disregard all other fortune telling units.',
    'There is no mistake so great as that of being always right.',
    'Hard work pays off in the future. Laziness pays off now.',
    'Don’t eat the paper.'
]

app.get("/fortune", (req, res) => {
let randomIndex = Math.floor(Math.random()*fortuneCookies.length)
})
res.status(200).send(fortuneCookies[randomIndex])


app.listen(4000, ()=> console.log("Server running on port 4000"))