import { Component } from '@angular/core';
import {MovingDirection} from "ng2-archwizard/dist";

@Component({
  selector: 'app-root',
  templateUrl: 'pizza.component.html',
  styleUrls: ['pizza.component.css']
})
export class WizardTestComponent {
  public finished = false;

  public navBarLocation = "top";
  public navBarWidth = "none";
  public showBorder = false;

  public dough: string;

  public topping1: string;
  public topping2: string;
  public topping3: string;

  public street: string;
  public city: string;
  public country: string;

  /**
   * This function must be written as an arrow function, to get the scoping for "this" right
   * @param movingDirection
   * @returns {boolean}
   */
  public isStepTwoComplete = (movingDirection: MovingDirection) => {
    return movingDirection === MovingDirection.Backwards || this.toppings.length > 0;
  };

  /**
   * Returns a formatted string containing all toppings
   * @returns {string}
   */
  public get toppings(): string {
    const toppings = new Array<string>();
    if (this.topping1) {
      toppings.push(this.topping1);
    }

    if (this.topping2) {
      toppings.push(this.topping2);
    }

    if (this.topping3) {
      toppings.push(this.topping3);
    }

    return toppings.join(", ");
  }

  /**
   * Makes the wizard invisible and shows the input
   */
  public deliver(): void {
    this.finished = true;
  }

  /**
   * Resets the previous input data and makes the wizard visible
   */
  public reset(): void {
    this.dough = null;

    this.topping1 = null;
    this.topping2 = null;
    this.topping3 = null;

    this.street = null;
    this.city = null;
    this.city = null;

    this.finished = false;
  }
}
