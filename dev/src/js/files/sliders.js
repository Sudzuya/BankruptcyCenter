/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper-team')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper-team', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			wrapperClass:'swiper-team__wrapper',
			slideClass:'swiper-team__slide',
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			
			pagination: {
				el: '.swiper-team-pagination',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.our-team .swipe-prev',
				nextEl: '.our-team .swipe-next',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					spaceBetween: 50,
					autoHeight: true,
				},
			},
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper-reviews')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper-reviews', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			wrapperClass:'swiper-reviews__wrapper',
			slideClass:'swiper-reviews__slide',
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
			observer:true,
			observeParents: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			
			// pagination: {
			// 	el: '.swiper-team-pagination',
			// 	clickable: true,
			// },
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.reviews-navigation .swipe-prev',
				nextEl: '.reviews-navigation .swipe-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {
				unlock: function() {
					console.log()
					let reviewsInner = document.querySelectorAll('.swiper-reviews__info')
					reviewsInner.forEach((item) => {
						let reviesContent = item.querySelector('.swiper-reviews__text')
						let reviesBody = item.querySelector('.swiper-reviews__text-body')
						let reviesButtonFull = item.querySelector('.swiper-reviews__full')
						let heightBody = reviesBody.clientHeight;
						let heightContent = reviesContent.scrollHeight - 2

						if (heightContent >= heightBody) {
							reviesButtonFull.addEventListener('click', () => {
								//reviesBody.style.height = heightContent + 'px'
								if (reviesBody.classList.contains('full-content')) {
									reviesBody.classList.remove('full-content');
									reviesButtonFull.textContent = 'Развернуть';
								} else {
									reviesBody.classList.add('full-content');
									reviesButtonFull.textContent = 'Свернуть';
								}
							})
						} else {
							reviesButtonFull.classList.add('hidden')
						}
					})  
				}
			}
		});
	}
	if (document.querySelector('.steps-swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		let stepsSlider = new Swiper('.steps-swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			wrapperClass:'steps-swiper__wrapper',
			slideClass:'steps-swiper__slide',
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			
			pagination: {
				el: '.steps-swiper__dots',
				clickable: true,
				bulletElement:'li',
				bulletClass:'steps-swiper__dots-item',
				bulletActiveClass:'active__dots',
				renderBullet: function(index, className){
						return `<li class="steps-swiper__dots-item"><div class="steps__line"></div></li>`;
					}
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.steps-swiper__btn-prev',
				nextEl: '.steps-swiper__btn-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {
				
				slideChange(){
					let step = document.querySelectorAll('.steps-swiper__dots');
					let steps = document.querySelectorAll('.steps-swiper__dots-item');
					let active = true;

					steps.forEach(function(e, i){
						if (active) {
							if (e.classList.contains('active__dots')) {
								active = false
							} else {
								e.classList.add('active__dots')
							}
						} else {
							if (!e.classList.contains('active__dots')) {
								e.classList.remove('active__dots')
							}
						}
						if (i == steps.length) {
							let buttonNext = document.querySelector('.steps-swiper__btn-next');
							console.log()
							if (buttonNext.disabled) {
								buttonNext.setAttribute('data-popup', '#form');
								buttonNext.disabled = 'false'
							}
						}
					})
				},
				slideChangeTransitionStart() {
					let steps = document.querySelectorAll('.steps-swiper__dots-item');
					let buttonNext = document.querySelector('.steps-swiper__btn-next');
						console.log(stepsSlider.realIndex)
					if (stepsSlider.activeIndex == steps.length - 1) {
						changeButton(buttonNext, true)
					} else {
						changeButton(buttonNext, false)
					}

				},
				slideChangeTransitionEnd() {
					let steps = document.querySelectorAll('.steps-swiper__dots-item');
					let buttonNext = document.querySelector('.steps-swiper__btn-next');
						console.log(stepsSlider.realIndex)
					if (stepsSlider.activeIndex == steps.length - 1) {
						setAttribute(buttonNext, true)
					}
				},
			}
		});
		function changeButton (button, remove) {
			if (remove == true) {
				button.removeAttribute('disabled');
				button.textContent = 'Получить консультацию';
			} else {
				button.removeAttribute('data-popup');
				button.textContent = 'Следующий шаг';
			}
		}
		function setAttribute (button, setAttr) {
			if (setAttr == true) {
				button.setAttribute('data-popup', '#form');
			}
		}
	}
	if (document.querySelector('.cases-won-swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.cases-won-swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			wrapperClass:'cases-won-swiper__wrapper',
			slideClass:'cases-won-swiper__slide',
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 0,
			speed: 800,
			observer:true,
			observeParents: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			
			pagination: {
			 	el: '.cases-won-swiper .swiper-pagination',
			 	clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.cases-won .reviews-navigation .swipe-prev',
				nextEl: '.cases-won .reviews-navigation .swipe-next',
			},

			// Брейкпоинты
			
			breakpoints: {
				
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				576: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1100: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
			},
			
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});