// -- CodeEditor.tsx --

import React, { useRef } from "react";
import "./codeEditor.css";
import MonacoEditor, { EditorDidMount } from "@monaco-editor/react";
import prettier from "prettier";
import parser from "prettier/parser-babel";

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorRef = useRef<any>();

  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    });
    monacoEditor.getModel()?.updateOptions({ tabSize: 2 });
  };

  const onFormatClick = () => {
    console.log("format");
    console.log(editorRef.current);
    // Get current value from editor
    const unformatted = editorRef.current.getModel().getValue();

    // Format that value
    const formatted = prettier.format(unformatted, {
      parser: "babel",
      plugins: [parser],
      useTabs: false,
      semi: true,
      singleQuote: true,
    });

    // Set the formatted value back in the editor
    editorRef.current.setValue(formatted);

    // editorRef.current.getModel().setValue(formatted);
    // editorRef.current.getModel().updateOptions({ tabSize: 2 });
  };

  return (
    <div>
      <button
        onClick={onFormatClick}
        className="button button-format is-primary is-small">
        Format
      </button>
      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        language="javascript"
        theme="dark"
        className="MonacoEditor"
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
