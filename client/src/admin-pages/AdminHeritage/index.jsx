import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import AddHeritageModal from "../../admin-components/AdminModals/AddNewHeritage/AddHeritage";
import LayoutHeritage from "../../admin-components/LayoutHeritages";
import { GET_HERITAGES } from "../../graphql/HeritageQuery";
import { DELETE_HERITAGE } from "../../graphql/heritageMutation";
import { toast } from "sonner";

const AdminHeritagePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingHeritage, setEditingHeritage] = useState(null);
  const [isHeritageEditing, setIsHeritageEditing] = useState(false);

  const { loading, error, data } = useQuery(GET_HERITAGES);
  const [deleteHeritage] = useMutation(DELETE_HERITAGE, {
    refetchQueries: [{ query: GET_HERITAGES }],
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setEditingHeritage(null); // Clear editing state
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingHeritage(null);
  };

  const handleEditHeritage = (heritage) => {
    setEditingHeritage(heritage);
    setIsModalOpen(true); // Open modal in editing mode
  };

  const handleDeleteHeritage = async (id) => {
    if (window.confirm("Are you sure you want to delete this heritage?")) {
      try {
        await deleteHeritage({ variables: { id } });
        toast.error("Heritage deleted");
      } catch (err) {
        console.error("Error deleting heritage:", err);
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col gap-5 sm:gap-10">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-y-3 ">
          <h1 className="text-4xl font-semibold text-center tracking-tighter font-playfair">
            Manage Your Heritages
          </h1>
        </div>

        <LayoutHeritage
          setModalOpen={handleOpenModal} // Explicitly for adding new heritage
          heritages={data.getHeritages}
          onEditHeritage={handleEditHeritage}
          onDeleteHeritage={handleDeleteHeritage}
        />
        {/* {isModalOpen && (
          <AddHeritageModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            heritage={editingHeritage}
          />
        )} */}

        {isModalOpen && (
          <AddHeritageModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            heritage={editingHeritage}
          />
        )}
      </div>
    </section>
  );
};

export default AdminHeritagePage;
