import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


 const App = (props) => {
  const [progress, setProgress] = useState(0)
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API

    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route exact path="/science" element={<News setProgress = {setProgress}  key="/science" pagesize={pageSize} country = "in" category = "science"/>}></Route>
        <Route exact path="/" element={<News setProgress = {setProgress}  key="/general" pagesize={pageSize} country = "in" category = "general"/>}></Route>
        <Route exact path="/business" element={<News setProgress = {setProgress}  key='/business' pagesize={pageSize} country = "in" category = "business"/>} ></Route>
        <Route exact path="/entertainment" element={<News setProgress = {setProgress}  key='/entertainment' pagesize={pageSize} country = "in" category = "entertainment"/>} ></Route>
        <Route exact path="/health" element={<News setProgress = {setProgress}  key='/health' pagesize={pageSize} country = "in" category = "health"/>} ></Route>
        <Route exact path="/sports" element={<News setProgress = {setProgress}  key='/sports' pagesize={pageSize} country = "in" category = "sports"/>} ></Route>
        <Route exact path="/technology" element={<News setProgress = {setProgress}  key='/technology' pagesize={pageSize} country = "in" category = "technology"/>} ></Route>
      </Routes>
      </BrowserRouter>
      </div>
    )
}

export default App