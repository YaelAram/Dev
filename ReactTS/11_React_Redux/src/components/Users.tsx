import {
	Badge,
	Card,
	Table,
	TableBody,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";
import { useUsersStore } from "../hooks";
import { User } from "./";

export function Users() {
	const { users } = useUsersStore();

	return (
		<Card>
			<Title>
				Users
				<Badge style={{ marginLeft: "8px" }}>{users.length}</Badge>
			</Title>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>ID</TableHeaderCell>
						<TableHeaderCell>NAME</TableHeaderCell>
						<TableHeaderCell>EMAIL</TableHeaderCell>
						<TableHeaderCell>ACTIONS</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((user) => (
						<User key={user.id} {...user} />
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
