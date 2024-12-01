function setActiveNavLink(activeElement) {
    // Remove "active" class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => link.classList.remove('active'));

    // Add "active" class to the clicked link
    activeElement.classList.add('active');
  }