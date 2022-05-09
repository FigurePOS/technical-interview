import { Order } from "./types"

/**
 * This function returns the preparation time (readyTimestamp - orderedTimestamp)
 * of the order item which was the fastest to prepare
 *
 * @returns preparation time in seconds
 */
export const calculateShortestItemPreparationTime = (order: Order): number => {
    return 0
}

/**
 * This function returns the preparation time of the whole order.
 * It is the interval between the time of the first item was ordered and the time when the last item was marked ready.
 *
 * @returns preparation time in seconds
 */
export const calculatePreparationTimeOfWholeOrder = (order: Order): number => {
    return 0
}

type AvgPrepTimeResult = {
    name: string
    value: number
}

/**
 * This function returns an array of average preparation times for all products (uniquely identified by name) across all orders.
 */
export const calculateAveragePreparationTimesForAllProducts = (orders: Order[]): AvgPrepTimeResult[] => {
    return []
}
