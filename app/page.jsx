// app/page.jsx
"use client";

import { useState } from "react";
import Canvas from "../components/Canvas";
import ClothingItem from "../components/ClothingItem";
import ShoppingCart from "../components/ShoppingCart";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const clothingIcons = [
  { id: 1, icon: "/clothing-icons/shirt.png" },
  { id: 2, icon: "/clothing-icons/pants.png" },
  { id: 3, icon: "/clothing-icons/shoes.png" },
];

export default function Home() {
  const [items, setItems] = useState([]);

  /*const addItem = (item) => {
    setItems([
      ...items,
      {
        ...item,
        id: `${item.id}-${Date.now()}`, 
        top: 50,
        left: 50,
        zIndex: items.length + 1, 
      },
    ]);
  };*/
  const addItem = (item) => {
    const spacing = 20; // Space between items
    const initialTop = 50; // Starting top position
    const initialLeft = 50; // Starting left position
    const initialWidth = 20; // Width of the item
  
    setItems([
      ...items,
      {
        ...item,
        id: `${item.id}-${Date.now()}`,
        with: initialWidth + items.initialWidth * spacing, // Offset width dynamically
        top: initialTop + items.length * spacing, // Offset top position dynamically
        left: initialLeft + items.length * spacing, // Offset left position dynamically
        zIndex: items.length + 1, // Ensure new item is on top
      },
    ]);
  };


  const updateItemPosition = (id, position) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, ...position } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-500 via-purple-500
               to-pink-500">
        <h1 className="text-2xl">Outfit Builder</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            {clothingIcons.map((item) => (
              <ClothingItem
                key={item.id}
                id={item.id}
                icon={item.icon}
                onClickItem={() => addItem(item)}
              />
            ))}
          </div>
          <Canvas
            items={items}
            updateItemPosition={updateItemPosition}
            deleteItem={deleteItem}
          />
        </div>
        <ShoppingCart items={items} />
      </div>
    </DndProvider>
  );
}