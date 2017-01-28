import React from 'react';

class Recipe extends React.Component {
  render() {
    const currentRecipe = this.props.currentRecipe;
    const ingredients = currentRecipe.ingredients;
    //returns react Uncaught TypeError: Cannot read property 'map' of undefined
    //const ingredientList = ingredients.map((ingredient, index) =>
    //  <li key={index}>{ingredient}</li>
    //);
    //this will still return ingredients
    return (
      <p>{ingredients}</p>
    )
  }
}
export default Recipe;
