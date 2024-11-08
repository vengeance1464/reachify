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

// Load React
loadCSS('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css', function() {
    console.log('Tailwind CSS loaded');
    
    // Load FontAwesome (optional)
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css', function() {
        console.log('FontAwesome CSS loaded');

loadCSS('https://reachify-bucker.s3.us-east-1.amazonaws.com/bundles/badgeWidgetHelper.bundle.css', function() {
loadScript('https://unpkg.com/react@17/umd/react.development.js', function() {
    console.log('React loaded');
    
    // Load ReactDOM after React has loaded
    loadScript('https://unpkg.com/react-dom@17/umd/react-dom.development.js', function() {
        console.log('ReactDOM loaded');
        
        // After React and ReactDOM have loaded, start your application
        loadScript('https://reachify-bucker.s3.us-east-1.amazonaws.com/bundles/badgeWidgetHelper.bundle.js', function() {
            console.log('ReactDOM loaded');
            
            // After React and ReactDOM have loaded, start your application
            startApp();
        });
    });
})})})});

// function getPathParams(){
//     const queryString = window.location.search;

//     // Create a URLSearchParams object
//     const params = new URLSearchParams(queryString);
    
//     // Retrieve specific query parameters
//     const spaceId = params.get('spaceId'); // 'asc'

//     const avgRating = params.get('avgRating'); // 'asc'

//     const totalReviews = params.get('totalReviews'); // 'asc'


//     return spaceId;
// }


// Function to start your application
function startApp() {
    const scripts = document.getElementsByTagName('script');
    console.log("scripts",scripts)

    const currentScript = scripts[scripts.length - 2];

    const url = new URL(currentScript.src);

// Use URLSearchParams to parse the query string
   const urlParams = new URLSearchParams(url.search);

   const spaceId = urlParams.get('spaceId');


    const totalReviews = urlParams.get('totalFullReviews'); // 'asc'

    BadgeWidgetHelper.mount('hello-world-container',spaceId,totalReviews)
}
