import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Signup from './component/Signup';
import Login from './component/Login';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home className="home" />} />
                <Route path="/signup" element={<Signup className="signup" />} />
                <Route path="/login" element={<Login className="login" />} />
            </Routes>
        </div>
    );
}

export default App;
