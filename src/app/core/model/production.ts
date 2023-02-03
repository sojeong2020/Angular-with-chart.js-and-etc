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

export interface ProductionFilter {
    name:string;
    options:any[];
    defaultValue:any;
}

export interface filterOption{
    name:string;
    value:string;
    isdefault:boolean;
}
