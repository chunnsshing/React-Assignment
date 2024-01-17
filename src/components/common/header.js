import React, { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';
const { Link } = Anchor;
function AppHeader() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#about" title="Home" />
            <Link href="#ass" title="Current Project Assignment" />
            <Link href="#dept" title="Department Name" />
            <Link href="#desc" title="Description" />
            <Link href="#languages" title="Languages Known" />
            <Link href="#proexp" title="Project Experience" />  
            <Link href="#skills" title="Skills Known" />  
            <Link href="#userid" title="UserID" />      
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#about" title="Home" />
              <Link href="#ass" title="Current Project Assignment" />
              <Link href="#dept" title="Department Name" />
              <Link href="#desc" title="Description" />
              <Link href="#languages" title="Languages Known" />
              <Link href="#proexp" title="Project Experience" />  
              <Link href="#skills" title="Skills Known" />  
              <Link href="#userid" title="UserID" /> 
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
export default AppHeader;
