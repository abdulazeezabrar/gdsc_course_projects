const express = require('express');
const bodyParser = require('body-parser')
const app = express()
require('./mongodb_connection').init()
const Post = require('./posts');


app.use(bodyParser.json())
//TODO POST     /posts/:post_id/comments (add comment to post)
//TODO DELETE   /posts/:post_id/comments/:comment_id (delete comment from post)
//TODO UPDATE   /posts/:post_id/comments/:comment_id (update comment)


// GET  /posts              list
app.get('/posts', async (req, res) => {
    var posts = await Post.find({});
    res.send( posts )
})

// GET  /posts/:post_id     get
app.get('/posts/:post_id', async (req,res) => {
    var post_id = req.params.post_id;
    try {
        var post = await Post.findById(post_id)
        if (!post) {
            res.status(404).send('Post Not Found')
        } else {
            res.send(post)
        }
    } catch (e) {
        res.status(404).send('Post Not Found')
    }
})
// POST /posts     add Posts.add
app.post('/posts', async (req, res) => {
    var title = req.body.title
    var description = req.body.description

    var post = new Post({
        title,
        description
    })

    await post.save();
    res.send(post)
})

var a = 1;

// DELETE  /posts/:post_id     delete
app.delete('/posts/:post_id', async (req,res) => {
    var post_id = req.params.post_id;
    try {
        var post = await Post.findByIdAndDelete(post_id);
        res.send({
            deleted: post ? true : false
        })
    } catch (e) {
        res.status(404).send('Post Not Found')
    }
})

//TODO PUT      /posts/:post_id (edit post)
app.put('/posts/:post_id', async (req,res) => {
    var post_id = req.params.post_id;
    var title = req.body.title;
    var description = req.body.description;
    try {
        var post = await Post.findById(post_id)
        if (!post) {
            res.status(404).send('Post Not Found')
        } else {
            if (title) {
                post.title = title;
            }
            if (description) {
                post.description = description;
            }
            await post.save()
            res.send(post)
        }
    } catch (e) {
        res.status(404).send('Post Not Found')
    }

})


app.listen(3010, () => {
    console.log("server is starting on http://localhost:3010")
})