import React from 'react';
import './index.scss'
export default  class Search extends React.Component{
    render() {
        return (
            <div className="search">
                <input type="text" placeholder="请输入搜索内容"/>
                <span>搜索</span>
            </div>
        )
    }
}

