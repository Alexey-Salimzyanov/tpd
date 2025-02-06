import { Table } from "6_shared/ui/Table/Table";
import { useEffect, useState } from "react";
import { getUsers } from "../api/api";
import { User } from "../model/types/User/User";
import { Menu } from "6_shared/ui/Menu/Menu";
import { MenuItem } from "@mui/material";
import { BasicModal } from "6_shared/ui/Modal/Modal";

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
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);

	const [modalContent, setModalContent] = useState(null)

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault()
		setAnchorEl(e.currentTarget);
		const textNode = e.currentTarget.firstChild as Text;
		setModalContent(textNode.data)
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

	return (
		<div>
			<Table
				columns={columns}
				rows={users}
				slotProps={{
					cell: {
						onContextMenu: (e) => {
							handleClick(e)
						},
						style: { cursor: 'context-menu' },
					},
				}}
			/>
			<Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
				<MenuItem onClick={handleModalOpen}>Показать содержимое ячейки</MenuItem>
			</Menu>
			<BasicModal open={openModal} onClose={handleModalClose} ><div>{modalContent}</div></BasicModal>
		</div>

	);
}