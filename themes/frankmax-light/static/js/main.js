// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    // Create particles
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Create 3D globe
    const globe = document.getElementById('globe');
    if (globe) {
        const pointCount = 200;
        const radius = 120;
        
        for (let i = 0; i < pointCount; i++) {
            // Create a point on the globe
            const point = document.createElement('div');
            point.classList.add('globe-point');
            
            // Calculate position on sphere
            const phi = Math.acos(-1 + (2 * i) / pointCount);
            const theta = Math.sqrt(pointCount * Math.PI) * phi;
            
            const x = radius * Math.cos(theta) * Math.sin(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(phi);
            
            point.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            
            // Random opacity for star effect
            point.style.opacity = Math.random() * 0.5 + 0.5;
            
            globe.appendChild(point);
            
            // Add connection lines for some points
            if (i % 20 === 0) {
                const line = document.createElement('div');
                line.classList.add('connection-line');
                
                // Calculate rotation to point from center
                const rotateY = Math.atan2(x, z) * (180 / Math.PI);
                const rotateX = Math.atan2(y, Math.sqrt(x * x + z * z)) * (180 / Math.PI);
                
                line.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
                line.style.animationDelay = `${Math.random() * 3}s`;
                
                globe.appendChild(line);
            }
        }
    }
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Change icon
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking a link
        const navLinkElements = document.querySelectorAll('.nav-link');
        
        navLinkElements.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                
                // Reset icon
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // Industry tabs functionality
    const industryTabs = document.querySelectorAll('.industry-tab');
    const industryContents = document.querySelectorAll('.industry-content');
    
    if (industryTabs.length > 0 && industryContents.length > 0) {
        industryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                industryTabs.forEach(t => t.classList.remove('active'));
                industryContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Show corresponding content
                const industry = tab.getAttribute('data-industry');
                document.getElementById(industry).classList.add('active');
            });
        });
    }
    
    // WhatsApp functionality
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const whatsappModal = document.getElementById('whatsapp-modal');
    const closeWhatsapp = document.getElementById('close-whatsapp');
    const startWhatsapp = document.getElementById('start-whatsapp');
    
    if (whatsappBtn && whatsappModal && closeWhatsapp && startWhatsapp) {
        // Open WhatsApp modal when clicking the floating button
        whatsappBtn.addEventListener('click', () => {
            whatsappModal.style.display = 'flex';
        });
        
        // Close WhatsApp modal
        closeWhatsapp.addEventListener('click', () => {
            whatsappModal.style.display = 'none';
        });
        
        // Start WhatsApp chat
        startWhatsapp.addEventListener('click', () => {
            const name = document.getElementById('whatsapp-name').value;
            const message = document.getElementById('whatsapp-message').value;
            
            if (name && message) {
                // Format the message for WhatsApp
                const encodedMessage = encodeURIComponent(`Hello, my name is ${name}. ${message}`);
                const whatsappUrl = `https://wa.me/6583157449?text=${encodedMessage}`;
                
                // Open WhatsApp in new window
                window.open(whatsappUrl, '_blank');
                
                // Close the modal
                whatsappModal.style.display = 'none';
                
                // Reset form
                document.getElementById('whatsapp-name').value = '';
                document.getElementById('whatsapp-message').value = '';
            }
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === whatsappModal) {
                whatsappModal.style.display = 'none';
            }
        });
    }
    
    // Add script tag for main.js in baseof.html
    const script = document.createElement('script');
    script.src = '/js/main.js';
    document.body.appendChild(script);
});