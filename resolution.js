function enforceLandscape() {
    const container = document.getElementById('landscape');

    // Detect if the device is in portrait mode
    if (window.innerHeight > window.innerWidth) {
      container.classList.add('portrait-override');
    } else {
      container.classList.remove('portrait-override');
    }
  }

  // Check on page load
  enforceLandscape();

  // Check on resize (orientation change)
  window.addEventListener('resize', enforceLandscape);