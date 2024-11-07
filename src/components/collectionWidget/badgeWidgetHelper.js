import React from 'react';
import { createRoot } from 'react-dom/client';
import "./globals.css"
import BadgeWidget from './badgeWidget';

function mount(containerId,spaceId,totalFullReviews) {
 // const { name } = params;
 const container=document.getElementById(containerId);
 const root = createRoot(container); // Use the non-null assertion `!` if you are sure `container` is not null
root.render(<BadgeWidget spaceId={spaceId} totalFullReviews={totalFullReviews}/>);

 
}

// Expose the mount function globally
window.BadgeWidgetHelper = { mount };