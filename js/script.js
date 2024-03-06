const imageContainer = document.querySelector('.image-container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');


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
        <h1 class="${hiddenClass}">${img.title}</h1>  
        <p class="${hiddenClass}">${img.description}</p>
    `          
})

