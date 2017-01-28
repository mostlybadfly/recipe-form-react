import React from 'react';

class InstructionOutput extends React.Component {
  render() {
    const instructions = this.props.instructions;
    const instructionList = instructions.map((instruction, index) =>
      <li key={index}>{instruction}</li>
    );
    return (
      <ul>{instructionList}</ul>
    )
  }
} 

export default InstructionOutput;
