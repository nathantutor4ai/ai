// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile navigation toggle (to be implemented if needed)
    const createMobileNav = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        
        // Only create mobile nav if it doesn't exist yet
        if (!document.querySelector('.mobile-nav-toggle')) {
            const mobileNavToggle = document.createElement('button');
            mobileNavToggle.classList.add('mobile-nav-toggle');
            mobileNavToggle.innerHTML = '☰';
            mobileNavToggle.setAttribute('aria-label', 'Toggle navigation menu');
            
            mobileNavToggle.addEventListener('click', () => {
                nav.classList.toggle('active');
                mobileNavToggle.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
            });
            
            header.insertBefore(mobileNavToggle, nav);
        }
    };
    
    // Call mobile nav creation function if viewport width is below 768px
    const handleResize = () => {
        if (window.innerWidth < 768) {
            createMobileNav();
        }
    };
    
    // Initial check on page load
    handleResize();
    
    // Check again if window is resized
    window.addEventListener('resize', handleResize);
});
