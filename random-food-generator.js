const menu = {
  _courses: {
    appetizers:[],
    mains:[],
    desserts:[],
  },

  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mains){
    this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(desserts){
    this._courses.desserts = desserts;
  },

  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal (){
    const appetizers = this.getRandomDishFromCourse(`appetizers`);
    const mains = this.getRandomDishFromCourse(`mains`);
    const desserts = this.getRandomDishFromCourse(`desserts`);
    const totalPrice = appetizers.price + mains.price + desserts.price;

    return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}   . The price is $${totalPrice}`;
  },
};

menu.addDishToCourse(`appetizers`, `Salad`, 4.25);
menu.addDishToCourse(`appetizers`, `Chicken`, 4.25);
menu.addDishToCourse(`appetizers`, `Feta Cheese`, 4.25);

menu.addDishToCourse(`mains`, `Fish`, 5.25);
menu.addDishToCourse(`mains`, `Beef`, 4.25);
menu.addDishToCourse(`mains`, `Vegan`, 6.25);

menu.addDishToCourse(`desserts`, `Choco`, 1.25);
menu.addDishToCourse(`desserts`, `Fruits`, 3.25);
menu.addDishToCourse(`desserts`, `Yoghurt`, 2.25);

let meal = menu.generateRandomMeal();
console.log(meal);
