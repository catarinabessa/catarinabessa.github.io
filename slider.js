document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider');  
    
    sliders.forEach(slider => {
      const slideTrack = slider.querySelector('.slide-track');
      const slides = slider.querySelectorAll('.slide');
      const totalSlides = slides.length;
      
      // clone the slides 
      function cloneSlides() {
        for (let i = 0; i < totalSlides; i++) {
          const clone = slides[i].cloneNode(true);
          slideTrack.appendChild(clone);
        }
      }
    
      cloneSlides();  
      
      let slideWidth = slides[0].offsetWidth;
      let totalWidth = slideWidth * totalSlides;
    
      let currentTranslateX = 0;
    
      
      function moveCarousel() {
        currentTranslateX -= slideWidth;
        slideTrack.style.transform = `translateX(${currentTranslateX}px)`;
        
        
        if (Math.abs(currentTranslateX) >= totalWidth) {
          resetTrackPosition();
        }
      }
    
      
      function resetTrackPosition() {
        currentTranslateX = 0;
        slideTrack.style.transition = 'none';  
        slideTrack.style.transform = `translateX(0)`;
    

        cloneSlides();
        
        
        setTimeout(() => {
          slideTrack.style.transition = 'transform 30s linear';  
        }, 50);
      }
    

      function keepCloning() {
        if (Math.abs(currentTranslateX) >= totalWidth) {
          cloneSlides();  
        }
      }
    
      setInterval(() => {
        moveCarousel();
        keepCloning();  
      }, 100);  
    });
  });