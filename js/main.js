///disabled button
document.addEventListener('DOMContentLoaded', function () {
	let btn = document.getElementById('btn');
	btn.addEventListener('click', function (event) {
		event.preventDefault();
		btn.classList.add('disabled');
	});







});



////chart/////
// document.addEventListener('DOMContentLoaded', function () {
// 	const ctx = document.getElementById('step__charts').getContext('2d');
// 	const tooltipEl = document.getElementById('chart__tooltip');
// 	const wrapper = document.querySelector('.step');


// 	const fullData = [
// 		0, 10, 5, 35, 20, 30, 20, 30, 50, 45, 60, 55, 75, 65, 85, 80, 70, 100,
// 	];
// 	const labels = fullData.map((_, i) => i + 1);

// 	let animatedData = [0, ...new Array(fullData.length - 1).fill(null)];
// 	let tooltipVisible = false;

// 	const index60 = fullData.indexOf(60);

// 	const chart = new Chart(ctx, {
// 		type: 'line',
// 		data: {
// 			labels: labels,
// 			datasets: [
// 				{
// 					data: animatedData,
// 					borderColor: '#4318FF',
// 					borderWidth: 4,
// 					tension: 0.2,
// 					pointRadius: function (context) {
// 						return context.dataIndex === index60 ? 5 : 0;
// 					},
// 					pointBackgroundColor: '#fff',
// 					pointBorderColor: '#4318FF',
// 					pointBorderWidth: 1,
// 				},
// 			],
// 		},
// 		options: {
// 			responsive: true,
// 			maintainAspectRatio: false,
// 			animation: false,
// 			layout: { padding: { left: 20, right: 20 } },
// 			plugins: {
// 				tooltip: { enabled: false },
// 				legend: { display: false },
// 			},
// 			scales: {
// 				x: { display: false },
// 				y: { min: 0, max: 110, display: false },
// 			},
// 		},
// 	});

// 	let step = 1;
// 	function animateChart() {
// 		if (step < fullData.length) {
// 			animatedData[step] = fullData[step];
// 			chart.data.datasets[0].data = animatedData;
// 			chart.update();

// 			if (step === index60 && !tooltipVisible) {
// 				showTooltip();
// 			}

// 			step++;
// 			setTimeout(() => requestAnimationFrame(animateChart), 300);
// 		}
// 	}

// 	function showTooltip() {
// 		tooltipVisible = true;
// 		const meta = chart.getDatasetMeta(0);
// 		const point = meta.data[index60];
// 		tooltipEl.style.left = `${point.x - tooltipEl.offsetWidth / 2 + 10}px`;
// 		tooltipEl.style.top = `${point.y - 45}px`;
// 		tooltipEl.style.visibility = 'visible';
// 		tooltipEl.style.opacity = '1';
// 	}

// 	animateChart();
// });

// program accordion

document.addEventListener('DOMContentLoaded', function () {
	const modules = document.querySelectorAll('.program__module');

	modules.forEach(module => {
		const arrow = module;
		const hashButtons = module.querySelectorAll('.program__module-hash-btn');
		const hashContents = module.querySelectorAll(
			'.program__module-hash-content'
		);
		const closeAllButton = module.querySelector('.program__close-all');

		function isMobile() {
			return window.innerWidth <= 960;
		}

		arrow.addEventListener('click', function (event) {
			if (
				!event.target.closest('.program__module-content-top') &&
				!event.target.closest('.program__module-content-bottom')
			) {
				module.classList.toggle('active');

				hashContents.forEach(content => {
					content.classList.remove('active');
					content.style.display = 'none';
				});
				hashButtons.forEach(btn => btn.classList.remove('active'));

				if (!module.classList.contains('active')) {
					closeAllButton.style.display = 'none';
				}
			}
		});

		hashButtons.forEach((btn, index) => {
			btn.addEventListener('click', function () {
				const isActive = hashContents[index].classList.contains('active');

				hashContents.forEach(content => {
					content.classList.remove('active');
					content.style.display = 'none';
				});
				hashButtons.forEach(button => button.classList.remove('active'));

				if (!isActive) {
					hashContents[index].style.display = 'block';
					setTimeout(() => {
						hashContents[index].classList.add('active');
					}, 10);
					btn.classList.add('active');

					if (isMobile()) {
						closeAllButton.style.display = 'block';
					}
				} else {
					closeAllButton.style.display = 'none';
				}
			});
		});

		closeAllButton.addEventListener('click', function () {
			hashContents.forEach(content => {
				content.classList.remove('active');
				content.style.display = 'none';
			});
			hashButtons.forEach(button => button.classList.remove('active'));
			closeAllButton.style.display = 'none';
		});

		window.addEventListener('resize', function () {
			if (!isMobile()) {
				closeAllButton.style.display = 'none';
			}
		});
	});
});

