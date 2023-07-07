import React from 'react'
import './header.css';
import logoproj from "../assets/logoproj.png";

export default function Header() {
  return (
    <div className='header'>
      <img src={logoproj} />
    </div>
  )
}
