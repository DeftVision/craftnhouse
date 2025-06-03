export const siteConfig = {
    siteName: 'Gabriel Barrett',
    layout: {
        type: 'centered',
        navAnchor: 'left',
        mode: 'multi',
        heroVariant: 'centered'
    },
    features: {
        contactForm: true,
        scrollAnimations: 'fade',
        contactSnackbar: true,
    },
    branding: {
        primaryColor: '#4B3F72',
        accentColor: '#D9B8C4',
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