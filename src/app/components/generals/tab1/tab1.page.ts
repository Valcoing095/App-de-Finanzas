import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  listClients = [
    {
      "imgProfile" : "https://images.hdqwalls.com/wallpapers/loki-season-2-2023-2y.jpg",
      "nombre" : "loki1",
      "Apellido" : "Ragnarok",
      "Numero Celular" : "302475080",
      "Email" : "yvelasco321@gmail.com"

    },
    {
      "imgProfile" : "https://images.hdqwalls.com/wallpapers/loki-season-2-2023-2y.jpg",
      "nombre" : "loki2",
      "Apellido" : "Ragnarok",
      "Numero Celular" : "302475080",
      "Email" : "yvelasco321@gmail.com"

    },
    {
      "imgProfile" : "https://images.hdqwalls.com/wallpapers/loki-season-2-2023-2y.jpg",
      "nombre" : "loki3",
      "Apellido" : "Ragnarok",
      "Numero Celular" : "302475080",
      "Email" : "yvelasco321@gmail.com"

    }
   ]

}
