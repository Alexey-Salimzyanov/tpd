import { classNames } from '6_shared/lib/classNames/ClassNames';
import cls from './InitialProgramsTable.module.css';
import { Table } from '6_shared/ui/Table/Table';

interface InitialProgramsTableProps {
	className?: string;
}

export const InitialProgramsTable = (props: InitialProgramsTableProps) => {
	const { className } = props;

	const columns = [
		{field: 'ID',  headerName: 'Ид',flex: 0.5},
		{field: 'discipline',  headerName: 'Дисциплина',flex: 0.5},
		{field: 'faculty',  headerName: 'Факультет', flex: 0.5},
		{field: 'form',  headerName: 'Форма', flex: 0.5},
		{field: 'direction',  headerName: 'Направление', flex: 0.5},
	]

	const rows = [
		{
			id: 1,
			ID: '1',
			discipline: '',
			faculty: '',
			form: '',
			direction: '',
		},
		
	]

	return (
		<div className={classNames(cls.initialProgramsTable, {}, [className])}>
			<h3>
				Исходные р.п. ГОС2
			</h3>
			<Table columns={columns} rows={rows} hideFooter showCellVerticalBorder/>
		</div>
 );
}