import App from '1_app/App';
import { ErrorBoundary } from '1_app/providers/ErrorBoundary';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
);
