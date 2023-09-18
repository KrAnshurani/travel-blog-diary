
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CommonHeader from './components/CommonHeader/commonHeader';
import Home from './components/Home/home';
// import About from './components/About/about';
// import Contact from './components/Contact/contact';
// import DiaryEntries from './components/DiaryEntries/diaryEntries';

function App() {
  return (
    <div>
      <Router>
      <CommonHeader />
        <Routes> 
        <Route exact path="/" element={<Home />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;


























// import React from 'react';
// import CommonHeader from './components/CommonHeader/commonHeader';
// import Routing from './routing';

// function App() {
//   return (
//     <div>
//       <CommonHeader />
//       <Routing />
//     </div>
//   );
// }

// export default App;

