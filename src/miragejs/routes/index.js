export default function routes() {
  this.namespace = "api";

  this.resource("products");

  this.get("products", (schema) => {
    return schema.products.all();
  });
}
