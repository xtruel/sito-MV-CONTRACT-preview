import './styles.css';

const translations = {
    it: {
        brand_sub: "Ship & Building • Turnkey Solutions",
        nav_about: "Chi siamo",
        nav_services: "Servizi",
        nav_portfolio: "Portfolio",
        nav_process: "Processo",
        nav_sectors: "Settori",
        nav_contact: "Contatti",
        hero_kicker: "Oltre 20 anni di esperienza",
        hero_title: 'Arredamento <span class="accent">Navale</span> e Contract<br /><span class="muted">soluzioni chiavi in mano</span>',
        hero_lead: "Gestiamo e coordiniamo l'intera filiera — dalla preventivazione e budgeting, agli acquisti, disegno tecnico, cantiere e consegna finale — con costi contenuti e tempi ristretti.",
        hero_cta_primary: "Inizia il tuo progetto",
        hero_cta_secondary: "Scopri i servizi",
        badge_pm: "Project management",
        badge_outsourcing: "Outsourcing filiera",
        badge_supervision: "Supervisione tecnica",
        panel_focus: "Focus",
        panel_title: "Chiavi in mano",
        panel_text: "Ship & Building: Riduciamo la complessità operativa per risultati solidi e consegne puntuali.",
        about_title: "Chi siamo",
        about_intro: "Siamo un partner operativo e tecnico per il settore arredamento navale e contract, con una specializzazione concreta: <strong>gestione completa \"chiavi in mano\"</strong>.",
        about_card1_title: "Visione pratica, controllo reale",
        about_card1_text: "Grazie all'esperienza acquisita negli anni, gestiamo e monitoriamo commesse e progetti riducendo tempi e costi.",
        about_card2_title: "Un team che si integra",
        about_card2_text: "Mettiamo a disposizione figure esperte per supporto e formazione, affiancando il vostro personale.",
        carpentry_title: "Eccellenza in Falegnameria",
        carpentry_lead: "Costruiamo interni di lusso con arredi su misura e non solo, partendo dalle vostre idee.",
        carpentry_text: "Disponiamo di un'ampia falegnameria con annessa sala verniciatura interna per ridurre i tempi di attesa e garantire un controllo qualitativo totale su ogni finitura.",
        badge_custom: "Arredi su misura",
        badge_painting: "Sala verniciatura interna",
        badge_luxury: "Luxury Finish",
        services_title: "I nostri servizi",
        services_subtitle: "Gestione di ogni fase del processo per un risultato a 360°.",
        service1_title: "Gestione & consulenza 360°",
        service1_text: "Dalla preventivazione a OVS, budgeting, acquisti, disegno tecnico, gestione cantiere, fino alla consegna finale.",
        service2_title: "Mantenimento & Refitting",
        service2_text: "Forniture e assistenza per il mantenimento delle flotte durante la normale operatività.",
        service3_title: "Supporto e formazione",
        service3_text: "Team di esperti per supportare e formare il vostro personale.",
        service4_title: "Supervisione tecnica & outsourcing",
        service4_text: "Supervisione delle mansioni e servizi in outsourcing dell'intera filiera.",
        portfolio_title: "Portfolio",
        portfolio_subtitle: "Collaborazioni con i leader del settore crocieristico e navale.",
        portfolio_others: "...e altre realtà del mondo Cruise",
        process_title: "Come lavoriamo",
        process_subtitle: "Un flusso chiaro, controllato e misurabile, per consegne puntuali.",
        step1_title: "Analisi & preventivazione",
        step1_text: "Raccolta requisiti, stime, OVS, budgeting e definizione piano operativo.",
        step2_title: "Acquisti & disegno tecnico",
        step2_text: "Supply, componenti, disegni e dettaglio tecnico per produzione e cantiere.",
        step3_title: "Gestione cantiere",
        step3_text: "Coordinamento squadre, supervisione tecnica, riconcilio tempi e costi.",
        step4_title: "Consegna & supporto in garanzia",
        step4_text: "Verifiche, qualità, documentazione e consegna finale nei tempi concordati.",
        sectors_title: "Settori",
        sectors_subtitle: "Esperienza trasversale con focus su ambienti complessi e tempi ristretti.",
        sector1_title: "Navale",
        sector1_text: "Allestimenti, refit, gestione cantiere e coordinamento forniture.",
        sector2_title: "Yacht",
        sector2_text: "Finiture, installazioni, controllo qualità e consegna puntuale.",
        sector3_title: "Retail",
        sector3_text: "Allestimenti e commesse multi-sito, rapidità e standard coerenti.",
        cta_strip_title: "Obiettivo: ridurre complessità e costi",
        cta_strip_text: "Gestione e monitoraggio delle commesse con metodo, supporto operativo e soluzioni scalabili.",
        cta_strip_btn: "Parliamone",
        contact_title: "Contatti",
        contact_subtitle: "Scrivici per una prima call: ti rispondiamo con una proposta chiara e operativa.",
        contact_form_title: "Inizia il tuo progetto",
        contact_form_subtitle: "Inserisci i tuoi riferimenti e una breve descrizione.",
        label_name: "Nome e Cognome",
        label_email: "Email",
        label_phone: "Telefono",
        label_message: "Messaggio",
        btn_send: "Invia richiesta",
        info_title: "Approfondisci",
        office_legal: "Sede Legale",
        office_contacts: "Contatti",
        office_email: "Email Certificata",
        footer_text: "Ship & Building — Arredamento Navale • Retail • Yacht",
        footer_rights: "Tutti i diritti riservati"
    },
    en: {
        brand_sub: "Ship & Building • Turnkey Solutions",
        nav_about: "About us",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_process: "Process",
        nav_sectors: "Sectors",
        nav_contact: "Contact us",
        hero_kicker: "Over 20 years of experience",
        hero_title: 'Naval <span class="accent">Outfitting</span> and Contract<br /><span class="muted">turnkey solutions</span>',
        hero_lead: "We manage and coordinate the entire supply chain — from estimation and budgeting to purchasing, technical design, site management, and final delivery.",
        hero_cta_primary: "Start your project",
        hero_cta_secondary: "Discover services",
        badge_pm: "Project management",
        badge_outsourcing: "Outsourcing chain",
        badge_supervision: "Technical supervision",
        panel_focus: "Focus",
        panel_title: "Turnkey",
        panel_text: "Ship & Building: We reduce operational complexity for solid results and timely deliveries.",
        about_title: "About us",
        about_intro: "We are an operational and technical partner for the naval outfitting and contract sector, with a concrete specialization: <strong>complete \"turnkey\" management</strong>.",
        about_card1_title: "Practical vision, real control",
        about_card1_text: "Thanks to the experience gained over the years, we manage and monitor orders and projects reducing time and costs.",
        about_card2_title: "A team that integrates",
        about_card2_text: "We provide expert figures for support and training, working alongside your staff.",
        carpentry_title: "Excellence in Carpentry",
        carpentry_lead: "We produce custom furniture, with particular attention to detail and quality.",
        carpentry_text: "We have our own carpentry workshop with internal painting room to reduce waiting times and ensure total quality control.",
        badge_custom: "Custom furniture",
        badge_painting: "Internal painting room",
        badge_luxury: "Luxury Finish",
        services_title: "Our services",
        services_subtitle: "Management of every phase of the process for a 360° result.",
        service1_title: "360° Management & Consulting",
        service1_text: "From estimation to OVS, budgeting, purchasing, technical design, site management, up to final delivery.",
        service2_title: "Maintenance & Refitting",
        service2_text: "Supplies and assistance for fleet maintenance during normal operation.",
        service3_title: "Support and Training",
        service3_text: "Team of experts to support and train your staff.",
        service4_title: "Technical Supervision & Outsourcing",
        service4_text: "Supervision of tasks and outsourcing services of the entire chain.",
        portfolio_title: "Portfolio",
        portfolio_subtitle: "Collaborations with leaders in the cruise and naval sector.",
        portfolio_others: "...and other entities in the Cruise world",
        process_title: "How we work",
        process_subtitle: "A clear, controlled, and measurable flow for timely deliveries.",
        step1_title: "Analysis & Estimation",
        step1_text: "Requirements gathering, estimates, OVS, budgeting, and definition of the operational plan.",
        step2_title: "Purchasing & Technical Design",
        step2_text: "Supply of every single element, drawings for production and technical detail.",
        step3_title: "Site Management",
        step3_text: "Team coordination, technical supervision, reconciliation of time and costs.",
        step4_title: "Delivery & Warranty Support",
        step4_text: "Final delivery within the agreed times, with support during the warranty period.",
        sectors_title: "Sectors",
        sectors_subtitle: "Transversal experience with a focus on complex environments and tight deadlines.",
        sector1_title: "Naval",
        sector1_text: "Outfitting, refit, site management, production and supply coordination.",
        sector2_title: "Yacht",
        sector2_text: "Custom-made supplies, installations, quality control and timely delivery.",
        sector3_title: "Retail",
        sector3_text: "Multi-site outfitting and orders with custom furniture, speed and high standards.",
        cta_strip_title: "Goal: reduce complexity and costs",
        cta_strip_text: "Management and monitoring of orders with method, operational support, and scalable solutions.",
        cta_strip_btn: "Let's talk",
        contact_title: "Contact us",
        contact_subtitle: "Write to us for a first call: we'll respond with a clear and operational proposal.",
        contact_form_title: "Start your project",
        contact_form_subtitle: "Enter your details and a short description.",
        label_name: "Full Name",
        label_email: "Email",
        label_phone: "Phone",
        label_message: "Message",
        btn_send: "Send request",
        info_title: "Learn more",
        office_legal: "Legal Office",
        office_contacts: "Contacts",
        office_email: "Certified Email",
        footer_text: "Ship & Building — Naval Outfitting • Retail • Yacht",
        footer_rights: "All rights reserved"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById("burger");
    const mobile = document.getElementById("mobile");
    const yearSpan = document.getElementById("year");
    const form = document.getElementById("contactForm");
    const hint = document.getElementById("formHint");
    const header = document.querySelector('.header');

    let currentLang = 'it';

    // Language switch
    const switchLang = (lang) => {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        document.documentElement.lang = lang;
    };

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => switchLang(btn.getAttribute('data-lang')));
    });
    switchLang('it');

    // Year
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Scroll Header
    window.addEventListener('scroll', () => {
        header?.classList.toggle('header--scrolled', window.scrollY > 50);
    });

    // Mobile Menu
    burger?.addEventListener("click", () => {
        const isExpanded = burger.getAttribute("aria-expanded") === "false";
        burger.setAttribute("aria-expanded", String(isExpanded));
        mobile?.classList.toggle('active', isExpanded);
    });
    mobile?.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
            burger?.setAttribute("aria-expanded", "false");
            mobile?.classList.remove('active');
        });
    });

    // Simple Gallery
    function initGallery(galleryId, dotsId) {
        const gallery = document.getElementById(galleryId);
        const dotsContainer = document.getElementById(dotsId);
        if (!gallery) return;

        const images = gallery.querySelectorAll('.gallery__img');
        let current = 0;

        // Create dots
        images.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = 'gallery__dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => goTo(i));
            dotsContainer?.appendChild(dot);
        });

        const dots = dotsContainer?.querySelectorAll('.gallery__dot');

        function goTo(index) {
            images[current].classList.remove('active');
            dots?.[current]?.classList.remove('active');
            current = index;
            images[current].classList.add('active');
            dots?.[current]?.classList.add('active');
        }

        function next() {
            goTo((current + 1) % images.length);
        }

        setInterval(next, 4000);
    }

    initGallery('heroGallery', 'heroDots');
    initGallery('carpentryGallery', 'carpentryDots');

    // Reveal Animations
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    reveals.forEach(el => revealObserver.observe(el));

    // Form
    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");

        if (!name || !email || !message) {
            hint.textContent = currentLang === 'it' ? "Tutti i campi sono obbligatori." : "All fields are required.";
            return;
        }

        const subject = encodeURIComponent(`Richiesta Consulenza - ${name}`);
        const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\nTelefono: ${phone}\n\nMessaggio:\n${message}`);
        window.location.href = `mailto:info@mvcontract.it?subject=${subject}&body=${body}`;
        form.reset();
    });
});
