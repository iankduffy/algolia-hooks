"use strict";
exports.__esModule = true;
// import { faker } from "@faker-js/faker"
var faker = require("@faker-js/faker").faker;
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
var Brands = ["Supercool", "Reynolds", "Rowe and Blick", "Harvey and Sons", "Ward and Goodwin Toy Group", "Larson and Murray", "Lowe", "Kris and Johns"];
var categories = ["Mens", "Womens", "Tools", "Sports", "Home", "Health", "Computers"];
var sizes = ["Extra Small", "Small", "Medium", "Large", "Extra Large", "One Size"];
var colours = ["violet", "pink", "white", "blue", "turquoise", "tan", "gold", "olive", "red", "green", "plum", "indigo", "sky", "yellow", "black", "cyan"];
exports.buildProductData = function (number) {
    var productArray = [];
    for (var i = 0; i <= number; i++) {
        var product = {
            "id": faker.datatype.uuid(),
            "product_title": faker.commerce.productName(),
            "brand": faker.helpers.arrayElement(Brands),
            "categories": faker.helpers.arrayElements(categories),
            "colour": faker.helpers.arrayElements(colours),
            "price": Number(faker.commerce.price(0, 200)),
            "available_sizes": faker.helpers.arrayElements(sizes),
            "product_thumbnail": "https://source.unsplash.com/random/564x564/?" + faker.commerce.product()
        };
        productArray.push(product);
    }
    return productArray;
};
console.log(exports.buildProductData(10));
