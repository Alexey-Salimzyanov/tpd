import { FC } from 'react';
import { classNames } from '6_shared/lib/classNames/ClassNames';
import { Button, VariantButton } from '6_shared/ui/Button/Button';
import cls from './PageError.module.css';

interface PageErrorProps {
	className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props;

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>Произошла непредвиденная ошибка</p>
            <Button variant={VariantButton.OUTLINED} onClick={reloadPage}>
                Обновить страницу
            </Button>
        </div>
    );
};
