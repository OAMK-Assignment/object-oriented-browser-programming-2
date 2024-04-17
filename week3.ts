class Food {
  name: string;
  calories: number;

  constructor(name: string, calories: number) {
      this.name = name;
      this.calories = calories;
  }

  getName(): string {
      return this.name;
  }

  getFoodInfo(): string {
      return `${this.name} has ${this.calories} calories`;
  }
}

class Refrigerator {
  private food: Food[] = [];

  addFood(food: Food): void {
      this.food.push(food);
  }

  getContents(): string[] {
      return this.food.map(food => food.getName());
  }

  eatFood(foodName: string): string {
      const index = this.food.findIndex(food => food.getName() === foodName);
      if (index > -1) {
          const food = this.food.splice(index, 1)[0];
          return `You ate ${food.getName()} with ${food.calories} calories`;
      } else {
          return `There is no ${foodName} in the refrigerator`;
      }
  }

  getTotalCalories(): number {
      return this.food.reduce((total, food) => total + food.calories, 0);
  }

  getNumberOfFoodItems(): number {
      return this.food.length;
  }
}

export { Food, Refrigerator };
