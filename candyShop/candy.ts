"use strict";
export class Candy {
  protected price: number;
  protected amountOfSugar: number;

  constructor(price: number, amountOfSugar: number) {
    this.price = price;
    this.amountOfSugar = amountOfSugar;
  }

  getPrice(): number {
    return this.price;
  }

  getAmountOfSugar(): number {
    return this.amountOfSugar;
  }

  raisePrice(amount: number) {
    this.price += amount;
  }
}
