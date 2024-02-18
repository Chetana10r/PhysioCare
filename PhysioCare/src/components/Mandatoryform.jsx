import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Mandatoryform = () => {
    return (
      <>
        <div className="p-3 mb-2 bg-danger text-dark text-center fs-1 fw-semibold fst-italic">
          MANDATORY FORM
        </div>
  
        <div className="border border-black border-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded p-3 mb-2 bg-danger-subtle text-emphasis-info w-75 p-3 fs-5 mx-auto p-2">
          <div className="mb-3 p-2 w-23">
            <label htmlFor="formGroupExampleInput" className="form-label">
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
            <label htmlFor="formGroupExampleInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter the name"
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
              <label htmlFor="flexRadioDefault1" className="form-check-label">
                New
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label htmlFor="flexRadioDefault2" className="form-check-label">
                Old
              </label>
            </div>
          </div>
          <div className="mb-3 p-2 w-23">
            <label htmlFor="formGroupExampleInput2" className="form-label">
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
              <label htmlFor="flexRadioDefault1" className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label htmlFor="flexRadioDefault2" className="form-check-label">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label htmlFor="flexRadioDefault3" className="form-check-label">
                Others
              </label>
            </div>
          </div>
          <div className="mb-3 p-2 w-23">
            <label htmlFor="formGroupExampleInput" className="form-label">
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
            <label htmlFor="formGroupExampleInput" className="form-label">
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
            <label htmlFor="formGroupExampleInput" className="form-label">
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
            <label htmlFor="formGroupExampleInput" className="form-label">
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
  
  
  export default Mandatoryform;