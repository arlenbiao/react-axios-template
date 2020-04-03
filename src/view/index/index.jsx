import React from 'react';
import './index.scss'
import NavIndex from '@/view/nav/index.jsx'
import Search from '@/view/search/index.jsx'
import Tab from '@/view/tab/index.jsx'
class Index extends React.Component {
    render() {
        return (
            <div>
                <Search></Search>
                <NavIndex></NavIndex>
                <Tab></Tab>
            </div>
        )
    }
}
export default Index
