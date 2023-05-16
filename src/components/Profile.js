import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import useLocalStorage from "../hooks/useLocalStorage";



const Profile = () => {

  const [userDetails, setUserDetails] = useState()
  const [token, setTokenValue, removeToken, getToken, getDecodedToken] = useLocalStorage('token');

  useEffect(() => {
    const decodedToken = getDecodedToken()
    getUserInfo(decodedToken.username)
  }, [])



  const getUserInfo = async (username) => {
    try {
      const response = await JoblyApi.getUserInfo(username, token);
      console.log(response);
      setUserDetails(response.user);
    } catch (error) {
      console.log("Error fetching user info:", error);
    }
  };


  return (
    <div>
      <p>profile</p>
    </div>
  )
}

export default Profile;