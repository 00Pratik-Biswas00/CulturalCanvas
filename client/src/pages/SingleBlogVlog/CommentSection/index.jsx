import React from "react";
import CommentList from "./commentList";
import CommentForm from "./commentForm";

const CommentSection = ({ comments, onAddComment }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Comments
        </h2>
        <CommentList comments={comments} />
        <CommentForm onAddComment={onAddComment} />
      </div>
    </div>
  );
};

export default CommentSection;
