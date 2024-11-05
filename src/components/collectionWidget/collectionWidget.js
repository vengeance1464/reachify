import React from 'react';
import ReactDOM from 'react-dom';
import CollectionWidget from '.';
import "./globals.css"

function mount(containerId,spaceId) {
 // const { name } = params;
  ReactDOM.createRoot(<CollectionWidget spaceId={spaceId} />, document.getElementById(containerId));
}

// Expose the mount function globally
window.ColelctionWidgetHelper = { mount };