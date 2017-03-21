import React from 'react';

class InstructionOutput extends React.Component {
  selectInstruction(instruction) {
    this.props.removeInstruction(instruction)
  }

  render() {
    const instructions = this.props.instructions;
    const instructionList = instructions.map((instruction, index) =>
      //needs a function bound to this to remove the instruction
      <li key={index}>
        {instruction}
        <button type="button" onClick={() => this.selectInstruction(instruction)} className="remove-button">remove</button>
      </li>
    );
    return (
      <ul>{instructionList}</ul>
    )
  }
} 

export default InstructionOutput;
