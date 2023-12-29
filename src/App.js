import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
// import HomeComp from "./components/Home";
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
// import About from './pages/about';
// import Blogs from './pages/blogs';
// import Interests from './pages/interests';
import Footer from './pages/footer';

// import Name from './pages/name';
// import Resume from './pages/resume';
// import Experiences from './pages/experiences';
// import Cover from './pages/coverletter';

 
function App() {
    return (
        <Router>
          
           <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
           
            <div style={{ flex: 1 }}>
           
            {/* <Navbar /> */}
            <Routes>
                <Route exact path='/' exact element={<Home />} />
   
            </Routes>
            </div>
            {/* <Footer /> */}
            </div>
        </Router>
    );
}

export default App;
