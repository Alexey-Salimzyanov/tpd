import { classNames } from '6_shared/lib/classNames/ClassNames';
import cls from './SettingGoals.module.css';
import { Checkbox } from '6_shared/ui/Checkbox/Checkbox';
import { Table } from '6_shared/ui/Table/Table';

interface SettingGoalsProps {
	className?: string;
}

export const SettingGoals = (props: SettingGoalsProps) => {
	const { className } = props;

	const columns = [
		{ field: "hoursTotal", headerName: "НГТУ", flex: 1, },

		{ field: "hoursContact", headerName: "Индикаторы", flex: 0.5 },

		{ field: "goalNumber", headerName: "№", flex: 0.5 },
		{ field: "goalType", headerName: "Тип", flex: 0.5 },
		{ field: "goalStatement", headerName: "Формулировка", flex: 0.5 },


	];

	const columnGroupingModel = [
		{
			groupId: "workVolume",
			headerName: "Исходные данные компетентностной модели",
			children: [
				{
					groupId: "hours",
					headerName: "Компетенции. Шифр и формулировка",
					children: [
						{ field: "hoursTotal" },
					],
				},
			],
		},
		{
			groupId: "empty",
			headerName: "",
			children: [
				{
					groupId: "Goals",
					headerName: "Цели лисциплины",
					children: [
						{ field: "goalNumber" },
						{ field: "goalType" },
						{ field: "goalStatement" },
					],
				},
			],
		},
	];

	const rows = [
		{
			id: 1,
			Number: 1,
			z_e_Total: "3",
			hoursTotal: "108",
			hoursContact: "32",
			hoursLections: "12",
			hoursLabs: "0",
			hoursPractice: "12",
			hoursAttestation: "2",
			hoursConsultation: "6",
			KP: "Нет",
			KR: "Нет",
			exam: "Есть",
			test: "Нет",
			weeks: "16",
			note: "",
		},
		// ...
	];

	return (
		<div className={classNames(cls.settingGoals, {}, [className])}>
			<div>
				<div>
					<Checkbox />
					<span>
						"Склеивать" формулировки ФГОС
					</span>
				</div>
				<Table
					// sx={{
					// 	"& .MuiDataGrid-columnHeaderTitleContainer": {
					// 		justifyContent: "center", 
					// 	},
					// }}
					columns={columns} columnGroupingModel={columnGroupingModel} hideFooter showCellVerticalBorder />
			</div>
		</div>
	);
}