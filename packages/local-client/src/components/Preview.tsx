import { useRef, useEffect } from "react";
import "./Preview.css";
import { useTheme } from "../context/ThemeContext";

interface Props {
  code: string;
  err: string;
}

const Preview: React.FC<Props> = ({ code, err }) => {
  const iframe = useRef<any>();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    iframe.current.srcdoc = generateHTML(isDarkMode);
    setTimeout(function () {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code, isDarkMode]);

  return (
    <div className="preview-wrapper">
      <iframe
        title="preview"
        sandbox="allow-scripts"
        ref={iframe}
        srcDoc={generateHTML(isDarkMode)}
      />
      {err && <div className="preview-error">{err}</div>}
    </div>
  );
};

const generateHTML = (isDarkMode: boolean) => `
    <html id=${isDarkMode ? "dark" : "light"}>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        #dark {
          background-color: #1e1e1e;
          color: white;
        }
        #light {
          background-color: white;
          color: black;
        }
        .error {
          color: red;
        }
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        #dark ::-webkit-scrollbar {
          outline: 1px solid #4c4c4c7f;
        }
        
        #dark ::-webkit-scrollbar-track {
          background: #272727;
        }
        
        #dark ::-webkit-scrollbar-track:hover {
          background: #232323;
        }
        
        #dark ::-webkit-scrollbar-thumb {
          background: #8282824f;
        }
        
        #dark ::-webkit-scrollbar-thumb:hover {
          background: #82828276;
        }
        
        #dark ::-webkit-scrollbar-thumb:active {
          background: #8f8f8f95;
        }
        
        #light ::-webkit-scrollbar {
          outline: 1px solid #dedede7f;
        }
        
        #light ::-webkit-scrollbar-track {
          background: #e0e0e0;
        }
        
        #light ::-webkit-scrollbar-track:hover {
          background: #d4d4d4;
        }
        
        #light ::-webkit-scrollbar-thumb {
          background: #4242424f;
        }
        
        #light ::-webkit-scrollbar-thumb:hover {
          background: #42424269;
        }
        
        #light ::-webkit-scrollbar-thumb:active {
          background: #42424291;
        }
      </style>
    </head>
    <body>
      <div id="root"></div>
      <script>

        const handleError = (err) => {
          const root = document.querySelector('#root');
          root.innerHTML = '<div class="error"><h4>Runtime Error</h4>' + err + '</div>';
          console.error(err);
        };

        window.addEventListener('error', (event) => {
          event.preventDefault();
          handleError(event.error);
        });

        window.addEventListener('message', (event) => {
          try {
            eval(event.data);
          } catch (err) {
            handleError(err);
          }
        }, false); 

      </script>
    </body>
    </html>
  `;

export default Preview;
