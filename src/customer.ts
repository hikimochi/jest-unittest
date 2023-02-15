import { Product } from '../type/product';
import { Store } from './store';

export class Customer {
  purchase(store: Store, product: Product, num: number) {
    const zaiko = store.getInventory(product);
    const newZaiko = zaiko - num;
    if (newZaiko < 0) {
      return false;
    } else {
      store.updateInventory(product, newZaiko);
      return true;
    }
  }
}
