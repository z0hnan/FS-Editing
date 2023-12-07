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
       console.log(window.scrollY);
        document.body.style.background = "linear-gradient(rgba(0, 0, 0, " + window.scrollY/1080 + "), rgba(0, 0, 0, " + window.scrollY/1080 + ")), url(/images/FSLogo1440p.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        }
        else {
        document.body.style.background = "linear-gradient(rgba(0, 0, 0, " + 0 + "), rgba(0, 0, 0, " + 0 + ")), url(/images/FSLogo1440p.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";

        }
      }

  });