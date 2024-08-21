// Function to load a script dynamically
function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.onload = callback;
    document.head.appendChild(script);
}


function loadCSS(url, callback) {
    const link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.onload = callback;
    document.head.appendChild(link);
}

// Load Tailwind CSS first
loadCSS('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css', function() {
    console.log('Tailwind CSS loaded');
    
    // Load FontAwesome (optional)
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css', function() {
        console.log('FontAwesome CSS loaded');

loadCSS('../../../dist/collectionWidgetHelper.css', function() {
// Load React
loadScript('https://unpkg.com/react@17/umd/react.development.js', function() {
    console.log('React loaded');
    
    // Load ReactDOM after React has loaded
    loadScript('https://unpkg.com/react-dom@17/umd/react-dom.development.js', function() {
        console.log('ReactDOM loaded');
        
        // After React and ReactDOM have loaded, start your application
        loadScript('../../../dist/collectionWidgetHelper.js', function() {
            console.log('ReactDOM loaded');
            
            // After React and ReactDOM have loaded, start your application
            startApp();
        });
    });
});
})})})
// Function to start your application
function startApp() {
    //BadgeWidgetHelper.mount('hello-world-container','66acbb8d01328df97a7be18a')
    ColelctionWidgetHelper.mount('hello-world-container','66acbb8d01328df97a7be18a');
}
