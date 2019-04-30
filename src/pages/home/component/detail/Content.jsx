import React, {Component} from 'react';
import './Content.css';
import Todo from './Todo';
import PropTypes from 'prop-types';
import store from '../../../../store'

class Content extends Component {
       state=store.getState();
       handleChange=()=>{
           console.log(123)
       }
    render() {
        return (
            <div className="content">
                <input type="text"
                       placeholder="请输入内容"
                       value={this.state.inpVal}
                />
                <button onClick={this.handleChange}>添加</button>
                <ul>
                    {
                        this.state.list.map((item,index) =>(
                            <li key={item+index}>{item}</li>
                        ))
                    }

                </ul>
            </div>
        );
    }
}

Content.propTypes = {};

export default Content;
