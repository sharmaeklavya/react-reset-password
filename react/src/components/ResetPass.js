import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function ResetPassword() {
  const history = useHistory();
  const [newpass, setNewpass] = useState("");
  const [repeatpass, setRepeatpass] = useState("");
  const handleSubmit = async (e) => {};

  return (
    <div className="card card__">
      <p className="title">Update Password</p>
      <div className="reset-img">
        <img
          src="/imgs/key.jpeg"
          className="card-img-top real-img"
          alt="reset-password-img"
        />
      </div>
      <div className="card-body">
        <p className="hidden invalid">
          <small className="text-danger">
            Password do not match. Please try again.
          </small>
        </p>
        <p className="hidden valid">
          <small className="text-success">
            You have successfully registered your new password.
          </small>
        </p>
        <p className="hidden unauthorized">
          <small className="text-danger">
            Unauthorized Access. Verify your email again.
          </small>
        </p>
        <form className="reset-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputPass1">New Password</label>
            <input
              type="password"
              className="form-control my-2"
              id="inputPass1"
              aria-describedby="passHelp"
              required
              onChange={(e) => setNewpass(e.target.value)}
            />
            <label htmlFor="inputPass2">Repeat Password</label>
            <input
              type="password"
              className="form-control my-2"
              id="inputPass2"
              aria-describedby="passHelp"
              required
              onChange={(e) => setRepeatpass(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary my-2">
            Reset
          </button>
        </form>
        <div className="links">
          <Link to={"/forgot-password"} className="link">
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
