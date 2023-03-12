import React, { useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


 const  App = () => {

  const pageNo = 6;
  const apiKey = "1c4eadad096f4d83a8dabe186b10eb89" ;
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>  
        {/* Navbar component */}
          <NavBar /> 
          {/* Navbar LoadingBar */}
          <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
          <Routes >

           {/* For general */}
            <Route exact path="/" element={<News setProgress= {setProgress} apiKey={apiKey} key={"general"} pageSize={pageNo} country="in" category="general" />}></Route>

            {/* For business */}
            <Route exact path="/Fizz_news_app/business" element={<News setProgress= {setProgress} apiKey={apiKey} key={"business"} pageSize={pageNo} country="in" category="business" />}></Route>

            {/* For entertainment */}
            <Route exact path="/Fizz_news_app/entertainment" element={<News setProgress= {setProgress} apiKey={apiKey} key={"entertainment"} pageSize={pageNo} country="in" category="entertainment" />}></Route>

            {/* For science */}
            <Route exact path="/Fizz_news_app/science" element={<News setProgress= {setProgress} apiKey={apiKey} key={"science"} pageSize={pageNo} country="in" category="science" />}></Route>

            {/* For sports*/}
            <Route exact path="/Fizz_news_app/sports" element={<News setProgress= {setProgress} apiKey={apiKey} key={"sports"} pageSize={pageNo} country="in" category="sports" />}></Route>

            {/* For technology */}
            <Route exact path="/Fizz_news_app/technology" element={<News setProgress= {setProgress} apiKey={apiKey} key={"technology"} pageSize={pageNo} country="in" category="technology" />}></Route>

            {/* For health */}
            <Route exact path="/Fizz_news_app/health" element={<News setProgress= {setProgress} apiKey={apiKey} key={"health"} pageSize={pageNo} country="in" category="health" />}></Route>

          </Routes>
        </BrowserRouter>
      </div>)

}

export default App;


