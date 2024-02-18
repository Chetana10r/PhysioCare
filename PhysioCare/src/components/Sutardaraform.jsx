import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Sutardaraform = () => {
  return (
    <>
      <div className="p-3 mb-2 bg-info text-dark text-center fs-1 fw-semibold fst-italic ">
        SUTARDARA OPD FORM
      </div>
      <div className=" border border-black border border-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded p-3 mb-2 bg-info-subtle text-emphasis-info w-75 p-3 fs-5 mx-auto p-2  ">
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Form No.
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the form number"
          />
        </div>

        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the name"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Aadhaar Number
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the Aadhaar number"
          />
        </div>
        Type of Patient
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              New
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Old
            </label>
          </div>
        </div>
        <div
          className="p-3 mb-2 bg-info text-dark text-center fs-2 fw-semibold fst-italic form-control
           "
        >
          Demographic Data and History
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput2" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter age"
          />
        </div>
        Gender
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Female
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Others
            </label>
          </div>
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Contact No.
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the contact number"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the Address"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            C/C
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            HOPI
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Medical History
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Surgical History
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            B.P
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            P.R
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            R.R
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Height
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Weight
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            B.M.I
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Pallor
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Oedema
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Lympho
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Icterus
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Cyanosis
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Clubbing
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Erythema
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Eruptinosa
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Gait
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Posture
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Pain
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Site
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Type
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Onset
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Duration
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Progression
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Aggravating factors
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Relieving Factors
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Diurnal Variation
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Irritability
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        VAS
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <table className="table table-success table-striped">
            <tr>
              <td>0</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </td>
              <td>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </td>
              <td>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </td>
              <td>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </td>
              <td>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </td>
              <td>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </td>
              <td>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </td>
              <td>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </td>
              <td>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </td>
              <td>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </td>
              <td>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </td>
            </tr>
          </table>
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Menstrual History
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        Tightness
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="text-center"></div>
          <table className="table  table-info  table-striped ; table-info table-hover; cell-padding-y:.5rem;cell-padding-x:.5rem;cell-padding-y-sm:.25rem;cell-padding-x-sm:.25rem,">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Right</th>
                <th scope="col">Left</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">Trapezius</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Pectoral</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">DLF</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">lliopsoas</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Hams</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">TA</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        Strength
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="text-center"></div>
          <table className="table  table-info  table-striped ; table-info table-hover; cell-padding-y:.5rem;cell-padding-x:.5rem;cell-padding-y-sm:.25rem;cell-padding-x-sm:.25rem,">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">0</th>
                <th scope="col">1</th>
                <th scope="col">2</th>
                <th scope="col">3</th>
                <th scope="col">4</th>
                <th scope="col">5</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">Shoulder flexors</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Shoulder extensors</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Shoulder abductors</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Shoulder IR</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Shoulder ER</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Elbow flexors</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Wrist Extensors</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Wrist Radial Deviatora</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Wrist ulnar Deviatora</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Hip Flexors</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Hip Extensors</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Hip adductors</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Hip IR</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Hip ER</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Knee flexors</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Knee Extensors</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Dorsiflexors</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Plantarflexors</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="left"
                      id="flexcheckboxDefault2"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            GPLAD(Enter appropriate nos after each letter in the form)
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            G1
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            G2
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            G3
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            G4
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            O/A
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            TUG (Required if the patient is more than 60 years of age.)
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Special Test (Enlist Test with positive response. )
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Special Test (Enlist Test with negative response. )
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the data"
          />
        </div>
      </div>
    </>
  )
}
export default Sutardaraform;
