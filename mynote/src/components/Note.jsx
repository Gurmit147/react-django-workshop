import React from "react";


function Note({ note, onDelete, onEdit }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
       
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">{note.content}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">{formattedDate}</p>
            <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => onDelete(note.id)}>
                Delete
            </button>

            <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => onEdit(note.id)}>
                Edit
            </button>
            
        </div>
       
    );
}

export default Note