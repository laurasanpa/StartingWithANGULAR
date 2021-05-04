import { Component } from '@angular/core'

@Component({
    //Nombre por el que llamar al componente
    selector: "custom-hello",
    //Contenido
    template: `<p> Hello World <p>`,
})
export class HelloComponent{

}

//Una vez creado hay que decirle al módulo principal que 
//este módulo existe. -> app.modules.ts 