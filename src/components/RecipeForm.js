import React from 'react';
import IngredientOutput from './IngredientOutput'
import InstructionOutput from './InstructionOutput'

class RecipeForm extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredients: [],
      instructions: []
    }
  }

  createRecipe(event) {
    event.preventDefault();
    const recipe = {
      title: this.title.value,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions
    }
    this.props.addRecipe(recipe);
    this.recipeForm.reset();
    this.setState({
      ingredients: [],
      instructions: []
    })
  }

  addTitle(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  addIngredient(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.setState({ingredients: this.state.ingredients.concat(this.ingredientInput.value)});
      this.ingredientInput.value = '';
    }
  }
  
  addInstruction(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.setState({instructions: this.state.instructions.concat(this.instructionInput.value)});
      this.instructionInput.value = '';
    }
  }
  
  render() {
    return (
      <form ref={(input) => this.recipeForm = input} onSubmit={(e) => this.createRecipe(e)}>
        <input ref={(input) => this.title = input} type="text" placeholder="Title" onKeyPress={(e) => this.addTitle(e)} />
        <h2>Ingredients</h2>
        <input type="text" className="item-input" placeholder="10 Apples..." onKeyPress={(e) => this.addIngredient(e)} ref={(input) => {this.ingredientInput = input}}></input>
        <IngredientOutput ingredients={this.state.ingredients} />
        <h2>Instructions</h2>
        <input type="text" className="item-input" placeholder="Peel the apples..." onKeyPress={(e) => this.addInstruction(e)} ref={(input) => {this.instructionInput = input}}></input>
        <InstructionOutput instructions={this.state.instructions} />
        <button type="submit">Add Recipe</button>
      </form>
    );
  }
}

export default RecipeForm;
