import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name:'reduceParagraph'
})
export class ReduceParagraphPipe implements PipeTransform{

    transform(value:string,maxCharacters:number=50):string{

    
         if(!value || value.length<=maxCharacters)
         return value;
         
        return value?value.substring(0,maxCharacters)+'...':'';
          
    }

}