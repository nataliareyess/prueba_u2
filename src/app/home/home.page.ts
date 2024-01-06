import { Component, OnInit } from '@angular/core';
import { IonCardTitle, IonCardContent, IonCardSubtitle, IonCard, IonCardHeader, IonButton, IonButtons, IonFabList, IonFab, IonIcon, IonFabButton, IonHeader, IonToolbar, IonTitle, IonContent, NavController } from '@ionic/angular/standalone';
import { CitasService } from '../citas.service';
import { CitasPage } from "../citas/citas.page"
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [CommonModule, IonCardTitle, IonCardContent, IonCardSubtitle, IonCard, IonCardHeader, IonButton, IonButtons, IonFab, IonIcon, IonFabList, IonFabButton, IonHeader, IonToolbar, IonTitle, IonContent, CitasPage]
})
export class HomePage implements OnInit {


  cita: { frase: string; autor: string; } | undefined;
  constructor(private citasService: CitasService, private router: Router,private navCtrl: NavController) {}

  ngOnInit(): void {
    this.Randonaizer();
  }

  Randonaizer(): void {
    const citas = this.citasService.getCitas();
    const randomIndex = Math.floor(Math.random() * citas.length);
    this.cita = citas[randomIndex];
  }

  paginaCitas(): void {
    this.router.navigate(['citas'])      
      }

  paginaGestion(): void {
    this.router.navigate(['gestion-citas'])
  }

  
  goToAnotherPage() {
    // Reemplaza 'NombreDeLaOtraPagina' con el nombre de la página a la que deseas navegar
    this.navCtrl.navigateForward('/citas');
  }


  
}