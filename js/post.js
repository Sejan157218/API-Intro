function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>displayPost(data) )
}
loadPost();

function displayPost(posts){
    const postSection = document.getElementById('post-section')
    for (const post of posts){
        const div =document.createElement('div');
        div.classList.add('post')
        div.innrHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        postSection.appendChild(div);
    }
}


function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
    body: JSON.stringify({
        name: 'sejan mahmud',
        body: 'I am a Web-Developer',
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
    })

    .then((res) =>res.json())
    .then((json) => console.log(json))
    // .then((data) => console.log(data))
}
addPost();
