import React from 'react'

class IngredientInput extends React.Component {
  constructor(props) {
    super(props);
    this.ingredients = []
  }

  addIngredient(event) {
    if (event.key === 'Enter') {
      this.ingredients.push(this.ingredientInput.value);
      event.preventDefault();
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
