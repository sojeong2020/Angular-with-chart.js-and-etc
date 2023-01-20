export interface Production {
    id: number,
    name: string,
    ph:number,
    image_url:string,
    description:string,
    food_pairing:string[],
    volume: Volume,
    method: any,
    ingredients:any
}

 interface Volume {
    value:number,
    unit: string
} 
