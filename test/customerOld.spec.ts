import { Customer } from '../src/customer';
import { Store } from '../src/store';

describe('Store', () => {
  it('在庫が十分にある場合、購入は成功する', () => {
    const store = new Store();
    store.updateInventory('Shampoo', 10);
    const customer = new Customer();

    expect(customer.purchase(store, 'Shampoo', 5)).toBe(true);
    expect(store.getInventory('Shampoo')).toBe(5);
  });

  it('在庫が十分にない場合、購入は失敗する', () => {
    const store = new Store();
    store.updateInventory('Shampoo', 10);
    const customer = new Customer();

    expect(customer.purchase(store, 'Shampoo', 15)).toBe(false);
    expect(store.getInventory('Shampoo')).toBe(10);
  });
});
