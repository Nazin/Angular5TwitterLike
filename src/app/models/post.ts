export class Post {

  EXCERPT_LENGTH = 90; // @todo should be moved to some configuration file

  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  excerpt(): string {
    if (this.body.length > this.EXCERPT_LENGTH) {
      return this.body.substr(0, this.EXCERPT_LENGTH) + '...';
    }
    return this.body;
  }
}
