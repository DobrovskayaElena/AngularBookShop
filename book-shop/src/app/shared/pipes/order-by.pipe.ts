import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(
    array: Record<string, unknown>[],
    field: string,
    direction: 'asc' | 'desc' = 'desc'
  ): Record<string, unknown>[] {
    let flag = direction === 'asc' ? 1 : -1;
    return array.sort((a: any, b: any) => {
      return a[field] < b[field] ? -1 * flag : 1 * flag;
    });
  }
}
