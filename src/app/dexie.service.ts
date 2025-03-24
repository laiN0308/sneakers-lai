import Dexie, { Table } from 'dexie';
import { Injectable } from '@angular/core';

export interface Product {
  id?: number;
  title: string;
  description: string;
  price: number;
  // ... autres propriétés
}

@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie {
  products!: Table<Product>;

  constructor() {
    super('ProductDatabase');
    this.version(1).stores({
      products: '++id, title, price' // Clé primaire auto-incrémentée, index sur title et price
    });
  }

  async addProducts(products: Product[]) {
    await this.products.bulkAdd(products);
  }

  async getProducts() {
    return await this.products.toArray();
  }

  async clearProducts() {
    await this.products.clear();
  }
}