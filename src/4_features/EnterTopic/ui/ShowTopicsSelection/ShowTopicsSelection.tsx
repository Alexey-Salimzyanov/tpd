import { classNames } from '6_shared/lib/classNames/ClassNames';
import { Checkbox } from '6_shared/ui/Checkbox/Checkbox';
import cls from './ShowTopicsSelection.module.css';

interface ShowTopicsSelectionProps {
	className?: string;
}

export const ShowTopicsSelection = (props: ShowTopicsSelectionProps) => {
	const { className } = props;

	return (
		<div className={classNames(cls.showTopicsSelection, {}, [className])}>
			<h3>Отображать темы</h3>
			<div className={cls.checkbox}>
				<Checkbox/>
				<span>Лекций</span>
			</div>
			<div className={cls.checkbox}>
				<Checkbox/>
				<span>Практических занятий</span>
			</div>
			<div className={cls.checkbox}>
				<Checkbox/>
				<span>Лабораторных работ</span>
			</div>
			<div className={cls.checkbox}>
				<Checkbox/>
				<span>Самостоятельного изучения</span>
			</div>
		</div>
 );
}