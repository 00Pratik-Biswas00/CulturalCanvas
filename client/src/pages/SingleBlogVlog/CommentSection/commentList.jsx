import React from "react";
import { getInitials } from "../../../utils/util";

const CommentList = ({ comments }) => {
  return (
    <div className="space-y-6">
      {comments.length > 0 &&
        comments.map((comment, key) => (
          <div key={key} className="flex space-x-4">
            {comment.author.photo.url ? (
              <img
                src={comment?.author?.photo?.url}
                alt={comment?.author?.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              getInitials(comment?.author?.name)
            )}
            <div className="flex-1">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {comment?.author?.name}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {comment?.createdAt
                      ? new Date(
                          Number(comment?.createdAt)
                        ).toLocaleDateString()
                      : "Unknown Date"}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {comment?.content}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;
