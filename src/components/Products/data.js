import product1 from '../../images/entrecote.jpg';
import product2 from '../../images/steak3.jpg';
import product3 from '../../images/steak2.jpg';
import sweet1 from '../../images/fish.jpg';
import sweet2 from '../../images/salmon.jpg';
import sweet3 from '../../images/salmon2.jpg';

export const productData = [
  {
    id: 'steak',
    img: product1,
    alt: 'Steak',
    name: 'Entrecotê',
    desc:
      'Entrecotê with homemade fries and salad',
    price: '',
    button: ''
  },
  {
    img: product2,
    alt: 'Steak',
    name: 'Rib Eye',
    desc:
      ' Best Rib Eye Steak around Portugal, served with finest broccoli and eggs',
    price: '$16.99',
    button: 'Add to Cart'
  },
  {
    img: product3,
    alt: 'Steak',
    name: 'Anti-Vegetaria',
    desc:
      ' This is what you order to make your vegetarian girlfriend cry',
    price: '$14.99',
    button: 'Add to Cart'
  }
];

export const productDataTwo = [
  {
    img: sweet2,
    alt: 'Fish',
    name: 'Salmon Filet',
    desc:
      'Salmon filet with potatoes and salad',
    price: '$9.99',
    button: 'Add to Cart'
  },
  {
    img: sweet3,
    alt: 'Fish',
    name: 'Salmon filet',
    desc:
      'Salmon filet with potatoes and salad',
    price: '$12.99',
    button: 'Add to Cart'
  },
  {
    img: sweet1,
    alt: 'Fish',
    name: 'Sea Bream',
    desc:
      'Sea Bream making you the happiest person in the world',
    price: '$9.99',
    button: 'Add to Cart'
  }
];
