import React from 'react';
import './Navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ms-5 me-5">
      <div className="container-fluid .cc">
        <a className="navbar-brand" href="/"><span className='h1 h2-md h3-sm'>CompraPrice</span></a>
        <div className="d-flex ms-auto">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3">
              <a className="nav-link bi-person" href="/register">
                <span style={{ marginLeft: '8px' }}>Log in</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Help</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
