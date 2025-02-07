import React, { useState, useTransition } from 'react';

function App() {
  // Sample large list of items
  const [items] = useState(Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`));
  console.log(items)
  
  // State for the filter input and filtered items
  const [filter, setFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  
  // useTransition hook to manage the transition
  const [isPending,startTransition] = useTransition();   

  // use transistion has three params---isPending is  boolean 
  
  // Handle the filter input change
  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    
    // Start the transition for filtering
    startTransition(() => {
      const lowercasedFilter = value.toLowerCase();
      const newFilteredItems = items.filter(item =>
        item.toLowerCase().includes(lowercasedFilter)
      );
      setFilteredItems(newFilteredItems);
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter items..."
      />
      {isPending && <h1>Loading...</h1>}
      <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
