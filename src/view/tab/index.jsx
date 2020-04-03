import React from 'react';
import './index.scss';
export default class Tab extends React.Component{
    render() {
        return (
            <ul className="tab">
                <li>首页</li>
                <li>菜单</li>
                <li>订单</li>
                <li>我的</li>
            </ul>
        )
    }
}
