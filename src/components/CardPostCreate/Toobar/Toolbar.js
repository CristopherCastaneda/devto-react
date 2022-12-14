import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Toolbar.scss";

function QuillEditor({ placeholder, name, value, onChange }) {
  // const [value, setValue] = useState("");

  return (
    <div className="mb-3">
      {" "}
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default QuillEditor;