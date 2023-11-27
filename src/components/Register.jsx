import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");

  const isSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <section class="hero has-background-grey-light is-fullwidth is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="colum is-4-dekstop">
              <p className="has-text-centered">{msg}</p>
              <form className="box" onSubmit={isSubmit}>
                <div className="field mt-5">
                  <label className="label">Name</label>
                  <div className="controls">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="input" placeholder="username.." />
                  </div>
                </div>

                <div className="field mt-5">
                  <label className="label">Email</label>
                  <div className="controls">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="username.." />
                  </div>
                </div>

                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="****" />
                  </div>
                </div>

                <div className="field mt-5">
                  <label className="label">Confirm Password</label>
                  <div className="controls">
                    <input type="password" value={confPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="input" placeholder="****" />
                  </div>
                </div>

                <div className="field mt-5">
                  <button className="button is-success is-full-width">REGISTER</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
