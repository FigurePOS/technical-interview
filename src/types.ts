
export type Order = {
    id: string
    orderItems?: OrderItem[]
}

export type OrderItem = {
    id: string
    name: string
    price: number
    quantity: number
    orderedTimestamp: string // UTC date in ISO format, e.g. 2022-01-01T10:10:10.000Z
    readyTimestamp: string // again e.g. 2022-01-01T10:10:10.000Z, it represent time when item was marked ready
}
