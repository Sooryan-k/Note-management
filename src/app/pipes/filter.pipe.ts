import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  transform(allNote: any=[],searchKey: string,propName:string): any[] {
    const result:any=[]
    if(!allNote||searchKey==''||propName==''){

      return allNote
    }
    allNote.forEach((note:any) => {
      
      if(note[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
      
        result.push(note)
      }
    })

      return result;
  }
}
