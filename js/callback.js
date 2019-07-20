const posts =[
    {title: 'Post 1', body: 'This is post 1'},
    {title: 'Post 2', body: 'This is post 2'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            usingText = `<h1 style="text-decoration: underline">Using Callback</h1>`
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML += usingText + output;
    },1000)
}

function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000);
}


//getPosts();

createPost({title: 'Post 3', body: 'This is post 3 created'} , getPosts);