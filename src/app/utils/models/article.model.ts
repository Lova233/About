import { TextBlockModel } from './text-block.model';
import { ImageModel } from './image.model';


export interface ArticleModel {
    content : [ImageModel, TextBlockModel]
}