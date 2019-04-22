import { Author } from "./author";
import { Publisher } from "./publisher";

export interface Book{
    Id:number;
    ISBN:string;
    Title:string;
    Description:string;
    Language:string;
    PhotoUrl:string;
    Price:number;
    Year:number;

    Publisher:Publisher;
    Authors:Author[];
}