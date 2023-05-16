import React, { useEffect } from "react";

import useLocalStorage from "../hooks/useLocalStorage";



const Home = () => {

  const [token, setTokenValue, removeToken, getToken, getDecodedToken] = useLocalStorage('token');

  useEffect(() => {
    const token = getToken()
    console.log(token)

    const decodedToken = getDecodedToken()
    console.log(decodedToken)

    if (token) {
      console.log(token)
    }
  }, [])

  return (
    <div>
      <p>home</p>
    </div>
  )
}

export default Home;