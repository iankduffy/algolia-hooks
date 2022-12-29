import { faker } from '@faker-js/faker'

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
  //   faker.commerce.price(100, 200)
  //   categories: ['mens'],
  //   colour: ['red'], 
  //   price: 10.99, 
  //   faker.commerce.price(100, 200)
  //   available_sizes: ['small', 'medium', 'large'],
  //   product_thumbnail: 'https://source.unsplash.com/random/564x564/?golf'
  // }
// ]

export const buildProductData = (number: number) => {
  const productArray : ProductData[] = []

  for (let i = 0; i <= number; i++) {
    const product = {
      id: faker.datatype.uuid(),
      price: faker.commerce.price(0, 200),
      product_title: faker.commerce.productName,
    }

  }

  return number
}