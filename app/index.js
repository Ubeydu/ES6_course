// let a = 'hello';
// console.log(a);

// {
//     let a = 'goodbye';
//     console.log('a inside scope')
// }

// const an_array = [1, 2, 3];
// an_array.push(4);
// console.log(an_array)

// var a = 'hello';
// var b = 'world';


// let d = `hello ${b}`;
// console.log(d);

// let a = [7, 8, 9];
// let b = [6, ...a, 10];
// console.log(b)

// function ekranabas(...z) {
//     console.log(z);
// }

// ekranabas(1, 2, 3, 4, 5);

// function butter() {
//     let a = [1, 2, 3];
//     console.log(a);
// }

// butter(4, 5, 6);

// function butter(...z) {
//     let a = [1, 2, 3, ...z];
//     console.log(a);
//   }

//   butter(4, 5, 6);

// let c = [100, 200]
// let [a, b] = c;
// console.log(b, b, a)

// let c = [100, 200, 300, 400, 500];
// let [a, ...b] = c;
// console.log(b)

// let ranger = {magical: false, power: 9};
// let {magical, power} = ranger;
// console.log(magical, power);

// function blastoff() {
//   console.log('3...2...1... blastoff!')
// }

// blastoff();

// setTimeout(() => {
//   console.log('3...2...1... blastoff!')
// }, 3000);

// this.a = 25;

// let print = function() {
//   this.a = 50;
//   console.log('this.a', this.a);
// }
// print();

// let arrowPrint = () => {
//   console.log(this.a);
// }

// arrowPrint();

// let points = [10, 20, 30];

// points = points.map(element => element +1);

// console.log(points);

// let lengths = [3, 7, 5];
// let multiple = 8;

// const scale = (multiple) => {
//   return lengths.map(element => element*multiple);
// };

// console.log(scale(2))

// let isPassing = (grade) => {
//   return grade >= 70;
// }

// let scores = [90, 85, 67, 71, 70, 55, 92];

// let passing = scores.filter(element => element >= 15);

// console.log(passing);

// import { students, total } from "./students";
// console.log(students, total);

// import multiply from './calculator';
// //console.log(add(3, 5));
// console.log(multiply(3, 10));

// let Merry = new Entity("Ubeyd", 1.73);
// Merry.greet();

// import {Entity, Wizard} from "./entity";

// class Hobbit extends Entity {
//   constructor(name, height) {
//     super(name, height);
//   }

//   greet() {
//     console.log(`Hello. I'm ${this.name} from the Shire!`);
//   }
// }

// let Frodo = new Hobbit("Frodo Baggins", 4.5);
// console.log(Frodo);
// Frodo.greet();

// class Gandalf extends Wizard {
//   constructor(power_level) {
//     super(power_level);
//   }
// }

// let Gandalfv2 = new Gandalf(200);
// console.log(Gandalfv2.power_level);

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key = 'c3ce690e64435932e45aeb4ed7539356';
const lat = 25;
const lon = 30;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'London',
      description: ''
    }
  }

  componentDidMount() {
    this.grabWeather(this.state.city);
  }

  grabWeather(city) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`)
      .then(response => response.json())
      .then(json => {
        this.setState({description: json.list[0].weather[0].description})
      });
  }

  render() {
    return (
      <div>
        <h1>Weather for {this.state.city}!</h1>
        <h2>{this.state.description}</h2>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));