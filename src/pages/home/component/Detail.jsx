import React from 'react';
import './Detail.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Content from './detail/Content';
const Detail = () => {
    return (
        <Router>
               <div>
                   <div className="detail">
                       <div className="detail-nav"><Link to="/home/detail">详情1</Link></div>
                       <div className="detail-nav">详情2</div>
                       <div className="detail-nav">详情3</div>
                       <div className="detail-nav">详情4</div>
                   </div>
                   <Route  path="/home/detail" component={Content} />
               </div>


        </Router>
    );
};

export default Detail;
