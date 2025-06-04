window.addEventListener('load', () => {

    if (localStorage.getItem('languageChanged') === 'true') return;

    if (localStorage.getItem('language') === 'EN') {

      //hero
      const mainDesc= document.querySelector('[data-elem-id="1642632663322"]');

      mainDesc.setAttribute('data-field-width-res-320-value', "261");




      //format
      const formatFirstTitle= document.querySelector('[data-elem-id="1642673246799"]');
      const formatSecondTitle= document.querySelector('[data-elem-id="1642673408002"]');
      const formatCorner= document.querySelector('[data-elem-id="1642673553626"]');
      const formatBlock = document.querySelector('[data-elem-id="1642678089715"]');
      const formatBlockSecond = document.querySelector('[data-elem-id="1642678131015"]');
      const formatBlockThird = document.querySelector('[data-elem-id="1642680360651"]');
      const formatBlockFourth = document.querySelector('[data-elem-id="1642680374604"]');
      const formatHeight = document.querySelector('[data-elem-id="1642672804336"]');
      const formatCircle = document.querySelector('[data-elem-id="1643121921891"]')
      const formatHalfs = document.querySelector('[data-elem-id="1643121921896"]')



      formatHeight.setAttribute('data-field-height-value', '890');
      formatHeight.setAttribute('data-field-height-res-960-value', '810')
      formatHeight.setAttribute('data-field-height-res-640-value', '1050')
      formatHeight.setAttribute('data-field-height-res-480-value', '920')
      formatHeight.setAttribute('data-field-height-res-320-value', '962')

      formatCorner.setAttribute('data-field-top-value', '90');
      formatCorner.setAttribute('data-field-width-res-320-value', '110');

      formatFirstTitle.setAttribute('data-field-left-value', '200');


      formatSecondTitle.setAttribute('data-field-left-value', '570');
    

      formatBlock.setAttribute('data-field-top-value', '280'); 

      formatBlockSecond.setAttribute('data-field-top-value', '450'); 
      formatBlockSecond.setAttribute('data-field-top-res-960-value', '390');
      formatBlockSecond.setAttribute('data-field-top-res-320-value', '440');


      formatBlockThird.setAttribute('data-field-top-value','624');
      formatBlockThird.setAttribute('data-field-top-res-960-value', '490');
      formatBlockThird.setAttribute('data-field-top-res-640-value', '580');
      formatBlockThird.setAttribute('data-field-top-res-480-value', '495');
      formatBlockThird.setAttribute('data-field-top-res-320-value', '505');
   

      formatBlockFourth.setAttribute('data-field-top-value','725');
      formatBlockFourth.setAttribute('data-field-top-res-960-value', '620');
      formatBlockFourth.setAttribute('data-field-top-res-640-value', '720');
      formatBlockFourth.setAttribute('data-field-top-res-480-value', '630');
      formatBlockFourth.setAttribute('data-field-top-res-320-value', '650');



      formatCircle.setAttribute('data-field-top-res-960-value', '530');



      formatHalfs.setAttribute('data-field-top-res-640-value', '895');
      formatHalfs.setAttribute('data-field-top-res-480-value', '795');
      formatHalfs.setAttribute('data-field-top-res-320-value', '855');




      //partners
      const visionLink= document.querySelector('[data-elem-id="1643490172730"]');
      const ncr= document.querySelector('[data-elem-id="1643490172746"]');
      const mainEvent= document.querySelector('[data-elem-id="1643490172755"]');
      const schlumberger= document.querySelector('[data-elem-id="1643490172725"]');
      const k2integrity= document.querySelector('[data-elem-id="1643490172750"]');
      const capitalist= document.querySelector('[data-elem-id="1643490172741"]');
      const myLead= document.querySelector('[data-elem-id="1643490172735"]');
      
      const partnersArrows = document.querySelector('[data-elem-id="1643490172712"]');

      visionLink.setAttribute('data-field-top-value', "70");
      visionLink.setAttribute('data-field-top-res-960-value', "16");

      ncr.setAttribute('data-field-top-value', "70");
      ncr.setAttribute('data-field-top-res-960-value', "16");
      mainEvent.setAttribute('data-field-top-value', "70");
      mainEvent.setAttribute('data-field-top-res-960-value', "16");

      schlumberger.setAttribute('data-field-top-value', "70");
      schlumberger.setAttribute('data-field-top-res-960-value', "16");

      k2integrity.setAttribute('data-field-top-value', "187");
      k2integrity.setAttribute('data-field-top-res-960-value', "122");

      capitalist.setAttribute('data-field-top-value', "187");
      capitalist.setAttribute('data-field-top-res-960-value', "122");

      myLead.setAttribute('data-field-top-value', "187");
      myLead.setAttribute('data-field-top-res-960-value', "122");

      
      partnersArrows.setAttribute('data-field-top-res-960-value', "-20");
      partnersArrows.setAttribute('data-field-left-res-960-value', "165");
      partnersArrows.setAttribute('data-field-top-res-320-value', "7");



      //contancts
      // const contactsFirstLine= document.querySelector('[data-elem-id="1642968726904"]');
      // const contactsSecondLine= document.querySelector('[data-elem-id="1643124882945"]');
      // const contactsThirdLine= document.querySelector('[data-elem-id="1643124898113"]');

      // const contactsFourthLine= document.querySelector('[data-elem-id="1643124909779"]');
     

      // const contactsBatery= document.querySelector('[data-elem-id="1643125159880"]');



      // contactsFirstLine.setAttribute('data-field-width-value', "450");

      // contactsSecondLine.setAttribute('data-field-width-value', "400");
      // contactsSecondLine.setAttribute('data-field-left-value', "180");
      // contactsSecondLine.setAttribute('data-field-left-res-480-value', "237");



      // contactsThirdLine.setAttribute('data-field-left-value', "240");
      // contactsThirdLine.setAttribute('data-field-top-res-640-value', "180");
      // contactsThirdLine.setAttribute('data-field-left-res-640-value', "70");
      // contactsThirdLine.setAttribute('data-field-left-res-320-value', "166");

      
      // contactsFourthLine.setAttribute('data-field-left-res-480-value', "100");

      // contactsBatery.setAttribute('data-field-left-res-640-value', "15");
      



      function updateStyles() {
        const secondTitle = document.querySelector('.contacts__title-second');
        const thirdTitle = document.querySelector('.contacts__title-third');
        const fourthTitle = document.querySelector('.contacts__title-fourth');

   
       if (!secondTitle || !thirdTitle || !fourthTitle) return;

        
        const width = window.innerWidth;

        if (width >= 1200) {

          secondTitle.style.position = 'absolute';
          secondTitle.style.top = '84px';
          secondTitle.style.left = '100px';


          // Меняем только при этом условии
          thirdTitle.style.position = 'absolute';
          thirdTitle.style.top = '165px';
          thirdTitle.style.left = '125px';
        }



        if (width <= 959) {
          // Меняем только при этом условии
          thirdTitle.style.position = 'absolute';
          thirdTitle.style.top = '95px';
          thirdTitle.style.left = '0px';
        }
        
        if (width <= 639) {
          // Стили для устройств ≤ 639px
          secondTitle.style.position = 'absolute';
          secondTitle.style.top = '50px';
          secondTitle.style.left = '197px';

          thirdTitle.style.position = 'absolute';
          thirdTitle.style.top = '85px';
          thirdTitle.style.left = '0px';

          fourthTitle.style.position = 'absolute';
          fourthTitle.style.top = '85px';
          fourthTitle.style.left = '65px';

        }
        if (width <= 479) {
          // Стили для устройств ≤ 639px
          secondTitle.style.position = 'absolute';
          secondTitle.style.top = '75px';
          secondTitle.style.left = '0px';

          thirdTitle.style.position = 'absolute';
          thirdTitle.style.top = '75px';
          thirdTitle.style.left = '140px';

          fourthTitle.style.position = 'absolute';
          fourthTitle.style.top = '105px';
          fourthTitle.style.left = '0px';

        }

      }

      // Вешаем обработчик события resize
      window.addEventListener('resize', updateStyles);
      // И вызываем при загрузке
      // window.addEventListener('load', updateStyles);

      updateStyles();




      if (window.innerWidth > 1200) {
        const element = document.querySelector('.services__title-text');
        if (element) {
          element.style.width = '175px';
        }
      }
     if (window.innerWidth > 959) {
        const element = document.querySelector('.services__title-text');
        if (element) {
          element.style.width = '175px';
        }
      }
     if (window.innerWidth > 767) {
        const element = document.querySelector('.services__title-text');
        if (element) {
          element.style.width = '185px';
        }
      }

      if (window.innerWidth > 639) {
        const element = document.querySelector('.services__title-text');
        if (element) {
          element.style.width = '185px';
        }
      }

      
    }

const close = document.querySelector('.header__close');
  const closeScene = document.querySelector('.header__scene');
  const hamburgerMenu = document.querySelector('.header__mobile-menu');
  const openMenu = document.querySelector('.header__hamburger');
  const bodyScroll = document.getElementById('bodyScroll');
  const headerAdmin = document.querySelector('.header__admin');
  const menuLink = document.querySelectorAll('.header__link-mobile');

  if (localStorage.getItem('languageChanged') === 'true') {
    localStorage.removeItem('languageChanged');
    return;
  }



  const storedLang = localStorage.getItem('language') || 'EN';
  const radios = document.querySelectorAll('input[name="language"]');
  const labels = document.querySelectorAll('.header__lang-switch label');
  const bg = document.querySelector('.lang-bg');
  const bgMobile = document.querySelector('.lang-bg-mobile');

  const buttons = document.querySelectorAll('.careers__btn');
  const texts = document.querySelectorAll('.careers__text');
  const priorityImg = document.querySelectorAll('.careers__img');

  // --- Переключение языков ---
  function updateBackgrounds(lang) {
    if (bg) bg.style.transform = lang === 'EN' ? 'translate(0, -50%)' : 'translate(100%, -50%)';
    if (bgMobile) bgMobile.style.transform = lang === 'EN' ? 'translate(0, -50%)' : 'translate(100%, -50%)';
  }

  function updateLabelsColor() {
    labels.forEach(label => {
      const forId = label.getAttribute('for');
      const radio = document.getElementById(forId);
      label.style.color = radio.checked ? 'white' : '';
    });
  }

  const initialRadio = Array.from(radios).find(r => r.value === storedLang);
  if (initialRadio) {
    initialRadio.checked = true;
    updateBackgrounds(storedLang);
    updateLabelsColor();
  }

  radios.forEach(r => {
    r.addEventListener('change', () => {
      const currentLang = localStorage.getItem('language');
      if (r.checked && r.value !== currentLang) {
        localStorage.setItem('language', r.value);
        localStorage.setItem('languageChanged', 'true');
        location.reload();
      }
    });
  });
  // --- Карьерные кнопки ---
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      texts.forEach(text => text.classList.remove('active'));
      priorityImg.forEach(img => img.classList.remove('active'));
      if (texts[index]) texts[index].classList.add('active');
      if (priorityImg[index]) priorityImg[index].classList.add('active');

    });
  });

  // --- Мобильное меню ---
  openMenu.addEventListener('click', () => {
    bodyScroll.classList.add('scroll-no');
    hamburgerMenu.classList.add('active');
    closeScene.classList.add('active');
  });

  function closeMenu() {
    hamburgerMenu.classList.remove('active');
    closeScene.classList.remove('active');
    bodyScroll.classList.remove('scroll-no');

  }

  close.addEventListener('click', closeMenu);
  closeScene.addEventListener('click', closeMenu);

  // --- Плавный скролл и закрытие меню ---
  menuLink.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        closeMenu();
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          history.replaceState(null, null, ' ');
        }, 10);
      }
    });
  });

  document.body.style.display = '';





  if (localStorage.getItem('languageChanged') === 'true') return;
  /// 1. Disabled button
  const btn = document.getElementById('btn');
  if (btn) {

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          history.replaceState(null, null, ' ');
        }, 50);
      }
    });
  }

  /// 2. Fill block animation (наш SVG/Div градиент)
   const fill = document.getElementById('fillDiv');
  const block = document.getElementById('colorBlock');

  function updateFillByScroll() {
    const rect = block.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Блок полностью под экраном — не трогаем заливку
    if (rect.top > windowHeight) {
      fill.style.height = '0';
      return;
    }

    const visibleTop = Math.max(0, windowHeight - rect.top);
    const totalHeight = rect.height + windowHeight;

    const progress = Math.min(Math.max(visibleTop / totalHeight, 0), 1);

    fill.style.height = `${progress * 100}%`;
  }

  updateFillByScroll();
  window.addEventListener('scroll', updateFillByScroll);
  window.addEventListener('resize', updateFillByScroll);

  /// 3. Анимация изображения при скролле
  const image = document.getElementById('animate-img');
  if (image) {
    window.addEventListener('scroll', () => {
      const rect = image.getBoundingClientRect();
      const distance = Math.max(0, window.innerHeight - rect.top);
      const maxDistance = window.innerHeight;
      const scaleFactor = Math.min(1 + (distance / maxDistance) * 0.2, 1.6);
      image.style.transform = `scale(${scaleFactor})`;
    });
  }


  /// 4. Animate-on-scroll универсальный
  const animatedFlags = new WeakMap();
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting && !animatedFlags.get(el)) {
        const delay = parseInt(el.dataset.delay) || 0;
        setTimeout(() => {
          el.classList.add('show');
          animatedFlags.set(el, true);
        }, delay);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-slide-in, .animate-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });

  /// 5. Консалтинг табы и фильтр
  const tabs = document.querySelectorAll('.consalting__tab');
  const items = document.querySelectorAll('.consalting__item');
  const select = document.querySelector('.consalting__list-select');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      items.forEach(item => item.classList.remove('active'));
      if (items[index]) {
        items[index].classList.add('active');
        const animatedItems = items[index].querySelectorAll('.animate-on-scroll');
        animatedItems.forEach(el => {
          if (!animatedFlags.has(el)) scrollObserver.observe(el);
        });
      }
    });
  });

  if (select) {
    select.addEventListener('change', () => {
      const map = { 'all': 0, 'med': 1, 'hot': 2, 'build': 3 };
      const index = map[select.value];
      tabs.forEach(t => t.classList.remove('active'));
      if (tabs[index]) tabs[index].classList.add('active');
      items.forEach(item => item.classList.remove('active'));
      if (items[index]) {
        items[index].classList.add('active');
        const animatedItems = items[index].querySelectorAll('.animate-on-scroll');
        animatedItems.forEach(el => {
          if (!animatedFlags.has(el)) scrollObserver.observe(el);
        });
      }
    });
  }

  const initialIndex = Array.from(tabs).findIndex(t => t.classList.contains('active'));
  if (items[initialIndex]) {
    items[initialIndex].classList.add('active');
    const animatedItems = items[initialIndex].querySelectorAll('.animate-on-scroll');
    animatedItems.forEach(el => {
      if (!animatedFlags.has(el)) scrollObserver.observe(el);
    });
  }


  document.querySelectorAll('.header__link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.dataset.target;
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });


 if (localStorage.getItem('languageChanged') === 'true') return;
  const wrapper = document.querySelector('.slider__viewport');
  const items = wrapper.querySelectorAll('.packages-item');
  const prevBtn = document.querySelector('.packages-item__prev');
  const nextBtn = document.querySelector('.packages-item__next');
  const dotsContainer = document.querySelector('.dots');

  let currentIndex = 0;

  function updateSlider() {
    const isMobile = window.matchMedia('(max-width: 959px)').matches;

    if (isMobile) {
      // Смещение на ширину 1 item (50vw)
      wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

      // Показываем кнопки
      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';

      createDots();
    } else {
      wrapper.style.transform = 'none';
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      dotsContainer.innerHTML = '';
    }
  }

  function createDots() {
    dotsContainer.innerHTML = '';

    items.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = 'dot';
      if (index === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    });
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









