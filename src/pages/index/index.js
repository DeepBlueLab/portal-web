// import _ from 'lodash';
import React from 'react';
import 'animate.css';
import { WOW } from 'wowjs';
import Welcome from 'components/_pages/IndexPage/Welcome';
import ForUser from 'components/_pages/IndexPage/ForUser';
import Developer from 'components/_pages/IndexPage/Developer';
import JoinUs from 'components/_pages/IndexPage/JoinUs';
import style from './style.less';

export default class IndexPage extends React.Component {

  componentDidMount() {
    new WOW({
      offset: 10,
      mobile: false,
    }).init();
  }

  render() {
    return (
      <div className={style.indexPage}>
        <Welcome />
        <ForUser />
        <Developer />
        <JoinUs />
      </div>
    );
  }
}
