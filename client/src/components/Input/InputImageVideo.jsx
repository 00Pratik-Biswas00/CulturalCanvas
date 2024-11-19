import React, { useRef } from "react";
import MyButton4 from "../Buttons/MyButton4";

const InputImageVideo = ({ imageName, fileType, onChange, preview, required = false }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };


  return (
    <div className="w-full flex items-center  my-3 gap-5">
      <label className="font-bold font-pangaia text-xl"> {imageName}</label>
      <input
        // onChange={handleImageChange}
        type="file"
        accept={`"${fileType}/*"`}
        id={fileType}
        name={fileType}
        required={required}
        ref={fileInputRef}
        className="hidden"
        onChange={onChange}
      />

      <MyButton4
        bType={"submit"}
        buttonName={` Upload ${fileType}`}
        classDesign={
          "bg-transparent blogCards border-2 border-highlight before:bg-highlight  text-primary_text dark:text-dark_primary_text py-1  "
        }
        onClick={handleButtonClick}
      />

      {preview && (
        <img
          src={preview.url}
          alt="Preview"
          className="w-16 h-16 object-cover border rounded"
        />
      )}
      {/* <button
        type="submit"
        // onClick={() => imageInputRef.current.click()}
        className="bg-highlight hover:bg-highlight_hover text-primary_text px-4 py-1 rounded font-medium transition-all duration-300 w-fit uppercase"
      >
        Upload {fileType}
      </button> */}
    </div>
  );
};

export default InputImageVideo;
