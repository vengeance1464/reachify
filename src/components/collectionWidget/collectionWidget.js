import React from 'react';
import ReactDOM from 'react-dom';
import CollectionWidget from '.';
import { createRoot } from 'react-dom/client';
import "./globals.css"

function mount(containerId,spaceId) {
 // const { name } = params;
 const container=document.getElementById(containerId);
 const root = createRoot(container); // Use the non-null assertion `!` if you are sure `container` is not null
root.render(<CollectionWidget spaceId={spaceId} />,);
 // ReactDOM.createRoot(<CollectionWidget spaceId={spaceId} />, document.getElementById(containerId));
}

// Expose the mount function globally
window.CollectionWidgetHelper = { mount };