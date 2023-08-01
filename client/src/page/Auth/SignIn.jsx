import React, { useState } from "react";
import { api } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import { toast } from "react-toastify";
import { useDispatch } from "../../redux/store";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password)
      toast.error("You must provide an email and a password.");
    dispatch(loginStart());

    await api
      .post("/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);

        dispatch(loginSuccess(response.data));
        toast.done(response.message);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        dispatch(loginFailure());
        toast.error(error.message);
      });
  };

  return (
    <div className="app-container">
      <div className="form-control">
        <label>Email</label>
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label></label>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

// import React from "react";
// // import "./styles.css";
// import styled from "styled-components";
// import AccountBox from "./section/index";

// const AppContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: start;
//   gap: 50px;
// `;

// const SignIn = () => {
//   return (
//     <div style={{}}>
//       <AppContainer>
//         <div style={{ width: "800px", height: "100vh" }}>
//           <img
//             style={{ width: "100%", height: "100%" }}
//             src="https://i0.wp.com/fulgararchitects.com/wp-content/uploads/2020/06/fulgar-architects-h-resort-puerto-princesa-city-palawan-philippines-04.jpg?resize=1920%2C1200&ssl=1"
//             alt="img"
//           />
//         </div>
//         <AccountBox />
//       </AppContainer>
//     </div>
//   );
// };

// export default SignIn;
