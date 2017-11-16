
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(array: string[], joiner: string) {
    return array.join(joiner);
  }
}
