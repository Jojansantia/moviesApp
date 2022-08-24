import { useEffect } from "react";
import useLogin from "../hooks/useLogin";
import ErrorMessage from "./ui/ErrorMessage";
import { IUser } from "../interfaces"

const Login = () => {
  const {
    userData,
    errorMessage,
    onChangeUserData,
    onSubmitLogin,
    toggleLogged,
  } = useLogin();

  useEffect(() => {
    let localData = sessionStorage.getItem("localUserData");
    let localUserData: IUser = localData ? JSON.parse(localData) : null;
    if (localUserData) toggleLogged(localUserData, true);
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ width: "450px" }}>
      <h1 className="text-center my-5">Frontend Developer Test</h1>
      {errorMessage && <ErrorMessage text={errorMessage} />}
      <div className="card">
        <div className="card-body">
          <form onSubmit={onSubmitLogin}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email address"
                value={userData.email}
                onChange={(ev) => onChangeUserData("email", ev.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={userData.password}
                placeholder="Password"
                onChange={(ev) => onChangeUserData("password", ev.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
