import React from 'react';
import AppProfile from '../components/details/profile';

import AppDesc from '../components/details/desc';
import AppLanguages from '../components/details/languages';
import AppSkills from '../components/details/skills';
import AppProexp from '../components/details/proexp';
import AppAss from '../components/details/userDetails';
import AppHeader from '../components/common/header';

import { Col, Row } from 'antd';

const UserDetails = () => {
  return (
    <>
      <Row>
        <Col span = {1}></Col>
        <Col span = {4}>
            <AppHeader/> 
        </Col>
        <Col span = {8}>
            <br/>
            <AppProfile/> 
        </Col>
        <Col span={8}>
          <div className="main">
            <br/>
            <AppDesc/>
            <br/>
            <AppLanguages/>
            <br/>
            <AppSkills/>
            <br/>
            <AppProexp/>
            <br/>
            <AppAss/>
            <br/>
          </div>
        </Col>
        <Col span = {1}></Col>
      </Row>
    </>
  );
}
export default UserDetails;