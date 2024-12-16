import React, { useState, useEffect } from "react";
import api from "../services/apiService";

function CrudComponent() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Cargar datos al iniciar
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.getItems();
      setItems(response.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const addItem = async () => {
    if (newItem.trim()) {
      try {
        await api.addItem({ name: newItem });
        setNewItem("");
        fetchData();
      } catch (error) {
        console.error("Error al agregar item:", error);
      }
    }
  };

  const deleteItem = async (id) => {
    try {
      await api.deleteItem(id);
      fetchData();
    } catch (error) {
      console.error("Error al eliminar item:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Agregar un nuevo item"
      />
      <button onClick={addItem}>Agregar</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudComponent;
