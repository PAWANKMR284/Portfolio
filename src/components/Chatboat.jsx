import React, { useState, useEffect } from "react";

const Chatboat = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const existingScript = document.getElementById("chatbase-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "chatbase-script";
        script.setAttribute("domain", "www.chatbase.co");
        script.setAttribute("data-id", "Y-6gVWWNUxYVnyTdwd-R7");
        document.body.appendChild(script);

        // Initialize the Chatbase bot
        script.onload = () => {
          if (
            !window.chatbase ||
            window.chatbase("getState") !== "initialized"
          ) {
            window.chatbase = (...args) => {
              if (!window.chatbase.q) {
                window.chatbase.q = [];
              }
              window.chatbase.q.push(args);
            };
            window.chatbase = new Proxy(window.chatbase, {
              get(target, prop) {
                if (prop === "q") return target.q;
                return (...args) => target(prop, ...args);
              },
            });
          }
        };
      }
    }
  }, [showPopup]);

  return (
    <div>
      {/* Help Bubble */}
      <div
        onClick={() => setShowPopup(true)}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          background: "#2563eb",
          color: "#fff",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "18px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        Chat!
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
          onClick={() => setShowPopup(false)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              minWidth: "380px",
              minHeight: "480px",
              maxWidth: "95%",
              width: "600px",
              height: "600px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                background: "#f1f1f1",
                padding: "16px",
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Ask with Assistant
            </div>

            {/* Chatbase Widget */}
            {/* <iframe
              src="https://www.chatbase.co/chatbot-iframe/Y-6gVWWNUxYVnyTdwd-R7"
              width="100%"
              height="100%"
              style={{ border: "none", flex: 1 }}
              title="Chat with Assistant"
            /> */}
            <iframe
              key={showPopup ? Date.now() : undefined} // Forces a new iframe instance
              src="https://www.chatbase.co/chatbot-iframe/Y-6gVWWNUxYVnyTdwd-R7"
              width="100%"
              height="100%"
              style={{ border: "none", flex: 1 }}
              title="Chat with Assistant"
            />

            <div
              style={{
                background: "#f1f1f1",
                padding: "12px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Ask about me too
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatboat;
