// logos 

const all = [
    {
        id : 1,
        logo :  "clients/client-1.png",
    },

    {
        id : 2,
        logo :  "clients/client-2.png",
    },

     {
        id : 3,
        logo :  "clients/client-3.png",
    },

     {
        id : 4,
        logo :  "clients/client-4.png",
    },

     {
        id : 5,
        logo :  "clients/client-5.png",
    },

    {
        id : 6,
        logo :  "clients/client-6.png",
    },
];
const img = document.querySelector ("#img");
const img2 = document.querySelector ("#img2");
const img3 = document.querySelector ("#img3");
const img4 = document.querySelector ("#img4");
const img5 = document.querySelector ("#img5");
const img6 = document.querySelector ("#img6");


let currentItem = 0;
let currentItem2 = 1;
let currentItem3 = 2;
let currentItem4 = 3;
let currentItem5 = 4;
let currentItem6 = 5;

window.addEventListener("DOMCOntentLoaded", function() {
    showPerson();
});

function showPerson() {
    const item = all[currentItem];
    const item2 = all[currentItem2];
    const item3 = all[currentItem3];
    const item4 = all[currentItem4];
    const item5 = all[currentItem5];
    const item6 = all[currentItem6];

    img.src = item.logo;
    img2.src = item2.logo;
    img3.src = item3.logo;
    img4.src = item4.logo;
    img5.src = item5.logo;
    img6.src = item6.logo;

}

function nextAction() {
    currentItem++;
    currentItem2++;
    currentItem3++;
    currentItem4++;
    currentItem5++;
    currentItem6++;


    if (currentItem > all.length - 1) {
        currentItem = 0;
    }
    if (currentItem2 > all.length - 2) {
        currentItem2 = 1;

    }
     if (currentItem3 > all.length - 3) {
        currentItem3 = 2;

    }
     if (currentItem4 > all.length - 4) {
        currentItem4 = 3;

    } 
    if (currentItem5 > all.length - 5) {
        currentItem5 = 4;

    } 
    if (currentItem6 > all.length - 6) {
        currentItem6 = 5;
    }
    showPerson();

}



setInterval(() => {
    nextAction()
}, 4000);


// testimonial 

const testimonials = [
    {
        id : 1,
        imageTestimonial :"Assets/testimonials/testimonials-1.jpg",
        names :"Jenna Matt",
        job : "Enterprenurer",
        star :"Assets/star-solid.svg",star :"Assets/star-solid.svg",star :"Assets/star-solid.svg",star :"Assets/star-solid.svg",star :"Assets/star-solid.svg",
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium voluptatem molestias quasi minima quod sint totam ducimus perspiciatis laborum officia!",
    },
    {
        id : 2,
        imageTestimonial :"Assets/testimonials/testimonials-2.jpg",
        names :"John Larson",
        job : "Store Owner",
        star :"Assets/star-solid.svg",star :"Assets/star-solid.svg",star :"Assets/star-solid.svg",star :"Assets/star-solid.svg",star :"Assets/star-solid.svg",
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium voluptatem molestias quasi minima quod sint totam ducimus perspiciatis laborum officia!",
    },
    {
        id : 3,
        imageTestimonial :"Assets/testimonials/testimonials-3.jpg",
        names :"Jenna Matt",
        job : "Designer",
        star :"Assets/star-solid.svg",star :"Assets/star-solid.svg",star :"Assets/star-solid.svg",star :"Assets/star-solid.svg",star :"Assets/star-solid.svg",
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium voluptatem molestias quasi minima quod sint totam ducimus perspiciatis laborum officia!",
    },
];

const testimonialImg  = document.querySelector("#testimonialImg");
const names = document.querySelector("#names");
const job = document.querySelector("#job");
const desc = document.querySelector("#desc");
const star = document.querySelector("#star");

const testimonialImg2  = document.querySelector("#testimonialImg2");
const names2 = document.querySelector("#names2");
const job2 = document.querySelector("#job2");
const star2 = document.querySelector("#star2");


const testimonialImg3  = document.querySelector("#testimonialImg3");
const names3 = document.querySelector("#names3");
const job3 = document.querySelector("#job3");
const star3 = document.querySelector("#star3");




let currentTestimonial = 0;
let currentTestimonial2 = 1;
let currentTestimonial3 = 2;




window.addEventListener("DOMCOntentLoaded", function() {
    showTestimonial();
});

function showTestimonial() {
    const items = testimonials[currentTestimonial];

    const items2 = testimonials[currentTestimonial2];

    const items3 = testimonials[currentTestimonial3];



    testimonialImg.src = items.imageTestimonial;
    names.textContent = items.names;
    job.textContent = items.job;
    desc.textContent = items.desc;
    star.src = items.star;

    testimonialImg2.src = items2.imageTestimonial;
    names2.textContent = items2.names;
    job2.textContent = items2.job;
    desc.textContent = items2.desc;
    star.src = items2.star;

    testimonialImg3.src = items3.imageTestimonial;
    names3.textContent = items3.names;
    job3.textContent = items3.job;
    desc.textContent = items3.desc;
    star.src = items3.star;

}


function nextContent(){
    currentTestimonial++;
    currentTestimonial2++;
    currentTestimonial3++;

   
  
    if (currentTestimonial > testimonials.length - 1)  {
        currentTestimonial = 0;
    }

    if (currentTestimonial2 > testimonials.length - 2) 
     {
        currentTestimonial2 = 0;
    }

    if (currentTestimonial3 > testimonials.length - 1)
      {
        currentTestimonial3 = 0;
    }

    showTestimonial();

  }


  setInterval(() => {
    nextContent()
}, 4000);





// faq 

const faqItem = document.querySelectorAll('.questions');
const faqQuestion = document.querySelector('.faq-question');


faqItem.forEach(function(e) {
    const btn = e.querySelector(".faq-btn");
    btn.addEventListener('click', function() {
        faqItem.forEach(function(item){
            if (item !== e) {
                item.classList.remove("show-text");
            }
        });
        e.classList.toggle ("show-text");
    });

});



