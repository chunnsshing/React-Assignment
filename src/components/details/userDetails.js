import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedUser, removeSelectedUser } from '../../redux/actions/usersActions';

import { Card } from 'antd';
import { Col, Row } from 'antd';
import AppHeader from '../../components/common/header';

const UserDetails = () => {
  const { userId } = useParams();
  const selectedUserState = useSelector((state) => state.selectedUser);
  const user = selectedUserState || null;
  const { id, image, name, department, position, ass, desc, language, proexp, skills } = user || {};
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserDetail = async (id) => {
      try {
        if (!id) {
          return;
        }

        const response = await axios.get(`https://65786512f08799dc80452aa9.mockapi.io/api/v1/users/${id}`);
        dispatch(selectedUser(response.data));
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    if (userId && userId !== "") {
      fetchUserDetail(userId);
    }

    return () => {
      dispatch(removeSelectedUser());
    };
  }, [userId, dispatch]);

  return (
    <div className="ui grid container">
      {user ? (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="middle aligned row">
              <div className="column rp">
              <Row>
                <Col span = {1}></Col>
                <Col span = {4}><AppHeader/></Col>
                <Col span = {8}>
                <div id = "about"><img className="ui fluid image" src={image} alt={name} /></div>
                <h1>{name}</h1>
                <h3 className="ui teal tag label">Name: {name}</h3>
                <h3 className="ui brown block header">Position: {position}</h3>
                </Col>
                <Col span = {8}>
                <div id = "ass"><Card
                title="Current Project Assignment"
                bordered={false}
                style={{
                width: 500,
                }}><p>{ass}</p></Card></div><br/>

                <div id = "dept"><Card
                title="Department Name"
                bordered={false}
                style={{
                width: 500,
                }}><p>{department}</p></Card></div><br/>

                <div id = "desc"><Card
                title="Description"
                bordered={false}
                style={{
                width: 500,
                }}><p>{desc}</p></Card></div><br/>

                <div id = "languages"><Card
                title="Languages Known"
                bordered={false}
                style={{
                width: 500,
                }}><p>{language}</p></Card></div><br/>

                <div id = "proexp"><Card
                title="Project Experience"
                bordered={false}
                style={{
                width: 500,
                }}><p>{proexp}</p></Card></div><br/>

                <div id = "skills"><Card
                title="Skills Known"
                bordered={false}
                style={{
                width: 500,
                }}><p>{skills}</p></Card></div><br/>

                <div id = "userid"><Card
                title="UserID"
                bordered={false}
                style={{
                width: 500,
                }}><p>{id}</p></Card></div>
                </Col>
                <Col span = {1}></Col>
              </Row>    
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
};

export default UserDetails;
