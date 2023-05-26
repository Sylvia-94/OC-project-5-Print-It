

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

// Définition de mes quatre bullets/dots 
const dots = document.querySelectorAll(".dot");

// Ici slideIndex est défini à 0 pour indiquer la valeur de départ de la slide

let slidesIndex = 0;
// Ici je définis les variables de ma classe .banner, ses images et ses taglines

const banner = document.querySelector(".banner");
const bannerImg = document.querySelector(".banner-img");
const bannerTag = document.querySelector("#tagLine");

// Ici je définis les variables pour mes flèches de gauche et droite
const arrowLeft = document.getElementById("arrowL");
const arrowRight = document.getElementById("arrowR");


// Ici je crée une fonction appelée slideChange 


// pour sourcer les différentes clés images et taglines de mon tableau d'objets
function slideChange () {

	bannerImg.src="./assets/images/slideshow/" + slides[slidesIndex].image;
	bannerTag.innerHTML = slides[slidesIndex].tagLine;

// ici une boucle forEach pour indiquer ce qu'il se passe pour chaque dot et leur index
	dots.forEach((dot, index) => {


		if (index == slidesIndex) {

			dot.classList.add("dot_selected")

		} else {

			dot.classList.remove("dot_selected");
		
		}

	})
	
	
}



// Event listener pour ma flèche gauche, au clic
arrowLeft.addEventListener("click", function() {

slidesIndex--;
// Condition IF : si slidesIndex est inférieur à 0,
//  on enlève 1 à slides.length, ce qui permet de revenir en arrière à la dernière image de la liste 
if(slidesIndex < 0){

	slidesIndex = slides.length-1;
}

// On appelle la fonction slideChange pour que l'image et la tagline s'adaptent en fonction du slideIndex
slideChange();

})




arrowRight.addEventListener("click", function() {


	// La fonction pour la flèche de droite est la même, sauf ici où on ajoute 1 à slideIndex pour changer de slide
	slidesIndex++;

	// Et ici on indique que si slideIndex est égale à slides.length,
	// on repart à slidesIndex =0, donc on revient à la première photo
	if(slidesIndex >= slides.length){

		slidesIndex = 0;
	}

	slideChange();
	
	
})

