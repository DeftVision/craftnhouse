export const siteConfig = {
    siteName: 'Company Name',
    layout: {
        type: 'heroFirst',
        navAnchor: 'right',
        mode: 'multi',
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
    navLinks: [
        { label: 'Hero', path: '/hero' },
        { label: 'Services', path: '/services' },
        { label: 'Testimonials', path: '/testimonials' },
        { label: 'Contact', path: '/contact' }
    ]
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