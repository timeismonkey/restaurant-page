import instagram from './instagram.png';
import facebook from './facebook.png';
import youtube from './youtube.png';

export default function contact(container) {
    const header = document.createElement('div');
    header.classList.add('header');
    header.classList.add('contact-header');
    header.innerHTML = 'Contact Us';
    container.appendChild(header);

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    container.appendChild(contactContainer);

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('phone-number');
    phoneNumber.innerHTML = 'Phone number: (709) 583-6085';
    contactContainer.appendChild(phoneNumber);

    const email = document.createElement('p');
    email.classList.add('email');
    email.innerHTML = 'Email: restaurant@email.com';
    contactContainer.appendChild(email);

    const socialMedia = document.createElement('div');
    socialMedia.classList.add('social-media-cont');
    contactContainer.appendChild(socialMedia);
    
    const instagramIcon = new Image();
    instagramIcon.src = instagram;
    instagramIcon.classList.add('icon');
    instagramIcon.setAttribute('id', 'instgram-icon');
    const facebookIcon = new Image();
    facebookIcon.src = facebook;
    facebookIcon.classList.add('icon');
    facebookIcon.setAttribute('id', 'fb-icon')
    const youtubeIcon = new Image();
    youtubeIcon.src = youtube;
    youtubeIcon.classList.add('icon');
    youtubeIcon.setAttribute('id', 'youtube-icon');

    socialMedia.appendChild(instagramIcon);
    socialMedia.appendChild(facebookIcon);
    socialMedia.appendChild(youtubeIcon);
}
