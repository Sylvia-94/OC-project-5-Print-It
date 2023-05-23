

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Début de mon code 
// -----------------------------------------------------------

// Définition de mes variables 


let slidesIndex = 0;
const banner = document.querySelector(".banner");
const bannerImg = document.querySelector(".banner-img");
const bannerTag = document.querySelector("#tagLine");

const arrowLeft = document.getElementById("arrowL");
const arrowRight = document.getElementById("arrowR");

function slideChange () {

	bannerImg.src="./assets/images/slideshow/" + slides[slidesIndex].image;
	bannerTag.innerHTML = slides[slidesIndex].tagLine;
	
}

arrowLeft.addEventListener("click", function() {

// bannerImg = récupération de la source des images, définition de la première slide à 0 par slideIndex
// bannerTag = on définit la tagline selon la slide sur laquelle on se trouve 
// slidesIndex -- = on enlève 1 à slideIndex
slidesIndex--;

if(slidesIndex < 0){

	slidesIndex = slides.length-1;
}

slideChange();

})

arrowRight.addEventListener("click", function() {

	// Même chose que pour flèche de gauche sauf qu'on a slidesIndex ++, donc on ajoute 1
	slidesIndex++;

	if(slidesIndex >= slides.length){

		slidesIndex = 0;
	}

	slideChange();
	
	
})

