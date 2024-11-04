(() => {
  // src/components/collectionWidget/layoutWidget.main.js
  function loadScript(url, callback) {
    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.onload = callback;
    document.head.appendChild(script);
  }
  function loadCSS(url, callback) {
    const link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.onload = callback;
    document.head.appendChild(link);
  }
  loadCSS("https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css", function() {
    console.log("Tailwind CSS loaded");
    loadCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css", function() {
      console.log("FontAwesome CSS loaded");
      loadCSS("https://reachify-bucker.s3.amazonaws.com/bundles/layoutWidgetHelper.css", function() {
        loadScript("https://unpkg.com/react@17/umd/react.development.js", function() {
          console.log("React loaded");
          loadScript("https://unpkg.com/react-dom@17/umd/react-dom.development.js", function() {
            console.log("ReactDOM loaded");
            loadScript("https://reachify-bucker.s3.amazonaws.com/bundles/layoutWidgetHelper.js", function() {
              console.log("ReactDOM loaded");
              startApp();
            });
          });
        });
      });
    });
  });
  function startApp() {
    const scripts = document.getElementsByTagName("script");
    console.log("scripts", scripts);
    const currentScript = scripts[scripts.length - 2];
    const url = new URL(currentScript.src);
    const urlParams = new URLSearchParams(url.search);
    const spaceId = urlParams.get("spaceId");
    LayoutHelper.mount("hello-world-container", spaceId, "fixed");
  }
})();
