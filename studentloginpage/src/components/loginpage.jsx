import React from "react";
import "./loginpage.css"; 

function StudentLogin() {
  return (
    <div>
      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      {/* Login Container */}
      <div className="login-container">
        <div className="logo">
          <div className="logo-icon">🎓</div>
          <h1>Student Login Page</h1>
          <p>Access your academic dashboard 🎓</p>
        </div>

        {/* Login Form */}
        <div>
          <div className="form-group">
            <label htmlFor="studentId">Student ID</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              placeholder="Enter your student ID"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <button type="button" className="password-toggle">
              Show
            </button>
          </div>

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </div>

        {/* Divider */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Register Link */}
        <div className="register-link">
          Don&apos;t have an account? <a href="#">Register here</a>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
