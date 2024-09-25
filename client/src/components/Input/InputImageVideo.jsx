import React from "react";

const InputImageVideo = ({ imageName, fileType }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="block font-bold"> {imageName}</label>
      <input
        // onChange={handleImageChange}
        type="file"
        accept={`"${fileType}/*"`}
        id={fileType}
        name={fileType}
        // ref={imageInputRef}
        className="hidden"
      />
      <button
        type="button"
        // onClick={() => imageInputRef.current.click()}
        className="bg-highlight hover:bg-highlight_hover text-primary_text px-4 py-1 rounded font-medium transition-all duration-300 w-fit uppercase"
      >
        Upload {fileType}
      </button>
    </div>
  );
};

export default InputImageVideo;
