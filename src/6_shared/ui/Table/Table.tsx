import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid, DataGridProps} from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import cls from './Table.module.css';

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
	const { className, rows, columns, paginationModel, slotProps, ...otherProps} = props;
	return (
		<ThemeProvider theme={theme}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{ pagination: { paginationModel } }}
				pageSizeOptions={[5, 10]}
				getRowId={(row) => row.id}
				slotProps={slotProps}
				disableRowSelectionOnClick
				{...otherProps}
			/>
		</ThemeProvider>
	);
}