import { Component, OnInit } from '@angular/core';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {

  constructor( public preguntaService: PreguntaService) { }

  ngOnInit(): void {
  }

}
