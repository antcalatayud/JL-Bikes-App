export interface IBike {
    id: number,
    name: string,
    description: string,
    image: {
        thumb:string, 
        large:string
        },
    class: any[]
}