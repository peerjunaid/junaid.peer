// Social Media Icons Data
const socialMediaIcons = [
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/_peerjunaid?igsh=azl2ZGlheHgxbWVl',
        iconClass: 'fab fa-instagram'
    },
    {
        name: 'Snapchat',
        url: 'https://www.snapchat.com/add/peer.junaid?share_id=DhyBd1LKB8Q&locale=en-IN',
        iconClass: 'fab fa-snapchat-ghost'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/junaid-ul-islam-9ab649334',
        iconClass: 'fab fa-linkedin-in'
    }
];

// Function to dynamically add social media icons
function addSocialMediaIcons() {
    const footer = document.querySelector('footer .container'); // Selecting the footer container

    // Create a div for the icons
    const iconContainer = document.createElement('div');
    iconContainer.className = 'flex justify-center gap-4 mt-4';

    // Append icons to the container
    socialMediaIcons.forEach((icon) => {
        const link = document.createElement('a');
        link.href = icon.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'text-gray-400 hover:text-white transition duration-300';

        const i = document.createElement('i');
        i.className = `${icon.iconClass} text-2xl`;
        
        link.appendChild(i);
        iconContainer.appendChild(link);
    });

    // Add the icon container to the footer
    footer.appendChild(iconContainer);
}

// Wait for the DOM to load before adding icons
document.addEventListener('DOMContentLoaded', addSocialMediaIcons);
