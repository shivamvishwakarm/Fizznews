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
          <NavBar />
          <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
          <Routes >

            <Route exact path="/" element={<News setProgress= {setProgress} apiKey={apiKey} key={"general"} pageSize={pageNo} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress= {setProgress} apiKey={apiKey} key={"business"} pageSize={pageNo} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress= {setProgress} apiKey={apiKey} key={"entertainment"} pageSize={pageNo} country="in" category="entertainment" />}></Route>
            <Route exact path="/science" element={<News setProgress= {setProgress} apiKey={apiKey} key={"science"} pageSize={pageNo} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress= {setProgress} apiKey={apiKey} key={"sports"} pageSize={pageNo} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress= {setProgress} apiKey={apiKey} key={"technology"} pageSize={pageNo} country="in" category="technology" />}></Route>
            <Route exact path="/health" element={<News setProgress= {setProgress} apiKey={apiKey} key={"health"} pageSize={pageNo} country="in" category="health" />}></Route>

          </Routes>
        </BrowserRouter>
      </div>)

}

export default App;


