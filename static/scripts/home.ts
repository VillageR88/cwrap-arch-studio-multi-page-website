import EmblaCarousel from "embla-carousel";
console.log("123");

const emblaNode = document.querySelector(".embla");
const options = { loop: false };
const emblaApi = EmblaCarousel(emblaNode as HTMLElement, options);

console.log(emblaApi.slideNodes()); // Access API
