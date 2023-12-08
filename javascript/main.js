document.addEventListener('DOMContentLoaded', function() {
    
    const navbarItems = document.querySelectorAll('.navbar-item');
    function addPadding() {
      const navbarWidth = document.querySelector('.navbar').offsetWidth;
      const navbarItemCount = navbarItems.length;
      const totalPadding = (navbarWidth / navbarItemCount) / 4;
  
      navbarItems.forEach(item => {
        item.style.paddingLeft = totalPadding + 'px';
        item.style.paddingRight = totalPadding + 'px';
      });
    }
    window.addEventListener('resize', addPadding);
    addPadding();

    window.onscroll = function() {
        if (window.scrollY > 0) {
        document.body.style.background = "linear-gradient(rgba(0, 0, 0, " + window.scrollY/1080 + "), rgba(0, 0, 0, " + window.scrollY/1080 + ")), url(/images/FSLogo1440pAdjusted.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        }
        else {
        document.body.style.background = "linear-gradient(rgba(0, 0, 0, " + 0 + "), rgba(0, 0, 0, " + 0 + ")), url(/images/FSLogo1440pAdjusted.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";

        }
      }

      function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY
        };
      }
      const fullscreenElement = document.getElementsByClassName("fullscreen")[0];
      var viewportHeight = window. innerHeight;
      if (fullscreenElement) {
        fullscreenElement.style.height = (viewportHeight-getOffset(fullscreenElement).top) + "px";
      }

  });
  
  $(document).ready(function() {
    function bobArrow() {
      $('.arrowImg').animate({bottom: '+=10px'}, 500)
      $('.arrowImg').animate({bottom: '-=10px'}, 500, bobArrow);
    }
    
    bobArrow();

    $('.arrowImg').click(function() {
      $('.arrowImg').stop();
    });


    $('.grid-img').hover(
      function() {
        $(this).siblings('.grid-text').css('opacity', 1);
        $(this).css("filter", "blur(5px)"); // Separate multiple CSS properties correctly
        $(this).css("-webkit-filter", "blur(5px)");
        $(this).css("transform", "scale(1.1)");        
      },
      function() {
        $(this).siblings('.grid-text').css('opacity', 0);
        $(this).css("filter", "blur(0px)");
        $(this).css("-webkit-filter", "blur(0px)");
        $(this).css("transform", "scale(1)");      
      }
    );
    $('.grid-text').hover(
      function() {
        $(this).css('opacity', 1);
        $(this).siblings('.grid-img').css("filter", "blur(5px)");
        $(this).siblings('.grid-img').css("-webkit-filter", "blur(5px)");
        $(this).siblings('.grid-img').css("transform", "scale(1.1)");        
      },
      function() {
        $(this).css('opacity', 0);
        $(this).siblings('.grid-img').css("filter", "blur(0px)");
        $(this).siblings('.grid-img').css("-webkit-filter", "blur(0px)");
        $(this).siblings('.grid-img').css("transform", "scale(1)");        
      }
    );
  });
