import React from 'react';

class IngredientOutput extends React.Component {
  selectIngredient(ingredient) {
    this.props.removeIngredient(ingredient)
  }

  render() {
    const ingredients = this.props.ingredients;
    const ingredientList = ingredients.map((ingredient, index) =>
      //still need this to actually remove the specific ingredient, write function bound to this
      <li key={index}>
        {ingredient}
        <button type="button" onClick={() => this.selectIngredient(ingredient)} className="remove-button">remove</button>
      </li>
    );
    return (
      <ul>{ingredientList}</ul>
    )
  }
}

export default IngredientOutput;
