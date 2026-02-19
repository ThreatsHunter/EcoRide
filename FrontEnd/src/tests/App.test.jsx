import { render, screen } from '@testing-library/react';
import { AuthProvider } from '../contexts/AuthContext';
import '@testing-library/jest-dom';
import App from '../App';

test('affiche le titre de bienvenue', () => {
  render(
    <AuthProvider>
        <App />
    </AuthProvider>
  );
  
  const titleElement = screen.getByText(/Ne cherchez plus, trouvez\./i);
  expect(titleElement).toBeInTheDocument();
});