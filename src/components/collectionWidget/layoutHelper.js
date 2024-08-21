import React from 'react';
import ReactDOM from 'react-dom';
import "./globals.css"
import BadgeWidget from './badgeWidget';
import TestimonialsWall from "../testimonialsWall/wall"

function mount(containerId,spaceId) {
 // const { name } = params;
  ReactDOM.render(<TestimonialsWall spaceId="66acbb8d01328df97a7be18a" layoutType={"Fixed"} />, document.getElementById(containerId));
}

// Expose the mount function globally
window.LayoutHelper = { mount };