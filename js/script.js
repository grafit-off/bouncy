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