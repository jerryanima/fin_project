import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import { BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Header />
				<Main />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
