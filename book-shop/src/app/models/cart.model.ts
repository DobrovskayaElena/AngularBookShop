export class Cart {
  id: number;
  name: string;
  price: number;
  imagePath: string;
  count: number;

  constructor(id: number, name: string, price: number, imagePath: string, count: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imagePath = imagePath;
    this.count = count;
  }
}
