import React from 'react'

// Inporting external css
import './Footer.css'

export const Footer = () => {
  // CSS Styling in JavaScript is done in this method
  let footerStyle = {
    position: "relative",
    top: "100vh",
    width: "100%",
    border: "2px solid blue"
  }
  return (
    <footer className = "bg-dark text-light py-3" style = {footerStyle}>
      <p className="text-center">
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}
