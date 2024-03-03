import { useState } from "react";
import ListItem from "./ListItem";

function ShoppingList() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, input]);
    setInput("");
  };

  const handleDelete = (deletedItem) => {
    const updatedList = list.filter((item) => item !== deletedItem);
    setList(updatedList);
  };

  const handleUpdate = (oldValue, newValue) => {
    const updatedList = list.map((item) =>
      item === oldValue ? newValue : item
    );
    setList(updatedList);
  };

  return (
    <div className="ShoppingContainer ">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Listeyi yaz"
          value={input}
          onChange={handleChange}
          className="inputText px-4 py-2 border"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white">
          Kaydet
        </button>
      </form>
      {list.length > 0 && (
        <table className="table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Alışveriş Listesi</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">
                  <ListItem
                    input={item}
                    key={index}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ShoppingList;
