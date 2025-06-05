document.addEventListener('DOMContentLoaded', () => {




  // switch lang
  const langUA = {
      nav: {
          list: ['Моделі', "Каталізатори", "Формат", "Тарифи", "Партнери", "Зв'язок", "Пріоритети"],
          btnAdm: "НАПИСАТИ АДМІНІСТРАТОРУ"
      },
      about: {
          titleFirstLine: 'Маркетингове',
          titleSecondLine: 'digital-',
          titleThirdLine: "ком'юніті",
          subtitle: 'У спільноті реалізуються маркетингові проєкти, сфокусовані на роботі з digital-трафіком, масштабуванні, стратегічному медіаплануванні, influence-маркетингу та системному управлінні воронками.',
          btnNext: "Перейти"
      },
      wave: {
        title: 'Цифрова трансформація проєктів',
        subtitle: 'У спільноті впроваджено системний digital-підхід, що дозволяє проєктам відмовитися від рутинних операцій і зосередитися на автоматизації, архітектурі процесів та масштабованому зростанні.'
      },
      models: {
        title: ['BI-ETL', 'GTM-процеси', "Growth-моделі", "PLG-проєкти"],
        spans: ['у digital-проєктах','у digital-проєктах','у digital-проєктах','в digital-макетингу'],
        descr: ['BI-ETL — масштабований інструмент для посилення аналітики в маркетингових проєктах. Ми вибудовуємо архітектуру даних під завдання digital-проєктів: автоматизуємо збір, обробку та інтеграцію інформації для масштабованих воронок і стійкого зростання.', "GTM-процеси — це структурований підхід до виведення продуктів і рішень на ринок. У спільноті вибудувані стратегії запуску, позиціювання, сегментація та воронки. Акцент на узгодженості команд, BI-аналітиці та масштабуванні забезпечує передбачуване зростання й контроль над результатами.", "Growth-моделі — ефективний інструмент для побудови стійкого розвитку проєктів. У спільноті розробляються та впроваджуються моделі, які допомагають оптимізувати процеси залучення й утримання клієнтів, підвищуючи конверсію та масштабованість проєктних рішень.", "PLG-проєкти — стратегічний формат зростання, заснований на цінності продукту. У спільноті розробляються та впроваджуються практики, що забезпечують органічне залучення, високу залученість і стійке утримання користувачів завдяки продуктовому досвіду."]
      },
      services: {
        title: 'Каталізатори',
        titleText: 'Драйвери системного зростання',
        itemTitle: ["AI-система", "Декомпозиція завдань", "Масштабувані проекти", "Цифрові системи", "Автоматизація процесів", "BI аналітика"],
        descr: ["Інтелектуальна система всередині ком'юніті кратно посилює ефективність команд, автоматизує процеси та допомагає досягати сильних результатів.", "Спільнота декомпозує завдання, структуруючи їх на послідовні етапи, що забезпечує прозорість робочих процесів та прискорює досягнення цільових результатів.", "Спільнота розвиває масштабні комерційні проекти із високим профітом. Учасники впроваджують ефективні моделі та досягають стійких результатів.", "Передові інструменти для ефективного управління проектами: цифровізація процесів, стратегія інтеграції даних та системна координація команд.", "Спільнота створює та автоматизує бізнес-процеси, адаптуючи їх під ринок, що забезпечує стабільне фінансове зростання.", "Доступ до систематизованих аналітичних рішень, перевірених методологій та інструментів для швидкого аналізу даних і ефективного управління проектами."]
      },
      format: {
        circleText: 'Формат',
        title: 'Мультипроєктні',
        titleSecondLine: 'GTM-кампанії',
        cornerText: 'Прогресивні практики зростання',
        blockFirst: 'Спільнотою реалізуються мультипроєктні GTM-кампанії з виведення кількох продуктів у межах єдиної стратегії. Розробляються узгоджені GTM-моделі, адаптовані під цільові сегменти для масштабованого зростання.',
        blockSecond: "Централізовано здійснюється управління позиціюванням, комунікаціями та воронками.",
        blockThird: "Проєкти спільноти зосереджені на масштабуванні рекламних вертикалей та побудові ефективного системного підходу.",
        blockFourth: 'У межах ком’юніті впроваджуються моделі процесів, що сприяють зростанню прибутковості проєктів. Особлива увага приділяється розвитку BI-систем, які забезпечують масштабування та стабільне управління на кожному етапі зростання.'
      },
      tarifs: {
        title: 'Тарифи',
        tarifTitle: ['Digitalization проектів', 'Digitalization процесів', 'Digitalization BI-моделей', 'Digitalization проектів', 'Digitalization процесів', 'Digitalization BI-моделей'],
        tarifDescr: ["Систематизація процесів", "Автоматизація процесів", "Масштабування процесів", "Систематизація процесів", "Автоматизація процесів", "Масштабування процесів"],
        tarifList: [ 
        ["Розбір кейсів і рекламних кампаній від медіабаєрів.", "Інструменти та шаблони для запуску і оптимізації зв’язок.", "Доступ до бібліотеки із навчальними курсами.", "Доступ до бібліотеки з гайдами по офферам і аналітиці.", "Майстер-класи та воркшопи для покращення результатів.", "Участь у командних маркетингових проєктах.", "Зворотний зв’язок від наставників.", "Чат ком’юніті для обміну досвідом."], 
        ["Все, що входить у пакет Silver.", "Ексклюзивний доступ до кейсів з масштабування.", "Доступ до систем автоматизації трафіку.", "Розширені аналітичні інструменти і звіти.", "Участь у стратегічних сесіях і воркшопах.", "Пріоритетна підтримка.", "Доступ до закритих партнерських проєктів."], 
        ["Усі переваги пакетів Silver і Gold.", "Доступ до інструментів автоматизації і ВI-аналітики.", "Ексклюзивні кейси зі складних вертикалей і гео.", "Доступ до перевірених BPMN-моделей.", "Запрошення на закриті зустрічі, воркшопи та стратсесії.", "Повний доступ до всіх внутрішніх ресурсів і тренінгів.", "Пріоритет у запуску нових проєктів і партнерств."],
        ["Розбір кейсів і рекламних кампаній від медіабаєрів.", "Інструменти та шаблони для запуску і оптимізації зв’язок.", "Доступ до бібліотеки із навчальними курсами.", "Доступ до бібліотеки з гайдами по офферам і аналітиці.", "Майстер-класи та воркшопи для покращення результатів.", "Участь у командних маркетингових проєктах.", "Зворотний зв’язок від наставників.", "Чат ком’юніті для обміну досвідом."], 
        ["Все, що входить у пакет Silver.", "Ексклюзивний доступ до кейсів з масштабування.", "Доступ до систем автоматизації трафіку.", "Розширені аналітичні інструменти і звіти.", "Участь у стратегічних сесіях і воркшопах.", "Пріоритетна підтримка.", "Доступ до закритих партнерських проєктів."], 
        ["Усі переваги пакетів Silver і Gold.", "Доступ до інструментів автоматизації і ВI-аналітики.", "Ексклюзивні кейси зі складних вертикалей і гео.", "Доступ до перевірених BPMN-моделей.", "Запрошення на закриті зустрічі, воркшопи та стратсесії.", "Повний доступ до всіх внутрішніх ресурсів і тренінгів.", "Пріоритет у запуску нових проєктів і партнерств."]],
        price: ["Членський внесок: $10", "Членський внесок: $25", "Членський внесок: $50"],
        btn: ["Підписатися", "Підписатися", "Підписатися"]
      },
      partners: {
        title: "Партнери",
        subtitle: 'спільноти'
      },
      contacts: {
        firstTitle: 'Перетворюємо',
        secondTitle: 'ідеї та дії',
        thirdTitle: "на",
        fourthTitle: "зростання",
        descr: "Форма нижче – для зв'язку з командою спільноти",
        btn: "Надіслати",
        full: "Перетворюємо ідеї та дії",
        editSecondLine: "iдeї та",
        editThirdLine: "дії на",
        editFourthLine: 'зростання',
        errorMessage: ['Обязательное поле','Обязательное поле','Обязательное поле'],
        succesMessage: 'Повідомлення успішно надіслано'
      },
      priorities: {
        title: "Наші",
        span: "пріоритети",
        descr: ["Ком’юніті створює та постійно вдосконалює ефективні трафік-системи, що забезпечують стабільний та передбачуваний результат на всіх етапах масштабування.", "Учасники ком’юніті працюють з ефективними зв’язками, тестують нові підходи, оптимізують процеси та масштабують результат."],
        btns: ['Вектор', "Цінність"]
      }
  }

  const langENG = {
    nav: {
        list: ['Models', "Catalysts", "Format", "Tariffs", "Partners", "Contact", "Priorities"],
        btnAdm: ["WRITE TO THE ADMINS"]
    },
    about: {
        titleFirstLine: 'Digital',
        titleSecondLine: 'marketing',
        titleThirdLine: "community",
        subtitle: 'The community implements marketing projects focused on digital traffic, scaling, strategic media planning, influence marketing, and systematic funnel management.',
        btnNext: "Options"
    },
    wave: {
        title: 'Digital transformation of projects',
        subtitle: 'The community has implemented a systematic digital approach that allows projects to abandon routine operations and focus on automation, process architecture, and scalable growth.'
    },
    models: {
        title: ['BI-ETL', 'GTM processes', "Growth models", "PLG projects"],
        spans: ['in digital projects','in digital projects','in digital projects','in digital marketing'],
        descr: ['BI-ETL is a scalable tool for strengthening analytics in marketing projects. We build a data architecture for digital projects: we automate the collection, processing, and integration of information for scalable funnels and sustainable growth.', "GTM processes are a structured approach to bringing products and solutions to market. The community has built launch strategies, positioning, segmentation, and funnels. The emphasis on team alignment, BI analytics, and scaling ensures predictable growth and control over results.", "Growth models are an effective tool for building sustainable project development. The community develops and implements models that help optimize customer acquisition and retention processes, increasing the conversion and scalability of project solutions.", "PLG projects are a strategic growth format based on product value. The community develops and implements practices that ensure organic acquisition, high engagement, and sustainable user retention through product experience."]
    },
    services: {
        title: 'Catalyzers',
        titleText: 'System growth drivers',
        itemTitle: ["AI-system", "Task decomposition", "Scalable projects", "Digital systems", "Process Automation", "BI analytics"],
        descr: ["An intelligent system within the community multiplies the efficiency of teams, automates processes and helps achieve strong results.", "The community decomposes tasks by structuring them into sequential steps, which provides transparency of workflows and accelerates the achievement of targeted results.", "The community develops scalable commercial projects with high profit margins. Participants implement effective models and achieve sustainable results.", "Advanced tools for effective project management: digitalisation of processes, data integration strategy and systematic team coordination.", "The community creates and automates business processes, adapting them to the market to ensure sustainable financial growth.", "Access to systematised analytics solutions, proven methodologies and tools for fast data analysis and effective project management."]
    },
    format: {
        circleText: 'Format',
        title: 'Multi-project',
        titleSecondLine: 'GTM campaigns',
        cornerText: 'Progressive growth practices',
        blockFirst: 'The community implements multi-project GTM campaigns to launch several products under a single strategy. We develop coordinated GTM models adapted to target segments for scalable growth.',
        blockSecond: "Positioning, communications, and funnels are managed centrally.",
        blockThird: "Community projects are focused on scaling advertising verticals and building an effective systematic approach.",
        blockFourth: 'The community is implementing process models that contribute to the growth of project profitability. Particular attention is paid to the development of BI systems that ensure scalability and stable management at every stage of growth.'
    },
    tarifs: {
        title: 'Tariffs',
        tarifTitle: ['Digitalization of projects', 'Digitalization of processes', 'Digitalization of BI models', 'Digitalization of projects', 'Digitalization of processes', 'Digitalization of BI models'],
        tarifDescr: ["Systematization of processes", "Automation of processes", "Scaling of processes", "Systematization of processes", "Automation of processes", "Scaling of processes"],
        tarifList: [ 
        ["Analysis of cases and advertising campaigns from media buyers.", "Tools and templates for launching and optimizing communications.", "Access to the library with training courses.", "Access to the library with guides on offers and analytics.", "Master classes and workshops to improve results.", "Participation in team marketing projects.", "Feedback from mentors.", "Community chat to share experiences."], 
        ["Everything included in the Silver package.", "Exclusive access to scaling cases.", "Access to traffic automation systems.", "Advanced analytical tools and reports.", "Participation in strategic sessions and workshops.", "Priority support.", "Access to closed partnership projects."], 
        ["All the benefits of Silver and Gold packages.", "Access to automation and BI analytics tools.", "Exclusive cases from complex verticals and geos.", "Access to proven BPMN models.", "Invitations to private meetings, workshops, and strat sessions.", "Full access to all internal resources and trainings.", "Priority in launching new projects and partnerships."],
        ["Analysis of cases and advertising campaigns from media buyers.", "Tools and templates for launching and optimizing communications.", "Access to the library with training courses.", "Access to the library with guides on offers and analytics.", "Master classes and workshops to improve results.", "Participation in team marketing projects.", "Feedback from mentors.", "Community chat to share experiences."], 
        ["Everything included in the Silver package.", "Exclusive access to scaling cases.", "Access to traffic automation systems.", "Advanced analytical tools and reports.", "Participation in strategic sessions and workshops.", "Priority support.", "Access to closed partnership projects."], 
        ["All the benefits of Silver and Gold packages.", "Access to automation and BI analytics tools.", "Exclusive cases from complex verticals and geos.", "Access to proven BPMN models.", "Invitations to private meetings, workshops, and strat sessions.", "Full access to all internal resources and trainings.", "Priority in launching new projects and partnerships."]],
        price: ["Membership fee: $10", "Membership fee: $25", "Membership fee: $50"],
        btn: ["Subscribe", "Subscribe", "Subscribe"]
    },
    partners: {
        title: "Community",
        subtitle: 'partners'
    },
    contacts: {
        firstTitle: 'Turning ideas',
        secondTitle: 'and actions',
        thirdTitle: "growth",
        fourthTitle: " ",
        descr: "Use the form below to contact the community team",
        btn: "Send",
        full: "Turning ideas and actions",
        editSecondLine: "and actions",
        editThirdLine: "into",
        editFourthLine: 'growth',
        errorMessage: ['Required field','Required field','Required field'],
        succesMessage: 'Notification successfully sent'
    },
    priorities: {
        title: "Our",
        span: "priorities ",
        descr: ["The community creates and constantly improves efficient traffic systems that provide stable and predictable results at all stages of scaling.", "Community members work with effective connections, test new approaches, optimize processes, and scale results."],
        btns: ['Vector', "Value"]
    }
  }


  const languages = {
    UA: langUA,
    EN: langENG,
  };



  function updateLang(langObj) {
      //header
      const navLinks = document.querySelectorAll('.header__link');
      const adminBtn = document.querySelector('.header__admin');
      const mobLinks = document.querySelectorAll('.header__link-mobile');
      const mobAdmBtn = document.querySelector('.header__admin-mobile');
      //about
      const titleFirst = document.getElementById('titleFirst');
      const titleSecond = document.getElementById('titleSecond');
      const titleThird = document.getElementById('titleThird');
      const subtitleAbout = document.getElementById('subtitleAbout');
      const btnAbout = document.getElementById('btn');
      //wave
      const waveTitle = document.querySelector('.wave__title');
      const waveDescr = document.querySelector('.wave__descr');
      //models
      const consaltingTitle = document.querySelectorAll('.consalting__title');
      const consaltingDescr = document.querySelectorAll('.consalting__description');
      //services
      const servicesTitle = document.querySelector('.services__title');
      const servicesTitleText = document.querySelector('.services__title-text');
      const servicesTitleItem = document.querySelectorAll('.services__item-title');
      const servicesDescr = document.querySelectorAll('.services__descr');
      //format
      const formatCircle = document.getElementById('format');
      const formatTitle = document.getElementById('formatTitle');
      const formatTitleSecond = document.getElementById('formatTitleSecond');
      const formatCornerText = document.getElementById('formatCornerTformatCornerTextext');
      const formatBlock = document.getElementById('formatBlock');
      const formatBlockSecond = document.getElementById('formatBlockSecond');
      const formatBlockThird = document.getElementById('formatBlockThird');
      const formatBlockFourth = document.getElementById('formatBlockFourth');
      //tarifs
      const tarifTitle = document.getElementById('packages-Title');
      const tarifItemTitle = document.querySelectorAll('.packages-item__title');
      const tarifDescr = document.querySelectorAll('.packages-item__descr');
      const tarifLists = document.querySelectorAll('.packages-item__list');
      const tarifSub = document.querySelectorAll('.packages__new-price');
      const tarifBtn = document.querySelectorAll('.packages__new-btn');
      const tarifLargeSub = document.querySelectorAll('.packages-item__price');
      const tarifLargeBtn = document.querySelectorAll('.packages-item__btn-span');


      //partners
      const partnersTitle = document.getElementById('partnersTitle');
      const partnersSubtitle = document.getElementById('partnersSubtitle');

      //contacts
      const contactTitleFirst = document.getElementById('contact-first');
      const contactTitleFirstNew = document.querySelector('.contacts__title-first');

      const contactTitleSecond = document.getElementById('contact-second');
      const contactTitleSecondNew = document.querySelector('.contacts__title-second');

      const contactTitleThird = document.getElementById('contact-third');
      const contactTitleThirdNew = document.querySelector('.contacts__title-third');

      const contactTitleFourth = document.getElementById('contact-fourth');
      const contactTitleFourthNew = document.querySelector('.contacts__title-fourth');

      const contactTitleDescr = document.getElementById('contact-descr');


      const contactTitleDescription = document.querySelector('.contacts__descr');

      const contactSuccess = document.querySelector('#form-notification');
     
      const contactsBtn= document.querySelector('[data-elem-id="1642972311122"]');
      const contactsButton= document.querySelector('.contacts__button');

      const contactsErrorMessage = document.querySelectorAll('.error-message');

      contactsErrorMessage.forEach((error, index) => {
        error.textContent = langObj.contacts.errorMessage[index];
      })
 


      // contactsBtn.setAttribute('data-field-buttontitle-value', `${langObj.contacts.btn}`);
      

      contactTitleFirstNew.textContent = langObj.contacts.firstTitle;
      contactTitleSecondNew.textContent = langObj.contacts.secondTitle;
      contactTitleThirdNew.textContent = langObj.contacts.thirdTitle;
      contactTitleFourthNew.textContent = langObj.contacts.fourthTitle;

      contactTitleDescription.textContent = langObj.contacts.descr;
      contactsButton.textContent = langObj.contacts.btn;
      contactSuccess.textContent = langObj.contacts.succesMessage;
      //priorities
      const careersH2 = document.getElementById('careers__h2');
      const careersSpan = document.getElementById('careers__span');
      const careersText = document.querySelectorAll('.careers__text');
      const careersBtn = document.querySelectorAll('.careers__btn');
      
      //footer
      const footerAdmin = document.querySelector('.footer__admin');


      // header
      navLinks.forEach((link, index) => {
        link.textContent = langObj.nav.list[index];
      });
      adminBtn.textContent = langObj.nav.btnAdm;
      mobLinks.forEach((link, index) => {
        link.textContent = langObj.nav.list[index];
      });
      mobAdmBtn.textContent = langObj.nav.btnAdm;





      // about
      titleFirst.textContent = langObj.about.titleFirstLine;
      titleSecond.textContent = langObj.about.titleSecondLine;
      titleThird.textContent = langObj.about.titleThirdLine;
      subtitleAbout.textContent = langObj.about.subtitle;
      btnAbout.textContent = langObj.about.btnNext;

      // wave
      waveTitle.textContent = langObj.wave.title;
      waveDescr.textContent = langObj.wave.subtitle;

      //models
      consaltingTitle.forEach((titleElement, index) => {
        const h2 = titleElement;
        const span = h2.querySelector('.title-span');


        h2.childNodes[0].nodeValue = langObj.models.title[index]; 
        span.textContent = langObj.models.spans[index]; 
      });
      consaltingDescr.forEach((descr, index) => {
        descr.textContent = langObj.models.descr[index];
      })

      //services
      servicesTitle.textContent = langObj.services.title;
      servicesTitleText.textContent = langObj.services.titleText;
      servicesTitleItem.forEach((title, index) => {
        title.textContent = langObj.services.itemTitle[index];
      })
      servicesDescr.forEach((descr, index) => {
        descr.textContent = langObj.services.descr[index];
      })

      //format
      formatCircle.textContent = langObj.format.circleText;
      formatTitle.textContent = langObj.format.title;
      formatTitleSecond .textContent = langObj.format.titleSecondLine;
      formatCornerText.textContent = langObj.format.cornerText;
      formatBlock.textContent = langObj.format.blockFirst;
      formatBlockSecond.textContent = langObj.format.blockSecond;
      formatBlockThird.textContent = langObj.format.blockThird;
      formatBlockFourth.textContent = langObj.format.blockFourth;


  



      //tarifs
      tarifTitle.textContent = langObj.tarifs.title;
      tarifItemTitle.forEach((title, index) => {
        title.textContent = langObj.tarifs.tarifTitle[index];
      })
      tarifDescr.forEach((descr, index) => {
        descr.textContent = langObj.tarifs.tarifDescr[index];
      })

      tarifLists.forEach((ul, index) => {

        ul.innerHTML = '';

        const items = langObj.tarifs.tarifList[index];


        items.forEach(itemText => {
            const li = document.createElement('li');
            li.textContent = itemText;
            ul.appendChild(li);
        });
      });
      tarifSub.forEach((price, index) => {
        price.textContent = langObj.tarifs.price[index];
      })
      tarifBtn.forEach((btn, index) => {
        btn.textContent = langObj.tarifs.btn[index];
      })


      tarifLargeSub.forEach((price, index) => {
        price.textContent = langObj.tarifs.price[index];
      })
      tarifLargeBtn.forEach((btn, index) => {
        btn.textContent = langObj.tarifs.btn[index];
      })




      //partners
      partnersTitle.textContent = langObj.partners.title;
      partnersSubtitle.textContent = langObj.partners.subtitle;
      
      //contacts
      // contactTitleFirst.textContent = langObj.contacts.firstTitle;
      // contactTitleSecond.textContent = langObj.contacts.secondTitle;
      // contactTitleThird.textContent = langObj.contacts.thirdTitle;
      // contactTitleFourth.textContent = langObj.contacts.fourthTitle;
      // contactTitleDescr.textContent = langObj.contacts.descr;

          
      if (window.innerWidth > 320 && window.innerWidth < 640) {
          


          if (contactTitleSecondNew) {
            contactTitleSecondNew.textContent = langObj.contacts.editSecondLine;
          }
          if (contactTitleThirdNew) {
            contactTitleThirdNew.textContent = langObj.contacts.editThirdLine;
          }
          if (contactTitleFourthNew) {
            contactTitleFourthNew.textContent = langObj.contacts.editFourthLine;
          }


          // if (contactTitleSecond) {
          //   contactTitleSecond.textContent = langObj.contacts.editSecondLine;
          // }
          // if (contactTitleThird) {
          //   contactTitleThird.textContent = langObj.contacts.editThirdLine;
          // }
          // if (contactTitleFourth) {
          //   contactTitleFourth.textContent = langObj.contacts.editFourthLine;
          // }
        }




      //priorities
      careersH2.childNodes[0].nodeValue = langObj.priorities.title;
      careersSpan.textContent = langObj.priorities.span;
           
      careersText.forEach((text,index) => {
        text.textContent = langObj.priorities.descr[index];
      })
      careersBtn.forEach((btn, index) => {
        btn.textContent = langObj.priorities.btns[index];
      })

      //footer
      footerAdmin.textContent = langObj.nav.btnAdm;




  }

  function switchLanguage(langCode) {
    const langData = languages[langCode];
    if (!langData) return;

    localStorage.setItem('language', langCode);
    updateLang(langData); // твоя функция
  }
  const langChanged = localStorage.getItem('languageChanged') === 'true';
  const currentLang = localStorage.getItem('language') || 'EN';



    document.getElementById(`lang-${currentLang.toLowerCase()}`).checked = true;
    switchLanguage(currentLang);



     const radios = document.querySelectorAll('input[name="language"]');


    if (langChanged) {
        localStorage.removeItem('languageChanged');
        return;
    }
       // обработка смены языка
    radios.forEach(input => {
            input.addEventListener('change', () => {
            if (input.checked) {
                const newLang = input.value;
                const prevLang = localStorage.getItem('language');

                if (newLang !== prevLang) {
                localStorage.setItem('language', newLang);
                localStorage.setItem('languageChanged', 'true');
                location.reload();
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {





  // switch lang
  const langUA = {
      nav: {
          list: ['Моделі', "Каталізатори", "Формат", "Тарифи", "Партнери", "Зв'язок", "Пріоритети"],
          btnAdm: "НАПИСАТИ АДМІНІСТРАТОРУ"
      },
      about: {
          titleFirstLine: 'Маркетингове',
          titleSecondLine: 'digital-',
          titleThirdLine: "ком'юніті",
          subtitle: 'У спільноті реалізуються маркетингові проєкти, сфокусовані на роботі з digital-трафіком, масштабуванні, стратегічному медіаплануванні, influence-маркетингу та системному управлінні воронками.',
          btnNext: "Перейти"
      },
      wave: {
        title: 'Цифрова трансформація проєктів',
        subtitle: 'У спільноті впроваджено системний digital-підхід, що дозволяє проєктам відмовитися від рутинних операцій і зосередитися на автоматизації, архітектурі процесів та масштабованому зростанні.'
      },
      models: {
        title: ['BI-ETL', 'GTM-процеси', "Growth-моделі", "PLG-проєкти"],
        spans: ['у digital-проєктах','у digital-проєктах','у digital-проєктах','в digital-макетингу'],
        descr: ['BI-ETL — масштабований інструмент для посилення аналітики в маркетингових проєктах. Ми вибудовуємо архітектуру даних під завдання digital-проєктів: автоматизуємо збір, обробку та інтеграцію інформації для масштабованих воронок і стійкого зростання.', "GTM-процеси — це структурований підхід до виведення продуктів і рішень на ринок. У спільноті вибудувані стратегії запуску, позиціювання, сегментація та воронки. Акцент на узгодженості команд, BI-аналітиці та масштабуванні забезпечує передбачуване зростання й контроль над результатами.", "Growth-моделі — ефективний інструмент для побудови стійкого розвитку проєктів. У спільноті розробляються та впроваджуються моделі, які допомагають оптимізувати процеси залучення й утримання клієнтів, підвищуючи конверсію та масштабованість проєктних рішень.", "PLG-проєкти — стратегічний формат зростання, заснований на цінності продукту. У спільноті розробляються та впроваджуються практики, що забезпечують органічне залучення, високу залученість і стійке утримання користувачів завдяки продуктовому досвіду."]
      },
      services: {
        title: 'Каталізатори',
        titleText: 'Драйвери системного зростання',
        itemTitle: ["AI-система", "Декомпозиція завдань", "Масштабувані проекти", "Цифрові системи", "Автоматизація процесів", "BI аналітика"],
        descr: ["Інтелектуальна система всередині ком'юніті кратно посилює ефективність команд, автоматизує процеси та допомагає досягати сильних результатів.", "Спільнота декомпозує завдання, структуруючи їх на послідовні етапи, що забезпечує прозорість робочих процесів та прискорює досягнення цільових результатів.", "Спільнота розвиває масштабні комерційні проекти із високим профітом. Учасники впроваджують ефективні моделі та досягають стійких результатів.", "Передові інструменти для ефективного управління проектами: цифровізація процесів, стратегія інтеграції даних та системна координація команд.", "Спільнота створює та автоматизує бізнес-процеси, адаптуючи їх під ринок, що забезпечує стабільне фінансове зростання.", "Доступ до систематизованих аналітичних рішень, перевірених методологій та інструментів для швидкого аналізу даних і ефективного управління проектами."]
      },
      format: {
        circleText: 'Формат',
        title: 'Мультипроєктні',
        titleSecondLine: 'GTM-кампанії',
        cornerText: 'Прогресивні практики зростання',
        blockFirst: 'Спільнотою реалізуються мультипроєктні GTM-кампанії з виведення кількох продуктів у межах єдиної стратегії. Розробляються узгоджені GTM-моделі, адаптовані під цільові сегменти для масштабованого зростання.',
        blockSecond: "Централізовано здійснюється управління позиціюванням, комунікаціями та воронками.",
        blockThird: "Проєкти спільноти зосереджені на масштабуванні рекламних вертикалей та побудові ефективного системного підходу.",
        blockFourth: 'У межах ком’юніті впроваджуються моделі процесів, що сприяють зростанню прибутковості проєктів. Особлива увага приділяється розвитку BI-систем, які забезпечують масштабування та стабільне управління на кожному етапі зростання.'
      },
      tarifs: {
        title: 'Тарифи',
        tarifTitle: ['Digitalization проектів', 'Digitalization процесів', 'Digitalization BI-моделей', 'Digitalization проектів', 'Digitalization процесів', 'Digitalization BI-моделей'],
        tarifDescr: ["Систематизація процесів", "Автоматизація процесів", "Масштабування процесів", "Систематизація процесів", "Автоматизація процесів", "Масштабування процесів"],
        tarifList: [ 
        ["Розбір кейсів і рекламних кампаній від медіабаєрів.", "Інструменти та шаблони для запуску і оптимізації зв’язок.", "Доступ до бібліотеки із навчальними курсами.", "Доступ до бібліотеки з гайдами по офферам і аналітиці.", "Майстер-класи та воркшопи для покращення результатів.", "Участь у командних маркетингових проєктах.", "Зворотний зв’язок від наставників.", "Чат ком’юніті для обміну досвідом."], 
        ["Все, що входить у пакет Silver.", "Ексклюзивний доступ до кейсів з масштабування.", "Доступ до систем автоматизації трафіку.", "Розширені аналітичні інструменти і звіти.", "Участь у стратегічних сесіях і воркшопах.", "Пріоритетна підтримка.", "Доступ до закритих партнерських проєктів."], 
        ["Усі переваги пакетів Silver і Gold.", "Доступ до інструментів автоматизації і ВI-аналітики.", "Ексклюзивні кейси зі складних вертикалей і гео.", "Доступ до перевірених BPMN-моделей.", "Запрошення на закриті зустрічі, воркшопи та стратсесії.", "Повний доступ до всіх внутрішніх ресурсів і тренінгів.", "Пріоритет у запуску нових проєктів і партнерств."],
        ["Розбір кейсів і рекламних кампаній від медіабаєрів.", "Інструменти та шаблони для запуску і оптимізації зв’язок.", "Доступ до бібліотеки із навчальними курсами.", "Доступ до бібліотеки з гайдами по офферам і аналітиці.", "Майстер-класи та воркшопи для покращення результатів.", "Участь у командних маркетингових проєктах.", "Зворотний зв’язок від наставників.", "Чат ком’юніті для обміну досвідом."], 
        ["Все, що входить у пакет Silver.", "Ексклюзивний доступ до кейсів з масштабування.", "Доступ до систем автоматизації трафіку.", "Розширені аналітичні інструменти і звіти.", "Участь у стратегічних сесіях і воркшопах.", "Пріоритетна підтримка.", "Доступ до закритих партнерських проєктів."], 
        ["Усі переваги пакетів Silver і Gold.", "Доступ до інструментів автоматизації і ВI-аналітики.", "Ексклюзивні кейси зі складних вертикалей і гео.", "Доступ до перевірених BPMN-моделей.", "Запрошення на закриті зустрічі, воркшопи та стратсесії.", "Повний доступ до всіх внутрішніх ресурсів і тренінгів.", "Пріоритет у запуску нових проєктів і партнерств."]],
        price: ["Членський внесок: $10", "Членський внесок: $25", "Членський внесок: $50"],
        btn: ["Підписатися", "Підписатися", "Підписатися"]
      },
      partners: {
        title: "Партнери",
        subtitle: 'спільноти'
      },
      contacts: {
        firstTitle: 'Перетворюємо',
        secondTitle: 'ідеї та дії',
        thirdTitle: "на",
        fourthTitle: "зростання",
        descr: "Форма нижче – для зв'язку з командою спільноти",
        btn: "Надіслати",
        full: "Перетворюємо ідеї та дії",
        editSecondLine: "iдeї та",
        editThirdLine: "дії на",
        editFourthLine: 'зростання',
        errorMessage: ['Обязательное поле','Обязательное поле','Обязательное поле']
      },
      priorities: {
        title: "Наші",
        span: "пріоритети",
        descr: ["Ком’юніті створює та постійно вдосконалює ефективні трафік-системи, що забезпечують стабільний та передбачуваний результат на всіх етапах масштабування.", "Учасники ком’юніті працюють з ефективними зв’язками, тестують нові підходи, оптимізують процеси та масштабують результат."],
        btns: ['Вектор', "Цінність"]
      }
  }

  const langENG = {
    nav: {
        list: ['Models', "Catalysts", "Format", "Tariffs", "Partners", "Contact", "Priorities"],
        btnAdm: ["WRITE TO THE ADMINS"]
    },
    about: {
        titleFirstLine: 'Digital',
        titleSecondLine: 'marketing',
        titleThirdLine: "community",
        subtitle: 'The community implements marketing projects focused on digital traffic, scaling, strategic media planning, influence marketing, and systematic funnel management.',
        btnNext: "Options"
    },
    wave: {
        title: 'Digital transformation of projects',
        subtitle: 'The community has implemented a systematic digital approach that allows projects to abandon routine operations and focus on automation, process architecture, and scalable growth.'
    },
    models: {
        title: ['BI-ETL', 'GTM processes', "Growth models", "PLG projects"],
        spans: ['in digital projects','in digital projects','in digital projects','in digital marketing'],
        descr: ['BI-ETL is a scalable tool for strengthening analytics in marketing projects. We build a data architecture for digital projects: we automate the collection, processing, and integration of information for scalable funnels and sustainable growth.', "GTM processes are a structured approach to bringing products and solutions to market. The community has built launch strategies, positioning, segmentation, and funnels. The emphasis on team alignment, BI analytics, and scaling ensures predictable growth and control over results.", "Growth models are an effective tool for building sustainable project development. The community develops and implements models that help optimize customer acquisition and retention processes, increasing the conversion and scalability of project solutions.", "PLG projects are a strategic growth format based on product value. The community develops and implements practices that ensure organic acquisition, high engagement, and sustainable user retention through product experience."]
    },
    services: {
        title: 'Catalyzers',
        titleText: 'System growth drivers',
        itemTitle: ["AI-system", "Task decomposition", "Scalable projects", "Digital systems", "Process Automation", "BI analytics"],
        descr: ["An intelligent system within the community multiplies the efficiency of teams, automates processes and helps achieve strong results.", "The community decomposes tasks by structuring them into sequential steps, which provides transparency of workflows and accelerates the achievement of targeted results.", "The community develops scalable commercial projects with high profit margins. Participants implement effective models and achieve sustainable results.", "Advanced tools for effective project management: digitalisation of processes, data integration strategy and systematic team coordination.", "The community creates and automates business processes, adapting them to the market to ensure sustainable financial growth.", "Access to systematised analytics solutions, proven methodologies and tools for fast data analysis and effective project management."]
    },
    format: {
        circleText: 'Format',
        title: 'Multi-project',
        titleSecondLine: 'GTM campaigns',
        cornerText: 'Progressive growth practices',
        blockFirst: 'The community implements multi-project GTM campaigns to launch several products under a single strategy. We develop coordinated GTM models adapted to target segments for scalable growth.',
        blockSecond: "Positioning, communications, and funnels are managed centrally.",
        blockThird: "Community projects are focused on scaling advertising verticals and building an effective systematic approach.",
        blockFourth: 'The community is implementing process models that contribute to the growth of project profitability. Particular attention is paid to the development of BI systems that ensure scalability and stable management at every stage of growth.'
    },
    tarifs: {
        title: 'Tariffs',
        tarifTitle: ['Digitalization of projects', 'Digitalization of processes', 'Digitalization of BI models', 'Digitalization of projects', 'Digitalization of processes', 'Digitalization of BI models'],
        tarifDescr: ["Systematization of processes", "Automation of processes", "Scaling of processes", "Systematization of processes", "Automation of processes", "Scaling of processes"],
        tarifList: [ 
        ["Analysis of cases and advertising campaigns from media buyers.", "Tools and templates for launching and optimizing communications.", "Access to the library with training courses.", "Access to the library with guides on offers and analytics.", "Master classes and workshops to improve results.", "Participation in team marketing projects.", "Feedback from mentors.", "Community chat to share experiences."], 
        ["Everything included in the Silver package.", "Exclusive access to scaling cases.", "Access to traffic automation systems.", "Advanced analytical tools and reports.", "Participation in strategic sessions and workshops.", "Priority support.", "Access to closed partnership projects."], 
        ["All the benefits of Silver and Gold packages.", "Access to automation and BI analytics tools.", "Exclusive cases from complex verticals and geos.", "Access to proven BPMN models.", "Invitations to private meetings, workshops, and strat sessions.", "Full access to all internal resources and trainings.", "Priority in launching new projects and partnerships."],
        ["Analysis of cases and advertising campaigns from media buyers.", "Tools and templates for launching and optimizing communications.", "Access to the library with training courses.", "Access to the library with guides on offers and analytics.", "Master classes and workshops to improve results.", "Participation in team marketing projects.", "Feedback from mentors.", "Community chat to share experiences."], 
        ["Everything included in the Silver package.", "Exclusive access to scaling cases.", "Access to traffic automation systems.", "Advanced analytical tools and reports.", "Participation in strategic sessions and workshops.", "Priority support.", "Access to closed partnership projects."], 
        ["All the benefits of Silver and Gold packages.", "Access to automation and BI analytics tools.", "Exclusive cases from complex verticals and geos.", "Access to proven BPMN models.", "Invitations to private meetings, workshops, and strat sessions.", "Full access to all internal resources and trainings.", "Priority in launching new projects and partnerships."]],
        price: ["Membership fee: $10", "Membership fee: $25", "Membership fee: $50"],
        btn: ["Subscribe", "Subscribe", "Subscribe"]
    },
    partners: {
        title: "Community",
        subtitle: 'partners'
    },
    contacts: {
        firstTitle: 'Turning ideas',
        secondTitle: 'and actions',
        thirdTitle: "growth",
        fourthTitle: " ",
        descr: "Use the form below to contact the community team",
        btn: "Send",
        full: "Turning ideas and actions",
        editSecondLine: "and actions",
        editThirdLine: "into",
        editFourthLine: 'growth',
        errorMessage: ['Required field','Required field','Required field']
    },
    priorities: {
        title: "Our",
        span: "priorities ",
        descr: ["The community creates and constantly improves efficient traffic systems that provide stable and predictable results at all stages of scaling.", "Community members work with effective connections, test new approaches, optimize processes, and scale results."],
        btns: ['Vector', "Value"]
    }
  }


  const languages = {
    UA: langUA,
    EN: langENG,
  };



  function updateLang(langObj) {
      //header
      const navLinks = document.querySelectorAll('.header__link');
      const adminBtn = document.querySelector('.header__admin');
      const mobLinks = document.querySelectorAll('.header__link-mobile');
      const mobAdmBtn = document.querySelector('.header__admin-mobile');
      //about
      const titleFirst = document.getElementById('titleFirst');
      const titleSecond = document.getElementById('titleSecond');
      const titleThird = document.getElementById('titleThird');
      const subtitleAbout = document.getElementById('subtitleAbout');
      const btnAbout = document.getElementById('btn');
      //wave
      const waveTitle = document.querySelector('.wave__title');
      const waveDescr = document.querySelector('.wave__descr');
      //models
      const consaltingTitle = document.querySelectorAll('.consalting__title');
      const consaltingDescr = document.querySelectorAll('.consalting__description');
      //services
      const servicesTitle = document.querySelector('.services__title');
      const servicesTitleText = document.querySelector('.services__title-text');
      const servicesTitleItem = document.querySelectorAll('.services__item-title');
      const servicesDescr = document.querySelectorAll('.services__descr');
      //format
      const formatCircle = document.getElementById('format');
      const formatTitle = document.getElementById('formatTitle');
      const formatTitleSecond = document.getElementById('formatTitleSecond');
      const formatCornerText = document.getElementById('formatCornerTformatCornerTextext');
      const formatBlock = document.getElementById('formatBlock');
      const formatBlockSecond = document.getElementById('formatBlockSecond');
      const formatBlockThird = document.getElementById('formatBlockThird');
      const formatBlockFourth = document.getElementById('formatBlockFourth');
      //tarifs
      const tarifTitle = document.getElementById('packages-Title');
      const tarifItemTitle = document.querySelectorAll('.packages-item__title');
      const tarifDescr = document.querySelectorAll('.packages-item__descr');
      const tarifLists = document.querySelectorAll('.packages-item__list');
      const tarifSub = document.querySelectorAll('.packages__new-price');
      const tarifBtn = document.querySelectorAll('.packages__new-btn');
      const tarifLargeSub = document.querySelectorAll('.packages-item__price');
      const tarifLargeBtn = document.querySelectorAll('.packages-item__btn-span');


      //partners
      const partnersTitle = document.getElementById('partnersTitle');
      const partnersSubtitle = document.getElementById('partnersSubtitle');

      //contacts
      const contactTitleFirst = document.getElementById('contact-first');
      const contactTitleFirstNew = document.querySelector('.contacts__title-first');

      const contactTitleSecond = document.getElementById('contact-second');
      const contactTitleSecondNew = document.querySelector('.contacts__title-second');

      const contactTitleThird = document.getElementById('contact-third');
      const contactTitleThirdNew = document.querySelector('.contacts__title-third');

      const contactTitleFourth = document.getElementById('contact-fourth');
      const contactTitleFourthNew = document.querySelector('.contacts__title-fourth');

      const contactTitleDescr = document.getElementById('contact-descr');


      const contactTitleDescription = document.querySelector('.contacts__descr');


     
      const contactsBtn= document.querySelector('[data-elem-id="1642972311122"]');
      const contactsButton= document.querySelector('.contacts__button');

      const contactsErrorMessage = document.querySelectorAll('.error-message');

      contactsErrorMessage.forEach((error, index) => {
        error.textContent = langObj.contacts.errorMessage[index];
      })
 


      // contactsBtn.setAttribute('data-field-buttontitle-value', `${langObj.contacts.btn}`);
      

      contactTitleFirstNew.textContent = langObj.contacts.firstTitle;
      contactTitleSecondNew.textContent = langObj.contacts.secondTitle;
      contactTitleThirdNew.textContent = langObj.contacts.thirdTitle;
      contactTitleFourthNew.textContent = langObj.contacts.fourthTitle;

      contactTitleDescription.textContent = langObj.contacts.descr;
      contactsButton.textContent = langObj.contacts.btn;

      //priorities
      const careersH2 = document.getElementById('careers__h2');
      const careersSpan = document.getElementById('careers__span');
      const careersText = document.querySelectorAll('.careers__text');
      const careersBtn = document.querySelectorAll('.careers__btn');
      
      //footer
      const footerAdmin = document.querySelector('.footer__admin');


      // header
      navLinks.forEach((link, index) => {
        link.textContent = langObj.nav.list[index];
      });
      adminBtn.textContent = langObj.nav.btnAdm;
      mobLinks.forEach((link, index) => {
        link.textContent = langObj.nav.list[index];
      });
      mobAdmBtn.textContent = langObj.nav.btnAdm;





      // about
      titleFirst.textContent = langObj.about.titleFirstLine;
      titleSecond.textContent = langObj.about.titleSecondLine;
      titleThird.textContent = langObj.about.titleThirdLine;
      subtitleAbout.textContent = langObj.about.subtitle;
      btnAbout.textContent = langObj.about.btnNext;

      // wave
      waveTitle.textContent = langObj.wave.title;
      waveDescr.textContent = langObj.wave.subtitle;

      //models
      consaltingTitle.forEach((titleElement, index) => {
        const h2 = titleElement;
        const span = h2.querySelector('.title-span');


        h2.childNodes[0].nodeValue = langObj.models.title[index]; 
        span.textContent = langObj.models.spans[index]; 
      });
      consaltingDescr.forEach((descr, index) => {
        descr.textContent = langObj.models.descr[index];
      })

      //services
      servicesTitle.textContent = langObj.services.title;
      servicesTitleText.textContent = langObj.services.titleText;
      servicesTitleItem.forEach((title, index) => {
        title.textContent = langObj.services.itemTitle[index];
      })
      servicesDescr.forEach((descr, index) => {
        descr.textContent = langObj.services.descr[index];
      })

      //format
      formatCircle.textContent = langObj.format.circleText;
      formatTitle.textContent = langObj.format.title;
      formatTitleSecond .textContent = langObj.format.titleSecondLine;
      formatCornerText.textContent = langObj.format.cornerText;
      formatBlock.textContent = langObj.format.blockFirst;
      formatBlockSecond.textContent = langObj.format.blockSecond;
      formatBlockThird.textContent = langObj.format.blockThird;
      formatBlockFourth.textContent = langObj.format.blockFourth;


  



      //tarifs
      tarifTitle.textContent = langObj.tarifs.title;
      tarifItemTitle.forEach((title, index) => {
        title.textContent = langObj.tarifs.tarifTitle[index];
      })
      tarifDescr.forEach((descr, index) => {
        descr.textContent = langObj.tarifs.tarifDescr[index];
      })

      tarifLists.forEach((ul, index) => {

        ul.innerHTML = '';

        const items = langObj.tarifs.tarifList[index];


        items.forEach(itemText => {
            const li = document.createElement('li');
            li.textContent = itemText;
            ul.appendChild(li);
        });
      });
      tarifSub.forEach((price, index) => {
        price.textContent = langObj.tarifs.price[index];
      })
      tarifBtn.forEach((btn, index) => {
        btn.textContent = langObj.tarifs.btn[index];
      })


      tarifLargeSub.forEach((price, index) => {
        price.textContent = langObj.tarifs.price[index];
      })
      tarifLargeBtn.forEach((btn, index) => {
        btn.textContent = langObj.tarifs.btn[index];
      })




      //partners
      partnersTitle.textContent = langObj.partners.title;
      partnersSubtitle.textContent = langObj.partners.subtitle;
      
      //contacts
      // contactTitleFirst.textContent = langObj.contacts.firstTitle;
      // contactTitleSecond.textContent = langObj.contacts.secondTitle;
      // contactTitleThird.textContent = langObj.contacts.thirdTitle;
      // contactTitleFourth.textContent = langObj.contacts.fourthTitle;
      // contactTitleDescr.textContent = langObj.contacts.descr;

          
      if (window.innerWidth > 320 && window.innerWidth < 640) {
          


          if (contactTitleSecondNew) {
            contactTitleSecondNew.textContent = langObj.contacts.editSecondLine;
          }
          if (contactTitleThirdNew) {
            contactTitleThirdNew.textContent = langObj.contacts.editThirdLine;
          }
          if (contactTitleFourthNew) {
            contactTitleFourthNew.textContent = langObj.contacts.editFourthLine;
          }


          // if (contactTitleSecond) {
          //   contactTitleSecond.textContent = langObj.contacts.editSecondLine;
          // }
          // if (contactTitleThird) {
          //   contactTitleThird.textContent = langObj.contacts.editThirdLine;
          // }
          // if (contactTitleFourth) {
          //   contactTitleFourth.textContent = langObj.contacts.editFourthLine;
          // }
        }




      //priorities
      careersH2.childNodes[0].nodeValue = langObj.priorities.title;
      careersSpan.textContent = langObj.priorities.span;
           
      careersText.forEach((text,index) => {
        text.textContent = langObj.priorities.descr[index];
      })
      careersBtn.forEach((btn, index) => {
        btn.textContent = langObj.priorities.btns[index];
      })

      //footer
      footerAdmin.textContent = langObj.nav.btnAdm;




  }

  function switchLanguage(langCode) {
    const langData = languages[langCode];
    if (!langData) return;

    localStorage.setItem('language', langCode);
    updateLang(langData); // твоя функция
  }
  const langChanged = localStorage.getItem('languageChanged') === 'true';
  const currentLang = localStorage.getItem('language') || 'EN';



    document.getElementById(`lang-${currentLang.toLowerCase()}`).checked = true;
    switchLanguage(currentLang);



     const radios = document.querySelectorAll('input[name="language"]');


    if (langChanged) {
        localStorage.removeItem('languageChanged');
        return;
    }
       // обработка смены языка
    radios.forEach(input => {
            input.addEventListener('change', () => {
            if (input.checked) {
                const newLang = input.value;
                const prevLang = localStorage.getItem('language');

                if (newLang !== prevLang) {
                localStorage.setItem('language', newLang);
                localStorage.setItem('languageChanged', 'true');
                location.reload();
                }
            }
        });
    });
});

