// Function to load a script dynamically
function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.onload = callback;
    document.head.appendChild(script);
}

// Load React
loadScript('https://unpkg.com/react@17/umd/react.development.js', function() {
    console.log('React loaded');
    
    // Load ReactDOM after React has loaded
    loadScript('https://unpkg.com/react-dom@17/umd/react-dom.development.js', function() {
        console.log('ReactDOM loaded');
        
        // After React and ReactDOM have loaded, start your application
        loadScript('../../../dist/badgeBundleHelper.js', function() {
            console.log('ReactDOM loaded');
            
            // After React and ReactDOM have loaded, start your application
            startApp();
        });
    });
});

// Function to start your application
function startApp() {
    BadgeWidgetHelper.mount('hello-world-container','66acbb8d01328df97a7be18a')
}
