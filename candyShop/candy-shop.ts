"use strict";
import { Candy } from "./candy";
import { Lollipop } from "./lollipop";
import { HardCandy } from "./hardCandy";

export class CandyShop {
  private sugar: number;
  private income: number;
  private inventory: Candy[];

  constructor(amountOfSugar: number) {
    this.income = 0;
    this.inventory = [];
    this.sugar = amountOfSugar;
  }

  storeCandy(candy: Candy): void {
    if (this.sugar - candy.getAmountOfSugar() < 0) {
      throw new Error("Insufficient sugar");
    }
    this.inventory.push(candy);
    this.sugar -= candy.getAmountOfSugar();
  }

  raisePrice(amount: number): void {
    for (let i = 0; i < this.inventory.length; i++) {
      this.inventory[i].raisePrice(amount);
    }
  }

  sell(amountOfCandiesToBeSold: number): void {
    let toBeSold: number = 0;
    if (amountOfCandiesToBeSold <= this.inventory.length) {
      toBeSold = this.inventory.length;
    } else {
      toBeSold = amountOfCandiesToBeSold;
    }
    for (let i = 0; i < toBeSold; i++) {
      this.income += this.inventory[i].getPrice();
    }
    this.inventory.splice(0, toBeSold);
  }

  buySugar(amount: number): void {
    let sugarCost: number = 2;
    if (this.income - amount * sugarCost < 0) {
      throw new Error("Insufficient sugar");
    }

    let amountInGramms = amount * 1000;
    this.sugar += amountInGramms;
    this.income -= amount * sugarCost;
  }

  toString(): string {
    let hardCandyCount = 0;
    let lollipopCount = 0;
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i] instanceof HardCandy) {
        hardCandyCount++;
      }
      if (this.inventory[i] instanceof Lollipop) {
        lollipopCount++;
      }
    }

    return `Inventory: ${hardCandyCount} hard candies, ${lollipopCount} lollipops; Income: $${this.income}; Sugar: ${this.sugar} grams`;
  }
}
