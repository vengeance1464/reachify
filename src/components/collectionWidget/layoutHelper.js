import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import "./globals.css"
import TestimonialsWall from "../testimonialsWall/wall"

function mount(containerId,spaceId,layoutType) {
 // const { name } = params;
 const container=document.getElementById(containerId);
 const root = createRoot(container); // Use the non-null assertion `!` if you are sure `container` is not null

root.render(<TestimonialsWall spaceId={spaceId} layoutType={layoutType} />);
}

// Expose the mount function globally
window.LayoutHelper = { mount };