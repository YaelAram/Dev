import { User, UserId } from "../interfaces";
import { addNewUser, deleteUserById, updateUser } from "../store/users/slice";
import { useAppDispatch, useAppSelector } from "./";

export const useUsersStore = () => {
	const users = useAppSelector((state) => state.users);
	const dispatch = useAppDispatch();

	const handleDeleteUser = (id: string) => dispatch(deleteUserById(id));
	const handleAddUser = (newUser: User) => dispatch(addNewUser(newUser));
	const handleUpdateUser = (updatedUser: UserId) =>
		dispatch(updateUser(updatedUser));

	return {
		users,
		handleAddUser,
		handleDeleteUser,
		handleUpdateUser,
	};
};
