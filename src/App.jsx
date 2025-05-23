import { Route, Routes } from 'react-router';
import Authentication from './components/authentication/authentication.component';
import Checkout from './pages/checkout/checkout.component';
import Home from './pages/home/home.component';
import Navigation from './pages/navigation/navigation.component';
import Shop from './pages/shop/shop.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				{/* 'index' short for index = {true}. Means that you render that component if route matches parent route*/}
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
