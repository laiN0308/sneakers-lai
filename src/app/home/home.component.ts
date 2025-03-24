import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DexieService, Product } from '../dexie.service';
import { SwUpdate } from '@angular/service-worker'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports:[CommonModule]
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  isOffline = !navigator.onLine;

  constructor(
    private http: HttpClient,
    private dexieService: DexieService,
    private swUpdate: SwUpdate
  ) {}

  ngOnInit() {
    this.dexieService.getProducts().then((products) => {
      if (products.length > 0) {
        // Données trouvées dans IndexedDB
        this.products = products;
      } else {
        // Récupérer les données de l'API et les stocker dans IndexedDB
    apiurl: 'https://api.api-ninjas.com/v1/exercises?muscle=biceps'
        this.http.get<Product[]>('').subscribe((data) => {
          this.products = data;
          this.dexieService.addProducts(data);
        });
      }
    });

    window.addEventListener('online', () => {
      this.isOffline = false;
    });

    window.addEventListener('offline', () => {
      this.isOffline = true;
    });

    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(() => {
        if (confirm('Une nouvelle version est disponible. Voulez-vous la charger ?')) {
          window.location.reload();
        }
      });
    }
  }
}