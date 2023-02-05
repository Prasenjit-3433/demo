import Apple from './apple.jpg';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'apple';
    img.width = 300;
    img.src = Apple;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;