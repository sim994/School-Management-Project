import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import container from "../../public/icons/container.svg";
import Button from "../../public/icons/Button.svg";
import defaultimg from "../../public/images/defaultimg.png";

export function StudentForm() {
  let inputfileref = useRef(null);
  let [Previewimage, setPreviewimage] = useState(null);

  let handleFileChange = (e) => {
    let file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewimage(reader.result); // store base64 image string
    };
    reader.readAsDataURL(file);
  };
  return (
    <section className="student-form">
      <div className="form-container">
        <div className="heading-section">
          <p>
            <img src={container} alt="Image Not Found" />
            <NavLink to="/datatable">Back To Student Table</NavLink>
          </p>
          <p className="add-student">Add New Student Record</p>
          <p className="paragraph-lines">
            Complete the form below to register a new student in the management
            system.
          </p>
        </div>
        <form>
          <div className="photo-section">
            <div className="photo-wrapper">
              <div className="inner-circle">
                {Previewimage ? (
                  <img
                    src={Previewimage}
                    alt="Student"
                    className="preview-img"
                  />
                ) : (
                  "🧒"
                )}
              </div>

              {/* Hidden file input */}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={inputfileref}
              />

              {/* ✅ Wrap your Button image inside a <button> tag */}
              <img
                src={Button}
                alt="edit"
                className="pencil-btn"
                onClick={() => inputfileref.current.click()}
              />
            </div>
            <h3>Student Photo</h3>
            <p>Recommended :Square JPG or PNG , Max 2MB</p>
          </div>
          <pre></pre>
          <div className="form-inputs">
            <div className="input-wrapper">
              <input type="text" name="Fullname" placeholder="Enter Fullname" required/>
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                name="Rollnumber"
                placeholder="Enter Rollnumber"
                required
                />
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                name="Parentnumber"
                placeholder="Enter Parents Number"
                required
                />
            </div>
            <div className="input-wrapper">
              <input type="date" name="BOD" placeholder="Enter Birth Date"  required />
            </div>
            <div className="input-wrapper">
              <select name="Class" required>
                <option value="" >Select Class</option>
                {[6, 7, 8, 9].map((value) => {
                  return (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-wrapper">
              <select name="Class" required>
                <option value="">Select Section</option>
                {["A", "B", "C", "D"].map((value) => {
                  return (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-wrapper">
              <select name="Class" required>
                <option value="">Select Gender</option>
                {["Male", "Female", "Other"].map((value) => {
                  return (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="btn-section">
              <button type="submit">Record Submit</button>
              <button type="reset">Cencel</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
