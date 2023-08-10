import { Button, Card, TextInput, Title } from "@tremor/react";
import { useCreateUser } from "../hooks";

export function CreateUser() {
	const { onSubmit, register } = useCreateUser();

	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>
			<form onSubmit={onSubmit}>
				<TextInput
					placeholder="John Doe"
					type="text"
					{...register("name")}
					autoComplete="off"
				/>
				<TextInput
					placeholder="john@gmail.com"
					type="email"
					{...register("email")}
				/>
				<TextInput
					placeholder="johnGithub"
					type="text"
					{...register("github")}
				/>
				<Button type="submit" style={{ marginTop: "16px" }}>
					Create User
				</Button>
			</form>
		</Card>
	);
}
