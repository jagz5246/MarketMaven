const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");
const btns = document.querySelectorAll(".nav-btn");
const menuBtns = document.querySelectorAll(".menu-btns");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");
const scrollBtn = document.querySelector(".scroll-up");
const downBtn = document.querySelector(".read-more");


window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    console.log(scrollBtn.classList)
    if(value>200){
        scrollBtn.classList.add("active")
    }
    else{
        scrollBtn.classList.remove("active")
    }
})
scrollBtn.addEventListener('click',()=>{
    window.scrollTo(0,0)
})
downBtn.addEventListener('click',()=>{
    window.scrollTo(1000,1000)
})
menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active");
    nav.classList.toggle("active");
})

menuBtns.forEach((menu)=>{
    menu.addEventListener("click",()=>{
        menuBtn.classList.toggle("active");
        nav.classList.toggle("active");
    })
})

var sliderNav = function(id){
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    })
    slides.forEach((slide)=>{
        slide.classList.remove("active");
    })
    contents.forEach((content)=>{
        content.classList.remove("active")
    })

    btns[id].classList.add("active");
    slides[id].classList.add("active");
    contents[id].classList.add("active");
    }

    btns.forEach((btn,id)=>{
        btn.addEventListener("click",()=>{
            sliderNav(id)
        })
        })
    
    

    let slideIndex=0
    setInterval(() => {
        if(slideIndex<slides.length){
        sliderNav(slideIndex);
        slideIndex++
        }
        else{
            slideIndex=0
        }
        
    }, 8000);


    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
            else{
                entry.target.classList.remove('show');
            }
        })
    })
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=>observer.observe(el));
