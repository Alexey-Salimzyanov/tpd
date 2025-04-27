import { classNames } from '6_shared/lib/classNames/ClassNames';
import { Checkbox } from '6_shared/ui/Checkbox/Checkbox';
import { Table } from '6_shared/ui/Table/Table';

interface GeneralStructureProps {
	className?: string;
}

export const GeneralStructure = (props: GeneralStructureProps) => {
	const { className } = props;
	const columns = [
		{ field: "NSTUСompetencies", headerName: "НГТУ",  flex: 1  },

		{ field: "goalNumber", headerName: "№", flex: 0.1  },
		{ field: "goalName", headerName: "Наименование",  flex: 1  },

		{ field: "lections", headerName: "Лекции",  flex: 1, renderCell: () => <Checkbox/>   },
		{ field: "practices", headerName: "Практики", flex: 1, renderCell: () => <Checkbox/>   },
		{ field: "labs", headerName: "Лабораторные работы",  flex: 1, renderCell: () => <Checkbox/>   },
		{ field: "individualWork", headerName: "Самостоятельная работа", flex: 1, renderCell: () => <Checkbox/>   },

		{ field: "exam", headerName: "Экзамен", flex: 1, renderCell: () => <Checkbox/>  },
		{ field: "other", headerName: "Прочее",  flex: 1, renderCell: () => <Checkbox/> },

	  ];
	  const columnGroupingModel = [
		{
			groupId: "activeHours",
			headerName: "Компетенции. Шифр и формулировка",
			children: [{ field: "NSTUСompetencies" }],
		},
		{
		  groupId: "lection",
		  headerName: "Цели и дисциплины",
		  children: [{ field: "goalNumber" }, { field: "goalName" }],
		},
		{
		  groupId: "practice",
		  headerName: "Виды работ",
		  children: [{ field: "lections" }, { field: "practices" }, { field: "labs" }, { field: "individualWork" }],
		},
		{
		  groupId: "lab",
		  headerName: "Формы контроля",
		  children: [{ field: "exam" }, { field: "other" }],
		},
	  ];
	  
	  const rows = [
		{ id: 1, NSTUСompetencies: "...", goalNumber: 1, goalName: "...", lections: "12", practices: "12", labs: "0", exam: "0", other: "", individualWork: "0" },
		{ id: 2, NSTUСompetencies: "...", goalNumber: 2, goalName: "...", lections: "12", practices: "12", labs: "0", exam: "0", other: "", individualWork: "0" },
	  ];
  
	  return (
		  <div>  
			  <Table hideFooter rows={rows} columns={columns} columnGroupingModel={columnGroupingModel} showCellVerticalBorder/>
		  </div>
   );
}