const posts1 =[
    {title: 'Post 1', body: 'This is post 1'},
    {title: 'Post 2', body: 'This is post 2'}
];

function getPosts1(){
    setTimeout(() => {
        let output = '';
        posts1.forEach((post,index) => {
            usingText = `<h1 style="text-decoration: underline">Using Promise</h1>`
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML += usingText + output;
    },1000)
}

function createPost1(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts1.push(post);
            const error = false;
            if(!error){
                resolve();
            } else{
                reject("something went wrong");
            }
        },2000);
    });
    
}

createPost1({title: 'Post 3', body: 'This is post 3 created'}).then(getPosts1).catch(err => {console.log(err)});

//Promise all

const promise1 = Promise.resolve("Hello dear!!!");
const promise2 = 20;
const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve,2000,"I am done.!!!");
});

const users = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1,promise2,promise3,users]).then(values => console.log(values));