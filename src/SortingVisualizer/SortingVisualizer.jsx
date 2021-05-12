import React from 'react';
import {mergeSort} from '../SortingAlgorithms/mergeSortAlgorithm.js';
import {quickSort} from "../SortingAlgorithms/quickSortAlgorithm";
import { bubbleSort } from '../SortingAlgorithms/bubbleSortAlgorithm.js';
import './SortingVisualizer.css';

// This is the main color of the array bars.
const PRIMARY_COLOR = '#2dda22';


export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      number: 100,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  async resetArray() {
    const array = [];
    console.log(this.state.number);
    for (let i = 0; i < this.state.number; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({array});
  }

  callMergeSort() {

    let array = this.state.array

    if (array.length <= 1) {
      return array;
    }

    mergeSort(array);
  }

  callQuickSort() {
    let array = this.state.array

    if (array.length <= 1) {
      return array;
    }

    quickSort(array, 0, array.length - 1);
    
  }

  callBubbleSort() {
    let array = this.state.array;

    if (array.length <= 1) {
      return array;
    }

    bubbleSort(array, array.length);

  }

  async setNumber() {
    await Promise.all([
      this.setState({
        number: document.getElementById('setNumberInput').value,
      }),
    ]);
    
    await this.resetArray();
  }

  render() {
    const {array} = this.state;

    return (
        <div className="page-container">
            <div className="button-container">
                <button className="selectionButton" onClick={() => this.resetArray()}>Generate New Array</button>
                <button className="selectionButton" onClick={() => this.callMergeSort()}>Merge Sort</button>
                <button className="selectionButton" onClick={() => this.callQuickSort()}>Quick Sort</button>
                <button className="selectionButton" onClick={() => this.callBubbleSort()}>Bubble Sort</button>
                <input id="setNumberInput" className="selectionButton" value={this.state.number} onChange={() => this.setNumber()} />
            </div>

            <div className="array-container">
                {array.map((value, idx) => (
                <div
                    id= {
                      `bar-${idx}`
                    }
                    className="array-bar transition"
                    key={idx}
                    style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: `${value}px`,
                    }}></div>
                ))}
            </div>
        </div>
    );
  }
}


// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}









