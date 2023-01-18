export interface IProductList{
    products: IProduct
}

export interface IProduct {
    ingredient: string,
    weight: number,
    message: string,
    options: IOption,
    avalible: boolean
} 
export interface IOption {
    portions?: number,
    mouse?: number,
    text?: string
}
