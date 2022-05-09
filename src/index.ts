import { order1, order2, order3, orders } from "./fixtures"
import {
    calculateAveragePreparationTimesForAllProducts,
    calculatePreparationTimeOfWholeOrder,
    calculateShortestItemPreparationTime,
} from "./assignment"

console.log("Result of calculateShortestItemPreparationTime")
console.log(calculateShortestItemPreparationTime(order1))
console.log(calculateShortestItemPreparationTime(order2))
console.log(calculateShortestItemPreparationTime(order3))

console.log("Result of calculatePreparationTimeOfWholeOrder")
console.log(calculatePreparationTimeOfWholeOrder(order1))
console.log(calculatePreparationTimeOfWholeOrder(order2))
console.log(calculatePreparationTimeOfWholeOrder(order3))

console.log("Result of calculateAveragePreparationTimesForAllProducts")
console.log(calculateAveragePreparationTimesForAllProducts(orders))
