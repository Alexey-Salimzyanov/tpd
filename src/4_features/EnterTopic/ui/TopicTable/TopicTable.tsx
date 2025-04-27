import { classNames } from '6_shared/lib/classNames/ClassNames';
import cls from './TopicTable.module.css';
import { Table } from '6_shared/ui/Table/Table';

interface TopicTableProps {
	className?: string;
}
export const TopicTable = (props: TopicTableProps) => {
	const { className } = props;
	
	
	const columns = [
	  { field: "semester", headerName: "Семестр",  flex: 1 },
	  { field: "didacticNumber", headerName: "№", flex: 1  },
	  { field: "didacticName", headerName: "Наименование",  flex: 1  },
	  { field: "themeType", headerName: "Тип",  flex: 1  },
	  { field: "themeNumber", headerName: "№",  flex: 1 },
	  { field: "themeName", headerName: "Наименование",  flex: 1  },
	  { field: "themeHours", headerName: "Часов", flex: 1  },
	  { field: "themeActive", headerName: "В.т.ч. в активной форме",  flex: 1  },
	  { field: "themePractice", headerName: "В.т.ч. практ. подг.", flex: 1  },
	  { field: "themeEducational", headerName: "Учебная деятельность",  flex: 1 },
	  { field: "themeAims", headerName: "Связано с целями", flex: 1  },
	];
	
	const columnGroupingModel = [
	  {
		groupId: "lection",
		headerName: "Дидактическая единица",
		children: [{ field: "didacticNumber" }, { field: "didacticName" }],
	  },
	  {
		groupId: "practice",
		headerName: "Тема",
		children: [
			{ field: "themeType" },
			{ field: "themeNumber" }, 
			{ field: "themeName" }, 
			{ field: "themeHours" }, 
			{ field: "themeActive" }, 
			{ field: "themePractice" }, 
			{ field: "themeEducational" }, 
			{ field: "themeAims" }
		],
	  },
	];

	const rows = [
	];

	return (
		<div className={classNames(cls.topicTable, {}, [className])} >	
			<Table hideFooter   columns={columns} columnGroupingModel={columnGroupingModel} showCellVerticalBorder />
		</div>
 );
}