import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import AddExpense from './Components/AddExpense';
import ExpenseHistory from './Components/ExpenseHistory';
import './MainContent.css';
import Analysis from './Components/Analysis';
import Card2 from './Components/Card2';

const initialCategories = [
  { name: "Food", value: "100" },
  { name: "Electronics", value: "200" },
  { name: "Bills", value: "150" },
  { name: "Clothes", value: "250" },
  { name: "Miscellaneous", value: "200" }
];

const initialExpenses = [
  { number: "Sr.no", description: "Description", price: "Price", category: "Category", time: "Time", header: true },
  { number: 1, description: "Lunch", price: 15, category: "Food", time: "12:30 PM", header: false },
  { number: 2, description: "Clothes", price: 50, category: "Clothing", time: "3:00 PM", header: false },
  { number: 3, description: "Utilities", price: 100, category: "Bills", time: "5:45 PM", header: false },
  { number: 4, description: "Headphones", price: 80, category: "Electronics", time: "10:00 AM", header: false },
  { number: 5, description: "Dinner", price: 20, category: "Food", time: "7:00 PM", header: false },
  { number: 6, description: "Shoes", price: 70, category: "Clothing", time: "2:15 PM", header: false },
  { number: 7, description: "Internet Bill", price: 60, category: "Bills", time: "9:30 AM", header: false },
  { number: 8, description: "Phone Charger", price: 10, category: "Electronics", time: "4:20 PM", header: false },
  { number: 9, description: "Breakfast", price: 10, category: "Food", time: "8:00 AM", header: false },
  { number: 10, description: "T-Shirt", price: 25, category: "Clothing", time: "1:30 PM", header: false },
  { number: 11, description: "Rent", price: 500, category: "Bills", time: "6:00 PM", header: false },
  { number: 12, description: "Laptop", price: 700, category: "Electronics", time: "11:45 AM", header: false },
  { number: 13, description: "Snacks", price: 5, category: "Food", time: "3:45 PM", header: false },
  { number: 14, description: "Jacket", price: 60, category: "Clothing", time: "7:30 PM", header: false },
  { number: 15, description: "Electricity Bill", price: 80, category: "Bills", time: "10:30 AM", header: false }
];

const initialCategoricalSpend = {
  "Food": 65,
  "Electronics": 790,
  "Clothes": 205,
  "Bills": 740,
  "Miscellaneous": 450
};

export default function MainContent() {
  const [categories, setCategories] = useState(initialCategories);
  const [totalSpent, setTotalSpent] = useState(2250);
  const [dailyLimit, setDailyLimit] = useState(10000);
  const [expense, setExpense] = useState(initialExpenses);
  const [categoricalSpend, setCategoricalSpend] = useState(initialCategoricalSpend);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedExpense = localStorage.getItem('expense');
    if (savedExpense) {
      setExpense(JSON.parse(savedExpense));
    }
    const savedCategories = localStorage.getItem('categories');
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }
    const savedTotalSpent = localStorage.getItem('totalSpent');
    if (savedTotalSpent) {
      setTotalSpent(JSON.parse(savedTotalSpent));
    }
    const savedDailyLimit = localStorage.getItem('dailyLimit');
    if (savedDailyLimit) {
      setDailyLimit(JSON.parse(savedDailyLimit));
    }
    const savedCategoricalSpend = localStorage.getItem('categoricalSpend');
    if (savedCategoricalSpend) {
      setCategoricalSpend(JSON.parse(savedCategoricalSpend));
    }
  }, []);

  // Save data to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem('expense', JSON.stringify(expense));
  }, [expense]);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('totalSpent', JSON.stringify(totalSpent));
  }, [totalSpent]);

  useEffect(() => {
    localStorage.setItem('dailyLimit', JSON.stringify(dailyLimit));
  }, [dailyLimit]);

  useEffect(() => {
    localStorage.setItem('categoricalSpend', JSON.stringify(categoricalSpend));
  }, [categoricalSpend]);

  // Reset data function
  const resetData = () => {
    localStorage.clear();
    setCategories(initialCategories);
    setTotalSpent(2250);
    setDailyLimit(10000);
    setExpense(initialExpenses);
    setCategoricalSpend(initialCategoricalSpend);
  };

  return (
    <div className='mainContent'>
      <div className='col1'>
        <div className='cards'>
          <Card totalSpent={totalSpent} dailyLimit={dailyLimit} resetData={resetData} /> {/* Pass resetData as a prop */}
          <Card2 dailyLimit={dailyLimit} setDailyLimit={setDailyLimit} categories={categories} setCategories={setCategories} />
        </div>
        <ExpenseHistory expense={expense} setExpense={setExpense} categories={categories} setCategories={setCategories} />
      </div>
      <div className='col2'>
        <div className='newExpense'>
          <AddExpense expense={expense} setExpense={setExpense} setCategoricalSpend={setCategoricalSpend} categoricalSpend={categoricalSpend}
            totalSpent={totalSpent} setTotalSpent={setTotalSpent} categories={categories} setCategories={setCategories} />
        </div>
        <Analysis categoricalSpend={categoricalSpend} categories={categories} />
      </div>
    </div>
  );
}
