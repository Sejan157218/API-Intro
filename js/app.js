function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(username => display(username))
}

function display(username){
    const userss = document.getElementById('users');
    for (const user of username){
        const li = document.createElement('li');
        li.innerText = `
        name : ${user.name}
        email : ${user.email}`;
        userss.appendChild(li);
    }
}

function displayPost(posts){
    const postB =document.getElementById('post')
    for (const postss of posts){
        const newPost = document.createElement('h1');
        newPost.innerHTML = `
        <h1>${postss.title}</h1>
        <p>${postss.body}</p>
        `
        postB.appendChild(newPost);
    }
}