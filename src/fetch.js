import React from "react";
import "./fetch.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.meal.strMealThumb} alt="餐點圖片"></img>
      <div>
        <h2>{props.meal.strMeal}</h2>
        <p>{props.meal.strInstructions}</p>
      </div>
    </div>
  );
}

class RandomMeal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {},
    };
  }

  componentDidMount() {
    this.getRandomMeal();
  }

  getRandomMeal() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          meal: data.meals[0],
        });
      });
  }

  render() {
    const { meal } = this.state;

    return <Card meal={meal} />;
  }
}

export default RandomMeal;
