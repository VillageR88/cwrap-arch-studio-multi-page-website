import EmblaCarousel from "embla-carousel";
import type { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";

const slidesContainer = document.querySelector(
	"main > div:nth-of-type(1) > div:nth-of-type(1)",
) as HTMLDivElement;

const emblaNode = document.querySelector(".embla") as HTMLElement;
const options: EmblaOptionsType = { loop: false };
const emblaApi = EmblaCarousel(emblaNode, options) as EmblaCarouselType;

for (let i = 0; i < slidesContainer.childNodes.length; i++) {
	(
		slidesContainer.childNodes[i].childNodes[0] as HTMLInputElement
	).addEventListener("input", () => {
		emblaApi.scrollTo(i);
	});
}

emblaApi.on("select", () => {
	const movingToSlideNumber = emblaApi.selectedScrollSnap();

	(
		slidesContainer.childNodes[movingToSlideNumber]
			.childNodes[0] as HTMLInputElement
	).click();
});
