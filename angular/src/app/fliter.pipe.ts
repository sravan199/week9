import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fliter'
})
export class FliterPipe implements PipeTransform {

  transform(value: any, search: any): any {
    if(search==="")return  value;
    else{
      return   value.filter(function(term){
        return term.typeofQuestion.toLowerCase().includes(search.toLowerCase());
        });

    }

  }

}
