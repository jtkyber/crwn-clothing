import { Route, Routes } from 'react-router';
import SignIn from './components/sign_in/sign_in.component';
import Home from './pages/home/home.component';
import Navigation from './pages/navigation/navigation.component';

const Shop = () => {
	return <h1>Shop</h1>;
};

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				{/* 'index' short for index = {true}. Means that you render that component if route matches parent route*/}
				<Route index element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/sign-in' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
