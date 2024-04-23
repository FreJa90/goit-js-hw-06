class Storage {
  #items;
  constructor(params) {
    this.#items = params;
  }
  getItems() { return this.#items; }

  addItem(newItem) { return this.#items.push(newItem); }

  removeItem(itemToRemove) {
    for (const item of this.#items) { if (item === itemToRemove) { this.#items.splice(item, 1) }; }
  }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]