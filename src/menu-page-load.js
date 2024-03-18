class menuItem {
    constructor(name, price, type, description) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.description = description;
    }

    get name() {
        return _name;
    }

    set name(name) {
        this._name = name;
    }

    get price() {
        return _price;
    }

    set price(price) {
        this._price = price;
    }

    get description() {
        return _description;
    }

    set description(description) {
        this._description = description;
    }
}

const createMenuItemElement = (item) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

    const itemName = document.createElement('div');
    const itemPrice = document.createElement('div');
    const itemDescription = document.createElement('div');

    itemName.classList.add('item-name');
    itemPrice.classList.add('item-price');
    itemDescription.classList.add('item-description');

    itemName.innerHTML = `${item.name()}`;
    itemPrice.innerHTML = `${item.price()}`;
    itemDescription.innerHTML = `${item.description()}`;

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemPrice);
    itemContainer.appendChild(itemDescription);

    return itemContainer;
};

export default function menu(container) {
    const header = document.createElement('div');
    header.classList.add('header menu-header');
    header.innerHTML = 'Menu';
    container.appendChild(header);

    const foodHeader = document.createElement('div');
    foodHeader.classList.add('header food-header');
    foodHeader.innerHTML = 'Food';
    container.appendChild(foodHeader);

    const foodItemsContainer = document.createElement('div');
    foodItemsContainer.classList.add('item-container');
    container.appendChild(fooodItemsContainer);

    const burger = createMenuItemElement(
        new menuItem(
            'Burger',
            5,
            'food',
            'Our delicious 100% grass fed patty inbetween two homemade buns'
        )
    );
    const burrito = createMenuItemElement(
        new menuItem(
            'California Burrito',
            10,
            'food',
            'A homemade flor tortilla stuffed with freshly butchered skirt steak, hand-cut fries, guacamole and sour cream.'
        )
    );
    const ribeye = createMenuItemElement(
        new menuItem(
            'Bone-in ribeye',
            18,
            'food',
            'Butchered in house marbled bone-in ribeye'
        )
    );

    foodItemsContainer.appendChild(burger);
    foodItemsContainer.appendChild(burrito);
    foodItemsContainer.appendChild(ribeye);
}
