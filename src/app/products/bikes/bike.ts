import { IProductPictures } from '../shared/product-pictures';
import { BikeClasses} from './bike-classes.enum'

export interface IBike {
    id: number,
    name: string,
    description: string,
    image: IProductPictures,
    class: BikeClasses
}