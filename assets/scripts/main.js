// CHANGE BACKGROUND HEADER
function scrollHeader() {
     const header = document.getElementById('header');
          if(this.scrollY >= 50){
            header.classList.add('scroll-header');
          }
          else {
            header.classList.remove('scroll-header');
          }
          
}

window.addEventListener('scroll', scrollHeader);

// SWIPER POPULAR
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centerSlide: true,
    slidesPerView: "auto",
    loop: true, 

    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }});


    // VALUE ACCORDION
const accordionItems = document.querySelectorAll('.value__accordion-item');

  accordionItems.forEach((item) => {
     const accordionHeader = item.querySelector('.value__accordion-header');
 

     accordionHeader.addEventListener('click',()=> {
      const openItem = document.querySelector('.accordion-open');

      toggleItem(item);

      if(openItem && openItem!== item){
        toggleItem(openItem);
      }
     });
  });

  const toggleItem = (item)=> {
    const accordionContent = item.querySelector('.value__accordion-content');
    //  console.log(1);
    if(item.classList.contains('accordion-open')) {
       accordionContent.removeAttribute('style');
       item.classList.remove('accordion-open');
    }
    else {
      accordionContent.style.height = accordionContent.scrollHeight + 'px';

      item.classList.add('accordion-open');
    }
 
  }


  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
      }

      else {
        document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
      }

    });

  }

  window.addEventListener('scroll', scrollActive);