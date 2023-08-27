class PokemonShop {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.products = [];
  }

  async fetchData() {}

  displayProducts() {}

  // pomocnicza funkcja z której będziemy korzystać później
  extractIdFromUrl(url) {
    const parts = url.split("/");
    return parts[parts.length - 2];
  }

  async init() {
    await this.fetchData();
    this.displayProducts();
  }
}
