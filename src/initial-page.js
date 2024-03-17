import Restaurant from './restaurant.jpg';

export default initial() {
    const contentContainer = document.querySelector('#content');
    const img = document.createElement('img');
    const headline = document.createElement('p');
    const about = document.createElement('p');

    // img.src = './restaurant.jpg';
    // img.alt = 'Restaurant dining area with lights hanging and white tablecloths';
    img.src = Restaurant;
    headline.innerHTML = "Our Restaurant";
    about.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minus, deleniti dolorem officia ex sequi expedita commodi architecto distinctio, quisquam perspiciatis voluptates dolor officiis temporibus doloremque hic cupiditate molestias reiciendis.";

    contentContainer.appendChild(img);
    contentContainer.appendChild(headline);
    contentContainer.appendChild(about);

    

}