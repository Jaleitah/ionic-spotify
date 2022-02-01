import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }

  slides = [
    {
      id: 0,
      title: "Bienvenido a Spotify",
      description: "Tu App De Musica Que Se Cae A Cada Rato",
      image: "assets/images/logo.png",
      alt: "imagen de logo"
    },
    {
      id: 1,
      title: "Tu Musica A Toda Hora",
      description: "escucha toda tu musica a toda hora con excelente calidad de audio",
      image: "assets/images/weeknd.jpg",
      alt: "imagen de musica"
    },
    {
      id: 2,
      title: "Con Modo Offline",
      description: "Solo por $1.99 al mes podras llevar toda tu musica sin necesidad de datos",
      image: "assets/images/soundtrap.jpg",
      alt: "imagen de promo"
    }
    
  ]
  constructor(private router: Router, private storage: Storage) { 
    this.storage.create();
  }

  finish() {
    this.storage.set("intro", true);
    this.router.navigateByUrl("/login");
  }

  ngOnInit() {
  }

}
