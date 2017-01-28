import React from 'react'

class IngredientInput extends React.Component {
  constructor(props) {
    super(props); 
    //testing to see if I can collect an array of ingredients
    this.ingredients = []
  }

  addIngredient(event) {
    if (event.key === 'Enter') {
      this.ingredients.push(this.ingredientInput.value)
      event.preventDefault();
      // printing input value for testing purposes
      console.log(this.ingredientInput.value)
      console.log (this.ingredients)
    }
  }

  render() {
    return (
      <div>
        {/* create onEnter events for adding items, store in array */}
        <h2>Ingredients</h2>
        <input type="text" className="item-input" placeholder="10 Apples..." onKeyPress={(e) => this.addIngredient(e)} ref={(input) => {this.ingredientInput = input}}></input>
      </div>
    );
  }
}

export default IngredientInput;
