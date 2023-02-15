import { Product } from '../type/product';
import { Customer } from './customer';
const fs = require('fs');

export class Store {
  addInventory(product: Product, num: number) {
    const nowNum = this.getInventory(product);
    const addedNum = nowNum + num;
    this.updateInventory(product, addedNum);
  }

  getInventory(product: Product): number {
    const num = fs.readFileSync(product, 'utf-8');
    return Number(num);
  }

  updateInventory(product: Product, num: number) {
    fs.writeFileSync(product, `${num}`);
    console.log(`${product}が${num}になりました`);
  }
}
