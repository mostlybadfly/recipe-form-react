import React from 'react';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';
import Recipe from './Recipe';

class App extends React.Component {
  constructor() {
    super();

    this.addRecipe = this.addRecipe.bind(this);
    this.selectRecipe = this.selectRecipe.bind(this);
    this.state = {
      recipes: {},
      currentRecipe: {}
    };
  }

  addRecipe(recipe) {
    const recipes = {...this.state.recipes};
    const timestamp = Date.now();
    recipes[`recipe-${timestamp}`] = recipe;
    this.setState({ recipes })
  }

  selectRecipe(recipe) {
    const recipes = {...this.state.recipes};
    const currentRecipe = recipes[recipe]
    this.setState({ currentRecipe })
  }

  render() {
    return (
      <div>
        <RecipeForm addRecipe={this.addRecipe} />
        <RecipeList recipes={this.state.recipes} selectRecipe={this.selectRecipe} />
        <Recipe currentRecipe={this.state.currentRecipe} />
      </div>
    )
  }
}

export default App;
