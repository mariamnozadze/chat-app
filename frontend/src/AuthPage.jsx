import axios from "axios";

const AuthPage = (props) => {
  // to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    // Extract the value of the input field from the form event
    const { value } = e.target[0];

    // Send a POST request to the authentication endpoint with the extracted username
    axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value })) // Handle successful authentication
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
