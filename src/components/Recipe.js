import React from 'react';

class Recipe extends React.Component {
  render() {
    const currentRecipe = this.props.currentRecipe;
    const ingredients = currentRecipe.ingredients || [];
    const instructions = currentRecipe.instructions || [];
    const ingredientList = ingredients.map((ingredient, index) =>
      <p key={index}>{ingredient}</p>
    );
    const instructionList = instructions.map((instruction, index) =>
      <p key={index}>{instruction}</p>
    );
    return (
      <div>
        <h1>{currentRecipe.title}</h1>
        {ingredients.length > 0 ? <h3>Ingredients:</h3> : <p></p>}
        {ingredientList}
        {instructions.length > 0 ? <h3>Instructions:</h3> : <p></p>}
        {instructionList}
      </div>
    )
  }
}
export default Recipe;
