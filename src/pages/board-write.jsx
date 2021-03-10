import React, { useState } from "react";
import CKEditor from 'ckeditor4-react';

const BoardWrite = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="inner">
      {/* <h2>Board Write</h2> */}
      <section className="write-basic1 input-wrap">
          <ul>
            <li>
              <dl>
                <dt>Title</dt>
                <dd><input type="text" /></dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>Date</dt>
                <dd><input type="text" id="datepicker" className="date" /></dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>Publish</dt>
                <dd>
                  <input type="radio" name="publish" id="publish1" defaultChecked={checked} onChange={ () => setChecked(!checked) } />
                  <label htmlFor="publish1">Y</label>
                  <input type="radio" name="publish" id="publish2" onChange={ () => setChecked(!checked) } />
                  <label htmlFor="publish2">N</label>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>Summary</dt>
                <dd><textarea></textarea></dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>Attach File</dt>
                <dd>
                  <div className="filebox">
                    <input type="text" disabled="disabled" className="upload-name" />
                    <input type="file" id="input_file1" className="upload-hidden" />
                    <label htmlFor="input_file1">Upload</label>
                    <button className="btn-delete">Delete</button>
                  </div>
                </dd>
              </dl>
            </li>
            <li>
              <textarea name="editor1"></textarea>
              <CKEditor  />
            </li>
          </ul>
        </section>
    </div>
  );
};

export default BoardWrite;
