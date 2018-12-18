import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ProductService } from './product.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BASE_URL_TOKEN } from './config';
import { environment } from '../environments/environment';
import { ViewportService } from './common/services/viewport.service';
import { InterceptorService } from './common/services/interceptor.service';
// NgModule == es6 module
// declarations == let , const
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    ProductsFilterPipe,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: ProductService, // ключ
      useClass: ProductService  // что по ключу отдать ???
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
    }
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
