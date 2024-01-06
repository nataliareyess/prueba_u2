import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { citas } from 'src/modelo';



@Injectable({
  providedIn: 'root',
})
export class CitasService {
  private _citas: { frase: string; autor: string; }[] = [
    { frase: 'La única manera de hacer un gran trabajo es amar lo que haces.', autor: 'Steve Jobs' },
    { frase: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes.', autor: 'Allen Saunders' },
    { frase: 'No dejes para mañana lo que puedas hacer hoy.', autor: 'Benjamin Franklin' },
    { frase: 'La imaginación es más importante que el conocimiento.', autor: 'Albert Einstein' },
    { frase: 'Somos el universo observándose a sí mismo', autor: 'Carl Sagan' }
  ];
  nuevaCita = new Subject<{ tipo: 'agregar' | 'eliminar'; cita?: { frase: string; autor: string; }; }>();

  constructor() {}

  // Servicio para obtener citas
  getCitas(): { frase: string; autor: string; }[] {
    return this._citas;
  }
  agregarCita(cita: { frase: string; autor: string; }): void {
    this._citas.push(cita);
    this.nuevaCita.next({ tipo: 'agregar', cita });
  }

  // Servicio para eliminar una cita por índice
  eliminarCita(index: number): void {
    this._citas.splice(index, 1);
    this.nuevaCita.next({ tipo: 'eliminar' })
  }
}
