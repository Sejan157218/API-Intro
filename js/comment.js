function getComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))
}

function displayComment(comments){
    const commentContainer = document.getElementById('comment');
    for (const comment of comments){
        const div = document.createElement('div');
        div.innerHTML = `
        <h4>name : ${comment.name}</h4>
        <h4>email : ${comment.email}</h4>
        <p>comment : ${comment.body}</p>
        `
        div.style.backgroundColor = 'green';
        div.style.color = 'white';
        div.style.border = '2px solid blue';
        div.style.borderRadius = '10px';
        div.style.margin = '5px';
        div.style.padding = '10px';
        commentContainer.appendChild(div);

    }
}

getComment();