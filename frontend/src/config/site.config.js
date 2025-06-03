export const siteConfig = {
    siteName: 'Name',
    layout: {
        type: 'heroFirst',
        navAnchor: 'left',
        mode: 'spa',
        heroVariant: 'centered'
    },
    features: {
        contactForm: false,
        scrollAnimations: 'bold',
        contactSnackbar: false,
    },
    branding: {
        primaryColor: '#32a852',
        accentColor: '#fced19',
        headingFont: 'Playfair Display',
        bodyFont: 'Inter',
    },
    navLinks: {
        spa: [
            {label: 'Hero', href: '#hero'},
            {label: 'Services', href: '#services'},
            {label: 'Testimonials', href: '#testimonials'},
            {label: 'Contact', href: '#contact'},
        ],
        multi: [
            {label: 'Home', href: '/'},
            {label: 'Services', href: '/services'},
            {label: 'Testimonials', href: '/testimonials'},
            {label: 'Contact', href: '/contact'},
        ]
    },
    meta: {
        '/': {
            title: 'Welcome',
            description: 'Landing page for modern web solutions.',
        },
        '/services': {
            title: 'Services',
            description: 'Explore our service offerings.',
        },
        '/testimonials': {
            title: 'Testimonials',
            description: 'See what our clients say.',
        },
        '/contact': {
            title: 'Contact',
            description: 'Get in touch with us.',
        },
        '/terms': {
            title: 'Terms of Service',
            description: 'Our service terms.',
        },
        '/privacy': {
            title: 'Privacy Policy',
            description: 'Our data handling policies.',
        },
    },

}

// layout:
// type: heroFirst, centered, sidebar
// nav anchor: left, right
// mode: spa, multi
// hero variant: standard, centered

// features:
// contact form: true, false
// scroll animations: subtle, bold, fade, slideLeft, slideRight, zoomIn
// contact snackbar: true, false