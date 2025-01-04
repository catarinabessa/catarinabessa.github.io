function enforceHorizontalLayout() {
    const container = document.getElementById('landscape');

    // Check if the device is in portrait mode
    if (window.innerHeight > window.innerWidth) {
      container.classList.add('portrait-mode'); // Rotate to simulate landscape
    } else {
      container.classList.remove('portrait-mode'); // Normal landscape mode
    }
  }

  // Run on page load
  enforceHorizontalLayout();

  // Run on resize (e.g., when orientation changes)
  window.addEventListener('resize', enforceHorizontalLayout);