import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.jsx';
import { CartProvider } from './components/contexts/cart_dropdown.context.jsx';
import { ProductsProvider } from './components/contexts/products.context.jsx';
import { UserProvider } from './components/contexts/user.context.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<UserProvider>
				<ProductsProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</ProductsProvider>
			</UserProvider>
		</BrowserRouter>
	</StrictMode>
);
