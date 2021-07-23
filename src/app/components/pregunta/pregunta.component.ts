import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  
  listPregunta: Pregunta[];

  constructor( public preguntaService: PreguntaService ) { }

  ngOnInit(): void {
    this.listPregunta = this.preguntaService.getPreguntas();
  }
obtenerPregunta(){
  return this.listPregunta[this.preguntaService.indexPregunta].descripcionPregunta;
}
respuestaSeleccionada(respuesta:Respuesta){
  this.preguntaService.opcionSeleccionada = respuesta;
  this.preguntaService.deshabilitarBtn = false;
}
AddClassOption(respuesta:Respuesta){
  if(respuesta === this.preguntaService.opcionSeleccionada){
    console.log(respuesta.nombre);
    // return 'active text-light';
  }
}
}
