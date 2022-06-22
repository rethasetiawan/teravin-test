import React from 'react';
import MainPage from './Containers/MainPage';
import FormSubmission from './Containers/FormSubmission';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      {/* <MainPage/> */}
      <Router >
       <Routes>
        <Route path="/" element={ <MainPage/>} />
        <Route path="/form" element={ <FormSubmission/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
