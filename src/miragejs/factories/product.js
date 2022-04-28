import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";

export default {
  product: Factory.extend({
    title() {
      return faker.name.findName();
    },
    description() {
      return faker.lorem.paragraph();
    },

    price() {
      return faker.datatype.float({ max: 100 });
    },

    image() {
      return faker.image.business();
    },
  }),
};
