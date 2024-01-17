import React from 'react';
import { Col, Row } from 'antd';
const AppFooter = () => (
  <>
   <Row>
        <Col span={2}></Col>
        <Col span={4}>
            <div style={{ color: "grey", fontSize: "23px" }}> Tools </div>
            <div><a href = "https://people.deloitte/profile">My DPN Profile</a></div>
            <div><a href = "https://resources.deloitte.com/sites/kx/SitePages/Contribute-to-KX.aspx">Contribute to KX</a></div>
            <div><a href = "https://resources.deloitte.com/sites/kx/SitePages/KX-Help.aspx">KX Help</a></div>
            <div><a href = "https://resources.deloitte.com/sites/kx/SitePages/kx-dpn.aspx">FAQs</a></div>
        </Col>
        <Col span={1}></Col>
        <Col span={4}>
            <div style={{ color: "grey", fontSize: "23px" }}>Contact Us</div>
            <div><a href = "https://www.yammer.com/deloitte.com/#/threads/inGroup?type=in_group&feedId=222173">Send feedback</a></div>
            <br/>
            <div style={{ color: "grey", fontSize: "23px" }}>Policies</div>
            <div><a href = "https://people.deloitte/legalcontent#termsofuse">Terms of use</a></div>
            <div><a href = "https://people.deloitte/legalcontent#privacynotice">Privacy Notice</a></div>
            <div><a href = "https://people.deloitte/legalcontent#cookienotice">Cookie Notice</a></div>
        </Col>
        <Col span={1}></Col>
        <Col span={8}>
            <div>
            Deloitte refers to one or more of Deloitte Touche Tohmatsu Limited, a UK private company limited by guarantee ("DTTL"), its network of member firms, and their related entities. DTTL and each of its member firms are legally separate and independent entities. DTTL (also referred to as "Deloitte Global") does not provide services to clients.Please see <a href = "www.deloitte.com/about" >www.deloitte.com/about</a> to learn more about our global network of member firms.
            </div>
            <br/>
            <div>
            This communication is for internal distribution and use only among personnel of Deloitte Touche Tohmatsu Limited, its member firms, and their related entities (collectively, the "Deloitte Network"). None of the Deloitte Network shall be responsible for any loss whatsoever sustained by any person who relies on this communication.
            </div>
            <br/>
            <div>
            © 2023. See Legal for more information
            </div>
        </Col>
        <Col span={2}></Col>
    </Row>
  </>
  );
  export default AppFooter;
