import Glide from '@glidejs/glide';
import '@/styles/main.scss';
import "@glidejs/glide/dist/css/glide.core.min.css";

new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    gap: 20,
    animationDuration: 300,

    breakpoints: {
        992: {
            perView: 2
        },
        768: {
            perView: 1
        }
    }
}).mount();