// careers block hidden

document.addEventListener('DOMContentLoaded', function () {
	const buttons = document.querySelectorAll('.careers__btn');
	const texts = document.querySelectorAll('.careers__text');
	const images = document.querySelectorAll('.careers__img');

	buttons.forEach(button => {
		button.addEventListener('click', function () {
			const target = this.getAttribute('data-target');

			texts.forEach(text => text.classList.remove('active'));
			images.forEach(img => img.classList.remove('active'));

			document
				.querySelector(`.careers__text-${target}`)
				.classList.add('active');
			document.querySelector(`.careers__img-${target}`).classList.add('active');
		});
	});
});

////problem close popup
function t_popup__closePopup(e) {
	if (!e) return;
	e.classList.remove('t-popup_show');
	setTimeout(() => {
		e.style.display = 'none';
	}, 300);
	document.body.classList.remove('t-body_popupshowed');
	document.body.removeAttribute('style');
}
document.addEventListener('click', function (event) {
	if (event.target.closest('.t-popup__block-close-button')) {
		let popup = document.querySelector('.t-popup.t-popup_show');
		t_popup__closePopup(popup);
	}
});


// анимация картинки
document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('animate-img');

  window.addEventListener('scroll', () => {
    if (!image) return;

    const rect = image.getBoundingClientRect();
    const triggerPoint = window.innerHeight / 2;

  
    const distance = Math.max(0, window.innerHeight - rect.top); 


    const maxDistance = window.innerHeight; 
    const scaleMin = 1;
    const scaleMax = 1.6;

    const scaleFactor = Math.min(
      scaleMin + (distance / maxDistance) * (scaleMax - scaleMin),
      scaleMax
    );

    const finalScale = Math.max(scaleFactor, scaleMin);

    image.style.transform = `scale(${finalScale})`;
  });
});

document.addEventListener('DOMContentLoaded', () => {

  const animatedFlags = new WeakMap();

  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      const element = entry.target;
      if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
        if (!animatedFlags.get(element)) {
          const delay = parseInt(element.dataset.delay) || 0;
          setTimeout(() => {
            element.classList.add('show');
            animatedFlags.set(element, true);
          }, delay);
        }
      }
    });
  }, observerOptions);

 
  document.querySelectorAll('.animate-slide-in').forEach(el => {
    observer.observe(el);
  });


  // Вся разметка внутри контейнера
  const tabs = document.querySelectorAll('.consalting__tab');
  const items = document.querySelectorAll('.consalting__item');

  // Обработка переключения вкладок
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('consalting__tab')) {
        // Активируем вкладки
        tabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');

        // Показываем соответствующий контейнер
        items.forEach(item => item.classList.remove('active'));
        if (items[index]) {
          items[index].classList.add('active');

          // Для всех элементов внутри контейнера — подключаем наблюдение
          const animatedItems = items[index].querySelectorAll('.animate-on-scroll');
          animatedItems.forEach(el => {
            // Добавляем наблюдение, если еще не добавляли
            if (!animatedFlags.has(el)) {
              observer.observe(el);
            }
          });
        }
      }
    });
  });

  // Обработка селектора
  const select = document.querySelector('.consalting__list-select');
  select.addEventListener('change', () => {
    const value = select.value;
    const valueToIndex = {
      'all': 0,
      'med': 1,
      'hot': 2,
      'build': 3,
      'beat': 4,
      'ret': 5,
      'edu': 6
    };
    const index = valueToIndex[value];

    // Активируем таб
    tabs.forEach(t => t.classList.remove('active'));
    if (tabs[index]) {
      tabs[index].classList.add('active');
    }

    // Показываем соответствующий блок
    items.forEach(item => item.classList.remove('active'));
    if (items[index]) {
      items[index].classList.add('active');

      // Для всех элементов внутри контейнера подключаем наблюдение
      const animatedItems = items[index].querySelectorAll('.animate-on-scroll');
      animatedItems.forEach(el => {
        if (!animatedFlags.has(el)) {
          observer.observe(el);
        }
      });
    }
  });

  // Инициируем анимацию для начального активного элемента
  const initialIndex = Array.from(tabs).findIndex(t => t.classList.contains('active'));
  if (items[initialIndex]) {
    items[initialIndex].classList.add('active');
    const animatedItems = items[initialIndex].querySelectorAll('.animate-on-scroll');
    animatedItems.forEach(el => {
      if (!animatedFlags.has(el)) {
        observer.observe(el);
      }
    });
  }
});


