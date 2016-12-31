import React from 'react'

class IngredientInput extends React.Component {
  addIngredient(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      // printing input value for testing purposes
      console.log(this.ingredientInput.value)
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
