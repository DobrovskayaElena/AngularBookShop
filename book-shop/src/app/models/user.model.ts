export class User {
  id: number;
  name: string;
  password: string;
  status: string;

  constructor(id: number, name: string, password: string, status: string) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.status = status;
  }
}
