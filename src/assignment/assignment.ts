/**
 * Following types are the types that come as an input to the assignment. They represent simplified DTO objects.
 * OrderDTO is the root 'order' object and it consists of order-items and payments.
 * OrderItemDTO is an object that represents single item in an order. It may or may not have price and quantity.
 * OrderPaymentDTO is an object that represents a payment in an order. It consists of amount, type and subPayments.
 *
 * Only OrderPaymentDTOs of type 'payment' will be present in the first level of 'payments' field of OrderDTO,
 * meaning that OrderPaymentDTOs of type 'tip' and 'refund' are only valid as subPayments.
 *
 * There will never be multiple nested OrderPaymentDTOs of type 'payment', meaning that
 * OrderPaymentDTOs are only valid in the first level of 'payments' field of OrderDTO.
 *
 * OrderPaymentDTOs of type 'tip' or 'refund' will never have additional subPayments,
 * the field will be an empty array, null or undefined for 'tip' and 'refund' payments.
 *
 *
 * e.g. { id: "id-1", "amount": 10, type: "payment", subPayments: [{ // 'refund' or 'tip' here }] } is valid
 * but { id: "id-1", "amount": 10, type: "refund", subPayments: [{ // anything here }] } is *not* valid
 */

export type OrderDTO = {
    id: string
    orderItems?: OrderItemDTO[] | null | undefined
    payments?: OrderPaymentDTO[] | null | undefined
}

export type OrderItemDTO = {
    id: string
    name: string
    price: number | null | undefined // price for *single item*. null & undefined mean that the item is worth 0 for all calculations
    quantity: number | null | undefined // null & undefined mean that the quantity is implicitly 1 for all calculations
    originTimestamp: string // UTC date in ISO format, e.g. 2022-01-01T10:10:10.000Z
    readyTimestamp: string // again e.g. 2022-01-01T10:10:10.000Z, it represent time when item was marked ready
}

export type OrderPaymentDTO = {
    id: string
    amount: number
    type: OrderPaymentType
    subPayments?: OrderPaymentDTO[] | null | undefined // array of "sub-payments", only valid when the type is 'payment'
}

export enum OrderPaymentType {
    Payment = "payment",
    Tip = "tip",
    Refund = "refund",
}

/**
 * Following types are domain types used by the application. There are several differences between DTO objects
 * and domain objects but the main idea is that these types can be transformed to each other.
 */

export enum OrderStatus {
    Paid = "paid",
    Unpaid = "unpaid",
    PartiallyPaid = "partially-paid",
    Refunded = "refunded",
}

// OrderItem and Payment domain objects have exactly same structure as DTO objects
export type OrderItem = OrderItemDTO
export type Payment = OrderPaymentDTO

export type Order = {
    id: string
    total: number // sum of the all order item totals (item.price * item.quantity)
    tipTotal: number // sum of all *tip* payment amounts
    status: OrderStatus // calculated status of the order based on present payments and total.
    itemQuantity: number // total quantity of all items in order
    orderItems: OrderItem[]
    payments: Payment[]
    metrics: OrderMetrics | null  // additional computed metrics about order items, null if there are no items
}

export type OrderMetrics = {
    longestItemPreparationTime: OrderItemMetric // the biggest difference in milliseconds between item.originTimestamp and item.readyTimestamp
    shortestItemPreparationTime: OrderItemMetric // the smallest difference in milliseconds between item.originTimestamp and item.readyTimestamp
    highestTotalItemPrice: OrderItemMetric // the highest item.price * item.quantity
    smallestTotalItemPrice: OrderItemMetric // the smallest item.price * item.quantity
}

export type OrderItemMetric = {
    itemId: string
    value: number
}


/**
 * Initial note - you should use Node v14.xx or higher
 *
 * The assignment is to create a function that will transform input OrderDTO object into domain Order object.
 * Order domain object extends OrderDTO object by adding some additional computed information:
 *
 * 1. total        = sum of all item totals (item.price * item.quantity)
 * 2. tipTotal     = sum of all *tip* payment amounts, please note that 'tips' are sub-payments of payments of type 'payment'
 * 3. status       = calculated from payments & total
 *                   -> paid only if the order.total equals sum of non-refunded payment amounts ("tip" payments are not relevant for order.status)
 *                   -> refunded *only* if there are payments in the order but all have a *refund* sub-payment that *fully* refunds them ("tip" payments are not relevant for order.status)
 * 4. itemQuantity = total quantity of all items in the order
 * 5. metrics      = additional computed metrics about the order.
 *                     a. longestItemPreparationTime  = itemId and value in milliseconds of the item with longest preparation time (difference between item.originTimestamp and item.readyTimestamp)
 *                     b. smallestItemPreparationTime = itemId and value in milliseconds of the item with shortest preparation time (difference between item.originTimestamp and item.readyTimestamp)
 *                     c. highestTotalItemPrice       = itemId and value (in the same units as input price) of the item with highest total (item.price * item.quantity)
 *                     c. smallestTotalItemPrice      = itemId and value (in the same units as input price) of the item with smallest total (item.price * item.quantity)
 *
 * You are encouraged to use any library present in package.json and ask to install additional ones if you are missing something for your work.
 * You are also encouraged to test your solution and separate the functionality into functions as you deem appropriate.
 *
 * Hint for working with dates in ISO format. You can use JavaScript Date.parse(someIsoString) function to get millisecond representation
 *
 * @param order OrderDTO object which will transformed to the domain object
 * @return correctly composed 'order' domain object
 */
export const transformOrderDTOtoOrderDomain = (order: OrderDTO): Order => {
    // todo - your implementation here. You are encouraged to use libraries present in package.json
    //  and ask to add additional ones if you consider them useful for the task.
}
