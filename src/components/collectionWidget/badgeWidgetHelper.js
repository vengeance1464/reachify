import React from 'react';
import ReactDOM from 'react-dom';
import "./globals.css"
import BadgeWidget from './badgeWidget';

function mount(containerId,spaceId) {
 // const { name } = params;
  ReactDOM.render(<BadgeWidget spaceId={spaceId} />, document.getElementById(containerId));
}

// Expose the mount function globally
window.BadgeWidgetHelper = { mount };