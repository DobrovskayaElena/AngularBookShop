import { BookCategory } from '../models/book-category';
export class Book {
  id: number;
  name: string;
  description: string;
  price: number;
  category: BookCategory;
  createDate: number;
  isAvailable: boolean;
  imagePath: string;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    category: BookCategory,
    createDate: number,
    isAvailable: boolean,
    imagePath: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.createDate = createDate;
    this.isAvailable = isAvailable;
    this.imagePath = imagePath;
  }
}
