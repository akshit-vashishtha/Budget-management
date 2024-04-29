import React,{useState,useEffect} from 'react'
import './AddExpense.css'
export default function AddExpense({expense,setExpense,setCategoricalSpend,categoricalSpend,totalSpent,setTotalSpent,categories,setCategories}) {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Select');
  const [time, setTime] = useState('');

  useEffect(() => {
    console.log(categoricalSpend);
  }, [categoricalSpend]); 

  function addExpense() {
    if (!description || !price || category === 'Select') {
      alert('Please fill in all fields');
      return;
    }

    if (!time) {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      var newTime=`${hours}:${minutes}`;
    }
    // Create a new expense object
    const newExpense = {
      number:expense.length,
      description,
      price: Number(price),
      category,
      time: time ? time : newTime,
      header:false
    };

    // Add the new expense to the expense array
    setExpense([expense[0],newExpense,...expense.slice(1)]);

    // if (category !== 'Select' && price !== '' && !isNaN(Number(price))) {
    //   setCategoricalSpend(prevState => ({
    //     ...prevState,
    //     [category]: prevState[category] + Number(price)
    //   }));
    // }

    if (category !== 'Select' && price !== '' && !isNaN(Number(price))) {
      // Find the category object to update
      const categoryToUpdate = categories.find(categ => categ.name === category);
      
      // Check if the category exists
      if (categoryToUpdate) {
        // Update the value of the category object
        const updatedValue = Number(categoryToUpdate.value) + Number(price);
        // Create a new array with the updated category object
        const updatedCategories = categories.map(categ =>
          categ.name === category ? { ...categ, value: updatedValue } : categ
        );
        // Update the categories state with the new array
        setCategories(updatedCategories);
      }
    }

    

    console.log(categoricalSpend)
    setTotalSpent(Number(totalSpent) + Number(price));

    // Clear input fields after adding expense
    setDescription('');
    setPrice('');
    setCategory('Select');
    setTime('');
  }
  return (
    <div className='main'>
      <div className='form'>
        <h1>ADD NEW EXPENSE</h1>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className='formele' /><br/>
        <label htmlFor="price">Price</label><br />
        <input type="number" id="price" name="price" min="1" value={price} onChange={(e) => setPrice(e.target.value)} className='formele' /><br />
        <label htmlFor="category">Category</label>
        <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} className='formele'>
        <option value="Select">Select</option>
          {categories.map((categories)=>
          <option value={categories.name}>{categories.name}</option>
        )}
          {/* <option value="Select">Select</option>
          <option value="Food">Food</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Electronics">Electronics</option>
          <option value="Miscellaneous">Miscellaneous</option> */}
        </select><br />
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} className='formele'></input>
        <button onClick={addExpense}>Add Expense</button>
      </div>
    </div>
  );
}