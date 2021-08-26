function getPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data =>postPhotos(data))
}

function postPhotos(photos){
    const photoSection = document.getElementById('photo');
    for (const photo of photos){
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>${photo.title}</h3>
        <img src="${photo.url}" alt="">
        `;
        div.style.backgroundColor = 'green';
        div.style.display = 'inline-block'
        div.style.color = 'white';
        div.style.border = '2px solid blue';
        div.style.borderRadius = '10px';
        div.style.margin = '5px';
        div.style.padding = '10px';
        photoSection.appendChild(div);
    }
}


getPhotos();