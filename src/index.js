// write your code here!

let imgURL = 'http://localhost:3000/ducks'
fetch(imgURL) 
.then(resp => resp.json())
.then(data => {
    console.log(data);
    renderDetails(data[0])
    for (let duck of data) {
        renderImage(duck)
        
    }
});

function renderImage (ducks) {
    let duckNav = document.querySelector('#duck-nav')

    let image = document.createElement('img')
    image.src = ducks.img_url;

    duckNav.appendChild(image)

    image.addEventListener('click', () => renderDetails(ducks))

}

//
function renderDetails (ducks) {
    let displayName = document.querySelector('#duck-display-name')
    displayName.textContent = ducks.name;

    let displayImage = document.querySelector('#duck-display-image')
    displayImage.src = ducks.img_url;

    let displayLikes = document.querySelector('#duck-display-likes');
    displayLikes.textContent = `${ducks.likes} likes`

    let likesButton = document.querySelector('#duck-display-likes')
    
    let count = parseInt(likesButton.textContent)
    likesButton.addEventListener('click', () => {
        count++;
        likesButton.textContent = count + " likes"
        });
}

// 
let form = document.querySelector('#new-duck-form')
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let newDuckForm = {
        name: event.target['duck-name-input'].value,
        img_url: event.target['duck-image-input'].value,
        likes: 0,
    }
    renderImage(newDuckForm);
    form.reset();
})
