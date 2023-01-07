// imports from 3rd party libraries
import { Route, Routes } from 'react-router-dom';

// components
import { About } from 'views/About';
import { Contact } from 'views/Contact';
import { Home } from 'views/Home';
import { NotFound } from 'views/NotFound';

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
