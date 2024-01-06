import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CitasService } from '../citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CitasPage implements OnInit {

  totalCitas: {frase: string; autor: string;} [] = [];


  constructor(private citasService: CitasService) {
   }

  ngOnInit(): void {
    this.totalCitas = this.citasService.getCitas();
  }
}
