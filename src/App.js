import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('female');
  const [result, setResult] = useState(0);
  

  function handleSubmit(e) {
    e.preventDefault();
    let promilles = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let grams_left = grams - (burning * time);
    if (gender === 'male') {
      promilles = grams_left / (weight * 0.7);
    }
    else if (gender === 'female') {
      promilles = grams_left / (weight * 0.6);
    }
    if (promilles < 0) {
      promilles = 0;
    }
    console.log("test "+promilles);
    setResult(promilles);
  }
  

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
      <h3>Alkometri</h3>
        <label>Paino: </label>
        <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Pullot: </label>
        <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
        </select>
      </div>
      <div>
        <label>Aika: </label>
        <select name="time" value={time} onChange={e =>setTime(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          
        </select>
      </div>
      <div>
        <label>Sukupuoli: </label>
        <input type="radio" name="gender" value="female" defaultChecked onChange={e =>setGender(e.target.value)}/>Nainen<label></label>
        <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} /><label>Mies</label>
      </div>
      <div>
        <output>{result.toFixed(2)}</output>
      </div>
      <div>
      <button type="button" onClick={handleSubmit}>Laske!</button>
      </div>
    </form>
    </>
  );
}

export default App;
