import { json } from "stream/consumers"

// import { faker } from "@faker-js/faker"
const { faker } = require("@faker-js/faker")

interface ProductData {
  id: string
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
  //   product_title: "Super cool Product",
  //   brand: "Supercool",
  //   faker.commerce.price(100, 200)
  //   categories: ["mens"],
  //   colour: ["red"], 
  //   price: 10.99, 
  //   faker.commerce.price(100, 200)
  //   available_sizes: ["small", "medium", "large"],
  //   product_thumbnail: "https://source.unsplash.com/random/564x564/?golf"
  // }
// ]

const Brands = ["Supercool", "Reynolds", "Rowe and Blick", "Harvey and Sons", "Ward and Goodwin Toy Group", "Larson and Murray", "Lowe", "Kris and Johns"]
const categories = ["Mens", "Womens", "Tools", "Sports", "Home", "Health", "Computers"]
const sizes = ["Extra Small", "Small", "Medium", "Large", "Extra Large", "One Size"]
const colours = ["violet", "pink", "white", "blue", "turquoise", "tan", "gold", "olive", "red", "green", "plum", "indigo", "sky", "yellow", "black", "cyan"]

export const buildProductData = (number: number) => {
  const productArray : ProductData[] = []

  for (let i = 0; i <= number; i++) {
    const product = {
      "id": faker.datatype.uuid(),
      "product_title": faker.commerce.productName(),
      "brand": faker.helpers.arrayElement(Brands),
      "categories": faker.helpers.arrayElements(categories),
      "colour": faker.helpers.arrayElements(colours), 
      "price": Number(faker.commerce.price(0, 200)),
      "available_sizes": faker.helpers.arrayElements(sizes),
      "product_thumbnail": `https://source.unsplash.com/random/564x564/?${faker.commerce.productName()}`
    }

    productArray.push(product)
  }


  return productArray
}

console.log(buildProductData(10))