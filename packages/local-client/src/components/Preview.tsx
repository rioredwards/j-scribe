import { useRef, useEffect } from "react";
import "./Preview.css";

interface Props {
  code: string;
  err: string;
}

const Preview: React.FC<Props> = ({ code, err }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(function () {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        title="preview"
        sandbox="allow-scripts"
        ref={iframe}
        srcDoc={html}
      />
      {err && <div className="preview-error">{err}</div>}
    </div>
  );
};

const html = `
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        html {
          background-color: white;
        }
        .error {
          color: red;
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
