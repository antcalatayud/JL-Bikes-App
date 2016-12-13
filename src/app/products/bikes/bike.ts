import { IProductPictures } from '../shared/productPictures';
export interface IBike {
    id: number,
    name: string,
    description: string,
    image: IProductPictures,
    class: any[]
}