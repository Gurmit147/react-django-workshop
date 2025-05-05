import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const updateNote = (e) => {
        e.preventDefault();
        api.put(`/api/notes/update/${id}/`, { content, title })
            .then((res) => {
                if (res.status === 200) {
                    alert("Note updated!");
                    navigate("/");
                } else {
                    alert("Failed to update note.");
                }
            })
            .catch((err) => alert("Failed to update note."));
    };

    return (
        <div>
            <form onSubmit={updateNote} className="max-w-sm mx-auto shadow-2xl px-4 py-4">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title:</label>
                <input
                    type="text"
                    id="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:text-white"
                />

                <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Content:</label>
                <textarea
                    id="content"
                    required
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:text-white"
                ></textarea>

                <input
                    type="submit"
                    value="Submit"
                    className="mt-4 bg-green-700 text-white rounded-lg px-5 py-2.5 hover:bg-green-800"
                />
            </form>
        </div>
    );
}

export default Edit;