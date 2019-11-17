import React, {PureComponent, Fragment} from 'react';
import { Button, Carousel, Input, Modal } from 'antd';
import './index.less';

const { Search } = Input;

class Index extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            showLoginModal: false
        };
    }

    render() {
        const { loginStatus, bannerList } = this.props;
        const { showLoginModal } = this.state;

        console.log(showLoginModal);

        return (
            <div id={'container'}>
                <div id={'headerContainer'}>
                    <img id={'logo'} src={'https://img.asman.com.cn/official/static/img/logo@2x.png'} />
                    <img id={'location'} src={'https://img.asman.com.cn/official/static/img/loc_gray@2x.png'} />
                    <div id={'city'}>杭州</div>
                    <div id={'statusContain'}>
                        {
                            loginStatus ?
                                <Fragment>
                                    <img id={'photo'} src="../../assets/img/avater.png" />
                                    &nbsp;
                                    &nbsp;
                                    <div className={'text'}>187****1994</div>
                                    <div className={'text logout'}>退出</div>
                                </Fragment>
                                :
                                <Fragment>
                                    <img id={'myInfo'} src="https://img.asman.com.cn/official/static/img/face_gray@2x.png" />
                                    <div className={'text logout'} onClick={() => this.setState({ showLoginModal: true })}>登陆</div>
                                </Fragment>
                        }
                    </div>
                </div>
                <div id={'bannerListContainer'}>
                    <Carousel autoplay>
                        {bannerList.map((banner, index) => {
                            return (
                                <div key={index.toString()} className={'bannerContain'}>
                                    <img className={'bg'} src={banner.bg} alt={''}/>
                                    <div id={'mask'} />
                                </div>
                            );
                        })}
                    </Carousel>
                    {/*<div id={'searchContainer'}>
                        <Search
                            placeholder="输入小区，看看我未来的家"
                            enterButton="搜索"
                            size="large"
                            onSearch={value => console.log(value)}
                        />
                    </div>*/}
                </div>
                <Modal
                    visible={showLoginModal}
                    footer={null}
                >

                </Modal>
            </div>
        )
    }

    handleOk(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
}

Index.getInitialProps = (ctx) => {
    return Promise.resolve({
        bannerList: [
            {bg: "https://img.asman.com.cn/1_3d88841ebcc0f7920755726b280302e7.png", content: "https://img.asman.com.cn/assets/1567049201049_54809.png"},
            {bg: "https://img.asman.com.cn/2_8b1d1819083fd8cae921d69e20715016.png", content: "https://img.asman.com.cn/official/static/img/banner_1.png"},
            {bg: "https://img.asman.com.cn/3_3bab61d4e908e8a49692fe017c65ec9b.png", content: "https://img.asman.com.cn/official/static/img/banner_2.png"},
            {bg: "https://img.asman.com.cn/4_24f0f5f2bd114f02fbf9a531068f0b44.png", content: "https://img.asman.com.cn/official/static/img/banner_3.png"},
            {bg: "https://img.asman.com.cn/4_b8110d21a248d194998abeee3d73f605.png", content: "https://img.asman.com.cn/official/static/img/banner_4.png"},
        ]
    })
};

export default Index
