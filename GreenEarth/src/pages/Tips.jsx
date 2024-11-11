// src/TipsList.jsx
import React, { useState } from "react";

// Dummy data tips
const initialTipsData = [
  {
    id: 1,
    title: "Reduce Plastic Use",
    description: "Avoid single-use plastics",
  },
  { id: 2, title: "Save Water", description: "Take shorter showers" },
  {
    id: 3,
    title: "Recycle Properly",
    description: "Separate recyclables from waste",
  },
  {
    id: 4,
    title: "Use Energy Efficient Appliances",
    description: "Save energy and reduce bills",
  },
  { id: 5, title: "Plant Trees", description: "Help combat climate change" },
];

const TipsList = ({ isLoggedIn }) => {
  const [tips, setTips] = useState(initialTipsData);
  const [editingTip, setEditingTip] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [newTipTitle, setNewTipTitle] = useState("");
  const [newTipDescription, setNewTipDescription] = useState("");

  const handleEdit = (tip) => {
    setEditingTip(tip.id);
    setEditedTitle(tip.title);
    setEditedDescription(tip.description);
  };

  const handleSave = (id) => {
    setTips(
      tips.map((tip) =>
        tip.id === id
          ? { ...tip, title: editedTitle, description: editedDescription }
          : tip
      )
    );
    setEditingTip(null);
  };

  const handleDelete = (id) => {
    setTips(tips.filter((tip) => tip.id !== id));
  };

  const handleAddTip = () => {
    const newTip = {
      id: tips.length + 1, // Generate a new ID based on the current length
      title: newTipTitle,
      description: newTipDescription,
    };
    setTips([...tips, newTip]);
    setNewTipTitle("");
    setNewTipDescription("");
  };

  return (
    <div className="flex flex-col items-center p-20 bg-green-50">
      <h2 className="text-3xl font-bold text-green-600 mb-8">
        Green Earth Tips
      </h2>

      {isLoggedIn && (
        <div className="mb-10 w-full max-w-lg">
          <h3 className="text-2xl font-semibold mb-4">Add a New Tip</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Title"
              value={newTipTitle}
              onChange={(e) => setNewTipTitle(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Description"
              value={newTipDescription}
              onChange={(e) => setNewTipDescription(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md p-2"
            />
            <button
              onClick={handleAddTip}
              className="bg-green-500 text-white rounded-md px-6 py-2 hover:bg-green-600"
            >
              Add Tip
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-between w-full max-w-6xl items-start">
        <img
          src="/img/tree.png"
          alt="Tree"
          className="h-48 w-1/5 object-cover"
        />

        <div className="flex-grow mx-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-green-600 uppercase">
                    Title
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-green-600 uppercase">
                    Description
                  </th>
                  {isLoggedIn && (
                    <th className="px-4 py-3 text-right text-sm font-medium text-green-600 uppercase">
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {tips.map((tip) => (
                  <tr
                    key={tip.id}
                    className="odd:bg-white even:bg-green-100 hover:bg-green-200"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-800">
                      {editingTip === tip.id ? (
                        <input
                          type="text"
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          className="border border-gray-300 rounded-md p-1"
                        />
                      ) : (
                        tip.title
                      )}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      {editingTip === tip.id ? (
                        <input
                          type="text"
                          value={editedDescription}
                          onChange={(e) => setEditedDescription(e.target.value)}
                          className="border border-gray-300 rounded-md p-1"
                        />
                      ) : (
                        tip.description
                      )}
                    </td>
                    {isLoggedIn && (
                      <td className="px-4 py-4 text-right text-sm font-medium space-x-2">
                        {editingTip === tip.id ? (
                          <button
                            onClick={() => handleSave(tip.id)}
                            className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEdit(tip)}
                            className="px-3 py-1 text-blue-600 hover:text-blue-800"
                          >
                            Edit
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(tip.id)}
                          className="px-3 py-1 text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <img
          src="/img/bumi1.jpg"
          alt="Tree"
          className="h-48 w-1/5 object-cover"
        />
      </div>

      <p className="mt-8 text-gray-600 text-center">
        Let's work together to make our planet greener!
      </p>
    </div>
  );
};

export default TipsList;
