import MuiCheckbox, {CheckboxProps as MuiCheckboxProps} from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import cls from './Checkbox.module.css';

interface CheckboxProps extends MuiCheckboxProps{
	className?: string;
}

export const Checkbox = styled(MuiCheckbox)<CheckboxProps>(({ className, ...otherProps }) => ({
	//кастомные стили
}));
