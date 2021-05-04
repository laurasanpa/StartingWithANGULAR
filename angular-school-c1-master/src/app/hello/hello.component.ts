//Para poder pasarle valores desde fuera importamos Input
import { Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    //Nombre por el que llamar al componente
    selector: "custom-hello",
    //Contenido
    //template: `<p> Hello World <p>`,
    templateUrl: './hello.component.html',
    //Se ponen los estilos como en css
    styles:[],
    //Si quiero hacerlo con una hoja de estilos externa uso: 
    //stylesUrls:['...','...'],
})
export class HelloComponent{
    //De fuera hacia dentro:
    @Input() name:string;

    @Output() sayHello:EventEmitter<string> = new EventEmitter<string>();

    //Constructor para inicializar:
    constructor(){
        //this.name='Laura';
    }

    onNameClick(){
        this.sayHello.emit('Hello!');
    }

}

//Una vez creado hay que decirle al módulo principal que 
//este módulo existe. -> app.modules.ts 