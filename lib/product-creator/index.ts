

interface ProductData {
  id: number
  product_title: string
  brand: string
  categories: string[]
  colour: string[]
  price: number
  available_sizes: string[]
  product_thumbnail: string
}

// [
  // {
  //   id: 0,
  //   product_title: 'Super cool Product',
  //   brand: 'Supercool',
  //   categories: ['mens'],
  //   colour: ['red'], 
  //   price: 10.99, 
  //   available_sizes: ['small', 'medium', 'large'],
  //   product_thumbnail: 'https://source.unsplash.com/random/564x564/?golf'
  // }
// ]

export const buildProductData = (number: number) => {

  return number
}