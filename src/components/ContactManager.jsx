import React, { useState, useEffect } from "react";

const ContactManager = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? new Map(JSON.parse(saved)) : new Map();
  });

  const addContact = () => {
    if (!name || !phone) return;

    const newContacts = new Map(contacts);
    newContacts.set(name, phone);

    setContacts(newContacts);
    setName("");
    setPhone("");
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify([...contacts]));
  }, [contacts]);

  return (
    <div className="min-h-screen bg-green-200 flex justify-center items-center">
      <div className="bg-gray-100 p-4 w-5/6 lg:w-1/3 rounded-xl drop-shadow-xl flex flex-col gap-4 w-96 p-6">
        <h2 className="text-xl font-bold text-center">Contact Manager</h2>

        <input
          type="text"
          placeholder="Contact name"
          className="border px-3 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone number"
          className="border px-3 py-2 rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          onClick={addContact}
          className="bg-green-500 text-white py-2 rounded"
        >
          Add Contact
        </button>

        <ul className="text-sm">
          {[...contacts.entries()].map(([key, value]) => (
            <li key={key}>
              <b>{key}</b>: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactManager;
