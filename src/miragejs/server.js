import { Server, Model } from 'miragejs';
import products from './fixtures/products.json';

export function makeServer({ environment = 'development' } = {}) {
  return new Server({
    environment,

    models: {
      product: Model,
    },

    routes() {
      this.namespace = 'api';

      this.get('products', () => ({
        products,
      }));
    },
  });
}
