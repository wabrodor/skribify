// normal js

const cookie = document.querySelector(".cookie-container")
const cookieBtn = document.querySelector(".btn-cookie")
const alert = document.querySelector(".alert")
const alertBtn = document.querySelector(".alert-content").children[1];


const HtmlPurifier = (htmlInput)=>{
return DOMPurify.sanitize( htmlInput, {USE_PROFILES: {html: true}} )
}

cookieBtn.addEventListener("click", ()=>{
  localStorage.setItem("cookieEnabled", "true")
  cookie.classList.add("disable-cookie")
})

setTimeout(() => {
  if(!localStorage.getItem("cookieEnabled")){
    cookie.classList.remove("disable-cookie")
  }
}, 2000);


alertBtn.addEventListener("click", (e)=>{
  alert.classList.add("dismiss")
  
})

function reset(height,...all){
  formSection.classList.remove("hide-form")
  resultSection.classList.remove("display-result") 
  height.value = ""
  for(let i = 0; i < all.length; i++){
    all[i].value = ""
  }
}

function closeBtn(){
  const popupMenu = document.querySelector(".overlay-menu");
  const popupMenuIcon = document.querySelector(".menu-icon");
  console.log(popupMenu)
  popupMenu.classList.remove("open")
  popupMenuIcon.classList.remove("active")
}


jQuery(document).ready(function($) {

	'use strict';

        $(function() {
  
          // Vars
          var modBtn  = $('#modBtn'),
              modal   = $('#modal'),
              close   = modal.find('.close-btn img'),
              modContent = modal.find('.modal-content');
          
          // open modal when click on open modal button 
          modBtn.on('click', function() {
            modal.css('display', 'block');
            modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
          });
          
          // close modal when click on close button or somewhere out the modal content 
          $(document).on('click', function(e) {
            var target = $(e.target);
            if(target.is(modal) || target.is(close)) {
              modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                next();
              });
            }
          });
          
        });

        // on click event on all anchors with a class of scrollTo
        $('a.scrollTo').on('click', function(){
          
          // data-scrollTo = section scrolling to name
          var scrollTo = $(this).attr('data-scrollTo');
          
          
          // toggle active class on and off. added 1/24/17
          $( "a.scrollTo" ).each(function() {
            if(scrollTo == $(this).attr('data-scrollTo')){
              $(this).addClass('active');
            }else{
              $(this).removeClass('active');
            }
          });
          
          
          // animate and scroll to the sectin 
          $('body, html').animate({
            
            // the magic - scroll to section
            "scrollTop": $('#'+scrollTo).offset().top
          }, 1000 );
          return false;
          
        })
 

        $(".menu-icon").click(function() {
          $(this).toggleClass("active");
          $(".overlay-menu").toggleClass("open");
        });

});
