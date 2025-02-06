import { Button } from '6_shared/ui/Button/Button';
import { useEffect, useState } from 'react';

// кнопка для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrow}>
            Вызвать ошибку
        </Button>
    );
};
