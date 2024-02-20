
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ url, alt }) => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery-item');

  const image = document.createElement('img');
  image.src = url;
  image.alt = alt;
  image.classList.add('gallery-image');

  listItem.appendChild(image);
  return listItem;
};

const fragment = document.createDocumentFragment();
images.forEach(image => {
  fragment.appendChild(createGalleryItem(image));
});

galleryList.appendChild(fragment);
