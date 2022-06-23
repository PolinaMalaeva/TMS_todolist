export interface IList {
    id: number,
    value: {
        title: {
            title: string,
            display: boolean
        }
        description: {
            description: string,
            display: boolean
        }
    },
    time: any
}