import { OrderDTO, OrderPaymentType } from "./assignment"

/**
 * Below you can find test data you can use to test your implementation.
 * You are encouraged to add additional test data if you feel it is helpful
 * and/or use provided data for tests implementation.
 */

/**
 * Expected result of transformation to domain object when using this fixture is:
 * {
 *     id: "order-1",
 *     total: 0,
 *     tipTotal: 0,
 *     status: "unpaid",
 *     itemQuantity: 0,
 *     orderItems: [],
 *     payments: [],
 *     metrics: null,
 * }
 */
export const orderDTO1: OrderDTO = {
    id: "order-1",
    orderItems: null,
    payments: null,
}

/**
 * Expected result of transformation to domain object when using this fixture is:
 * {
 *     id: "order-2",
 *     total: 250,
 *     tipTotal: 100,
 *     status: "paid",
 *     itemQuantity: 5,
 *     orderItems: [
 *         {
 *           id: "order-item-1",
 *           name: "Mojito",
 *           price: 50,
 *           quantity: 3,
 *           originTimestamp: "2022-01-01T10:10:00.000Z",
 *           readyTimestamp: "2022-01-01T10:10:15.500Z",
 *        },
 *        {
 *           id: "order-item-2",
 *           name: "Long Island Ice Tea",
 *           price: 100,
 *           quantity: null,
 *           originTimestamp: "2022-01-01T10:10:00.000Z",
 *           readyTimestamp: "2022-01-01T10:10:05.500Z",
 *        },
 *        {
 *           id: "order-item-3",
 *           name: "Complimentary Drink",
 *           price: null,
 *           quantity: null,
 *           originTimestamp: "2022-01-01T10:10:10.000Z",
 *           readyTimestamp: "2022-01-01T10:10:12.500Z",
 *        }
 *     ],
 *     payments: [{
 *         id: "payment-1",
 *         amount: 250,
 *         type: OrderPaymentType.Payment,
 *         subPayments: [{
 *             id: "tip-1",
 *             amount: 100,
 *             type: OrderPaymentType.Tip,
 *         }],
 *     }],
 *     metrics: {
 *         longestItemPreparationTime: {
 *             itemId: "order-item-1",
 *             value: 15500,
 *         },
 *         shortestItemPreparationTime: {
 *             itemId: "order-item-3",
 *             value: 2500,
 *         },
 *         highestTotalItemPrice: {
 *             itemId: "order-item-1",
 *             value: 150,
 *         },
 *         smallestTotalItemPrice: {
 *             itemId: "order-item-3",
 *             value: 0,
 *         },
 *     },
 * }
 */
export const orderDTO2: OrderDTO = {
    id: "order-2",
    orderItems: [
        {
            id: "order-item-1",
            name: "Mojito",
            price: 50,
            quantity: 3,
            originTimestamp: "2022-01-01T10:10:00.000Z",
            readyTimestamp: "2022-01-01T10:10:15.500Z",
        },
        {
            id: "order-item-2",
            name: "Long Island Ice Tea",
            price: 100,
            quantity: null,
            originTimestamp: "2022-01-01T10:10:00.000Z",
            readyTimestamp: "2022-01-01T10:10:05.500Z",
        },
        {
            id: "order-item-3",
            name: "Complimentary Drink",
            price: null,
            quantity: null,
            originTimestamp: "2022-01-01T10:10:10.000Z",
            readyTimestamp: "2022-01-01T10:10:12.500Z",
        }
    ],
    payments: [{
        id: "payment-1",
        amount: 250,
        type: OrderPaymentType.Payment,
        subPayments: [{
            id: "tip-1",
            amount: 100,
            type: OrderPaymentType.Tip,
        }],
    }],
}
