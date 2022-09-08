import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

let user = { username: "", avatar: "" };
let tweets = [];

app.post('/sign-up', (req, res) => {
    let login = req.body;
    user = {username: login.username, avatar: login.avatar}
    res.status(201).send("OK")
})

app.post('/tweets', (req, res) => {
    tweets.push({
        username: req.body.username,
        avatar: user.avatar,
        tweet: req.body.tweet 
    });
    res.status(201).send("OK")
})

app.get('/tweets', (req, res) => {
    let reverse = [];
    if(tweets.length > 10) {
        for(let i = 0; i < 9; i++) {
            reverse.push(tweets[tweets.length -1 - i])
        }
    }else{
        for(let i = 0; i < tweets.length; i++) {
            reverse.push(tweets[tweets.length -1 - i])
        }
    }
    res.status(201).send(reverse)
})

const port = 5000;
app.listen(port, () => {
    console.log(`|-----------------------------------|`)
    console.log(`| Running at http://localhost:${port}  |`)
    console.log(`|-----------------------------------|`)
})
