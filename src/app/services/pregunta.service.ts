import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  indexPregunta = 0;

  public preguntas: Pregunta[]=[
    new Pregunta('Cual es la capital de Mexico',[
      new Respuesta('Ciudad de México',1),
      new Respuesta('Monterrey ',0),
      new Respuesta('Toluca ',0),
      new Respuesta('Guadalajara ',0),
    ]),
    new Pregunta('Cual es la capital de Guadalajara',[
      new Respuesta('Jalisco',1),
      new Respuesta('Nueva York',0),
      new Respuesta('Sonora',0),
      new Respuesta('Ciudad de México',0),
    ]),
    new Pregunta('Cual es la capital del Estado de México',[
      new Respuesta('Toluca ',1),
      new Respuesta('Ciudad de México',0),
      new Respuesta('Baja California',0),
      new Respuesta('Guadalajara ',0),
    ])
  ]
  constructor() { }
  getPreguntas(){
    return this.preguntas.slice();
  }
}
