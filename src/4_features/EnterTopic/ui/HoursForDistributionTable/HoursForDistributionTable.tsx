import { classNames } from '6_shared/lib/classNames/ClassNames';
import cls from './HoursForDistributionTable.module.css';
import { Table } from '6_shared/ui/Table/Table';
import { Checkbox } from '6_shared/ui/Checkbox/Checkbox';

interface HoursForDistributionTableProps {
	className?: string;
}
export const HoursForDistributionTable = (props: HoursForDistributionTableProps) => {
	const { className } = props;
	
	
	const columns = [
	  { field: "semester", headerName: "Семестр",  flex: 1 },
	  { field: "lectionPlan", headerName: "По плану", flex: 1  },
	  { field: "lectionTheme", headerName: "В темах",  flex: 1  },
	  { field: "lectionRemainder", headerName: "Осталось",  flex: 1 },
	  { field: "practicePlan", headerName: "По плану",  flex: 1  },
	  { field: "practiceTheme", headerName: "В темах", flex: 1  },
	  { field: "practiceRemainder", headerName: "Осталось",  flex: 1  },
	  { field: "labPlan", headerName: "По плану", flex: 1  },
	  { field: "labTheme", headerName: "В темах",  flex: 1 },
	  { field: "labRemainder", headerName: "Осталось", flex: 1  },
	  { field: "activeHoursPlan", headerName: "По плану",  flex: 1  },
	  { field: "activeHoursTheme", headerName: "В темах",  flex: 1  },
	  { field: "activeHoursRemainder", headerName: "Осталось",  flex: 1  },
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
	
	const rows = [
	  { id: 1, semester: 1, lectionPlan: "12", lectionTheme: "12", lectionRemainder: "0", practicePlan: "12", practiceTheme: "12", practiceRemainder: "0", labPlan: "0", labTheme: "", labRemainder: "0", activeHoursPlan: "6", activeHoursTheme: "6", activeHoursRemainder: "0"  },
	  { id: 2, semester: 1, lectionPlan: "12", lectionTheme: "12", lectionRemainder: "0", practicePlan: "12", practiceTheme: "12", practiceRemainder: "0", labPlan: "0", labTheme: "", labRemainder: "0", activeHoursPlan: "6", activeHoursTheme: "6", activeHoursRemainder: "0"  },
	];

	return (
		<div className={classNames(cls.hoursForDistributionTable, {}, [className])} >
			<h3>Часов к распределению</h3>
	
			<Table hideFooter rows={rows} columns={columns} columnGroupingModel={columnGroupingModel} showCellVerticalBorder/>
		</div>
 );
}