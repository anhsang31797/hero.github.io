import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { OnSalePipe } from './on-sale.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighLightDirective } from './Directices/high-light.directive';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    OnSalePipe,
    PageNotFoundComponent,
    HighLightDirective,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
