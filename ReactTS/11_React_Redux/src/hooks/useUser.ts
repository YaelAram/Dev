import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { UserId } from "../interfaces";
import { useUsersStore } from "./";

const nameSchema = z
	.string()
	.min(1, "Name field must contain at least 1 character");
const emailSchema = z
	.string()
	.email("Email field does not contain a valid email");

export const useUser = ({ id, name, email, github }: UserId) => {
	const { handleDeleteUser, handleUpdateUser } = useUsersStore();
	const [isEditing, setIsEditing] = useState(true);
	const nameInput = useRef<HTMLInputElement | null>(null);
	const emailInput = useRef<HTMLInputElement | null>(null);

	const activeEditMode = () => setIsEditing(false);

	const deleteUser = () => {
		handleDeleteUser(id);
		toast.success("User deleted successfully");
	};

	const updateUser = () => {
		if (nameInput.current !== null && emailInput.current !== null) {
			const newName = nameInput.current.value.trim();
			const newEmail = emailInput.current.value.trim();

			const nameValidation = nameSchema.safeParse(newName);
			const emailValidation = emailSchema.safeParse(newEmail);

			if (!nameValidation.success) {
				const error: string = nameValidation.error.errors[0].message;
				toast.error(error);
				return;
			}

			if (!emailValidation.success) {
				const error: string = emailValidation.error.errors[0].message;
				toast.error(error);
				return;
			}

			handleUpdateUser({ id, name: newName, email: newEmail, github });
			setIsEditing(true);

			toast.success("User updated successfully");
		}
	};

	useEffect(() => {
		if (nameInput.current !== null) nameInput.current.value = name;
		if (emailInput.current !== null) emailInput.current.value = email;
	}, [nameInput, emailInput]);

	return {
		emailInput,
		isEditing,
		nameInput,
		activeEditMode,
		deleteUser,
		updateUser,
	};
};
