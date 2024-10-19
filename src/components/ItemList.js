import React, { useState } from 'react';
import Item from './Item';

const initialItems = [
    { name: "Apple", brand: "Brand A", price: "₱ 2", weight: "1 kg", store: "Store A", category: "Fruits", quantity: 5, image: "/img/apple.jpg", checked: false },
    { name: "Mango", brand: "Brand A", price: "₱ 2", weight: "1 kg", store: "Store A", category: "Fruits", quantity: 5, image: "/img/amgo1.jpg", checked: false },
    { name: "Banana", brand: "Brand F", price: "₱ 2", weight: "1 kg", store: "Store F", category: "Fruits", quantity: 5, image: "/img/banana.jpg", checked: false },
    { name: "Melon", brand: "Brand F", price: "₱ 2", weight: "1 kg", store: "Store F", category: "Fruits", quantity: 5, image: "/img/melon.jpg", checked: false },

    { name: "Squash", brand: "Brand B", price: "₱ 1", weight: "500 g", store: "Store B", category: "Vegetables", quantity: 3, image: "/img/squash.jpg", checked: false },
    { name: "Carrot", brand: "Brand B", price: "₱ 1", weight: "500 g", store: "Store B", category: "Vegetables", quantity: 3, image: "/img/carrot.jpg", checked: false },
    { name: "Egg Plant", brand: "Brand B", price: "₱ 1", weight: "500 g", store: "Store B", category: "Vegetables", quantity: 3, image: "/img/egg.jpg", checked: false },
    { name: "Brocoli", brand: "Brand B", price: "₱ 1", weight: "500 g", store: "Store B", category: "Vegetables", quantity: 3, image: "/img/brocoli.jpg", checked: false },

    { name: "Milk", brand: "Brand C", price: "₱ 3", weight: "1 L", store: "Store C", category: "Dairy", quantity: 2, image: "/img/gatas.jpg", checked: false },
    { name: "Dairy Milk", brand: "Brand C", price: "₱ 3", weight: "1 L", store: "Store C", category: "Dairy", quantity: 2, image: "/img/dairy.jpg", checked: false },
    { name: "Cockies", brand: "Brand C", price: "₱ 3", weight: "1 L", store: "Store C", category: "Dairy", quantity: 2, image: "/img/koko.jpg", checked: false },
    { name: "Burger", brand: "Brand C", price: "₱ 3", weight: "1 L", store: "Store C", category: "Dairy", quantity: 2, image: "/img/burger.jpg", checked: false },

    { name: "Beef", brand: "Brand D", price: "₱ 10", weight: "1 kg", store: "Store D", category: "Meat", quantity: 1, image: "/img/baka.jpg", checked: false },
    { name: "Pork", brand: "Brand D", price: "₱ 10", weight: "1 kg", store: "Store D", category: "Meat", quantity: 1, image: "/img/pokes.jpg", checked: false },
    { name: "Chicken", brand: "Brand D", price: "₱ 10", weight: "1 kg", store: "Store D", category: "Meat", quantity: 1, image: "/img/manok.jpg", checked: false },
    { name: "Fish", brand: "Brand D", price: "₱ 10", weight: "1 kg", store: "Store D", category: "Meat", quantity: 1, image: "/img/Fish.jpg", checked: false },

    { name: "Quinoa", brand: "Brand E", price: "₱ 5", weight: "2 kg", store: "Store E", category: "Grains", quantity: 4, image: "/img/qwe.jpg", checked: false },
    { name: "Brown Rice", brand: "Brand E", price: "₱ 5", weight: "2 kg", store: "Store E", category: "Grains", quantity: 4, image: "/img/Brown Rice.jpg", checked: false },
    { name: "Rice", brand: "Brand E", price: "₱ 5", weight: "2 kg", store: "Store E", category: "Grains", quantity: 4, image: "/img/bugas.jpg", checked: false },
    { name: "Millet", brand: "Brand E", price: "₱ 5", weight: "2 kg", store: "Store E", category: "Grains", quantity: 4, image: "/img/Millet.jpg", checked: false },
    
    
];
const ItemList = ({ selectedCategory, searchTerm }) => {
    const [items, setItems] = useState(initialItems);

    // Filter items based on selected category and search term
    const filteredItems = items.filter(item => {
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  item.store.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearchTerm;
    });

    // Group items by category
    const groupedItems = filteredItems.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
    }, {});

    // Handle edit functionality
    const handleEdit = (itemName) => {
        const itemToEdit = items.find(item => item.name === itemName);
        const updatedName = prompt("Edit item name:", itemToEdit.name);
        if (updatedName) {
            const updatedItems = items.map(item =>
                item.name === itemName ? { ...item, name: updatedName } : item
            );
            setItems(updatedItems);
        }
    };

    // Handle delete functionality
    const handleDelete = (itemName) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete ${itemName}?`);
        if (confirmDelete) {
            const updatedItems = items.filter(item => item.name !== itemName);
            setItems(updatedItems);
        }
    };

    // Handle checkbox toggle
    const handleCheck = (itemName) => {
        const updatedItems = items.map(item =>
            item.name === itemName ? { ...item, checked: !item.checked } : item
        );
        setItems(updatedItems);
    };

    return (
        <div className="item-list">
            {Object.keys(groupedItems).map(category => (
                <div key={category} className="category-box">
                    <h2 className="category-title">{category}</h2>
                    <div className="item-list"> {/* Wrap items in item-list class for grid */}
                        {groupedItems[category].map((item, index) => (
                            <div key={index} className="item">
                                <input 
                                    type="checkbox" 
                                    checked={item.checked} 
                                    onChange={() => handleCheck(item.name)} 
                                />
                                <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
                                    <Item
                                        name={item.name}
                                        price={item.price}
                                        quantity={item.quantity}
                                        image={item.image}
                                        onEdit={() => handleEdit(item.name)} 
                                        onDelete={() => handleDelete(item.name)} 
                                    />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {filteredItems.length === 0 && <p>No items found.</p>}
        </div>
    );
};

export default ItemList;