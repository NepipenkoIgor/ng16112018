import { Route } from '@angular/router';
import { ProductsComponent } from './content/products/products.component';
import { ProductListComponent } from './content/products/product-list/product-list.component';
import { ProductComponent } from './content/products/product/product.component';
import { ResolveService } from './content/products/product/resolve.service';


export const routes: Route[] = [
  {
    path: '',  // /, /products
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: ':id',
        component: ProductComponent,
        data: {
          title: 'Product id is: '
        },
        resolve: {
          product: ResolveService,
        }
      },
      {
        path: '**',
        redirectTo: '/signup'
      }
    ]
  },
  {
    path: 'signup',
    loadChildren: './content/signup/signup.module'
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];
