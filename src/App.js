import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <form>
      <div>
      <h3>Alkometri</h3>
        <label>Paino: </label>
        <input name="weight" type="number" step="1"></input>
      </div>
      <div>
        <label>Annokset: </label>
        <select name="Annos">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label>Aika: </label>
        <select name="Aika">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label>Sukupuoli: </label>
        <input type="radio" name="Sukupuoli" value="Nainen" defaultChecked/>Nainen<label></label>
        <input type="radio" name="Sukupuoli" value="Mies" /><label>Mies</label>
      </div>
      <div>
        <output></output>
      </div>
      <button>Laske!</button>
    </form>
  );
}

export default App;
