import './styles.css';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const translations = {
    it: {
        topbar_text: "Arredamento Navale • Retail • Yacht",
        toplink_text: "Contattaci per una consulenza",
        brand_sub: "Ship & Building • Turnkey Solutions",
        nav_about: "Chi siamo",
        nav_services: "Servizi",
        nav_portfolio: "Portfolio",
        nav_process: "Processo",
        nav_sectors: "Settori",
        nav_contact: "Contatti",
        hero_kicker: "Oltre 20 anni di esperienza",
        hero_title: 'Arredamento <span class="accent">Navale</span> e Contract<br /><span class="muted">soluzioni chiavi in mano</span>',
        hero_lead: "Gestiamo e coordiniamo l’intera filiera — dalla preventivazione e budgeting, agli acquisti, disegno tecnico, cantiere e consegna finale — con costi contenuti e tempi ristretti.",
        hero_cta_primary: "Inizia il tuo progetto",
        hero_cta_secondary: "Scopri i servizi",
        badge_pm: "Project management",
        badge_outsourcing: "Outsourcing filiera",
        badge_supervision: "Supervisione tecnica",
        panel_focus: "Focus",
        panel_title: "Chiavi in mano",
        panel_text: "Ship & Building: Riduciamo la complessità operativa per risultati solidi e consegne puntuali.",
        about_title: "Chi siamo",
        about_intro: "Siamo un partner operativo e tecnico per il settore arredamento navale e contract, con una specializzazione concreta: <strong>gestione completa “chiavi in mano”</strong>.",
        about_card1_title: "Visione pratica, controllo reale",
        about_card1_text: "Grazie all’esperienza acquisita negli anni, gestiamo e monitoriamo commesse e progetti riducendo tempi e costi, alleggerendo anche la ricerca, formazione e produttività del personale.",
        about_card2_title: "Un team che si integra",
        about_card2_text: "Mettiamo a disposizione figure esperte per supporto e formazione, affiancando il vostro personale e intervenendo dove serve: coordinamento, procedure, controllo qualità, avanzamento.",
        carpentry_title: "Eccellenza in Falegnameria",
        carpentry_lead: "Costruiamo interni di lusso con arredi su misura e non solo, partendo dalle vostre idee.",
        carpentry_text: "Coordiniamo la realizzazione di arredi su misura e finiture, con controllo qualità su ogni dettaglio.",
        badge_custom: "Arredi su misura",
        badge_painting: "Sala verniciatura interna",
        badge_luxury: "Luxury Finish",
        services_title: "I nostri servizi",
        services_subtitle: "Gestione di ogni fase del processo per un risultato a 360°.",
        service1_title: "Gestione & consulenza 360°",
        service1_text: "Dalla preventivazione a OVS, budgeting, acquisti, disegno tecnico, gestione cantiere, fino alla consegna finale.",
        service1_list: "<li>Preventivazione e pianificazione</li><li>OVS / budgeting</li><li>Acquisti e supply</li><li>Disegno tecnico</li><li>Site management, consegna e garanzia</li>",
        service2_title: "Mantenimento & Refitting",
        service2_text: "Forniture e assistenza per il mantenimento delle flotte durante la normale operatività, oltre a interventi di refitting completi.",
        service2_list: "<li>Assistenza flotte in operatività</li><li>Interventi di refitting</li><li>Forniture rapide</li>",
        service3_title: "Supporto e formazione",
        service3_text: "Team di esperti nelle diverse mansioni per supportare e formare il vostro personale, migliorando autonomia e performance.",
        service4_title: "Supervisione tecnica & outsourcing",
        service4_text: "Supervisione delle mansioni e servizi in outsourcing dell’intera filiera: dal Project Management alle aziende di installazione.",
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
        step4_text: "Verifiche, qualità, documentazione e consegna finale nei tempi concordati con supporto post-vendita.",
        sectors_title: "Settori",
        sectors_subtitle: "Esperienza trasversale con focus su ambienti complessi e tempi ristretti.",
        sector1_title: "Navale",
        sector1_text: "Allestimenti, refit, gestione cantiere e coordinamento forniture.",
        sector2_title: "Yacht",
        sector2_text: "Finiture, installazioni, controllo qualità e consegna puntuale.",
        sector3_title: "Retail",
        sector3_text: "Allestimenti e commesse multi-sito, rapidità e standard coerenti.",
        cta_strip_title: "Obiettivo: ridurre complessità e costi",
        cta_strip_text: "Gestione e monitoraggio delle commesse con metodo, supporto operativo e soluzioni scalabili: più risultati, meno stress.",
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
        info_subtitle: "Riferimenti storici dell'azienda.",
        link_services: "Servizi (riferimento)",
        office_legal: "Sede Legale & Operativa",
        office_contacts: "Contatti",
        office_email: "Email Certificata",
        footer_text: "Ship & Building — Arredamento Navale • Retail • Yacht",
        footer_rights: "Tutti i diritti riservati"
    },
    en: {
        topbar_text: "Naval Furnishing • Retail • Yacht",
        toplink_text: "Contact for a consultation",
        brand_sub: "Ship & Building • Turnkey Solutions",
        nav_about: "About us",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_process: "Process",
        nav_sectors: "Sectors",
        nav_contact: "Contact",
        hero_kicker: "Over 20 years of experience",
        hero_title: 'Naval <span class="accent">Furnishing</span> and Contract<br /><span class="muted">turnkey solutions</span>',
        hero_lead: "We manage and coordinate the entire supply chain — from estimation and budgeting to purchasing, technical design, site management, and final delivery — with contained costs and tight deadlines.",
        hero_cta_primary: "Start your project",
        hero_cta_secondary: "Discover services",
        badge_pm: "Project management",
        badge_outsourcing: "Outsourcing chain",
        badge_supervision: "Technical supervision",
        panel_focus: "Focus",
        panel_title: "Turnkey",
        panel_text: "Ship & Building: We reduce operational complexity for solid results and timely deliveries.",
        about_title: "About us",
        about_intro: "We are an operational and technical partner for the naval furnishing and contract sector, with a concrete specialization: <strong>complete “turnkey” management</strong>.",
        about_card1_title: "Practical vision, real control",
        about_card1_text: "Thanks to the experience gained over the years, we manage and monitor orders and projects reducing time and costs, also lightening the research, training, and productivity of personnel.",
        about_card2_title: "A team that integrates",
        about_card2_text: "We provide expert figures for support and training, working alongside your staff and intervening where needed: coordination, procedures, quality control, progress.",
        carpentry_title: "Excellence in Carpentry",
        carpentry_lead: "We build luxury interiors with custom-made furniture and more, starting from your ideas.",
        carpentry_text: "We coordinate custom furniture and finishes with quality control on every detail.",
        badge_custom: "Custom furniture",
        badge_painting: "Internal painting room",
        badge_luxury: "Luxury Finish",
        services_title: "Our services",
        services_subtitle: "Management of every phase of the process for a 360° result.",
        service1_title: "360° Management & Consulting",
        service1_text: "From estimation to OVS, budgeting, purchasing, technical design, site management, up to final delivery.",
        service1_list: "<li>Estimation and planning</li><li>OVS / budgeting</li><li>Purchasing and supply</li><li>Technical design</li><li>Site management, delivery and warranty</li>",
        service2_title: "Maintenance & Refitting",
        service2_text: "Supplies and assistance for fleet maintenance during normal operation, as well as complete refitting interventions.",
        service2_list: "<li>Fleet assistance in operation</li><li>Refitting interventions</li><li>Fast supplies</li>",
        service3_title: "Support and training",
        service3_text: "Team of experts in the different tasks to support and train your staff, improving autonomy and performance.",
        service4_title: "Technical supervision & outsourcing",
        service4_text: "Supervision of tasks and outsourcing services of the entire chain: from Project Management to installation companies.",
        portfolio_title: "Portfolio",
        portfolio_subtitle: "Collaborations with leaders in the cruise and naval sector.",
        portfolio_others: "...and other entities in the Cruise world",
        process_title: "How we work",
        process_subtitle: "A clear, controlled, and measurable flow for timely deliveries.",
        step1_title: "Analysis & Estimation",
        step1_text: "Requirements gathering, estimates, OVS, budgeting, and definition of the operational plan.",
        step2_title: "Purchasing & Technical Design",
        step2_text: "Supply, components, drawings, and technical detail for production and site.",
        step3_title: "Site Management",
        step3_text: "Team coordination, technical supervision, reconciliation of time and costs.",
        step4_title: "Delivery & Warranty Support",
        step4_text: "Checks, quality, documentation, and final delivery within the agreed times with post-sales support.",
        sectors_title: "Sectors",
        sectors_subtitle: "Transversal experience with a focus on complex environments and tight deadlines.",
        sector1_title: "Naval",
        sector1_text: "Fit-outs, refits, site management, and supply coordination.",
        sector2_title: "Yacht",
        sector2_text: "Finishes, installations, quality control, and timely delivery.",
        sector3_title: "Retail",
        sector3_text: "Multi-site fit-outs and orders, speed, and consistent standards.",
        cta_strip_title: "Goal: reduce complexity and costs",
        cta_strip_text: "Management and monitoring of orders with method, operational support, and scalable solutions: more results, less stress.",
        cta_strip_btn: "Let's talk",
        contact_title: "Contacts",
        contact_subtitle: "Write to us for a first call: we will answer with a clear and operational proposal.",
        contact_form_title: "Start your project",
        contact_form_subtitle: "Enter your details and a short description.",
        label_name: "Full Name",
        label_email: "Email",
        label_phone: "Phone",
        label_message: "Message",
        btn_send: "Send request",
        info_title: "Learn more",
        info_subtitle: "Historical references of the company.",
        link_services: "Services (reference)",
        office_legal: "Legal & Operational Office",
        office_contacts: "Contacts",
        office_email: "Certified Email",
        footer_text: "Ship & Building — Naval Furnishing • Retail • Yacht",
        footer_rights: "All rights reserved"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const burger = document.getElementById("burger");
    const mobile = document.getElementById("mobile");
    const yearSpan = document.getElementById("year");
    const form = document.getElementById("contactForm");
    const hint = document.getElementById("formHint");
    const header = document.querySelector('.header');

    // i18n
    let currentLang = 'it';
    const langBtns = document.querySelectorAll('.lang-btn');

    const switchLang = (lang) => {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        document.documentElement.lang = lang;
    };

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchLang(btn.getAttribute('data-lang'));
        });
    });

    // Update Year
    if (yearSpan) {
        yearSpan.textContent = String(new Date().getFullYear());
    }

    // Scroll Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });

    // Mobile Menu
    const toggleMobile = (open) => {
        const isExpanded = open !== undefined ? open : burger.getAttribute("aria-expanded") === "false";
        burger.setAttribute("aria-expanded", String(isExpanded));
        mobile.classList.toggle('active', isExpanded);

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
    mobile?.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => toggleMobile(false));
    });

    // Swiper initialization
    const swiper = new Swiper('.hero-swiper', {
        modules: [Pagination, Autoplay],
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    const swiperCarpentry = new Swiper('.carpentry-swiper', {
        modules: [Pagination, Autoplay],
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    // Reveal Animations on Scroll
    const reveals = document.querySelectorAll('.reveal');
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
        hint.textContent = currentLang === 'it' ? "Sto elaborando..." : "Processing...";
        hint.style.color = "var(--accent)";

        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");

        if (!name || !email || !message) {
            hint.textContent = currentLang === 'it' ? "Tutti i campi sono obbligatori." : "All fields are required.";
            hint.style.color = "#ff4d4d";
            return;
        }

        const subject = encodeURIComponent(`Richiesta Consulenza - ${name}`);
        const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\nTelefono: ${phone}\n\nMessaggio:\n${message}`);

        setTimeout(() => {
            window.location.href = `mailto:info@mvcontract.it?subject=${subject}&body=${body}`;
            hint.textContent = currentLang === 'it' ? "Apertura client email..." : "Opening email client...";
            form.reset();
        }, 1000);
    });
});
