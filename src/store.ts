import { Product } from '../type/product';
import { Customer } from './customer';
const fs = require('fs');

export class Store {
  addInventory(product: Product, num: number) {
    const nowNum = this.getInventory(product);
    const addNum = nowNum + num;
    this.updateInventory(product, addNum);
  }

  removeInventory(product: Product, num: number) {
    const nowNum = this.getInventory(product);
    const removeNum = nowNum - num;
    this.updateInventory(product, removeNum);
  }

  getInventory(product: Product): number {
    const num = fs.readFileSync(product, 'utf-8');
    return Number(num);
  }

  updateInventory(product: Product, num: number) {
    fs.writeFileSync(product, `${num}`);
  }

  hasEnoughInventory(product: Product, num: number): boolean {
    return num < this.getInventory(product);
  }
}
