"use client"
import { useState } from 'react';

export default function FruitList() {
  const [fruits, setFruits] = useState([]);
  const [newFruitName, setNewFruitName] = useState('');
  const [newFruitColor, setNewFruitColor] = useState('');
  const [filterText, setFilterText] = useState('');

  const addFruit = () => {
    if (newFruitName.trim() !== '') {
      setFruits([...fruits, { name: newFruitName, color: newFruitColor }]);
      setNewFruitName('');
      setNewFruitColor('');
    }
  };

  const updateFruit = (index, updatedName, updatedColor) => {
    const updatedFruits = [...fruits];
    updatedFruits[index].name = updatedName;
    updatedFruits[index].color = updatedColor;
    setFruits(updatedFruits);
  };

  const deleteFruit = (index) => {
    const updatedFruits = [...fruits];
    updatedFruits.splice(index, 1);
    setFruits(updatedFruits);
  };

  const filteredFruits = fruits.filter(
    (fruit) =>
      fruit.name.toLowerCase().includes(filterText.toLowerCase()) ||
      fruit.color.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <h1>Fruit List with CRUD</h1>
      <h2>Add New Fruit</h2>
      <div>
        <label htmlFor="fruitName">Name:</label>
        <input
          type="text"
          id="fruitName"
          value={newFruitName}
          onChange={(e) => setNewFruitName(e.target.value)}
        />
        <label htmlFor="fruitColor">Color:</label>
        <input
          type="text"
          id="fruitColor"
          value={newFruitColor}
          onChange={(e) => setNewFruitColor(e.target.value)}
        />
        <button onClick={addFruit}>Add Fruit</button>
      </div>
      <h2>Filter</h2>
      <input
        type="text"
        placeholder="Enter keyword to filter"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>
            <span style={{ color: fruit.color }}>{fruit.name}</span> - {fruit.color}
            <button
              onClick={() => {
                const updatedName = prompt('Enter a new name:', fruit.name);
                const updatedColor = prompt('Enter a new color:', fruit.color);
                updateFruit(index, updatedName, updatedColor);
              }}
            >
              Edit
            </button>
            <button onClick={() => deleteFruit(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
