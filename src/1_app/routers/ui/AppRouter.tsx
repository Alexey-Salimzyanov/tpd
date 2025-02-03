import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '6_shared/config/routeConfig/routeConfig';
import { PageLoader } from '6_shared/ui/PageLoader/PageLoader';
export default function AppRouter() {
	return (
		<Routes>
		    {Object.values(routeConfig).map(({ element, path }) => (
		        <Route
		            key={path}
		            path={path}
		            element={(
		                <Suspense fallback={<PageLoader />}>
		                    <div className="page-wrapper">
		                        {element}
		                    </div>
		                </Suspense>
		            )}
		        />
		    ))}
		</Routes>
	);
}
