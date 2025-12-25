document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const burger = document.getElementById("burger");
    const mobile = document.getElementById("mobile");
    const yearSpan = document.getElementById("year");
    const form = document.getElementById("contactForm");
    const hint = document.getElementById("formHint");
    const reveals = document.querySelectorAll('.reveal');

    // Update Year
    if (yearSpan) {
        yearSpan.textContent = String(new Date().getFullYear());
    }

    // Mobile Menu
    const toggleMobile = (open) => {
        const isExpanded = open !== undefined ? open : burger.getAttribute("aria-expanded") === "false";
        burger.setAttribute("aria-expanded", String(isExpanded));
        mobile.classList.toggle('active', isExpanded);

        // Toggle icon state
        const spans = burger.querySelectorAll('span');
        if (isExpanded) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    };

    burger?.addEventListener("click", () => toggleMobile());

    // Close mobile menu on link click
    mobile?.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => toggleMobile(false));
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href === "#") return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Reveal Animations on Scroll
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));

    // Form Handling
    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        hint.textContent = "Sto elaborando...";
        hint.style.color = "var(--accent)";

        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        if (!name || !email || !message) {
            hint.textContent = "Tutti i campi sono obbligatori.";
            hint.style.color = "#ff4d4d";
            return;
        }

        // Mailto fallback
        const subject = encodeURIComponent(`Richiesta Consulenza - ${name}`);
        const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`);

        setTimeout(() => {
            window.location.href = `mailto:info@mcontract.it?subject=${subject}&body=${body}`;
            hint.textContent = "Apertura client email in corso...";
            form.reset();
        }, 1000);
    });

    // Perspective Effect on Hero Visual
    const heroVisual = document.querySelector('.hero__visual');
    if (heroVisual) {
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const moveX = (clientX - innerWidth / 2) / 50;
            const moveY = (clientY - innerHeight / 2) / 50;

            heroVisual.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
        });
    }
});
