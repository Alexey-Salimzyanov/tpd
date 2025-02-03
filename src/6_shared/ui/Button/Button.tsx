import { classNames } from '6_shared/lib/classNames/ClassNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.css';

export enum VariantButton{
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string;
	variant?: VariantButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, variant, ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
