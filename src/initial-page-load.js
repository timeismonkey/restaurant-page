import Restaurant from './restaurant.jpg';

export default function initial(container) {
    const img = new Image();
    const headline = document.createElement('p');
    const about = document.createElement('p');

    img.src = Restaurant;
    img.alt = 'Restaurant dining area with lights hanging and white tablecloths';
    headline.innerHTML = "Our Restaurant";
    about.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minus, deleniti dolorem officia ex sequi expedita commodi architecto distinctio, quisquam perspiciatis voluptates dolor officiis temporibus doloremque hic cupiditate molestias reiciendis.";

    Container.appendChild(img);
    Container.appendChild(headline);
    Container.appendChild(about);

    img.classList.add('main-page-img');
    headline.classList.add('headline');
    about.classList.add('about');
}