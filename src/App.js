import { useState } from 'react';
import './App.css';

function App() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  const [newFood, setNewFood] = useState(""); // Ajout d'un état pour stocker le nouvel aliment

  function handleAddFodd() {
    if (newFood.trim() !== "") {
      setFoods([...foods, newFood]); // Ajouter le nouvel aliment à la liste existante
      setNewFood(""); // Réinitialiser le champ pour le nouvel aliment
    }
  }

  function handleRemoveFodd(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div className="App">
      <h2>List of food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFodd(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter food name"
        value={newFood}
        onChange={(e) => setNewFood(e.target.value)}
      />
      <button onClick={handleAddFodd}>Add Food</button>
    </div>
  );
}

export default App;
