import { classNames } from '6_shared/lib/classNames/ClassNames';
import cls from './HoursForDistributionTable.module.css';
import { Table } from '6_shared/ui/Table/Table';
import { DataGrid, GridColDef, GridRowModel } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { changeHFD, getHFD } from '4_features/EnterTopic/api/api';

interface HoursForDistributionTableProps {
	className?: string;
}
export const HoursForDistributionTable = (props: HoursForDistributionTableProps) => {
	const { className } = props;

	const [rows, setRows] = useState([])

	const fetchData = async () => {
		const data = await getHFD();
		setRows(data.map((hfd: any) => { return hfd }))

	};

	useEffect(() => {
		fetchData();
	}, []);


	const columns: GridColDef[] = [
		{ field: "semester", headerName: "Семестр", flex: 1 },
		{
			field: "lectionPlan", type: "number", headerName: "По плану", flex: 1, editable: true, cellClassName: (params) => params.value > 100 ? cls['invalid-cell'] : ''
		},
		{ field: "lectionTheme", type: 'number', headerName: "В темах", flex: 1, editable: true },
		{ field: "lectionRemainder", headerName: "Осталось", flex: 1, editable: true },
		{ field: "practicePlan", headerName: "По плану", flex: 1 },
		{ field: "practiceTheme", headerName: "В темах", flex: 1 },
		{ field: "practiceRemainder", headerName: "Осталось", flex: 1 },
		{ field: "labPlan", headerName: "По плану", flex: 1 },
		{ field: "labTheme", headerName: "В темах", flex: 1 },
		{ field: "labRemainder", headerName: "Осталось", flex: 1 },
		{ field: "activeHoursPlan", headerName: "По плану", flex: 1 },
		{ field: "activeHoursTheme", headerName: "В темах", flex: 1 },
		{ field: "activeHoursRemainder", headerName: "Осталось", flex: 1 },
	];

	const columnGroupingModel = [
		{
			groupId: "lection",
			headerName: "Лекций",
			children: [{ field: "lectionPlan" }, { field: "lectionTheme" }, { field: "lectionRemainder" }],
		},
		{
			groupId: "practice",
			headerName: "Практик",
			children: [{ field: "practicePlan" }, { field: "practiceTheme" }, { field: "practiceRemainder" }],
		},
		{
			groupId: "lab",
			headerName: "Лабораторных",
			children: [{ field: "labPlan" }, { field: "labTheme" }, { field: "labRemainder" }],
		},
		{
			groupId: "activeHours",
			headerName: "\"Активных\" часов",
			children: [{ field: "activeHoursPlan" }, { field: "activeHoursTheme" }, { field: "activeHoursRemainder" }],
		}
	];

	const processRowUpdate = async (newRow: GridRowModel, oldRow: GridRowModel) => {
		const isValid = Object.values(newRow).every(value =>
			typeof value !== 'number' || value <= 100
		);

		if (!isValid) {
			console.warn("Ошибка: некоторые значения превышают 100. Данные не будут отправлены.");
			return newRow; // Отмена обновления строки
		}

		try {
			await changeHFD(newRow)
			return newRow
		} catch (error) {
			console.error('Ошибка при обновлении:', error);
			return oldRow;
		}
	};

	return (
		<div className={classNames(cls.hoursForDistributionTable, {}, [className])} >
			<h3>Часов к распределению</h3>
			<Table
				hideFooter
				rows={rows}
				columns={columns}
				columnGroupingModel={columnGroupingModel}
				showCellVerticalBorder
				processRowUpdate={processRowUpdate}
			/> 

		</div>
	);
}