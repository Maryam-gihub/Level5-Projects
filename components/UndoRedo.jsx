import React, { useState } from "react";

const UndoRedo = () => {
    const [action, setAction] = useState("");
    const [undoStack, setUndoStack] = useState([]);
    const [redoStack, setRedoStack] = useState([]);
    const addAction = () => {
        if (!action.trim()) return;
        setUndoStack([...undoStack, action]);
        setRedoStack([]); 
        setAction("");
    };
    const handleUndo = () => {
        if (undoStack.length === 0) return;
        const lastAction = undoStack[undoStack.length - 1];
        setUndoStack(undoStack.slice(0, -1));
        setRedoStack([...redoStack, lastAction]);
    };
    const handleRedo = () => {
        if (redoStack.length === 0) return;
        const lastUndone = redoStack[redoStack.length - 1];
        setRedoStack(redoStack.slice(0, -1));
        setUndoStack([...undoStack, lastUndone]);
    };
    return (
        <div className="min-h-screen bg-slate-200 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl shadow-lg w-96 flex flex-col gap-4">
                <h2 className="text-xl font-bold text-center">Undo–Redo System</h2>
                <input
                    type="text"
                    placeholder="Type an action..."
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                    className="border px-3 py-2 rounded"
                />
                <button
                    onClick={addAction}
                    disabled={!action}
                    className="bg-blue-500 text-white py-2 rounded disabled:bg-gray-300"
                >
                    Add Action
                </button>
                <div className="flex gap-2">
                    <button
                        onClick={handleUndo}
                        disabled={undoStack.length === 0}
                        className="flex-1 bg-red-500 text-white py-2 rounded disabled:bg-gray-300"
                    >
                        Undo
                    </button>
                    <button
                        onClick={handleRedo}
                        disabled={redoStack.length === 0}
                        className="flex-1 bg-green-500 text-white py-2 rounded disabled:bg-gray-300"
                    >
                        Redo
                    </button>
                </div>
                <div>
                    <h3 className="font-semibold">Current Actions:</h3>
                    <ul className="list-disc ml-5 text-sm">
                        {undoStack.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UndoRedo;
