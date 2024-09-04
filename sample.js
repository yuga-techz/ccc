

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelectorAll('.animate');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.active-section');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        section.forEach(sections => {
            const elementTop = sections.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                sections.classList.add('reveal');
            }
        });
    };
    const setActiveLink = () => {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY + windowHeight / 2;

        let index = sections.length;
        while (--index && scrollPosition < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove('active'));
        if (index >= 0) {
            navLinks[index].classList.add('active');
        }
    };

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);


    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    window.addEventListener('scroll', revealOnScroll);

    revealOnScroll();


});

/*-----------------vanilla---------------------------*/











