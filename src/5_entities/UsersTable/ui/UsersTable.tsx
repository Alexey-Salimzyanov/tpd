import { Table } from "6_shared/ui/Table/Table";
import { useEffect, useState } from "react";
import { getUsers } from "../api/api";
import { User } from "../model/types/User/User";

interface UsersTableProps {
	className?: string;
}

export const UsersTable: React.FC<UsersTableProps> = (props) => {

	const { className } = props;

	const [users, setUsers] = useState(null)

	const fetchData = async () => {
		const data = await getUsers();
		setUsers(data.map((user: User) => { return { id: user.id, name: user.name, username: user.username, email: user.email } }))

	};

	useEffect(() => {
		fetchData();
	}, []);

	const columns = [
			{ field: 'id', headerName: 'ID', width: 70 },
			{ field: 'name', headerName: 'Name', width: 130 },
			{ field: 'username', headerName: 'Username', width: 130 },
			{ field: 'email', headerName: 'Email', width: 130 },
		]
		
	return (
		<Table columns={columns} rows={users}/>
	);
}