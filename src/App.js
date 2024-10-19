import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import ItemList from './components/ItemList';
import Footer from './components/Footer';

// Greeting Component
const Greeting = ({ name }) => {
    return (
        <div className="greeting">
            <h1>Welcome, {name}!</h1>
            <p>We're glad to have you here! Enjoy your time and feel free to explore.</p>
        </div>
    );
};

function App() {
    // State to track selected category
    const [selectedCategory, setSelectedCategory] = useState('All');

    // State to track search term
    const [searchTerm, setSearchTerm] = useState('');

    // Function to update the selected category
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="App">
            <Header />

            {/* Greeting Component */}
            <Greeting name="Felix" />

            {/* Pass handleCategoryChange to CategoryNav, along with searchTerm and setSearchTerm */}
            <CategoryNav 
                onCategoryChange={handleCategoryChange}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            {/* Pass selectedCategory and searchTerm to ItemList */}
            <ItemList selectedCategory={selectedCategory} searchTerm={searchTerm} />
            
            <Footer />
        </div>
    );
}

export default App;
