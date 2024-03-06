const imageContainer = document.querySelector('.image-container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const thumbContainer = document.querySelector('.card-lat');

let counter = 0;

const images = [
    {
        url: 'img/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'img/peru.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'img/chile.jpg',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'img/argentina.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'img/colombia.jpg',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

// Inserisco tutte le immagini dentro il container

images.forEach((img, index) => {

    let hiddenClass = '';
    
    if (index !== 0) {
        hiddenClass = 'hidden';
    } 

    imageContainer.innerHTML += `
        <img class="image ${hiddenClass}" src="${img.url}">
        <h1 class="title ${hiddenClass}">${img.title}</h1>  
        <p class=" description ${hiddenClass}">${img.description}</p>
    `
    thumbContainer.innerHTML +=`
    <div class="card-container">
        <img src="${img.url}" alt="">
    `
})

right.addEventListener('click', ()=> {

    const allImages = document.querySelectorAll('.image');
    const allTitles = document.querySelectorAll('.title');
    const allDescriptions = document.querySelectorAll('.description');

    allImages[counter].classList.add('hidden');
    allTitles[counter].classList.add('hidden');
    allDescriptions[counter].classList.add('hidden');

    counter = (counter + 1) % allImages.length;


    allImages[counter].classList.remove('hidden');
    allTitles[counter].classList.remove('hidden');
    allDescriptions[counter].classList.remove('hidden');
    

    if (counter === 0) {
        allImages[allImages.length - 1].classList.add('hidden');
        allTitles[allTitles.length - 1].classList.add('hidden');
        allDescriptions[allDescriptions.length - 1].classList.add('hidden');
    }
});



left.addEventListener('click', () => {

    const allImages = document.querySelectorAll('.image');
    const allTitles = document.querySelectorAll('.title');
    const allDescriptions = document.querySelectorAll('.description');

    
    allImages[counter].classList.add('hidden');
    allTitles[counter].classList.add('hidden');
    allDescriptions[counter].classList.add('hidden');

    counter = (counter - 1 + allImages.length) % allImages.length;

    allImages[counter].classList.remove('hidden');
    allTitles[counter].classList.remove('hidden');
    allDescriptions[counter].classList.remove('hidden');
    
})