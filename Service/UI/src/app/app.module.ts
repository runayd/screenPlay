import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ServerComponent } from './servers/server.component';
import { SubServerComponent } from './servers/sub-server/sub-server.component';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent, ServerComponent, SubServerComponent, PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,          //FormsModule is used for two-way binding
    HttpClientModule       //HttpClientModule is used for REST Api  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
