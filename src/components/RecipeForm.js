import React from 'react';
import IngredientInput from './IngredientInput'
import InstructionInput from './InstructionInput'
import IngredientOutput from './IngredientOutput'
import InstructionOutput from './InstructionOutput'

class RecipeForm extends React.Component {
  render() {
    return (
      <div className="form">
        <input type="text" className="title" placeholder="Title"></input>
        <div>
          <IngredientInput />
          <IngredientOutput />
          <InstructionInput />
          <InstructionOutput />
          <p><button className="add-button">Add Recipe</button></p>
        </div>
      </div>
    );
  }
}

export default RecipeForm;
