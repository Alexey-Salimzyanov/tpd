import { classNames } from '6_shared/lib/classNames/ClassNames';
import cls from './Input.module.css';
import { TextField, TextFieldProps } from '@mui/material';

type InputProps = TextFieldProps & {
	className?: string;
}

export const Input: React.FC<InputProps> = (props) => {
	const { className, ...otherProps } = props;

	return (
		<div className={classNames(cls.input, {}, [className])}>
			<TextField
				{...otherProps}
			/>
		</div>
	);
}