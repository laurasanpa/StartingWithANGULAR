import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Módulo principal: componente + decorador
import { AppComponent } from './app.component';
//Importamos el componente helloworld
import { HelloComponent} from './hello/hello.component';
@NgModule({
  //metadatos
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
