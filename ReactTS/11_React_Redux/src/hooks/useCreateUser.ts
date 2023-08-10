import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useUsersStore } from ".";
import { User } from "../interfaces";

const schema = z.object({
	name: z.string().min(1, "Name field must contain at least 1 character"),
	email: z.string().email("Email field does not contain a valid email"),
	github: z.string().min(1, "Github field must contain at least 1 character"),
});

export const useCreateUser = () => {
	const { handleAddUser } = useUsersStore();
	const { register, handleSubmit, reset } = useForm<User>({
		defaultValues: {
			name: "",
			email: "",
			github: "",
		},
	});

	const onSubmit = handleSubmit((data) => {
		const formValidation = schema.safeParse(data);
		if (formValidation.success) {
			handleAddUser(formValidation.data);
			reset();
		} else {
			formValidation.error.errors.forEach(({ message }) => {
				toast.error(message);
			});
		}
	});

	return {
		register,
		onSubmit,
	};
};
