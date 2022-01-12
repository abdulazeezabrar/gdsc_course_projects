class Posts {
    #posts = []
    #id_counter = 1;

    add({
        title,
        description
    }){
        var post = {
            id: this.#id_counter,
            title: title,
            description: description,
        }
        this.#id_counter++;
        this.#posts.push(post)
        return post;
    }
    // list
    list(){
        return this.#posts;
    }
    // get
    get(id) {
        return this.#posts.find((post) => post.id == id)
    }
    // update
    update({
        id,
        title,
        description
    }){
        var post = this.get(id)
        if(!post){
            return undefined
        } else {
            post.title = title || post.title;
            post.description = description || post.description;
            return post
        }
    }
    // delete
    delete(id){
        var post = this.get(id)
        if(!post){
            return undefined
        } else {
            this.#posts = this.#posts.filter(post => post.id != id)
        }
    }

}

module.exports = new Posts();