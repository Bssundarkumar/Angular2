import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { servicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    servicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
