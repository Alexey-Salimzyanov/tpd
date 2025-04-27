import { classNames } from '6_shared/lib/classNames/ClassNames';
import { CurriculumDataTable } from './CurriculumDataTable/CurriculumDataTable';
import { Select } from '6_shared/ui/Select/Select';
import { MenuItem } from '@mui/material';
import { useState } from 'react';
import cls from './GeneralInformation.module.css'
import { Button, VariantButton } from '6_shared/ui/Button/Button';
import { AutorAndEditorTable } from './AutorAndEditorTable/AutorAndEditorTable';
import { InitialProgramsTable } from './InitialProgramsTable/InitialProgramsTable';


interface GeneralInformationProps {
	className?: string;
}



export const GeneralInformation = (props: GeneralInformationProps) => {
	const { className } = props;

	const [autor, setAutor] = useState(1);
	const [editor, setEditor] = useState(1);
	const [reviewer, setReviewer] = useState(1);

	const handleSelectAutor = (e: any) => {
		setAutor(e.target.value)
	}

	const handleSelectEditor = (e: any) => {
		setEditor(e.target.value)
	}

	const handleSelectReviewer = (e: any) => {
		setReviewer(e.target.value)
	}

	return (
		<div className={classNames(cls.hoursForDistributionTable, {}, [className])}>
			<CurriculumDataTable />

			<div className={cls.group}>
				<div className={cls.selectorsArea}>
					<div className={cls.selectRow}>
						<span>Автор:</span>
						<Select className={cls.select} value={autor} onChange={handleSelectAutor}>
							<MenuItem value={1}>Кобылянский Валерий Григорьевич (kvg)</MenuItem>
							<MenuItem value={2}>2</MenuItem>
						</Select>
					</div>

					<div className={cls.selectRow}>
						<span>Редактор:</span>
						<Select className={cls.select} value={editor} onChange={handleSelectEditor}>
							<MenuItem value={1}>Кобылянский Валерий Григорьевич (kvg)</MenuItem>
							<MenuItem value={2}>2</MenuItem>
						</Select>
					</div>

					<div className={cls.selectRow}>
						<span>Рецензент:</span>
						<Select className={cls.select} value={reviewer} onChange={handleSelectReviewer}>
							<MenuItem value={1}>Зайцев Михаил Георгиевич (psibd_zaycev)</MenuItem>
							<MenuItem value={2}>2</MenuItem>
						</Select>
					</div>
				</div>
				<div className={cls.btn}>
					<Button variant={VariantButton.OUTLINED}>
						Удалить рабочую программу
					</Button>
				</div>
			</div>

			<div className={cls.tables}>
				<div>
					<Button>
						Кафедры
					</Button>
					<AutorAndEditorTable/>
				</div>
					<InitialProgramsTable/>
			</div>
		</div>
	);
}