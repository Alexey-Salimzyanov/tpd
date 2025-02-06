import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MuiSelect, { SelectProps as MuiSelectProps} from '@mui/material/Select';
import { FC } from 'react';
import cls from './Select.module.css';
import { classNames } from '6_shared/lib/classNames/ClassNames';


type SelectProps = MuiSelectProps & {
  className?: string;
  label: string;
}

export const Select: FC<SelectProps> = (props) => {

	const { className, children, label, value, onChange} = props;

	return (
		<div className={classNames(cls.select, {}, [className])} >
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth variant="filled" sx={{ minWidth: 120 }}>
					<InputLabel >{label}</InputLabel>
					<MuiSelect
						value={value}
						onChange={onChange}
					>
						{children}
					</MuiSelect>
				</FormControl>
			</Box>
		</div>
	);
}
