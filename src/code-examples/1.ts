export type Employee = {
    id: string
    name: string
    status: "active" | "inactive"
}

export function getEmployees(data: Employee[]) {
    if (data.length > 0) {
        let r = []
        for (let i = 0; i < data.length; i++)
        {
            if (data[i].status === "active") {
                r.push(data[i])
            }
        }
        return r
    }
    return []
}
