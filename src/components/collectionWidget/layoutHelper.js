import React from 'react';
import ReactDOM from 'react-dom';
import "./globals.css"
import TestimonialsWall from "../testimonialsWall/wall"

function mount(containerId,spaceId,layoutType) {
 // const { name } = params;
  ReactDOM.render(<TestimonialsWall spaceId={spaceId} layoutType={layoutType} />, document.getElementById(containerId));
}

// Expose the mount function globally
window.LayoutHelper = { mount };