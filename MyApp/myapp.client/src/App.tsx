import { Routes, Route, Link } from 'react-router-dom';

import Weather from './weather/Weather';
import Form from './form/Form';

export default function App() {
    return (
        <div id="app">

            <div id="nav">
                <b>NAV: </b>
                <Link to="/">Weather</Link> | <Link to="/form">Form</Link>
            </div>

            <div id="content">
                <Routes>
                    <Route path="/" element={<Weather />} />
                    <Route path="form" element={<Form />} />
                </Routes>
            </div>
           
        </div>
    );
}