export class Money {
  protected amount: number;

  protected className: string;

  constructor(amount: number) {
    this.amount = amount;
  }

  equals(object: any) {
    return this.amount === object.amount && this.className === object.className;
  }
}
