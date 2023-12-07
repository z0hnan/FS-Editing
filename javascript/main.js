document.addEventListener('DOMContentLoaded', function() {
    const navbarItems = document.querySelectorAll('.navbar-item');
  
    function addPadding() {
      const navbarWidth = document.querySelector('.navbar').offsetWidth;
      const navbarItemCount = navbarItems.length;
      const totalPadding = (navbarWidth / navbarItemCount) / 3;
  
      navbarItems.forEach(item => {
        item.style.paddingLeft = totalPadding + 'px';
        item.style.paddingRight = totalPadding + 'px';
      });
    }
  
    window.addEventListener('resize', addPadding);
    addPadding();
  });