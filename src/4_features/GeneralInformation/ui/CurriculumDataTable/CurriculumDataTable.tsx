import { classNames } from '6_shared/lib/classNames/ClassNames';
import cls from './CurriculumDataTable.module.css';
import { Table } from '6_shared/ui/Table/Table';

interface CurriculumDataTableProps {
	className?: string;
}

export const CurriculumDataTable = (props: CurriculumDataTableProps) => {
	const { className } = props;

	const columns = [
		{ field: "Number", headerName: "№", flex: 0.1 },
		
		{ field: "z_e_Total", headerName: "в з.е.", flex: 0.5 },
		{ field: "hoursTotal", headerName: "Всего", flex: 0.5 },
		{ field: "hoursContact", headerName: "Контакт.", flex: 0.5 },
		{ field: "hoursLections", headerName: "Лек.", flex: 0.5 },
		{ field: "hoursLabs", headerName: "Лаб.", flex: 0.5 },
		{ field: "hoursPractice", headerName: "Прак.", flex: 0.5 },
		{ field: "hoursAttestation", headerName: "Аттест.", flex: 0.5 },
		{ field: "hoursConsultation", headerName: "Конс.", flex: 0.5 },
		{ field: "hoursSelf", headerName: "Самост.", flex: 0.5 },


		{ field: "KP", headerName: "КП", flex: 0.5 },
		{ field: "KR", headerName: "КР", flex: 0.5 },
		{ field: "kr", headerName: "кр", flex: 0.5 },
		{ field: "RGZ", headerName: "РГЗ", flex: 0.5 },
		{ field: "exam", headerName: "экз.", flex: 0.5 },
		{ field: "test", headerName: "зач.", flex: 0.5 },

		{ field: "weeks", headerName: "Недель", flex: 0.6 },
		{ field: "note", headerName: "Примечание", flex: 1 },
	];
	
	const columnGroupingModel = [
		{
			groupId: "workVolume",
			headerName: "Объем работы",
			children: [
				{ field: "z_e_Total" },
				{
					groupId: "hours",
					headerName: "В часах",
					children: [
						{ field: "hoursTotal" },
						{ field: "hoursContact" },
						{ field: "hoursLections" },
						{ field: "hoursLabs" },
						{ field: "hoursPractice" },
						{ field: "hoursAttestation" },
						{ field: "hoursConsultation" },
						{ field: "hoursSelf" },
					],
				},
			],
		},
		{
			groupId: "we",
			headerName: "",
			children: [
				{
					groupId: "ControlForm",
					headerName: "",
					children: [
						{ field: "KP"},
						{ field: "KR"},
						{ field: "kr"},
						{ field: "RGZ"},
						{ field: "exam"},
						{ field: "test" },
						{ field: "weeks"},
						{ field: "note"},
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
		  <div className={classNames(cls.curriculumDataTable, {}, [className])} > 
		  		<h3>Данные учебного плана</h3>
				<Table hideFooter  rows={rows} columns={columns} columnGroupingModel={columnGroupingModel} showCellVerticalBorder/>
		  </div>
   );
}