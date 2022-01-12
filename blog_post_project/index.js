const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const Posts = require('./posts');
app.use(bodyParser.json())

//TODO DELETE   /posts/:post_id (delete post)
//TODO PUT      /posts/:post_id (edit post)
//TODO POST     /posts/:post_id/comments (add comment to post)
//TODO DELETE   /posts/:post_id/comments/:comment_id (delete comment from post)
//TODO UPDATE   /posts/:post_id/comments/:comment_id (update comment)


// GET  /posts              list
app.get('/posts', (req,res) => {
    var posts = Posts.list()
    res.send(posts)
})
// GET  /posts/:post_id     get
app.get('/posts/:post_id', (req,res) => {
    var post_id = req.params.post_id;
    var post = Posts.get(post_id)
    if(!post){
        res.status(404).send('Post Not Found')
    } else {
        res.send(post)
    }
})
// POST /posts     add Posts.add
app.post('/posts', (req, res) => {
    var title = req.body.title
    var description = req.body.description

    var post = Posts.add({
        title,
        description
    })
    res.send(post)
})


app.listen(3010, () => {
    console.log("server is starting on http://localhost:3010")
})