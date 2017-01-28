import React from 'react';

class IngredientOutput extends React.Component {
  render() {
    const ingredients = this.props.ingredients;
    const ingredientList = ingredients.map((ingredient, index) =>
      <li key={index}>{ingredient}</li>
    );
    return (
      <ul>{ingredientList}</ul>
    )
  }
}

export default IngredientOutput;
