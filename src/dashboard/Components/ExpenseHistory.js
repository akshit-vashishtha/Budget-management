import React,{useState} from 'react'
import './ExpenseHistory.css'
import HistoryLog from './HistoryLog'
export default function ExpenseHistory({expense,setExpense,categories,setCategories}) {
  const [category, setCategory] = useState('Select');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredExpenses = expense.filter(exp =>
    exp.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === 'Select' || exp.category === category)
  );

  // Ensure the first element is included in the filtered results
  const combinedExpenses = expense.length > 0 
    ? [expense[0], ...filteredExpenses.filter(exp => exp !== expense[0])] 
    : filteredExpenses;

  return (
    <div className='ExpenseHistory'>
      <h1>Expense Log</h1>
      <div className='SearchAndSort'>
        <input
          type="search"
          id="gsearch"
          name="gsearch"
          value={searchTerm}
          onChange={handleSearch}
          placeholder='Search'
          className='Search'
        />
        <div className='Sort'>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
            className='formele'
          >
            <option value="Select">Select</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className='expenselog'>
        <HistoryLog expense={combinedExpenses} setExpense={setExpense} />
      </div>
    </div>
  );
}
