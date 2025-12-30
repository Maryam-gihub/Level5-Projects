import React  from 'react'
import { useState } from "react"

const ContactManager = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [contacts, setContacts] = useState(new Map());

    const addContact = () => {
        if (!name || !phone) return;

        setContacts(new Map(contacts.set(name, phone)));
        setName("");
        setPhone("");
    };

    const downloadJSON = () => {
        const data = [...contacts.entries()].map(([name, phone]) => ({ name, phone }));
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'contacts.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };





    return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl shadow-md w-96 flex flex-col gap-4">
                <h2 className="text-xl font-bold text-center">Contact Manager</h2>
                <input
                    type="text" placeholder="Contact name" className="border px-3 py-2 rounded"
                    value={name} onChange={(e) => setName(e.target.value)} 
                />
                <input
                    type="text" placeholder="Phone number" className="border px-3 py-2 rounded"
                    value={phone} onChange={(e) => setPhone(e.target.value)} 
                />
                <button
                    className="bg-blue-500 text-white py-2 rounded"
                    onClick={addContact}
                >
                    Add Contact
                </button>
                <ul className="text-sm">
                    {[...contacts.entries()].map(([key, value]) => (
                        <li key={key}>
                            <b>{key}</b>: {value}
                        </li>

))}
                <button
                    onClick={downloadJSON}
                    className="bg-green-500 text-white py-2 rounded"
                >
                    Download JSON
                </button>
                </ul>
            </div>
        </div>
    )
}

export default ContactManager