export class Money {
  amount: number;
  className: string;

  constructor(amount: number) {
    this.amount = amount;
  }

  equals(object: any) {
    return this.amount === object.amount && this.className === object.className;
  }
}
