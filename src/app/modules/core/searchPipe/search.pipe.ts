import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from 'src/app/models/heroe';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( values : Heroe[], name: string): Heroe[] {
    const arr = [];
    name = name.toLocaleLowerCase();

    if ( name.length === 0 ) {
      return values;
    } else {
      for ( const value of values ) {
        if ( value.name.toLocaleLowerCase().indexOf( name ) >= 0 ) {
          arr.push(value);
        }
      }
      return arr;
    }
  }

}
