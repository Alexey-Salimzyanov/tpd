import MuiMenu, {MenuProps as MuiMenuProps} from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

interface MenuProps extends MuiMenuProps{
	className?: string;
}

export const Menu: React.FC<MenuProps> = (props) => {
	const {className, anchorEl, open, onClose} = props;



	return (

		<MuiMenu
			anchorEl={anchorEl}
			open={open}
			onClose={onClose}
		>
			<MenuItem >Profile</MenuItem>
			<MenuItem >My account</MenuItem>
			<MenuItem >Logout</MenuItem>
		</MuiMenu>

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