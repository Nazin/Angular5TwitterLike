export class Post {

  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  excerpt(length: number): string {
    if (this.body.length > length) {
      return this.body.substr(0, length) + '...';
    }
    return this.body;
  }
}
