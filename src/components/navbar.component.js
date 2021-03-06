import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Sqwallet</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/budget">Budget</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/mortgagecalc">Mortgage Calculator</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cicalc">Compound Interest Calculator</a>
            </li>
          </ul>
        </div>
        <button type="button" class="btn btn-link">
          <a href="/account" class="btn btn-primary" role="button">Account</a>
        </button>
      </nav>
    );
  }
}