//slider plan
document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.packages-items__wrapper');
  const items = wrapper.querySelectorAll('.packages-item');
  let currentIndex = 0;

  const prevBtn = document.querySelector('.packages-item__prev');
  const nextBtn = document.querySelector('.packages-item__next');
  const dotsContainer = document.querySelector('.dots');

  function createDots() {
    dotsContainer.innerHTML = '';
    items.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'dot';
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlider() {
    const isMobile = window.matchMedia('(max-width: 959px)').matches;

    if (isMobile) {
      wrapper.style.display = 'flex';
      wrapper.style.overflow = 'hidden';
      wrapper.style.flexDirection = 'row';

      items.forEach((item, index) => {
        item.style.minWidth = '100%';
        item.style.flexShrink = '0';
        item.style.display = 'block';
        item.style.transform = `translateX(-${currentIndex * 100}%)`;
      });

      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';
      createDots();
    } else {
      wrapper.style.display = 'grid';
      wrapper.style.overflow = 'visible';

      items.forEach((item) => {
        item.style.minWidth = '';
        item.style.flexShrink = '';
        item.style.display = '';
        item.style.transform = '';
      });

      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      dotsContainer.innerHTML = '';
    }
  }
  

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateSlider();
  });

  window.addEventListener('resize', updateSlider);
  updateSlider();
});

// document.addEventListener('DOMContentLoaded', () => {
//   const wrapper = document.querySelector('.packages-items__wrapper');
//   const items = wrapper.querySelectorAll('.packages-item');
//   const prevBtn = document.querySelector('.packages-item__prev');
//   const nextBtn = document.querySelector('.packages-item__next');
//   const dotsContainer = document.querySelector('.dots');

//   let currentIndex = 0;

//   function isMobile() {
//     return window.matchMedia('(max-width: 959px)').matches;
//   }

//   function updateSlider() {
//     if (isMobile()) {
//       // Мобильный режим: смещаем wrapper
//       wrapper.style.display = 'flex';
//       wrapper.style.overflow = 'hidden';

//       // Расчет смещения
//       const translateX = -currentIndex * 100; // в процентах
//       wrapper.style.transform = `translateX(${translateX}%)`;

//       // Устанавливаем ширину каждому элементу
//       items.forEach(item => {
//         item.style.minWidth = '100%';
//         item.style.flexShrink = '0';
//       });

//       // Показываем кнопки
//       prevBtn.style.display = 'flex';
//       nextBtn.style.display = 'flex';

//       // Создаем точки
//       createDots();

//     } else {
//       // Десктоп: сетка
//       wrapper.style.display = 'grid';
//       wrapper.style.transform = '';
//       wrapper.style.overflow = '';

//       // сбрасываем стили элементов
//       items.forEach(item => {
//         item.style.minWidth = '';
//         item.style.flexShrink = '';
//       });

//       // скрываем кнопки и точки
//       prevBtn.style.display = 'none';
//       nextBtn.style.display = 'none';
//       dotsContainer.innerHTML = '';
//     }
//   }

//   function createDots() {
//     dotsContainer.innerHTML = '';
//     for (let i = 0; i < items.length; i++) {
//       const dot = document.createElement('div');
//       dot.className = 'dot';
//       if (i === currentIndex) dot.classList.add('active');
//       dot.addEventListener('click', () => {
//         currentIndex = i;
//         updateSlider();
//       });
//       dotsContainer.appendChild(dot);
//     }
//   }

//   document.querySelector('.packages-item__prev').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + items.length) % items.length;
//     updateSlider();
//   });
//   document.querySelector('.packages-item__next').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % items.length;
//     updateSlider();
//   });

//   window.addEventListener('resize', () => {
//     updateSlider();
//   });

//   // Инициализация
//   updateSlider();
// });