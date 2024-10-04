// IIFE to encapsulate the code
(function() {
    // Navigation Menu Toggle
    function initNavToggle() {
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    }

    // Smooth Scrolling for Anchors
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Form Validation
    function initFormValidation() {
        const form = document.querySelector('#contact form');
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                let valid = true;

                form.querySelectorAll('input[required], textarea[required]').forEach(input => {
                    if (!input.value) {
                        valid = false;
                        input.style.borderColor = 'red';
                    } else {
                        input.style.borderColor = '';
                    }
                });

                if (valid) {
                    alert('Form submitted successfully!');
                    form.reset();
                } else {
                    alert('Please fill in all required fields.');
                }
            });
        }
    }

    // Image Carousel (Slider)
    function initImageCarousel() {
        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');

        function showSlides(n) {
            if (n >= slides.length) slideIndex = 0;
            if (n < 0) slideIndex = slides.length - 1;
            slides.forEach(slide => slide.style.display = 'none');
            slides[slideIndex].style.display = 'block';
        }

        document.querySelector('.next')?.addEventListener('click', () => {
            slideIndex++;
            showSlides(slideIndex);
        });

        document.querySelector('.prev')?.addEventListener('click', () => {
            slideIndex--;
            showSlides(slideIndex);
        });

        showSlides(slideIndex);
    }

    // Countdown Timer
    function initCountdownTimer() {
        const countdownDate = new Date("2024-12-31T00:00:00").getTime();
        const countdownElement = document.getElementById("countdown");

        const countdown = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                clearInterval(countdown);
                countdownElement.innerHTML = "EXPIRED";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    }

    // Dynamic Content Loading for Services
    function loadServices() {
        const services = [
            { title: "Web Development", description: "Creating stunning websites." },
            { title: "Graphic Design", description: "Designing captivating graphics." },
            { title: "SEO Services", description: "Improving your website's visibility." }
        ];

        const servicesList = document.getElementById('services-list');
        if (servicesList) {
            services.forEach(service => {
                const serviceItem = document.createElement('div');
                serviceItem.className = 'service-item'; // Add class for styling
                serviceItem.innerHTML = `<h3>${service.title}</h3><p>${service.description}</p>`;
                servicesList.appendChild(serviceItem);
            });
        }
    }

    // Initialize all functions
    function init() {
        initNavToggle();
        initSmoothScrolling();
        initFormValidation();
        initImageCarousel();
        initCountdownTimer();
        loadServices();
    }

    // Run the initialization function on page load
    document.addEventListener('DOMContentLoaded', init);
})();
