export class Pair {
  from: string;
  to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  equals(object: any) {
    return this.from === object?.from && this.to === object?.to;
  }

  hashCode() {
    return 0;
  }
}
