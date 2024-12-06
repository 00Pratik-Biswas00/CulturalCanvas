import React, { useState } from "react";

const CommentForm = ({ onAddComment }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onAddComment(content);
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex flex-col space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your comment..."
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-500"
          rows={4}
        />
        <button
          type="submit"
          className="self-end px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
