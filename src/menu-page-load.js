class menuItem {
    constructor(name, price, type, description) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.description = description;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    get description() {
        return this._description;
    }

    set description(description) {
        this._description = description;
    }
}

const createMenuItem = (item) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

    const itemName = document.createElement('div');
    const itemPrice = document.createElement('div');
    const itemDescription = document.createElement('div');

    itemName.classList.add('item-name');
    itemPrice.classList.add('item-price');
    itemDescription.classList.add('item-description');

    itemName.innerHTML = `${item.name}`;
    itemPrice.innerHTML = `$${item.price}`;
    itemDescription.innerHTML = `${item.description}`;

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemPrice);
    itemContainer.appendChild(itemDescription);

    return itemContainer;
};

export default function menu(container) {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    container.appendChild(menuContainer);

    const header = document.createElement('div');
    header.classList.add('header');
    header.classList.add('menu-header');
    header.innerHTML = 'Menu';
    menuContainer.appendChild(header);

    const foodHeader = document.createElement('div');
    foodHeader.classList.add('header');
    foodHeader.classList.add('items-header');
    foodHeader.setAttribute('id', 'food-header');
    foodHeader.innerHTML = 'Food';
    menuContainer.appendChild(foodHeader);

    const foodItemsContainer = document.createElement('div');
    foodItemsContainer.classList.add('items-container');
    foodItemsContainer.classList.add('food-items-container');
    menuContainer.appendChild(foodItemsContainer);

    const burger = createMenuItem(
        new menuItem(
            'Burger',
            5,
            'food',
            'Our delicious 100% grass fed patty inbetween two homemade buns.'
        )
    );
    const burrito = createMenuItem(
        new menuItem(
            'California Burrito',
            10,
            'food',
            'A homemade flor tortilla stuffed with freshly butchered skirt steak, hand-cut fries, guacamole and sour cream.'
        )
    );
    const ribeye = createMenuItem(
        new menuItem(
            'Bone-in ribeye',
            18,
            'food',
            'Butchered in house marbled bone-in ribeye.'
        )
    );

    foodItemsContainer.appendChild(burger);
    foodItemsContainer.appendChild(burrito);
    foodItemsContainer.appendChild(ribeye);

    const beveragesHeader = document.createElement('div');
    beveragesHeader.classList.add('header');
    beveragesHeader.classList.add('items-header');
    beveragesHeader.setAttribute('id', 'beverages-header');
    beveragesHeader.innerHTML = 'Beverages';
    menuContainer.appendChild(beveragesHeader)

    const beverageItemsContainer = document.createElement('div');
    beverageItemsContainer.classList.add('items-container');
    beverageItemsContainer.classList.add('beverage-items-container');
    menuContainer.appendChild(beverageItemsContainer);

    const soda = createMenuItem(new menuItem('Soda', 3, 'beverage', 'Choose from over 50 sodas!'));
    const water = createMenuItem(new menuItem('Water', 2.50, 'Beverage', 'The best water in town.'));
    const gatorade = createMenuItem(new menuItem('Gatorade', 3.50, 'Beverage', 'Every flavor of gatorade.'));

    beverageItemsContainer.appendChild(soda);
    beverageItemsContainer.appendChild(water);
    beverageItemsContainer.appendChild(gatorade);
}