const form = document.querySelector('.contacts__form');
const nameInput = form.querySelector('input[name="entry.205358548"]');
const emailInput = form.querySelector('input[name="entry.171842244"]');
const telegramInput = form.querySelector('input[name="entry.38569460"]');

// Находим соответствующие элементы сообщений об ошибке
const nameError = nameInput.parentElement.querySelector('.error-message');
const emailError = emailInput.parentElement.querySelector('.error-message');
const telegramError = telegramInput.parentElement.querySelector('.error-message');

// Функции проверки
function isValidName(value) {
  const regex = /^[A-Za-zА-ЩЬЮЯЄІЇҐа-щьюяєіїґ' -]+$/;
  return regex.test(value.trim());
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Валидация при отправке формы
form.addEventListener('submit', (e) => {
  let valid = true;

  // Проверка имени
  if (!isValidName(nameInput.value)) {
    nameError.style.display = 'block';
    nameInput.classList.remove('valid');
    nameInput.classList.add('error');
    valid = false;
  } else {
    nameError.style.display = 'none';
    nameInput.classList.remove('error');
    nameInput.classList.add('valid');
  }

  // Проверка email
  if (!isValidEmail(emailInput.value)) {
    emailError.style.display = 'block';
    emailInput.classList.remove('valid');
    emailInput.classList.add('error');
    valid = false;
  } else {
    emailError.style.display = 'none';
    emailInput.classList.remove('error');
    emailInput.classList.add('valid');
  }

  // Проверка Telegram (может быть необязательным, если нужно)
  if (telegramInput.value.trim() === "") {
    telegramError.style.display = 'block';
    telegramInput.classList.remove('valid');
    telegramInput.classList.add('error');
    valid = false;
  } else {
    telegramError.style.display = 'none';
    telegramInput.classList.remove('error');
    telegramInput.classList.add('valid');
  }

  // Если есть ошибки - отменяем отправку
  if (!valid) {
    e.preventDefault();
  }
});

// Подсветка ошибок при вводе
nameInput.addEventListener('input', () => {
  if (isValidName(nameInput.value)) {
    nameError.style.display = 'none';
    nameInput.classList.remove('error');
    nameInput.classList.add('valid');
  } else {
    nameError.style.display = 'block';
    nameInput.classList.remove('valid');
    nameInput.classList.add('error');
  }
});

emailInput.addEventListener('input', () => {
  if (isValidEmail(emailInput.value)) {
    emailError.style.display = 'none';
    emailInput.classList.remove('error');
    emailInput.classList.add('valid');
  } else {
    emailError.style.display = 'block';
    emailInput.classList.remove('valid');
    emailInput.classList.add('error');
  }
});

telegramInput.addEventListener('input', () => {
  if (telegramInput.value.trim() !== "") {
    telegramError.style.display = 'none';
    telegramInput.classList.remove('error');
    telegramInput.classList.add('valid');
  } else {
    telegramError.style.display = 'block';
    telegramInput.classList.remove('valid');
    telegramInput.classList.add('error');
  }
});

// Сброс ошибок при клике вне формы
document.addEventListener('click', (event) => {
    const form = document.querySelector('.contacts__form');
    if (!form.contains(event.target)) {
        form.querySelectorAll('.error-message').forEach(msg => {
            msg.style.display = 'none';
        });
        form.querySelectorAll('.contacts__input').forEach(input => {
            input.classList.remove('error');
        });
    }
});















  
});

window.addEventListener('scroll', () => {
  const contactsImage = document.getElementById('animated-battery');
  if (!contactsImage) return;

  const rect = contactsImage.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Если элемент вне зоны видимости — сброс трансформации
  if (rect.top >= windowHeight || rect.bottom <= 0) {
    contactsImage.style.transform = 'scale(1) translateX(0)';
    return;
  }

  // Вычисляем прогресс появления
  const visible = Math.min(windowHeight - rect.top, windowHeight);
  const progress = Math.max(0, Math.min(visible / windowHeight, 1));

  // Применяем анимацию
  const scale = 1 + progress * 0.2;        // до 1.1
  const translateX = progress * 40;        // до 20px

  contactsImage.style.transform = `scale(${scale}) translateX(${translateX}px)`;
});
