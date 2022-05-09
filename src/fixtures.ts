import { Order } from "./types"

export const order1: Order = {
    id: "order-1",
    orderItems: [
        {
            id: "order-1-order-item-1",
            name: "Long Island Ice Tea",
            price: 100,
            quantity: 1,
            orderedTimestamp: "2022-01-01T16:12:00.000Z",
            readyTimestamp: "2022-01-01T16:18:00.000Z",
        }
    ],
}

export const order2: Order = {
    id: "order-2",
    orderItems: [
        {
            id: "order-2-order-item-1",
            name: "Mojito",
            price: 50,
            quantity: 1,
            orderedTimestamp: "2022-01-01T10:10:00.000Z",
            readyTimestamp: "2022-01-01T10:14:30.000Z",
        },
        {
            id: "order-2-order-item-2",
            name: "Long Island Ice Tea",
            price: 100,
            quantity: 1,
            orderedTimestamp: "2022-01-01T10:10:00.000Z",
            readyTimestamp: "2022-01-01T10:15:00.000Z",
        },
        {
            id: "order-2-order-item-3",
            name: "Complimentary Drink",
            price: 0,
            quantity: 1,
            orderedTimestamp: "2022-01-01T10:10:10.000Z",
            readyTimestamp: "2022-01-01T10:15:10.000Z",
        }
    ],
}

export const order3: Order = {
    id: "order-3",
    orderItems: [
        {
            id: "order-3-order-item-1",
            name: "Mojito",
            price: 50,
            quantity: 1,
            orderedTimestamp: "2022-01-01T11:22:00.000Z",
            readyTimestamp: "2022-01-01T11:27:00.000Z",
        },
        {
            id: "order-3-order-item-2",
            name: "Long Island Ice Tea",
            price: 100,
            quantity: 1,
            orderedTimestamp: "2022-01-01T10:10:00.000Z",
            readyTimestamp: "2022-01-01T10:16:00.000Z",
        },
    ],
}

export const orders = [
    order1,
    order2,
    order3,
]
