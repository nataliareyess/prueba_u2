import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CitasService } from '../citas.service';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GestionCitasPage implements OnInit {

  citas: { frase: string; autor: string }[];
  nuevaCita: {frase: string; autor: string;} = {frase: '', autor: ''};

  constructor(private citasService: CitasService) { 
    this.citas = citasService.getCitas();
  }

  agregarCita(): void {
    if (this.nuevaCita.frase && this.nuevaCita.autor) {
      this.citasService.agregarCita(this.nuevaCita);
      this.nuevaCita = { frase: '', autor: '' };
    }
  }

  eliminarCita(index: number){
    this.citasService.eliminarCita(index);
  }
  
  ngOnInit() {
  }

}
