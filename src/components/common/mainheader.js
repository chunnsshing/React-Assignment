import React from 'react';
import { Col, Divider, Row } from 'antd';



const AppMainheader = () => (
  <>
   <Divider orientation="left" style={{ backgroundcolor: "black"}}>
   <Row justify="start" align = "top">
      <Col span={3}>
              <div>
                <img width = {110} src="https://logos-world.net/wp-content/uploads/2021/08/Deloitte-Logo.png" alt="Deloitte Logo" />
              </div>

      </Col>
    </Row>
    </Divider>
  </>
);
export default AppMainheader;