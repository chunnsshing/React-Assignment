// UserListing.js
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from '../redux/actions/usersActions';
import UserComponent from '../components/listing/UserComponent';

const UserListing = () => {
  const users = useSelector((state) => state.allUsers.users);
  const isFetching = useSelector((state) => state.allUsers.isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://65786512f08799dc80452aa9.mockapi.io/api/v1/users");
        console.log("API Response:", response.data);
        dispatch(setUsers(response.data));
      } catch (err) {
        console.log("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, [dispatch]);

  console.log("Users :", users);

  return (
    <div className="ui grid container">
        {isFetching && <p>Loading...</p>}
        {!isFetching && users.length === 0 && <p>No users found</p>}
        {!isFetching && users.length > 0 && <UserComponent users={users} />}
    </div>
  );
};

export default UserListing;
