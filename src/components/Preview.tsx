import { useRef, useEffect } from "react";
import "./Preview.css";

interface Props {
  code: string;
}

const Preview: React.FC<Props> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    iframe.current.contentWindow.postMessage(code, "*");
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        title="preview"
        sandbox="allow-scripts"
        ref={iframe}
        srcDoc={html}
      />
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
        .error {
          color: red;
        }
      </style>
    </head>
    <body>
      <div id="root"></div>
      <script>
        window.addEventListener('message', (event) => {
          try {
            eval(event.data);
          } catch (err) {
            const root = document.querySelector('#root');
            root.innerHTML = '<div class="error"><h4>Runtime Error</h4>' + err + '</div>';
            console.error(err);
          }
        }, false); 
      </script>
    </body>
    </html>
  `;

export default Preview;
