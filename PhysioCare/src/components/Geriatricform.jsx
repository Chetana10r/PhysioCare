import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Geriatricform = () => {
  return (
    <>
      <div className="p-3 mb-2 bg-danger text-dark text-center fs-1 fw-semibold fst-italic ">
        GERIATRIC ASSESSMENT
      </div>



      <div className=" border border-black border-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded p-3 mb-2 bg-danger-subtle text-emphasis-info w-75 p-3 fs-5 mx-auto p-2  ">
        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label ">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the Name"
          />
        </div>




        <div className="mb-3 p-2 w-23">
          <label for="formGroupExampleInput" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter the Age"
          />
        </div>





        Grades of Age
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Young Age
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
              Middle Age
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
              Old Age
            </label>
          </div>
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
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              BP
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Diabetes
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Bronchial Asthama
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Tuberculosis
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
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
            placeholder="Enter the entire surgical history"
          />
        </div>


        Pain Site(Left Side)
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
          <table className="table  table-danger  table-striped ; table-danger table-hover; cell-padding-y:.5rem;cell-padding-x:.5rem;cell-padding-y-sm:.25rem;cell-padding-x-sm:.25rem,">
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
            <tbody class="table-group-divider ">
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
            </tbody>
          </table>
        </div>







        Pain Site(Right Side)
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
          <table className="table  table-danger  table-striped ; table-danger table-hover; cell-padding-y:.5rem;cell-padding-x:.5rem;cell-padding-y-sm:.25rem;cell-padding-x-sm:.25rem,">
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
            <tbody class="table-group-divider ">
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
            </tbody>
          </table>
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
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Upper Class
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Upper Middle Class
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Lower Middle Class
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
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
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
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
          <input className="form-control" type="file" id="formFileMultiple" multiple />
        </div>





        <div className="mb-3 p-2 w-23">
          <label for="formFileMultiple" className="form-label">
            Add File
          </label>
          <input className="form-control" type="file" id="formFileMultiple" multiple />
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





        Icterus
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Present
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Absent
            </label>
          </div>
        </div>





        Pallor
        <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Present
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Absent
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




        Neurogical Assessment
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
          <table className="table  table-danger  table-striped ; table-danger table-hover; cell-padding-y:.5rem;cell-padding-x:.5rem;cell-padding-y-sm:.25rem;cell-padding-x-sm:.25rem,">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Infact</th>
                <th scope="col">Affected</th>
              </tr>
            </thead>
            <tbody class="table-group-divider ">


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





        Motor Examination(Range of Motion)
        <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
          <table className="table  table-danger  table-striped ; table-danger table-hover; cell-padding-y:.5rem;cell-padding-x:.5rem;cell-padding-y-sm:.25rem;cell-padding-x-sm:.25rem,">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Complete and Painless</th>
                <th scope="col">Complete and Painful throughout Range</th>
                <th scope="col">Complete and Painful in partial Range</th>
                <th scope="col">Incomplete and Painless within Range</th>
                <th scope="col">Incomplete range and Painful in partial Range</th>
                <th scope="col">Incomplete range and Painful throughout Range</th>
                <th scope="col">Cannot perform due to pain</th>
              </tr>
            </thead>
            <tbody class="table-group-divider ">
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



      </div>
    </>
  );
}

export default Geriatricform;