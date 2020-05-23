import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTestPipe'
})
export class MyTestPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
