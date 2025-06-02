export const siteConfig = {
    siteName: 'Gabriel Barrett',
    layout: {
        type: 'centered', // heroFirst, centered, sidebar
        navAnchor: 'left', // left, right
    },
    features: {
        contactForm: true,
        scrollAnimations: 'subtle',
        contactSnackbar: true,
    },
    branding: {
        primaryColor: '#4B3F72',
        accentColor: '#D9B8C4',
        headingFont: 'Playfair Display',
        bodyFont: 'Inter',
    },
    navLinks: [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' }
    ]
}