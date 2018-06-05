
var slideshow = document.getElementById("slideshow");
var active_slide = 0;
var buttons = [].slice.call(slideshow.querySelectorAll(".slide-button"));
buttons.forEach(
    button=> button.addEventListener("click",
    event=>{
        active_slide = buttons.indexOf(event.target);
        mostrar_slide(event.target);
    }));
function mostrar_slide( button ){
    var slides = [].slice.call(slideshow.querySelectorAll(".active"));
    slides.forEach(slide=>{slide.classList.remove("active")});
    activeSlide = slideshow.querySelector(button.dataset["target"]);
    activeSlide.classList.add("active");
    button.classList.add("active");
}

setInterval(function(){
    active_slide++;
    active_slide = ( active_slide==buttons.length)? 0:active_slide;
    mostrar_slide(buttons[active_slide]);
},5000);

// Lista de slides y botones
// var slideshow = document.getElementsByClassName("slideshow")[0];
// var slides = [].slice.call(document.getElementsByClassName("slide"));
// var slide_buttons = [].slice.call(document.getElementsByClassName("slide-button"));
// var slide_active  = 0;
// activa el primer slide para mostrar
// activeSlide(0);
// to active the related slide on click
// slide_buttons.forEach( button=> button.addEventListener("click", clickOnSlideButton ));

// to change slide on scrolling on the slideshow
// document.addEventListener("wheel", scrollSlide);



// function activeSlide(index){
//     if(index>= slides.length){
//         index = 0
//     }
//     if(index< 0){
//         index = slides.length-1;
//     }
//     // set enabled slide index
//     slide_active = index;
//     // ensure all slides are not displayed
//     slides.forEach(slide => {
//         slide.classList.remove("active");
//     });
//     slide_buttons.forEach(slide => {
//         slide.classList.remove("active");
//     });
//     // set the slide to active
//     slides[slide_active].classList.add("active");
//     slide_buttons[slide_active].classList.add("active");
// }

// function clickOnSlideButton( event ){
//     // gets the button
//     button = event.target;
//     // gets the related slide using the data-target attribute of the button
//     relatetSlide = document.querySelector(button.dataset["target"]);
//     // gets the index of the slide in de slides array
//     idx = slides.indexOf(relatetSlide);
//     // To active this slide
//     activeSlide(idx);
// }

// var down_scroll_value = 0;
// var up_scroll_value = 0;
// function scrollSlide( event ){
   
//     if(event.deltaY>0){
//         down_scroll_value+=10;
//         if(down_scroll_value>30){
//             activeSlide( slide_active+1 );
//             down_scroll_value = 0;
//         }
        
//     }
//     else{
//         up_scroll_value-=10;
//         if(up_scroll_value<-30){
//             activeSlide( slide_active-1 );
//             up_scroll_value = 0;
//         }
        
//     }

    
// }
