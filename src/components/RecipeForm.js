import React from 'react';
import IngredientOutput from './IngredientOutput'
import InstructionOutput from './InstructionOutput'

class RecipeForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: null,
      ingredients: [],
      instructions: []
    }
  }

  createRecipe(event) {
    event.preventDefault();
    const recipe = {
      title: this.state.title,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions
    }
    this.props.addRecipe(recipe);
    this.recipeForm.reset();
    this.setState({
      title: null,
      ingredients: [],
      instructions: []
    })
  }

  addTitle(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
    this.setState({title: event.target.value});
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

  removeIngredient(ingredient) {
    const ingredients = this.state.ingredients
    if (ingredients.indexOf(ingredient) > -1) {
      ingredients.splice(ingredients.indexOf(ingredient), 1);
      this.setState({ingredients: ingredients})
    }
  }

  removeInstruction(instruction) {
    const instructions = this.state.instructions
    if (instructions.indexOf(instruction) > -1) {
      instructions.splice(instructions.indexOf(instruction), 1);
      this.setState({instructions: instructions})
    }
  }

  //need a function here to validate input. Recipe needs at least a title to start

  render() {
    return (
      <form ref={(input) => this.recipeForm = input} onSubmit={(e) => this.createRecipe(e)}>
        <input className="title" ref={(input) => this.title = input} type="text" placeholder="Title" onBlur={(e) => this.addTitle(e)} />
        <h2>Ingredients</h2>
        <input type="text" className="item-input" placeholder="10 Apples..." onKeyPress={(e) => this.addIngredient(e)} ref={(input) => {this.ingredientInput = input}}></input>
        <IngredientOutput ingredients={this.state.ingredients} removeIngredient={ingredient => this.removeIngredient(ingredient)} />
        <h2>Instructions</h2>
        <input type="text" className="item-input" placeholder="Peel the apples..." onKeyPress={(e) => this.addInstruction(e)} ref={(input) => {this.instructionInput = input}}></input>
        <InstructionOutput instructions={this.state.instructions} removeInstruction={instruction => this.removeInstruction(instruction)} />
        <p>
          <button className="add-button" type="submit">Add Recipe</button>
        </p>
      </form>
    );
  }
}

export default RecipeForm;
