import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Combinedform = () => {
  return (
    <>
      <div className="p-3 mb-2 bg-info text-dark text-center fs-1 fw-semibold fst-italic ">
        form
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
        Type of form
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              OPD sutardara
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
              Seva Arogya Camp
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
              Geriatric Assessment
            </label>
          </div>
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
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label ">
            Phone No
          </label>
          <input
            type="number"
            className="form-control"
            id="Phone No"
            placeholder="Enter the phone number"
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
            Previous Occupation
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the previous Occupation"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Chief Complaint
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the Chief Complaint"
          />
        </div>
        Medical History
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              BP
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Diabetes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Bronchial Asthama
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Tuberculosis
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              None
            </label>
          </div>
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

        Icterus
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Present
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Absent
            </label>
          </div>
        </div>
        Pallor
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Present
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Absent
            </label>
          </div>
        </div>
        Oedema
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Grade 1
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
              Grade 2
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label className="form-check-label" for="flexRadioDefault3">
              Grade 3
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label className="form-check-label" for="flexRadioDefault4">
              Grade 4
            </label>
          </div>
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label ">
            Moca Scale Score
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the Score"
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
       
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Lymphadenopathy
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
        Deformities(if obvious)
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="Swan-neck"
              id="Swan-neck"
            />
            <label className="form-check-label" for="Swan-neck">
              Swan-Neck
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="Boutounierres"
              id="Boutounierres"
            />
            <label className="form-check-label" for="Boutounierres">
              Boutounierres
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="handzdeformity"
              id="handzdeformity"
            />
            <label className="form-check-label" for="handzdeformity">
              Hand Z-deformity
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="genuvarum"
              id="genuvarum"
            />
            <label className="form-check-label" for="genuvarum">
              Genu varum
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="genuvalgum"
              id="genuvalgum"
            />
            <label className="form-check-label" for="genuvalgum">
              Genu valgum
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="flatfoot"
              id="flatfoot"
            />
            <label className="form-check-label" for="flatfoot">
              Flatfoot
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="evertedcalcanei"
              id="evertedcalcanei"
            />
            <label className="form-check-label" for="evertedcalcanei">
              Everted Calcanei
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="invertedcalcanei"
              id="invertedcalcanei"
            />
            <label className="form-check-label" for="invertedcalcanei">
              Inverted Calcanei
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="halluxvalgus"
              id="halluxvalgus"
            />
            <label className="form-check-label" for="halluxvalgus">
              Hallux Valgus
            </label>
          </div>
        </div>
        
        Indicate Pain
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="text-center">
            <img
              src="https://img.freepik.com/premium-vector/line-figure-person-front-back-side-man-woman-human-three-angles-diagrams_399998-143.jpg"
              className="rounded mx-auto d-block"
              alt=""

            />
          </div>

        Pain Site(Left Side)
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
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
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
                <th scope="col">10</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">Neck</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Upper Back</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Lower Back</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">SIJ</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Shoulder</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Elbow</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Hip</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Knee</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              
              <tr>
                <th scope="row">Ankle</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>


              <tr>
                <th scope="row">Foot</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              
            </tbody>
          </table>
        </div>
        Pain Site(Right Side)
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
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
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
                <th scope="col">10</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">Neck</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="neck"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Upper Back</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upperback"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Lower Back</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowerback"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">SIJ</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sij"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Shoulder</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Elbow</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Hip</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Knee</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>


              <tr>
                <th scope="row">Ankle</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Foot</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="foot"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>

                
              </tr>

              
            </tbody>
          </table>
        </div>
        </div>
        
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="text-center">
            <img
              src="https://www.researchgate.net/publication/320018654/figure/fig4/AS:542528517492740@1506360286255/Wong-Bakers-Facial-Pain-Scale.png"
              className="rounded mx-auto d-block"
              alt=""
            />
          </div>

          <p className="fw-bold text-center">
            Note:-Use faces pain rating scale image for all the pain related
            questions.
          </p>
        </div>
        NRS Neck
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
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
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
                <th scope="col">10</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">At rest</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="atrest"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="atrest"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="atrest"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="atrest"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="atrest"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="atrest"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="atrest"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="atrest"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="atrest"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="atrest"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="atrest"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">On Activity</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="onact"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="onact"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="onact"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="onact"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="onact"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="onact"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="onact"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="onact"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="onact"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="onact"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="onact"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        NRS Upper Back
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
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
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
                <th scope="col">10</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">At rest</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackrest"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackrest"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackrest"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackrest"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackrest"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackrest"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackrest"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackrest"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackrest"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackrest"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackrest"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">On Activity</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackact"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackact"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackact"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackact"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackact"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackact"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackact"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackact"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackact"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackact"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="upbackact"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        NRS Low Back
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
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
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
                <th scope="col">10</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">At rest</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackrest"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackrest"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackrest"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackrest"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackrest"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackrest"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackrest"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackrest"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackrest"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackrest"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackrest"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">On Activity</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackact"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackact"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackact"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackact"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackact"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackact"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackact"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackact"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackact"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackact"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lowbackact"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        NRS Hip
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
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
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
                <th scope="col">10</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">At rest</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hiprest"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hiprest"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hiprest"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hiprest"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hiprest"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hiprest"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hiprest"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hiprest"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hiprest"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hiprest"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hiprest"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">On Activity</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hipact"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hipact"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hipact"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hipact"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hipact"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hipact"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hipact"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hipact"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hipact"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hipact"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hipact"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        NRS Knee
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
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
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
                <th scope="col">10</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">At rest</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneerest"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneerest"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneerest"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneerest"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneerest"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneerest"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneerest"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneerest"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneerest"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneerest"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneerest"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">On Activity</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneeact"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneeact"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneeact"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneeact"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneeact"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneeact"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneeact"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneeact"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneeact"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneeact"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kneeact"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        NRS ankle and Foot
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
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
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
                <th scope="col">10</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">At rest</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootrest"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootrest"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootrest"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootrest"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootrest"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootrest"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootrest"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootrest"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootrest"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootrest"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootrest"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">On Activity</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootact"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootact"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootact"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootact"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootact"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootact"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootact"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootact"
                      id="flexRadioDefault8"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootact"
                      id="flexRadioDefault9"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootact"
                      id="flexRadioDefault10"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="anklefootact"
                      id="flexRadioDefault11"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
          <label for="formGroupExampleInput" className="form-label ">
            Aggrevating Factor
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the Aggrevating Factor"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label ">
            Reiliving Factor
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the Reiliving Factor"
          />
        </div>
        Kuppuswamy Scale
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Upper Class
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Upper Middle Class
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Lower Middle Class
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Lower Class
            </label>
          </div>
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label ">
            Geriatric Depression Scale(GDS)
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the Scale"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label ">
            SF-36 Score
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the Score"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label ">
            Activity of Daily Living(Barthal Index Score)
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the Score"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label ">
            Instrumental Activity of Daily Living Score
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the Score"
          />
        </div>
        Assistive Devices
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label ">
            History of Fall
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the Data"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label ">
            Fall Efficiency Scale
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the Scale"
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formFileMultiple" className="form-label">
            Add File
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
        <div className="mb-3 p-2 w-23">
          <label for="formFileMultiple" className="form-label">
            Add File
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
       
       
        Tightness
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="text-center"></div>
          <table className="table  table-info  table-striped ; table-info table-hover; cell-padding-y:.5rem;cell-padding-x:.5rem;cell-padding-y-sm:.25rem;cell-padding-x-sm:.25rem,">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Left</th>
                <th scope="col">Right</th>
                <th scope="col">Both</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">Trapezius</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="left"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="left"
                      id="flexRadioDefault3"
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
                      type="radio"
                      name="right"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="left"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="left"
                      id="flexRadioDefault3"
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
                      type="radio"
                      name="right"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="left"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="left"
                      id="flexRadioDefault3"
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
                      type="radio"
                      name="right"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="left"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="left"
                      id="flexRadioDefault3"
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
                      type="radio"
                      name="right"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="left"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="left"
                      id="flexRadioDefault3"
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
                      type="radio"
                      name="right"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="left"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="left"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        Motor Examination(Range of Motion)
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
          <table className="table  table-info  table-striped ; table-info table-hover; cell-padding-y:.5rem;cell-padding-x:.5rem;cell-padding-y-sm:.25rem;cell-padding-x-sm:.25rem,">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Complete and Painless</th>
                <th scope="col">Complete and Painful throughout Range</th>
                <th scope="col">Complete and Painful in partial Range</th>
                <th scope="col">Incomplete and Painless within Range</th>
                <th scope="col">
                  Incomplete range and Painful in partial Range
                </th>
                <th scope="col">
                  Incomplete range and Painful throughout Range
                </th>
                <th scope="col">Cannot perform due to pain</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">Cervical</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Shoulder</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Elbow</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Wrist</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="wrist"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="wrist"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="wrist"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="wrist"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="wrist"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="wrist"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="wrist"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Hand</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hand"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hand"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hand"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hand"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hand"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hand"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hand"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Trunk</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trunk"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trunk"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trunk"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trunk"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trunk"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trunk"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trunk"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Hip</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Knee</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Ankle</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        Neurogical Assessment
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
          <table className="table  table-info  table-striped ; table-info table-hover; cell-padding-y:.5rem;cell-padding-x:.5rem;cell-padding-y-sm:.25rem;cell-padding-x-sm:.25rem,">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Infact</th>
                <th scope="col">Affected</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">Olfactory Nerve</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="olfactory"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="olfactory"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Optic Nerve</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="optic"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="optic"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Occulomotor Nerve</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="occulomotor"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="occulomotor"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Trochlear Nerve</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trochlear"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trochlear"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Trigeminamal Nerve</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trigeminamal"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trigeminamal"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Abducens Nerve</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="abducens"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="abducens"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Facial Nerve</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="facial"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="facial"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Vestibulocochlear Nerve</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="vestibulocochlear"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="vestibulocochlear"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Glossopharyngeal Nerve</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="glossopharyngeal "
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="glossopharyngeal "
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Vagus Nerve</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="vagus"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="vagus"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Spinal Accesory Nerve</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="spinal"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="spinal"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Hypoglossal Nerve</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hypoglossal"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hypoglossal"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Sensory Nerve</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sensory"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sensory"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        Tone Examination(Range of Motion)
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
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
                <th scope="col">Normal</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">Cervical</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Shoulder</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shoulder"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Elbow</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="elbow"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Wrist</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="wrist"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="wrist"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="wrist"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="wrist"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="wrist"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="wrist"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="wrist"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Hand</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hand"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hand"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hand"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hand"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hand"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hand"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hand"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Trunk</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trunk"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trunk"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trunk"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trunk"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trunk"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trunk"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="trunk"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Hip</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hip"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Knee</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="knee"
                      id="flexRadioDefault7"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Ankle</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ankle"
                      id="flexRadioDefault7"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault3"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault4"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="left"
                      id="flexradioDefault6"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="right"
                      id="flexcheckboxDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
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
        
        
        BMD score
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
          <table className="table  table-info  table-striped ; table-info table-hover; cell-padding-y:.5rem;cell-padding-x:.5rem;cell-padding-y-sm:.25rem;cell-padding-x-sm:.25rem,">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">-1 or above</th>
                <th scope="col">-1.5 to -2.4</th>
                <th scope="col">-2.5 to -4</th>
                <th scope="col">-2.5</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">T score</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tscore"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tscore"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tscore"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tscore"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        
        Lower Extremity Function Scale
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
          <table className="table  table-info  table-striped ; table-info table-hover; cell-padding-y:.5rem;cell-padding-x:.5rem;cell-padding-y-sm:.25rem;cell-padding-x-sm:.25rem,">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">
                  Extremely difficult or unable to perform the activity
                </th>
                <th scope="col">Quite a bit difficult</th>
                <th scope="col">moderate difficult</th>
                <th scope="col">A little bit difficult</th>
                <th scope="col">No difficulty</th>
                <th scope="col">Not applicable</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">
                  Any of your usual work,housework or school activities.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Your usual hobbies,recreational or sporting activities.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale2"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale2"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale2"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale2"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale2"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale2"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Getting into or out of the bath.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale3"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale3"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale3"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale3"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale3"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale3"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Walking between rooms.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale4"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale4"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale4"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale4"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale4"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale4"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Putting on your shoes or socks.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale5"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale5"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale5"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale5"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale5"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale5"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Squatting.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale6"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale6"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale6"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale6"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale6"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale6"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Lifting an object,like a bag of groceries from the floor.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale7"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale7"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale7"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale7"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale7"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale7"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Performing light activities around your home.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale8"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale8"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale8"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale8"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale8"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale8"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Performing heavy activities around your home.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale9"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale9"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale9"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale9"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale9"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale9"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Getting into or out of car/rickshaw.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale10"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale10"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale10"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale10"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale10"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale10"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Getting onto or off a 2-wheeler</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale11"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale11"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale11"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale11"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale11"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale11"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Walking 2 blocks/2 chowks.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale12"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale12"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale12"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale12"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale12"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale12"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Walking a mile.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale13"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale13"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale13"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale13"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale13"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale13"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Going up or down 10 stairs.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale14"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale14"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale14"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale14"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale14"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale14"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Standing for 1 hour.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale15"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale15"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale15"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale15"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale15"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale15"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Sitting for 1 hour.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale16"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale16"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale16"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale16"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale16"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale16"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Running on Even Ground.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale17"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale17"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale17"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale17"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale17"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale17"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Running on Uneven Ground.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale18"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale18"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale18"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale18"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale18"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale18"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Making sharp turns while running.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale19"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale19"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale19"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale19"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale19"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale19"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Hopping.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale20"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale20"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale20"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale20"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale20"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale20"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Rolling over in bed.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale21"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale21"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale21"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale21"
                      id="flexRadioDefault4"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale21"
                      id="flexRadioDefault5"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="difficultyscale21"
                      id="flexRadioDefault6"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        The Osteoporosis Knowledge Assessment Tool
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
          <table className="table  table-info  table-striped ; table-info table-hover; cell-padding-y:.5rem;cell-padding-x:.5rem;cell-padding-y-sm:.25rem;cell-padding-x-sm:.25rem,">
            <thead>
              <tr>
                <th scope="col"></th>

                <th scope="col">True</th>
                <th scope="col">False</th>
                <th scope="col">Donot Know</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">
                  Osteoporosis leads to an increase risk of bone fractures.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo1"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo1"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo1"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Osteoporosis usually causes symptoms(eg.pain)before fractures
                  occur.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo2"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo2"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo2"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Having a higher peak bone mass at the end of childhood gives
                  no protection against the development of osteoporosis in later
                  life.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo3"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo3"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo3"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Osteoporosis is more common in men.</th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo4"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo4"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo4"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Cigarette smoking can contribute to osteoporosis.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo5"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo5"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo5"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  White women are at highest risk of fracture as compared to
                  other races.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo6"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo6"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo6"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  A fall is just as important as low bone strength in causing
                  fractures.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo7"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo7"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo7"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  By age 80,The majority of women have osteoporosis.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo8"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo8"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo8"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  From age 50,Most women can expect atleast one fracture before
                  they die.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo9"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo9"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo9"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Any type of physical activity is beneficial for osteoporosis.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo10"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo10"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo10"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  It is easy to tell wheather I am at risk of osteoporosis by my
                  clinical risk factor.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo11"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo11"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo11"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Family history of osteoporosis strongly predisposes a person
                  to osteoporosis.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo12"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo12"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo12"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  An adequate calcium intake can be achieved from two glasses of
                  milk a day.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo13"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo13"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo13"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Sardines and broccoli are good sources of calcium for people
                  who cannot take dairy products.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo14"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo14"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo14"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Calcium supplements alone can prevent bone loss.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo15"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo15"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo15"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Alcohol in moderation has little effect on osteoporosis.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo16"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo16"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo16"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  A high salt intake is a risk factor for osteoporosis.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo17"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo17"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo17"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  There is small amount of bone loss in the ten years following
                  the onset of menopause.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo18"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo18"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo18"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Hormone therapy prevents further bone loss at any age after
                  menopause.
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo19"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo19"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo19"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  There are no effective treatments for osteoporosis available
                  in India..
                </th>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo20"
                      id="flexRadioDefault1"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo20"
                      id="flexRadioDefault2"
                    />
                  </div>
                </td>

                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="osteo20"
                      id="flexRadioDefault3"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}


export default Combinedform;
