const images = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg'
];

let index = 0;
const slide = document.getElementById('slide');

function showImage(i) {
  slide.src = images[i];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

// Start
showImage(index);
setInterval(nextImage, 3000);
