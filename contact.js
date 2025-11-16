      // Contact Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            
            // Show success message
            alert(
                `Thank you for contacting us, ${name}!\n\n` +
                `We have received your message regarding "${subject}".\n` +
                `Our team will respond to ${email} within 24-48 hours.\n\n` +
                `Have a great day!`
            );
            
            // Reset form
            this.reset();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
  