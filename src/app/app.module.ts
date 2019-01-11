import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './content/products/product-list/card/card.component';
import { ProductsFilterPipe } from './content/products/products-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BASE_URL_TOKEN } from './config';
import { environment } from '../environments/environment';
import { ViewportService } from './common/services/viewport.service';
import { InterceptorService } from './common/services/interceptor.service';
import { ProductsComponent } from './content/products/products.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ProductListComponent } from './content/products/product-list/product-list.component';
import { ProductComponent } from './content/products/product/product.component';
import { ResolveService } from './content/products/product/resolve.service';
import { CustomPreloadService } from './common/services/custom-preload.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffect } from './store/effects/products.effect';
import { CartComponent } from './header/cart/cart.component';
import { CartProductComponent } from './header/cart/cart-product/cart-product.component';
import { ChatComponent } from './common/components/chat/chat.component';
import { CdComponent } from './content/cd/cd.component';
import { DefaultComponent } from './content/cd/default/default.component';
import { OnPushComponent } from './content/cd/on-push/on-push.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './content/cd/on-push/child/child.component';
// NgModule == es6 module
// declarations == let , const
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    ProductsFilterPipe,
    TooltipDirective,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    CartProductComponent,
    ChatComponent,
    CdComponent,
    DefaultComponent,
    OnPushComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductsEffect]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument(),
    RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadService})
  ],
  providers: [
    CustomPreloadService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: BASE_URL_TOKEN,
      useValue: environment.base_url,
      // multi: true
    },
    ViewportService,
    {
      provide: 'SizeService',
      useFactory: (view: ViewportService) => {
        return view.determineService();
      },
      deps: [ViewportService]
    },
    ResolveService
    // {
    //   provide: 'BASE_URL',
    //   useValue: 'http://localhost:8091',
    //    multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
