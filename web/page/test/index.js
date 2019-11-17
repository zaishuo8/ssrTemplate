import React from 'react'
import './index.less'
import { Link } from "react-router-dom";
import {mockData, proxyLogin} from '../../services/mock';

class ClassComponentExample extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: 0
        };
    }

    render() {
        return (
            <div className={'news-container'}>
                <div onClick={() => this.setState({text: this.state.text + 1})}>{this.state.text}</div>
                <div>{this.props.mockData}</div>
                <Link to={`/`}><div style={{color: 'black'}}>前往首页</div></Link>
                <div onClick={async () => {
                    const result = await proxyLogin({ username: '10086', password: '123456' });
                    console.log(result);
                }}>点击登录</div>
            </div>
        );
    }
}

ClassComponentExample.getInitialProps = (ctx) => {
    console.log('getInitialProps');

    const userInfo = ctx.cookies.get('user_info');
    console.log(userInfo);

    return mockData();
};

export default ClassComponentExample
