const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminWebp = require('imagemin-webp');

const PNGImages = 'original/**/*.png';
const JPEGImages = 'original/**/*.jpg';


// (async () => {
//   await imagemin([JPEGImages], {
//     destination: 'mozjpeg',
//     plugins: [
//       imageminMozjpeg({ quality: '80' })
//     ]
//   });

//   console.log('mozjpeg');
// })();

// (async () => {
//   await imagemin([PNGImages], {
//     destination: 'webp',
//     plugins: [
//       imageminWebp({ quality: 85 })
//     ]
//   });

//   console.log('webp png');
// })();

(async () => {
  await imagemin([JPEGImages], {
    destination: 'webp',
    plugins: [
      imageminWebp({ quality: 80 })
    ]
  });

  console.log('webp jpg');
})();