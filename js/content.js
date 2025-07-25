import { data } from './data.js';

if (Object.keys(localStorage).indexOf('language') === -1) {
  localStorage.setItem('language', navigator.language.substring(0, 2));
}

const title = document.getElementsByTagName('title')[0];

const languages = document.querySelectorAll('.language');
const showedLanguage = document.querySelector('.lang-menu > div');
const savedLanguage = localStorage.getItem('language');

const renderContent = (lang) => {
  // Title
  title.textContent = data[lang].title;

  // Languages menu
  showedLanguage.textContent = data[lang].langMenu[lang];
  showedLanguage.className = '';
  showedLanguage.classList.add(lang);

  document.querySelector('.en').textContent = data[lang].langMenu.en;
  document.querySelector('.es').textContent = data[lang].langMenu.es;
  document.querySelector('.fr').textContent = data[lang].langMenu.fr;
  document.querySelector('ul li .' + lang).classList.add('hidden-lang');

  // Navbar
  document.querySelector("[href='#home']").textContent = data[lang].navbar.home;
  document.querySelector("[href='#about']").textContent = data[lang].navbar.about;
  document.querySelector("[href='#skills']").textContent = data[lang].navbar.skills;
  document.querySelector("[href='#services']").textContent = data[lang].navbar.services;
  document.querySelector("[href='#portfolio']").textContent = data[lang].navbar.portfolio;
  document.querySelector("[href='#contact']").textContent = data[lang].navbar.contact;

  // Home
  document.querySelector('.home .info h2').textContent = data[lang].home.info.h2;
  document.querySelector('.home .info h3').textContent = data[lang].home.info.h3;
  document.querySelector('.home .info p').textContent = data[lang].home.info.p;
  document.querySelector('.home .info a').textContent = data[lang].home.info.a;
  document.querySelector('.home > a').firstChild.data = data[lang].home.a;

  // About
  document.querySelector('.about h1').textContent = data[lang].about.h1;
  document.querySelector('.about h2').textContent = data[lang].about.h2;
  document.querySelector('.about .description h3').textContent = data[lang].about.description.h3;
  document.querySelector('.about .description h4').innerHTML = data[lang].about.description.h4;
  document.querySelector('.about .description p').textContent = data[lang].about.description.p;
  document.querySelector('.about .description .professional-list li:nth-child(1) span').firstChild.data = data[lang].about.description.professionalList.li1.span1;
  document.querySelector('.about .description .professional-list li:nth-child(1) span').lastChild.data = data[lang].about.description.professionalList.li1.span2;
  document.querySelector('.about .description .professional-list li:nth-child(2) span').firstChild.data = data[lang].about.description.professionalList.li2.span1;
  document.querySelector('.about .description .professional-list li:nth-child(2) span').lastChild.data = data[lang].about.description.professionalList.li2.span2;
  document.querySelector('.about .description .professional-list li:nth-child(3) span').firstChild.data = data[lang].about.description.professionalList.li3.span1;
  document.querySelector('.about .description .professional-list li:nth-child(3) span').lastChild.data = data[lang].about.description.professionalList.li3.span2;
  document.querySelector('.about .description a').firstChild.data = data[lang].about.description.a;

  // Skills
  document.querySelector('.skills h1').textContent = data[lang].skills.h1;
  document.querySelector('.skills h2').textContent = data[lang].skills.h2;
  document.querySelector('.skills .skills-description:nth-child(1) h3').textContent = data[lang].skills.description1.h3;
  document.querySelector('.skills .skills-description:nth-child(1) p').textContent = data[lang].skills.description1.p;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(1) h4 label').textContent = data[lang].skills.educationAndSkills.education.h4;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(1) .edu-list .item:nth-child(1) p span').textContent = data[lang].skills.educationAndSkills.education.ul.item1.span;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(1) .edu-list .item:nth-child(1) p').lastChild.data = data[lang].skills.educationAndSkills.education.ul.item1.p;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(1) .edu-list .item:nth-child(2) p span').textContent = data[lang].skills.educationAndSkills.education.ul.item2.span;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(1) .edu-list .item:nth-child(2) p').lastChild.data = data[lang].skills.educationAndSkills.education.ul.item2.p;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(2) h4 label').textContent = data[lang].skills.educationAndSkills.skills.h4;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(3) h4 label').textContent = data[lang].skills.educationAndSkills.awards.h4;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(3) .edu-list .item:nth-child(1) p span').textContent = data[lang].skills.educationAndSkills.awards.ul.item1.span;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(3) .edu-list .item:nth-child(1) p').lastChild.data = data[lang].skills.educationAndSkills.awards.ul.item1.p;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(3) .edu-list .item:nth-child(2) p span').textContent = data[lang].skills.educationAndSkills.awards.ul.item2.span;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(3) .edu-list .item:nth-child(2) p').lastChild.data = data[lang].skills.educationAndSkills.awards.ul.item2.p;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(3) .edu-list .item:nth-child(3) p span').textContent = data[lang].skills.educationAndSkills.awards.ul.item3.span;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(3) .edu-list .item:nth-child(3) p').lastChild.data = data[lang].skills.educationAndSkills.awards.ul.item3.p;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(3) .edu-list .item:nth-child(4) p span').textContent = data[lang].skills.educationAndSkills.awards.ul.item4.span;
  document.querySelector('.skills .skills-info:nth-child(2) .education:nth-child(3) .edu-list .item:nth-child(4) p').lastChild.data = data[lang].skills.educationAndSkills.awards.ul.item4.p;
  document.querySelector('.skills .skills-description:nth-child(3) h3').textContent = data[lang].skills.description2.h3;
  document.querySelector('.skills .skills-info:nth-child(4) .experience-card:nth-child(1) .upper h3').textContent = data[lang].skills.workAndExperience.card1.upper.h3;
  document.querySelector('.skills .skills-info:nth-child(4) .experience-card:nth-child(1) .upper h5').textContent = data[lang].skills.workAndExperience.card1.upper.h5;
  document.querySelector('.skills .skills-info:nth-child(4) .experience-card:nth-child(1) .upper span').textContent = data[lang].skills.workAndExperience.card1.upper.span;
  document.querySelector('.skills .skills-info:nth-child(4) .experience-card:nth-child(1) h4 label').textContent = data[lang].skills.workAndExperience.card1.h4;
  document.querySelector('.skills .skills-info:nth-child(4) .experience-card:nth-child(1) p').textContent = data[lang].skills.workAndExperience.card1.p;
  document.querySelector('.skills .skills-info:nth-child(4) .experience-card:nth-child(2) .upper h3').textContent = data[lang].skills.workAndExperience.card2.upper.h3;
  document.querySelector('.skills .skills-info:nth-child(4) .experience-card:nth-child(2) .upper h5').textContent = data[lang].skills.workAndExperience.card2.upper.h5;
  document.querySelector('.skills .skills-info:nth-child(4) .experience-card:nth-child(2) .upper span').textContent = data[lang].skills.workAndExperience.card2.upper.span;
  document.querySelector('.skills .skills-info:nth-child(4) .experience-card:nth-child(2) h4 label').textContent = data[lang].skills.workAndExperience.card2.h4;
  document.querySelector('.skills .skills-info:nth-child(4) .experience-card:nth-child(2) p').textContent = data[lang].skills.workAndExperience.card2.p;

  // Services
  document.querySelector('.services h1').textContent = data[lang].services.h1;
  document.querySelector('.services h2').textContent = data[lang].services.h2;
  document.querySelector('.services .services-description h3').textContent = data[lang].services.description.h3;
  // Service #1
  document.querySelector('.services .service-list .service-container:nth-child(1) .service-card h3').textContent = data[lang].services.list.container1.card.h3;
  document.querySelector('.services .service-list .service-container:nth-child(1) .service-card .learn-more-btn').firstChild.data = data[lang].services.list.learnMoreBtn;
  document.querySelector('.services .service-list .service-container:nth-child(1) .service-modal h3').textContent = data[lang].services.list.container1.modal.h3;
  document.querySelector('.services .service-list .service-container:nth-child(1) .service-modal h4:nth-child(3)').textContent = data[lang].services.list.container1.modal.h41;
  document.querySelector('.services .service-list .service-container:nth-child(1) .service-modal p').textContent = data[lang].services.list.container1.modal.p;
  document.querySelector('.services .service-list .service-container:nth-child(1) .service-modal h4:nth-child(5)').textContent = data[lang].services.list.container1.modal.h42;
  document.querySelector('.services .service-list .service-container:nth-child(1) .service-modal ul li:nth-child(1)').lastChild.data = data[lang].services.list.container1.modal.ul.li1;
  document.querySelector('.services .service-list .service-container:nth-child(1) .service-modal ul li:nth-child(2)').lastChild.data = data[lang].services.list.container1.modal.ul.li2;
  document.querySelector('.services .service-list .service-container:nth-child(1) .service-modal ul li:nth-child(3)').lastChild.data = data[lang].services.list.container1.modal.ul.li3;
  // Service #2
  document.querySelector('.services .service-list .service-container:nth-child(2) .service-card h3').textContent = data[lang].services.list.container2.card.h3;
  document.querySelector('.services .service-list .service-container:nth-child(2) .service-card .learn-more-btn').firstChild.data = data[lang].services.list.learnMoreBtn;
  document.querySelector('.services .service-list .service-container:nth-child(2) .service-modal h3').textContent = data[lang].services.list.container2.modal.h3;
  document.querySelector('.services .service-list .service-container:nth-child(2) .service-modal h4:nth-child(3)').textContent = data[lang].services.list.container2.modal.h41;
  document.querySelector('.services .service-list .service-container:nth-child(2) .service-modal p').textContent = data[lang].services.list.container2.modal.p;
  document.querySelector('.services .service-list .service-container:nth-child(2) .service-modal h4:nth-child(5)').textContent = data[lang].services.list.container2.modal.h42;
  document.querySelector('.services .service-list .service-container:nth-child(2) .service-modal ul li:nth-child(1)').lastChild.data = data[lang].services.list.container2.modal.ul.li1;
  document.querySelector('.services .service-list .service-container:nth-child(2) .service-modal ul li:nth-child(2)').lastChild.data = data[lang].services.list.container2.modal.ul.li2;
  document.querySelector('.services .service-list .service-container:nth-child(2) .service-modal ul li:nth-child(3)').lastChild.data = data[lang].services.list.container2.modal.ul.li3;
  document.querySelector('.services .service-list .service-container:nth-child(2) .service-modal ul li:nth-child(4)').lastChild.data = data[lang].services.list.container2.modal.ul.li4;
  // Service #3
  document.querySelector('.services .service-list .service-container:nth-child(3) .service-card h3').textContent = data[lang].services.list.container3.card.h3;
  document.querySelector('.services .service-list .service-container:nth-child(3) .service-card .learn-more-btn').firstChild.data = data[lang].services.list.learnMoreBtn;
  document.querySelector('.services .service-list .service-container:nth-child(3) .service-modal h3').textContent = data[lang].services.list.container3.modal.h3;
  document.querySelector('.services .service-list .service-container:nth-child(3) .service-modal h4:nth-child(3)').textContent = data[lang].services.list.container3.modal.h41;
  document.querySelector('.services .service-list .service-container:nth-child(3) .service-modal p').textContent = data[lang].services.list.container3.modal.p;
  document.querySelector('.services .service-list .service-container:nth-child(3) .service-modal h4:nth-child(5)').textContent = data[lang].services.list.container3.modal.h42;
  document.querySelector('.services .service-list .service-container:nth-child(3) .service-modal ul li:nth-child(1)').lastChild.data = data[lang].services.list.container3.modal.ul.li1;
  document.querySelector('.services .service-list .service-container:nth-child(3) .service-modal ul li:nth-child(2)').lastChild.data = data[lang].services.list.container3.modal.ul.li2;
  document.querySelector('.services .service-list .service-container:nth-child(3) .service-modal ul li:nth-child(3)').lastChild.data = data[lang].services.list.container3.modal.ul.li3;

  // Portfolio
  document.querySelector('.portfolio h1').textContent = data[lang].portfolio.h1;
  document.querySelector('.portfolio h2').textContent = data[lang].portfolio.h2;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(1) .img-card .info h3').textContent = data[lang].portfolio.list.cardContainer1.card.h3;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(1) .img-card .info span').textContent = data[lang].portfolio.list.cardContainer1.card.span;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(1) .portfolio-modal h3').textContent = data[lang].portfolio.list.cardContainer1.modal.h3;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(1) .portfolio-modal p').textContent = data[lang].portfolio.list.cardContainer1.modal.p;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(1) .portfolio-modal a').textContent = data[lang].portfolio.list.cardContainer1.modal.a;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(2) .img-card .info h3').textContent = data[lang].portfolio.list.cardContainer2.card.h3;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(2) .img-card .info span').textContent = data[lang].portfolio.list.cardContainer2.card.span;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(2) .portfolio-modal h3').textContent = data[lang].portfolio.list.cardContainer2.modal.h3;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(2) .portfolio-modal p').textContent = data[lang].portfolio.list.cardContainer2.modal.p;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(3) .img-card .info h3').textContent = data[lang].portfolio.list.cardContainer3.card.h3;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(3) .img-card .info span').textContent = data[lang].portfolio.list.cardContainer3.card.span;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(3) .portfolio-modal h3').textContent = data[lang].portfolio.list.cardContainer3.modal.h3;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(3) .portfolio-modal p').textContent = data[lang].portfolio.list.cardContainer3.modal.p;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(4) .img-card .info h3').textContent = data[lang].portfolio.list.cardContainer4.card.h3;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(4) .img-card .info span').textContent = data[lang].portfolio.list.cardContainer4.card.span;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(4) .portfolio-modal h3').textContent = data[lang].portfolio.list.cardContainer4.modal.h3;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(4) .portfolio-modal p').textContent = data[lang].portfolio.list.cardContainer4.modal.p;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(5) .img-card .info h3').textContent = data[lang].portfolio.list.cardContainer5.card.h3;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(5) .img-card .info span').textContent = data[lang].portfolio.list.cardContainer5.card.span;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(5) .portfolio-modal h3').textContent = data[lang].portfolio.list.cardContainer5.modal.h3;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(5) .portfolio-modal p').textContent = data[lang].portfolio.list.cardContainer5.modal.p;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(6) .img-card .info h3').textContent = data[lang].portfolio.list.cardContainer6.card.h3;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(6) .img-card .info span').textContent = data[lang].portfolio.list.cardContainer6.card.span;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(6) .portfolio-modal h3').textContent = data[lang].portfolio.list.cardContainer6.modal.h3;
  document.querySelector('.portfolio .portfolio-list .img-card-container:nth-child(6) .portfolio-modal p').textContent = data[lang].portfolio.list.cardContainer6.modal.p;

  // Get In Touch
  document.querySelector('.get-in-touch .title h4').textContent = data[lang].getInTouch.title.h4;
  document.querySelector('.get-in-touch .title h3').textContent = data[lang].getInTouch.title.h3;
  document.querySelector('.get-in-touch .title h2').textContent = data[lang].getInTouch.title.h2;
  document.querySelector('.get-in-touch .contact-btn a').firstChild.data = data[lang].getInTouch.btn;

  // Our Clients
  document.querySelector('.our-client h1').textContent = data[lang].ourClients.h1;
  document.querySelector('.our-client h2').textContent = data[lang].ourClients.h2;
  document.querySelector('.our-client .swiper-wrapper .swiper-slide:nth-child(1) p').textContent = data[lang].ourClients.swiperWrapper.swiperSlide1.p;
  document.querySelector('.our-client .swiper-wrapper .swiper-slide:nth-child(1) h3').textContent = data[lang].ourClients.swiperWrapper.swiperSlide1.h3;
  document.querySelector('.our-client .swiper-wrapper .swiper-slide:nth-child(1) span').textContent = data[lang].ourClients.swiperWrapper.swiperSlide1.span;
  document.querySelector('.our-client .swiper-wrapper .swiper-slide:nth-child(2) p').textContent = data[lang].ourClients.swiperWrapper.swiperSlide2.p;
  document.querySelector('.our-client .swiper-wrapper .swiper-slide:nth-child(2) h3').textContent = data[lang].ourClients.swiperWrapper.swiperSlide2.h3;
  document.querySelector('.our-client .swiper-wrapper .swiper-slide:nth-child(2) span').textContent = data[lang].ourClients.swiperWrapper.swiperSlide2.span;
  document.querySelector('.our-client .swiper-wrapper .swiper-slide:nth-child(3) p').textContent = data[lang].ourClients.swiperWrapper.swiperSlide3.p;
  document.querySelector('.our-client .swiper-wrapper .swiper-slide:nth-child(3) h3').textContent = data[lang].ourClients.swiperWrapper.swiperSlide3.h3;
  document.querySelector('.our-client .swiper-wrapper .swiper-slide:nth-child(3) span').textContent = data[lang].ourClients.swiperWrapper.swiperSlide3.span;

  // Contact
  document.querySelector('.contact h1').textContent = data[lang].contactMe.h1;
  document.querySelector('.contact h2').textContent = data[lang].contactMe.h2;
  document.querySelector('.contact .contact-left h2').textContent = data[lang].contactMe.left.h2;
  document.querySelector('.contact .contact-left .contact-list li:nth-child(1) h3').lastChild.data = data[lang].contactMe.left.list.phone.h3;
  document.querySelector('.contact .contact-left .contact-list li:nth-child(2) h3').lastChild.data = data[lang].contactMe.left.list.email.h3;
  document.querySelector('.contact .contact-left .contact-list li:nth-child(3) h3').lastChild.data = data[lang].contactMe.left.list.address.h3;
  document.querySelector('.contact .contact-right p').firstChild.data = data[lang].contactMe.right.p;
  document.querySelector('.contact .contact-right p span').textContent = data[lang].contactMe.right.span;
  document.querySelector('.contact .contact-right form .first-row input').setAttribute('placeholder', data[lang].contactMe.right.form.name);
  document.querySelector('.contact .contact-right form .second-row input:nth-child(1)').setAttribute('placeholder', data[lang].contactMe.right.form.email);
  document.querySelector('.contact .contact-right form .second-row input:nth-child(2)').setAttribute('placeholder', data[lang].contactMe.right.form.subject);
  document.querySelector('.contact .contact-right form .third-row textarea').setAttribute('placeholder', data[lang].contactMe.right.form.message);
  document.querySelector('.contact .contact-right form .btn').firstChild.data = data[lang].contactMe.right.form.btn;

  // Footer
  document.querySelector('footer .footer-container .about p').textContent = data[lang].footer.container.about.p;
  document.querySelector('footer .footer-container .about a').textContent = data[lang].footer.container.about.a;
  document.querySelector('footer .footer-container .info h3').textContent = data[lang].footer.container.info.h3;
  document.querySelector('footer .footer-container .info ul li:nth-child(1) a').textContent = data[lang].footer.container.info.ul.skills;
  document.querySelector('footer .footer-container .info ul li:nth-child(2) a').textContent = data[lang].footer.container.info.ul.services;
  document.querySelector('footer .footer-container .info ul li:nth-child(3) a').textContent = data[lang].footer.container.info.ul.portfolio;
  document.querySelector('footer .footer-container .info ul li:nth-child(4) a').textContent = data[lang].footer.container.info.ul.contact;
  document.querySelector('footer .footer-container .follow h3').textContent = data[lang].footer.container.follow.h3;
  document.querySelector('footer .footer-copyright p').textContent = data[lang].footer.copyright.p;
};

languages.forEach((language) => {
  language.addEventListener('click', () => {
    const lang = language.getAttribute('lang');
    localStorage.setItem('language', lang);

    document.querySelector('.hidden-lang').classList.remove('hidden-lang');
    language.classList.add('hidden-lang');

    renderContent(lang);
  });
});

renderContent(savedLanguage);
