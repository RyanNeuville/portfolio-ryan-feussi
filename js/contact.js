document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
            try {
                // Simuler un délai d'envoi
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                alert('Message envoyé avec succès!');
                contactForm.reset();
            } catch (error) {
                alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
            }
        });
    }
});