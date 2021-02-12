function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
// Burger
const header__burger = document.querySelector('.nav__burger');
const header__menu = document.querySelector('.nav__menu');
const body = document.querySelector('body');
const header__list = document.querySelector('.nav__list');

header__burger.onclick = function (e) {
	header__burger.classList.toggle('active');
	header__menu.classList.toggle('active');
	body.classList.toggle('lock');
}

// scroll nav
const nav = document.querySelector(".nav");
let prevScrollpos = window.pageYOffset;

function navOpen() {
	if (prevScrollpos != 0) {
		nav.classList.add('_active');
	} else {
		nav.classList.remove('_active');
	}
}

function navScroll() {
	window.onscroll = function () {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos < currentScrollPos) {
			nav.classList.add('_active');
		} else if (prevScrollpos = currentScrollPos) {
			nav.classList.add('_active');
		} else {
			nav.classList.remove('_active');
		}
		prevScrollpos = currentScrollPos;
	}
}
navOpen()
navScroll()
// progress

let progressRadialWrap = document.querySelector(".progress");
let progressRadial = document.querySelector(".progress__wrapper");
let outViewPort;
function isElementOutViewport(el) {
	var rect = el.getBoundingClientRect();
	return outViewPort = rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
}
isElementOutViewport(progressRadialWrap)
window.addEventListener('scroll', function scrolling() {
	if (outViewPort == false) {
		progressRadial.style.display = 'flex';
		this.removeEventListener('scroll', scrolling);
		console.log('Animation is Started')
	} else {
		isElementOutViewport(progressRadialWrap)
	}
})


// Portfolio Filter
filterSelection("all")
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filter__block");
	if (c == "all") c = "";
	// Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("filter__buttons");
var btns = btnContainer.getElementsByClassName("filter__button");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}

// Snackbar

const copyButtons = document.querySelectorAll('.f-block__copy-btn');
let snackbar = document.querySelector('.snackbar')

copyButtons.forEach(function (item) {
	item.addEventListener('click', function (event) {
		let copytext = document.createElement('input')
		copytext.value = item.dataset.link
		document.body.appendChild(copytext)
		copytext.select()
		document.execCommand('copy')
		document.body.removeChild(copytext)
		snackbar.classList.add('show-snackbar')
		setTimeout(function () { snackbar.classList.remove('show-snackbar') }, 3000);
	})
})

//
let portfolioLinks = document.querySelectorAll(".f-block__image-link");
let iconLink = document.querySelectorAll(".f-block__icon-link");

iconLink.forEach((elem) => {
	elem.addEventListener("click", () => {
		elem.classList.toggle('active');
	})
})

portfolioLinks.forEach((item) => {
	item.addEventListener('focus', () => {
		item.parentNode.classList.add("--active")
	})
	iconLink.forEach((element) => {
		element.addEventListener('blur', () => {
			item.parentNode.classList.remove("--active")
		})
	})
})


// Swiper
/* let swiperHeader = new Swiper('.swiper-header', {
	loop: true,
	centeredSlides: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	watchSlidesVisibility: true,
	on: {
		init() {
			Array.from(this.slides).forEach((swiperSlide, i) => {
				const slide = swiperSlide.querySelector('.slider__wrapper');
				if (!swiperSlide.classList.contains('swiper-slide-visible')) {
					slide.style.display = 'none';
				}
			});
		},
		setTranslate() {
			Array.from(this.slides).forEach((slide,) => {
				if (slide.classList.contains('swiper-slide-visible')) {
					slide.querySelector('.slider__wrapper').style.display = '';
				}
			});
		},
		transitionEnd() {
			Array.from(this.slides).forEach((slide) => {
				if (!slide.classList.contains('swiper-slide-visible')) {
					slide.querySelector('.slider__wrapper').style.display = 'none';
				}
			});
		},
	},
}); */

/* // Slider hover
document.querySelector('.posts-image-slider2').addEventListener('mouseenter', () => {
	swiperPostsInterior2.autoplay.stop()
});
document.querySelector('.posts-image-slider2').addEventListener('mouseleave', () => {
	swiperPostsInterior2.autoplay.start()
}); */
//
/*
// Acordion
document.querySelectorAll('.acordion-triger').forEach((item) =>
	item.addEventListener('click', () => {
		item.parentNode.classList.toggle('acordion--active');
	})
) */