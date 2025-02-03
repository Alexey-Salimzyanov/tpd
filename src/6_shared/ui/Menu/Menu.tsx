
import MuiMenu, {MenuProps as MuiMenuProps} from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { BasicModal } from '../Modal/Modal';
import { Button } from '../Button/Button';

interface MenuProps extends MuiMenuProps{
	className?: string;
}

export const Menu: React.FC<MenuProps> = (props) => {
	const {className, anchorEl, open, onClose} = props;
	const [openModal, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);


	return (
		<div>
		<MuiMenu
			anchorEl={anchorEl}
			open={open}
			onClose={onClose}
		>
			<MenuItem onClick={handleOpen}>Profile</MenuItem>
			<MenuItem >My account</MenuItem>
			<MenuItem >Logout</MenuItem>
		</MuiMenu>

		<BasicModal openm={openModal} onClose={handleClose} ></BasicModal>
		</div>


	);
}


// export function Menu() {
// 	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
// 	const open = Boolean(anchorEl);
// 	//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
// 	//     setAnchorEl(event.currentTarget);
// 	//   };
// 	const handleClose = () => {
// 		setAnchorEl(null);
// 	};

// 	return (
// 		<div>
// 			{/* <Button
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         Dashboard
//       </Button> */}
// 			<MuiMenu
// 				id="basic-menu"
// 				anchorEl={anchorEl}
// 				open={open}
// 				onClose={handleClose}
// 			// MenuListProps={{
// 			//   'aria-labelledby': 'basic-button',
// 			// }}
// 			>
// 				<MenuItem onClick={handleClose}>Profile</MenuItem>
// 				<MenuItem onClick={handleClose}>My account</MenuItem>
// 				<MenuItem onClick={handleClose}>Logout</MenuItem>
// 			</MuiMenu>
// 		</div>
// 	);
// }