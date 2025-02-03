import { classNames } from '6_shared/lib/classNames/ClassNames';
import { FC } from 'react';
import './Loader.css';

interface LoaderProps {
	className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames('lds-dual-ring', {}, [className])}>
            <div />
        </div>
    );
};
