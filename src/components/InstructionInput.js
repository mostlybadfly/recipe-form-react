import React from 'react'

class InstructionInput extends React.Component {
  addInstruction(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      // printing input value for testing purposes
      console.log(this.instructionInput.value)
    }
  }

  render() {
    return (
      <div>
        {/* create an handleSubmit function to store Recipe */}
        <h2>Instructions</h2>
        <input type="text" className="item-input" placeholder="Peel the apples..." onKeyPress={(e) => this.addInstruction(e)} ref={(input) => {this.instructionInput = input}}></input>
      </div>
    );
  }
}

export default InstructionInput;
