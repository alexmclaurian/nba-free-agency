import React from 'react';

const FileForm = (props) => {
  return (
    <div>
      <h1>FileForm Component - Upload here:</h1>
      <form>
        <label>
          File:
          <input name='file' type='file' onChange={props.handleFile} />
          <input name='submit' type='submit' onClick={props.handleUpload} />
          <hr />
          Teams <br />
          {props.val}
        </label>
      </form>
    </div>
  );
};

export default FileForm;
