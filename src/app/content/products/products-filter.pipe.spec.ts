import { ProductsFilterPipe } from './products-filter.pipe';

const products: IProduct[] = [
  {
    '_id': '11111',
    'title': 'Product 1',
    'serial': 123,
    'author': 'Company 1',
    'price': 1000,
    'src': 'img.png',
  },
  {
    '_id': '11111',
    'title': 'Product 2',
    'serial': 123,
    'author': 'Puma',
    'price': 200,
    'src': 'img.png',
  }
];

describe('ProductsFilterPip', () => {
  let pipe: ProductsFilterPipe;
  beforeEach(() => {
    pipe = new ProductsFilterPipe();
  });
  it('should filter products', () => {
    expect(pipe.transform(products, 'pu').length).toEqual(1);
    expect(pipe.transform(products, 'pu')).toEqual([products[1]]);
  });
});
