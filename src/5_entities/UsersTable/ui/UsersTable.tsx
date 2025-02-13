import { Table } from "6_shared/ui/Table/Table";
import { useEffect, useState } from "react";
import { changeUser, getUsers } from "../api/api";
import { User } from "../model/types/User/User";
import { Menu } from "6_shared/ui/Menu/Menu";
import { MenuItem} from "@mui/material";
import { BasicModal } from "6_shared/ui/Modal/Modal";
import { Button } from "6_shared/ui/Button/Button";
import { Input } from "6_shared/ui/Input/Input";

interface UsersTableProps {
	className?: string;
}

export const UsersTable: React.FC<UsersTableProps> = (props) => {

	const { className } = props;

	const [users, setUsers] = useState<User[]>([])

	const fetchData = async () => {
		const data = await getUsers();
		setUsers(data.map((user: User) => { return { id: user.id, name: user.name, username: user.username, email: user.email } }))

	};

	useEffect(() => {
		fetchData();
	}, []);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const [currentUser, setCurrentUser] = useState(null)

	const handleClick = (e: React.MouseEvent<HTMLDivElement>, user: User) => {
		e.preventDefault();
		setAnchorEl(e.target as HTMLDivElement);
		setCurrentUser(user)
	};


	const handleClose = () => {
		setAnchorEl(null);
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'name', headerName: 'Name', width: 130 },
		{ field: 'username', headerName: 'Username', width: 130 },
		{ field: 'email', headerName: 'Email', width: 130 },
	]

	const [openModal, setOpen] = useState(false);
	const handleModalOpen = () => setOpen(true);
	const handleModalClose = () => setOpen(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (currentUser) {
			setCurrentUser({
				...currentUser,
				[e.target.name]: e.target.value,
			});
		}
	};

	const handleSave = async () => {
		if (currentUser) {
			await changeUser(currentUser);
			fetchData();
			handleModalClose();
		}
	};

	return (
		<div>
			<Table
				columns={columns}
				rows={users}
				slotProps={{
					row: {
						onContextMenu: (e) => {
							const rowId = e.currentTarget.dataset.id;
							const row = users.find(r => r.id === rowId);
							handleClick(e, row)
						},
						style: { cursor: 'context-menu' },
					},
				}}
			/>

			<Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
				<MenuItem onClick={handleModalOpen}>Изменить строку</MenuItem>
			</Menu>

			<BasicModal open={openModal} onClose={handleModalClose} >
				{currentUser && (
					<>
						<Input
							label="Name"
							name="name"
							value={currentUser.name}
							onChange={handleChange}
							fullWidth
							margin="normal"
						/>
						<Input
							label="Username"
							name="username"
							value={currentUser.username}
							onChange={handleChange}
							fullWidth
							margin="normal"
						/>
						<Input
							label="Email"
							name="email"
							value={currentUser.email}
							onChange={handleChange}
							fullWidth
							margin="normal"
						/>
						<Button onClick={handleSave} color="primary" >
							Сохранить изменения
						</Button>
					</>
				)}
			</BasicModal>
		</div>

	);
}