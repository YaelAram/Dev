import { TableCell, TableRow, TextInput } from "@tremor/react";
import { DeleteButton, EditControl } from ".";
import { useUser } from "../hooks";
import { UserId } from "../interfaces";

export const User: React.FC<UserId> = ({ id, name, email, github }) => {
	const {
		emailInput,
		isEditing,
		nameInput,
		activeEditMode,
		deleteUser,
		updateUser,
	} = useUser({ id, name, email, github });

	return (
		<TableRow>
			<TableCell>{id}</TableCell>
			<TableCell style={{ display: "flex", alignItems: "center" }}>
				<img
					className="img-table"
					src={`https://unavatar.io/github/${github}`}
					alt={`${name}'s github profile logo`}
				/>
				<TextInput type="text" disabled={isEditing} ref={nameInput} />
			</TableCell>
			<TableCell>
				<TextInput type="email" disabled={isEditing} ref={emailInput} />
			</TableCell>
			<TableCell>
				<EditControl
					isEditing={isEditing}
					editHandler={activeEditMode}
					saveHandler={updateUser}
				/>
				<DeleteButton handler={deleteUser} />
			</TableCell>
		</TableRow>
	);
};
