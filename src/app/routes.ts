import { Route } from '@angular/router';
import { ProductsComponent } from './content/products/products.component';
import { ProductListComponent } from './content/products/product-list/product-list.component';
import { ProductComponent } from './content/products/product/product.component';
import { ResolveService } from './content/products/product/resolve.service';
import { ChatComponent } from './common/components/chat/chat.component';
import { CdComponent } from './content/cd/cd.component';


export const routes: Route[] = [
  {
    path: '',  // /, /products
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'cd',  // /, /products
    component: CdComponent
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
    path: 'chat',
    component: ChatComponent,
    outlet: 'aux1'
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];
