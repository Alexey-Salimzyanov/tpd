
import MuiMenu, {MenuProps as MuiMenuProps} from '@mui/material/Menu';


interface MenuProps extends MuiMenuProps{
	className?: string;
}

export const Menu: React.FC<MenuProps> = (props) => {
	const {className, children, anchorEl, open, onClose} = props;



	return (
		<div>
		<MuiMenu
			anchorEl={anchorEl}
			open={open}
			onClose={onClose}
			disableScrollLock
		>

			{children}
		</MuiMenu>
		</div>
	);
}


