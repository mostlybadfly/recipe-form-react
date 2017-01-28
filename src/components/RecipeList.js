import React from 'react';

class RecipeList extends React.Component {
  render() {
    const recipes = {...this.props.recipes};
    const titles = Object.keys(recipes).map((key) =>
      <li onClick={this.props.selectRecipe.bind(this, key)} key={key}>{recipes[key].title}</li>)
    return (
      <ul>
        {titles}
      </ul>
    )
  }
}
export default RecipeList;
