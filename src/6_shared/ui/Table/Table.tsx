import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid, DataGridProps, GridSlotsComponentsProps } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import cls from './Table.module.css';
import { classNames } from '6_shared/lib/classNames/ClassNames';
import { SyntheticEvent, useState } from 'react';
import { Menu } from '../Menu/Menu';

const theme = createTheme(
	{
		palette: {
			primary: { main: '#1133FF' },
		},
	},
	ruRU,
);

interface TableProps extends DataGridProps{
	className?: string;
}

  
export const Table: React.FC<TableProps> = (props) => {
	const { className, rows, columns, paginationModel, slotProps } = props;
	// const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	// const open = Boolean(anchorEl);
	// const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
	// 	event.preventDefault()
	//   setAnchorEl(event.currentTarget);
	  
	// };
	// const handleClose = () => {
	//   setAnchorEl(null);
	// };
	return (
		<Paper sx={{ height: 400, width: '900px' }}>
			<div style={{ height: 400, width: '100%' }}>
				<ThemeProvider theme={theme}>
					<DataGrid
						rows={rows}
						columns={columns}
						initialState={{ pagination: { paginationModel } }}
						pageSizeOptions={[5, 10]}
						sx={{ border: 0 }}
						getRowId={(row) => row.id}
						slotProps={slotProps}
						
					/>
				</ThemeProvider>
			</div>
			 {/* <Menu open={open} anchorEl={anchorEl} onClose={handleClose}/> */}
		</Paper>
	);
}