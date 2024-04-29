import React, { useState } from 'react'
import './Card2.css'
export default function Card2({ dailyLimit, setDailyLimit, categories, setCategories }) {
    const [newDailyLimit, setNewDailyLimit] = useState('');
    const [newCategory, setNewCategory] = useState('');

    function handleNewDailyLimit(e) {
        setNewDailyLimit(e.target.value);
    }

    function handleChange() {
        if (!newDailyLimit) {
            alert('Please fill the field correctly');
            return;
        }
        if (newDailyLimit < 1000) {
            alert("Minimum amount should be 1000");
            setNewDailyLimit('');
            return;
        }
        setDailyLimit(Number(newDailyLimit));
        setNewDailyLimit('');
    }

    function handleNewCategory(e) {
        setNewCategory(e.target.value);
    }

    function AddNewCategory() {
        if (!newCategory) {
            alert("Please enter a category");
            return;
        }
        const newCateg = {
            name: newCategory,
            value: "0"
        };
        const updatedCategories = [...categories, newCateg];
        setCategories(updatedCategories);
        setNewCategory('');
    }

    return (
        <div className='Card2'>
            <h2>Settings</h2>
            <div className='mainCards'>
                <div className="changeLimit">
                    <p style={{marginLeft:"5%"}}>Change daily limit</p>
                    <input
                        type='number'
                        value={newDailyLimit}
                        min="1000"
                        onChange={handleNewDailyLimit}
                        placeholder="Enter new daily limit"
                    />
                    <button onClick={handleChange}>Save</button>
                </div>
                <div className='addCategory'>
                    <p style={{marginLeft:"5%"}}>Add new category</p>
                    <input
                        type='text'
                        value={newCategory}
                        onChange={handleNewCategory}
                        placeholder="Enter new category name"
                    />
                    <button onClick={AddNewCategory}>Add</button>
                </div>
            </div>
        </div>
    );
}