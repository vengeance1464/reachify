import React from 'react';
import ReactDOM from 'react-dom';
import CollectionWidget from '.';

function mount(containerId,spaceId) {
 // const { name } = params;
  ReactDOM.render(<CollectionWidget spaceId={spaceId} />, document.getElementById(containerId));
}

// Expose the mount function globally
window.ColelctionWidgetHelper = { mount };