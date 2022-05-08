import { transformOrderDTOtoOrderDomain } from "./assignment/assignment"
import { orderDTO1, orderDTO2 } from "./assignment/fixtures"

console.log("Result of orderDTO1 transformation:")
console.log(transformOrderDTOtoOrderDomain(orderDTO1))

console.log("\nResult of orderDTO2 transformation:")
console.log(transformOrderDTOtoOrderDomain(orderDTO2))
