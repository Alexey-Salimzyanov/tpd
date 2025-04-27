import { classNames } from '6_shared/lib/classNames/ClassNames';
import { Button, VariantButton } from '6_shared/ui/Button/Button';
import { MenuItem} from '@mui/material';
import { Select } from '6_shared/ui/Select/Select';
import { useState } from 'react';
import { Checkbox } from '6_shared/ui/Checkbox/Checkbox';
import cls from './PrintProgram.module.css';


interface PrintProgramProps {
	className?: string;
}

export const PrintProgram = (props: PrintProgramProps) => {
	const { className } = props;
	const [selectVal, setSelectVal] = useState(1);
	const handleSelectChange = (e: any) => {
		setSelectVal(e.target.value)
	}

	return (
		<div className={classNames(cls.printProgram, {}, [className])}>

			<Button className={cls['print-btn']} variant={VariantButton.OUTLINED}>
				Печать
			</Button>
			<Select value={selectVal} onChange={handleSelectChange}>
				<MenuItem  value={1}>Рабочей программы</MenuItem>
				<MenuItem  value={2}>2</MenuItem>
			</Select>
			<div className={cls.checkboxes}>
				<div>
					<Checkbox/>
					Выводить на печать приложения
				</div>
				<div>
					<Checkbox/>
					Впечатывать "согласовано с работодателем"
				</div>
				<div>
					<Checkbox/>
					ФОС по дид. единицам
				</div>
			</div>

		</div>
 );
}