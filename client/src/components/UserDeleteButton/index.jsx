import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../../graphql/roleMutation";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

const DeleteUserButton = ({ userId, reload }) => {
  const [deleteUser] = useMutation(DELETE_USER, {
    variables: { id: userId },
    onCompleted: () => {
      toast.error("User deleted successfully");
      reload();
    },
    onError: (error) => {
      console.error("Error deleting user", error.message);
    },
  });

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser();
      reload();
    }
  };

  return (
    <MdDelete
      className="w-5 h-5 absolute bottom-2 right-2 text-red-600 hover:text-red-800"
      onClick={handleDelete}
    />
  );
};

export default DeleteUserButton;
