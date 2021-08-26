function getAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data =>postAlbum(data))
}

function postAlbum(albums){
    const albumSection = document.getElementById('album');
    for (const album of albums){
        const h3 = document.createElement('h3');
        h3.innerText = `title : ${album.title}`;
        albumSection.appendChild(h3);
    } 
}

getAlbum();