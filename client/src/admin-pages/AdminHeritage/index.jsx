import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import AddHeritageModal from "../../admin-components/AdminModals/AddNewHeritage/AddHeritage";
import LayoutHeritage from "../../admin-components/LayoutHeritages";
import { GET_HERITAGES } from "../../graphql/heritageQuery";
import { DELETE_HERITAGE } from "../../graphql/heritageMutation";
import { toast } from "sonner";

const AdminHeritagePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingHeritage, setEditingHeritage] = useState(null);

  const { loading, error, data } = useQuery(GET_HERITAGES);
  const [deleteHeritage] = useMutation(DELETE_HERITAGE, {
    refetchQueries: [{ query: GET_HERITAGES }],
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingHeritage(null);
  };

  const handleEditHeritage = (heritage) => {
    setEditingHeritage(heritage);
    setIsModalOpen(true);
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
    <div className="admin-heritage-page p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Heritage Data</h1>

      <LayoutHeritage
        setModalOpen={handleOpenModal}
        heritages={data.getHeritages}
        onEditHeritage={handleEditHeritage}
        onDeleteHeritage={handleDeleteHeritage}
      />

      <AddHeritageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        heritage={editingHeritage}
      />
    </div>
  );
};

export default AdminHeritagePage;
