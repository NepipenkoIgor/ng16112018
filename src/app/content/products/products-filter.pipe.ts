import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../mock/products';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], searchText: string): IProduct[] {
    if (!searchText) {
      return products;
    }
    return products.filter((product: IProduct) => {
      return product.author.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
    });
  }

}
