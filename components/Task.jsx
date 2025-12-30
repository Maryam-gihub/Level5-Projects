import React, { useState } from 'react'

const Task = () => {
    const [task, setTask] = useState("")
    const [queue, setQueue] = useState([]);
    // const [processingTask, setProcessingTask] = useState(null);
    const [processingIndex, setProcessingIndex] = useState(null);



    const handleAddTask = () => {
        if (!task)
            return;
        setQueue([...queue, task]);
        setTask("");
    };
    const handleProcessTask = (index) => {
        if (index !== 0) return;

        setProcessingIndex(index);

        setTimeout(() => {
            setQueue((prevQueue) => prevQueue.slice(1));
            setProcessingIndex(null);
        }, 1500);
    };

    // const handleProcessTask = () => {
    //     if (queue.length === 0)
    //         return;
    //     const firstTask = queue[0];
    //     setProcessingTask(firstTask);

    //     setTimeout(() => {
    //         setQueue(queue.slice(1)); 
    //         setProcessingTask(null);  
    //     }, 1500);
    // };



    return (
        <div className='h-screen bg-green-200 flex justify-center items-center'>
            <div className='bg-gray-100 p-4 w-5/6 lg:w-1/3 rounded-xl drop-shadow-xl flex flex-col gap-4'>
                <h2 className='text-2xl text-center font-bold pb-10'>Task-Scheduler</h2>
                <input type="" placeholder='Enter your task...' className='w-full h-min rounded-md border px-3 py-3 text-sm'
                    onChange={(e) => setTask(e.target.value)} value={task} />
                <div className='flex justify-end '>
                    <button onClick={handleAddTask} className="task-btn">Add Task</button>
                </div>
                <table className="w-full border-collapse mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-2 py-1 text-left">S/N</th>
                            <th className="border px-2 py-1 text-left">Task</th>
                            <th className="border px-2 py-1 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {queue.map((item, index) => (
                            <tr key={index} className="bg-white hover:bg-gray-50">
                                <td className="border px-2 py-1">{index + 1}</td>
                                <td className="border px-2 py-1">{item}</td>
                                <td className="border px-2 py-1">
                                    <button
                                        onClick={() => handleProcessTask(index)}
                                        disabled={index !== 0 || processingIndex !== null}
                                        className={`px-2 py-1 rounded text-white ${index === 0 && processingIndex === null
                                                ? "bg-green-500 hover:bg-green-600"
                                                : "bg-gray-300 cursor-not-allowed"
                                            }`}
                                    >
                                        {processingIndex === index ? "Processing..." : "Process"}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Task