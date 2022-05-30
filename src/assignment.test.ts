import { order1, orders } from "./fixtures"
import { calculateAveragePreparationTimesForAllProducts, calculateShortestItemPreparationTime } from "./assignment"

describe("tests for calculateShortestItemPreparationTime", () => {
    it("you can implement your tests here", () => {
        expect(calculateShortestItemPreparationTime(order1)).toEqual(360)
    })
})
describe("tests for calculatePreparationTimeOfWholeOrder", () => {
    it("you can implement your tests here", () => {
        expect(true).toEqual(true)
    })
})
describe("tests for calculateAveragePreparationTimesForAllProducts", () => {
    it("you can implement your tests here", () => {
        expect(calculateAveragePreparationTimesForAllProducts(orders)).toEqual([
            { name: "Mojito", value: 0 }
        ])
    })
})
