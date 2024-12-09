import React, { useEffect, useState } from "react";
import AddNewModal from "../AddNewModal";
import InputComponent from "../../../components/Input/InputComponent";
import TextareaComponent from "../../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../../components/Input/InputImageVideo";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_HERITAGE_MUTATION,
  UPDATE_HERITAGE_MUTATION,
  DELETE_HERITAGE_MUTATION,
} from "../../../graphql/heritageMutation";
import { toast } from "sonner";
import api from "../../../config/axios";
import { GET_HERITAGE_QUERY } from "../../../graphql/heritageQuery";

const AddHeritage = ({
  setHeritageModal,
  setIsEditing,
  isEditing,
  editHeritageSlug = null,
}) => {
  const RESTAPI_BASE_URL = import.meta.env.VITE_API_KEY_RESTAPI;

  const { loading, error, data } = useQuery(GET_HERITAGE_QUERY, {
    variables: { slug: editHeritageSlug },
  });

  const [formData, setFormData] = useState({
    name: "",
    image: {},
    introduction: "",
    part1: [{ heading: "", description: "" }],
    animatedVideo: {},
    endlessDigitalArt: {},
    vlogVideo: {},
    type_of_heritage: "unesco_listed", // Default value
    tag: "cultural", // Default value
    state_culture_name: "",
  });

  useEffect(() => {
    if (isEditing && editHeritageSlug && data) {
      setFormData(data.getHeritage);
    }
  }, [isEditing, editHeritageSlug, data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePart1Change = (index, field, value) => {
    const updatedPart1 = formData.part1.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setFormData((prev) => ({ ...prev, part1: updatedPart1 }));
  };

  const handleAddPart1 = () => {
    setFormData((prev) => ({
      ...prev,
      part1: [...prev.part1, { heading: "", description: "" }],
    }));
  };

  const handleRemovePart1 = (index) => {
    const updatedPart1 = formData.part1.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, part1: updatedPart1 }));
  };

  const handleUploadingImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const { data } = await api.post(
        `${RESTAPI_BASE_URL}/upload-image`,
        formData
      );
      return data;
    } catch (e) {
      console.error("Error uploading image:", e);
    }
  };

  const handleImageInput = async (file, field) => {
    try {
      const uploadedImageData = await handleUploadingImage(file);
      setFormData((prev) => ({
        ...prev,
        [field]: uploadedImageData,
      }));
    } catch (e) {
      console.error("Error uploading image:", e);
      toast.error("Image upload failed!");
    }
  };

  const [createHeritage, { loading: createLoading }] = useMutation(
    CREATE_HERITAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success("Heritage Created Successfully!");
      },
      onError: (error) => {
        console.error("Error creating heritage:", error);
        toast.error("Error creating heritage!");
      },
    }
  );

  const [updateHeritage, { loading: updateLoading }] = useMutation(
    UPDATE_HERITAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success("Heritage Updated Successfully!");
      },
      onError: (error) => {
        console.error("Error updating heritage!", error);
        toast.error("Error updating heritage!");
      },
    }
  );

  const [deleteHeritage, { loading: deleteLoading }] = useMutation(
    DELETE_HERITAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success("Heritage Deleted Successfully!");
        setHeritageModal(false); // Close modal after deletion
      },
      onError: (error) => {
        console.error("Error deleting heritage:", error);
        toast.error("Error deleting heritage!");
      },
    }
  );

  const handleSaveHeritage = async () => {
    try {
      if (isEditing) {
        await updateHeritage({
          variables: { id: formData.id, ...formData },
        });
      } else {
        await createHeritage({
          variables: formData,
        });
      }
      setHeritageModal(false); // Close modal
      setIsEditing(false); // Reset editing state
    } catch (e) {
      console.error(
        isEditing ? "Error updating heritage:" : "Error creating heritage:",
        e
      );
      toast.error(
        isEditing ? "Error updating heritage!" : "Error creating heritage!"
      );
    }
  };

  const handleDeleteHeritage = async () => {
    if (
      window.confirm("Are you sure you want to delete this heritage entry?")
    ) {
      try {
        await deleteHeritage({
          variables: { id: formData.id },
        });
        // Optionally, you can add logic to delete images/videos from Cloudinary/S3 here
      } catch (e) {
        console.error("Error deleting heritage:", e);
        toast.error("Error deleting heritage!");
      }
    }
  };

  return (
    <div>
      <AddNewModal
        setModalOpen={setHeritageModal}
        setIsEditing={setIsEditing}
        handleApply={handleSaveHeritage}
      >
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">
          {isEditing ? "Edit Heritage Entry" : "Add a New Heritage Entry"}
        </h2>

        <div className="flex flex-col gap-2 py-2">
          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <InputComponent
                iName="Heritage Name"
                iType="text"
                value={formData.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>

            <InputImageVideo
              imageName="Heritage Image:"
              fileType="image"
              onChange={(e) => handleImageInput(e.target.files[0], "image")}
              preview={formData.image}
            />
          </div>

          <div className="w-full">
            <label className="block font-bold">Introduction</label>
            <TextareaComponent
              value={formData.introduction}
              onChange={handleInputChange}
              name="introduction"
            />
          </div>

          <div className="mb-4 overflow-auto">
            <label className="block text-xl font-bold">Part 1 Details:</label>
            {formData.part1.map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-full justify-between gap-1 mb-2 border-2 border-t-0 rounded-xl rounded-t-none px-4 pb-2 mt-3"
              >
                <div className="w-full">
                  <InputComponent
                    iName="Heading"
                    iType="text"
                    value={item.heading}
                    onChange={(e) =>
                      handlePart1Change(index, "heading", e.target.value)
                    }
                  />
                  <TextareaComponent
                    value={item.description}
                    onChange={(e) =>
                      handlePart1Change(index, "description", e.target.value)
                    }
                    name={`description-${index}`}
                  />
                </div>
                <div className="flex justify-end w-full">
                  <button
                    type="button"
                    onClick={() => handleRemovePart1(index)}
                    className="px-4 py-1 bg-red-500 hover:bg-red-800 rounded text-white"
                  >
                    Delete Part
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between w-full mt-2">
              <button
                type="button"
                onClick={handleAddPart1}
                className="bg-highlight hover:bg-highlight_hover text-primary_text px-4 py-1 rounded font-medium transition-all duration-300 w-fit uppercase"
              >
                Add Part
              </button>
            </div>
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <InputImageVideo
                imageName="Animated Video:"
                fileType="animatedVideo"
                onChange={(e) =>
                  handleImageInput(e.target.files[0], "animatedVideo")
                }
                preview={formData.animatedVideo}
              />
            </div>

            <div className="w-full">
              <InputImageVideo
                imageName="Endless Digital Art:"
                fileType="endlessDigitalArt"
                onChange={(e) =>
                  handleImageInput(e.target.files[0], "endlessDigitalArt")
                }
                preview={formData.endlessDigitalArt}
              />
            </div>
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <InputImageVideo
                imageName="Vlog Video:"
                fileType="vlogVideo"
                onChange={(e) =>
                  handleImageInput(e.target.files[0], "vlogVideo")
                }
                preview={formData.vlogVideo}
              />
            </div>
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <label className="block font-bold">Type of Heritage</label>
              <select
                value={formData.type_of_heritage}
                onChange={handleInputChange}
                name="type_of_heritage"
                className="block w-full px-3 py-2 border rounded"
              >
                <option value="unesco_listed">UNESCO Listed</option>
                <option value="unesco_unlisted">UNESCO Unlisted</option>
                <option value="local_heritage">Local Heritage</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block font-bold">Heritage Tag</label>
              <select
                value={formData.tag}
                onChange={handleInputChange}
                name="tag"
                className="block w-full px-3 py-2 border rounded"
              >
                <option value="cultural">Cultural</option>
                <option value="natural">Natural</option>
                <option value="tangible">Tangible</option>
                <option value="intangible">Intangible</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <InputComponent
              iName="State/Culture Name"
              iType="text"
              value={formData.state_culture_name}
              onChange={handleInputChange}
              name="state_culture_name"
            />
          </div>

          {isEditing && (
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={handleDeleteHeritage}
                className="px-4 py-2 bg-red-600 hover:bg-red-800 text-white rounded"
              >
                Delete Heritage Entry
              </button>
            </div>
          )}
        </div>
      </AddNewModal>
    </div>
  );
};

export default AddHeritage;
