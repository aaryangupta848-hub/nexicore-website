document.addEventListener('DOMContentLoaded', function () {

    /* =========================
       MOBILE MENU TOGGLE
    ========================= */
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    /* =========================
       STICKY HEADER SHADOW
    ========================= */
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        }
    });

    /* =========================
       SMOOTH SCROLL
    ========================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });

                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    /* =========================
       FADE-IN ANIMATION ON SCROLL
    ========================= */
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(
        '.card, .feature-item, .section-title'
    );

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    /* =========================
       HERO BACKGROUND SLIDER
    ========================= */
    const heroSection = document.querySelector('.hero');

    if (heroSection) {
        const heroImages = [
            'assets/images/slide1.jpg',
            'assets/images/slide2.jpg',
            'assets/images/slide3.jpg'
        ];

        // Create slider container
        const sliderContainer = document.createElement('div');
        sliderContainer.classList.add('hero-slider');
        
        // Create slides
        heroImages.forEach((imgSrc, index) => {
            const slide = document.createElement('div');
            slide.classList.add('hero-slide');
            slide.style.backgroundImage = `url('${imgSrc}')`;
            if (index === 0) slide.classList.add('active');
            sliderContainer.appendChild(slide);
        });

        // Insert slider into hero section
        heroSection.prepend(sliderContainer);

        const slides = sliderContainer.querySelectorAll('.hero-slide');
        let currentIndex = 0;

        function nextSlide() {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }

        // Change image every 3 seconds
        setInterval(nextSlide, 3000);
    }

    /* =========================
       INNER PAGE RANDOM HEADER
    ========================= */
    const pageHeader = document.querySelector('.page-header');

    if (pageHeader) {
        const headerImages = [
            'assets/images/slide1.jpg',
            'assets/images/slide2.jpg',
            'assets/images/slide3.jpg'
        ];

        // Randomly select an image
        const randomImage = headerImages[Math.floor(Math.random() * headerImages.length)];
        
        // Apply as background image
        pageHeader.style.backgroundImage = `url('${randomImage}')`;
    }

});
