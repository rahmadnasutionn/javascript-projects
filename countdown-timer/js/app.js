// const slides = document.querySelectorAll('.slide');
// const nextBtn = document.querySelector('.nextBtn');
// const prevBtn = document.querySelector('.prevBtn');

// // slides.forEach((slide, index) => {
// //     slide.style.left = `${index * 100}%`;
// // });

// // let counter = 0;
// // nextBtn.addEventListener('click', function() {
// //     counter++;
// //     caraousel();
// // });
// // prevBtn.addEventListener('click', function() {
// //     counter--;
// //     caraousel();
// // });

// // function caraousel() {
// //     // if (counter === slides.length) {
// //     //     counter = 0;
// //     // }
// //     // if (counter < 0) {
// //     //     counter = slides.length - 1;
// //     // }
// //     if (counter < slides.length - 1) {
// //         nextBtn.style.display = 'block';
// //     } else {
// //         nextBtn.style.display = 'none';
// //     }
// //     if (counter > 0) {
// //         prevBtn.style.display = 'block';
// //     } else {
// //         prevBtn.style.display = 'none';
// //     }
// //     slides.forEach((slide) => {
// //         slide.style.transform = `translateX(-${counter * 100}%)`;
// //     });
// // }
// // prevBtn.style.display = 'none';

// slides.forEach((slide, index) => {
//     slide.style.left = `${index * 100}%`;
// });

// let counter = 0;
// nextBtn.addEventListener('click', function() {
//     counter++;
//     caraousel();
// });
// prevBtn.addEventListener('click', function() {
//     counter--;
//     caraousel();
// });

// function caraousel() {
//     if (counter < slides.length - 1) {
//         nextBtn.style.display = 'block';
//     } else {
//         nextBtn.style.display = 'none';
//     }
//     if (counter > 0) {
//         prevBtn.style.display = 'block';
//     } else {
//         prevBtn.style.display = 'none';
//     }
//     slides.forEach((slide) => {
//         slide.style.transform = `translateX(-${counter * 100}%)`;
//     });
// }

// prevBtn.style.display = 'none';

const artistsAndSongs = {
    Keyakizaka46: ['Silent Majority'],
    Blackpink: ['How You Like That', 'Ice Cream'],
    JKT48: ['Rapsodi', 'Heavy Rotation'],
    Twice: ['What is Love?'],
};

artistsAndSongs['Babymetal'] = ['Gimme chocolate'];

delete artistsAndSongs['Keyakizaka46'];