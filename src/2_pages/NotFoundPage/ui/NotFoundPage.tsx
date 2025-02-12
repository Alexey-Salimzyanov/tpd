import { classNames } from '6_shared/lib/classNames/ClassNames';
import cls from './NotFoundPage.module.css';

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = (props :NotFoundPageProps) => {
    const { className } = props;

    return (
        <div  className={classNames(cls.NotFoundPage, {}, [className])}>
            Страница не найдена
        </div>
    );
};
