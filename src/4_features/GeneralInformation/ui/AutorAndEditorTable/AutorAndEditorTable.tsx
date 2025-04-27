import { classNames } from '6_shared/lib/classNames/ClassNames';
import cls from './AutorAndEditorTable.module.css';
import { Table } from '6_shared/ui/Table/Table';

interface AutorAndEditorTableProps {
	className?: string;
}

export const AutorAndEditorTable = (props: AutorAndEditorTableProps) => {
	const { className } = props;

	const columns = [
		{field: 'semester',  headerName: 'Семестр',flex: 1},
		{field: 'autor',  headerName: 'Автор',flex: 1},
		{field: 'editor',  headerName: 'Редактор', flex: 1},
	]

	const rows = [
		{
			id: 1,
			semester: '1',
			autor: '',
			editor: '',
		},
	]

	return (
		<div className={classNames(cls.autorAndEditorTable, {}, [className])}>
			<Table columns={columns} rows={rows} hideFooter showCellVerticalBorder/>
		</div>
 );
}