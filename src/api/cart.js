import { forEach } from "lodash";
import { CART } from "../config/constants";

export class Cart {
  add(itemId, quantity) {
    const products = this.getAll();

    const objIndex = products.findIndex((product) => product.id === itemId);

    if (objIndex < 0) {
      products.push({
        id: itemId,
        quantity,
      });
    } else {
      const product = products[objIndex];
      products[objIndex].quantity = product.quantity + quantity;
    }
    localStorage.setItem(CART, JSON.stringify(products));
  }

  decrease(itemId) {
    const products = this.getAll();

    const objIndex = products.findIndex((product) => product.id === itemId);

    if (objIndex >= 0) {
      const product = products[objIndex];
      if (product.quantity > 1) {
        products[objIndex].quantity = product.quantity - 1;
        localStorage.setItem(CART, JSON.stringify(products));
      } else {
        this.delete(itemId);
      }
    }
  }

  increment(itemId) {
    const products = this.getAll();

    const objIndex = products.findIndex((product) => product.id === itemId);

    if (objIndex >= 0) {
      const product = products[objIndex];
      products[objIndex].quantity = product.quantity + 1;
      localStorage.setItem(CART, JSON.stringify(products));
    }
  }

  delete(itemId) {
    const products = this.getAll();
    const objIndex = products.filter((product) => product.id !== itemId);
    localStorage.setItem(CART, JSON.stringify(objIndex));
  }

  getAll() {
    const response = localStorage.getItem(CART);
    if (!response) {
      return [];
    } else {
      return JSON.parse(response);
    }
  }

  deleteAll(){
    localStorage.removeItem(CART);
  }


  count() {
    let count = 0;
    const response = this.getAll();

    forEach(response, (item) => {
      count += item.quantity;
    });

    return count;
  }
}
