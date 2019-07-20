const posts2 =[
    {title: 'Post 1', body: 'This is post 1'},
    {title: 'Post 2', body: 'This is post 2'}
];

function getPosts2(){
    setTimeout(() => {
        let output = '';
        posts2.forEach((post,index) => {
            usingText = `<h1 style="text-decoration: underline">Using Async/wait</h1>`
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML += usingText + output;
    },1000)
}

function createPost2(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts2.push(post);
            const error = false;
            if(!error){
                resolve();
            } else{
                reject("something went wrong");
            }
        },2000);
    });
    
}

async function init(){
    await createPost2({title: 'Post 3', body: 'This is post 3 created'});
    getPosts2();
}

init();