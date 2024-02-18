import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Sevaform = () => {
    return (
      <>
        <div className="p-3 mb-2 bg-info text-dark text-center fs-1 fw-semibold fs-1 fw-semibold fst-italic ">
        DESBJCOP AND SEVA AROGYA CAMP
        </div>
        < div className=" border border-black border-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded p-3 mb-2 bg-info-subtle text-emphasis-info w-75 p-3 fs-5 mx-auto p-2  ">
           
           Consent of Participant:Data from this form will be used for research and publication purposes.Please indicate if you wish to be included in research.Despite your answer,you will be assessed here,without bias or prejudice.
            <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
              <div className="Consent">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Consentans"
                  id="yes"
                />
                <label className="form-check-label" for="yes">
                Yes
                </label>
              </div>
              <div className="Consent">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Consentans"
                  id="no"
                />
                <label className="form-check-label" for="no">
                No
                </label>
              </div>
            </div>
            <div className="mb-3 p-2 w-23">
              <label for="formGroupExampleInput" className="form-label ">
                Name of Participant
              </label>
              <input
                type="text"
                className="form-control"
                id="Name"
                placeholder="Enter the Name"
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
            <div className="mb-3 p-2 w-23">
              <label for="formGroupExampleInput" className="form-label ">
                Arogya Seva Form Number
              </label>
              <input
                type="number"
                className="form-control"
                id="form No"
                placeholder="Enter the form number"
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
            <tbody class="table-group-divider ">
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
  
  
  
  
  
            Indicate Pain
            <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
            <div className style={{ textAlign: "center" }}>
              <img src="https://img.freepik.com/premium-vector/line-figure-person-front-back-side-man-woman-human-three-angles-diagrams_399998-143.jpg" class="rounded" alt="" />
              
            </div>
            <table className="table  table-info  table-striped ; table-info table-hover; cell-padding-y:.5rem;cell-padding-x:.5rem;cell-padding-y-sm:.25rem;cell-padding-x-sm:.25rem,">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Right</th>
                <th scope="col">Left</th>
                
                
              </tr>
            </thead>
            <tbody class="table-group-divider ">
            <tr>
              <th scope="row">Neck</th>
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
              <th scope="row">Upper Back</th>
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
              <th scope="row">Lower Back</th>
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
              <th scope="row">Shoulder girdle</th>
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
              <th scope="row">Elbow</th>
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
              <th scope="row">Wrist</th>
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
              <th scope="row">Hand</th>
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
              <th scope="row">SIJ</th>
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
              <th scope="row">Hip</th>
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
              <th scope="row">Knee</th>
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
              <th scope="row">Ankle</th>
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
              <th scope="row">Foot</th>
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
              <th scope="row">No Pain</th>
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
              <th scope="row">non-specific pain</th>
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
          
            <div className="text-bg-light p-2 mb-3 w-23 form-label form-control">
            <div class="text-center">
              <img src="https://www.researchgate.net/publication/320018654/figure/fig4/AS:542528517492740@1506360286255/Wong-Bakers-Facial-Pain-Scale.png" class="rounded" alt=""/>
              
            </div>
            
  
  
             <p class="fw-bold">Note:-Use faces pain rating scale image for all the pain related questions.</p>
  
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
            <tbody class="table-group-divider ">
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
            <tbody class="table-group-divider ">
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
            <tbody class="table-group-divider ">
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
            <tbody class="table-group-divider ">
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
            <tbody class="table-group-divider ">
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
            <tbody class="table-group-divider ">
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
              Boutounierre's
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
            
            
            Lower Extremity Function Scale
          <div className="text-bg-light p-3 mb-4 w-23 form-label form-control">
          <table className="table  table-info  table-striped ; table-info table-hover; cell-padding-y:.5rem;cell-padding-x:.5rem;cell-padding-y-sm:.25rem;cell-padding-x-sm:.25rem,">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Extremely difficult or unable to perform the activity</th>
                <th scope="col">Quite a bit difficult</th>
                <th scope="col">moderate difficult</th>
                <th scope="col">A little bit difficult</th>
                <th scope="col">No difficulty</th>
                <th scope="col">Not applicable</th>
                
              </tr>
            </thead>
            <tbody class="table-group-divider ">
            <tr>
              <th scope="row">Any of your usual work,housework or school activities.</th>
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
              <th scope="row">Your usual hobbies,recreational or sporting activities.</th>
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
              <th scope="row">Lifting an object,like a bag of groceries from the floor.</th>
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
              <th scope="row">Performing light activities around your home.</th>
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
              <th scope="row">Performing heavy activities around your home.</th>
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
                <th scope="col">Don't Know</th>
                
              </tr>
            </thead>
            <tbody class="table-group-divider ">
            <tr>
              <th scope="row">Osteoporosis leads to an increase risk of bone fractures.</th>
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
              <th scope="row">Osteoporosis usually causes symptoms(eg.pain)before fractures occur.</th>
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
              <th scope="row">Having a higher peak bone mass at the end of childhood gives no protection against the development of osteoporosis in later life.</th>
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
              <th scope="row">Cigarette smoking can contribute to osteoporosis.</th>
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
              <th scope="row">White women are at highest risk of fracture as compared to other races.</th>
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
              <th scope="row">A fall is just as important as low bone strength in causing fractures.</th>
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
              <th scope="row">By age 80,The majority of women have osteoporosis.</th>
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
              <th scope="row">From age 50,Most women can expect atleast one fracture before they die.</th>
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
              <th scope="row">Any type of physical activity is beneficial for osteoporosis.</th>
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
              <th scope="row">It is easy to tell wheather I am at risk of osteoporosis by my clinical risk factor.</th>
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
              <th scope="row">Family history of osteoporosis strongly predisposes a person to osteoporosis.</th>
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
              <th scope="row">An adequate calcium intake can be achieved from two glasses of milk a day.</th>
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
              <th scope="row">Sardines and broccoli are good sources of calcium for people who cannot take dairy products.</th>
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
              <th scope="row">Calcium supplements alone can prevent bone loss.</th>
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
              <th scope="row">Alcohol in moderation has little effect on osteoporosis.</th>
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
              <th scope="row">A high salt intake is a risk factor for osteoporosis.</th>
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
              <th scope="row">There is small amount of bone loss in the ten years following the onset of menopause.</th>
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
              <th scope="row">Hormone therapy prevents further bone loss at any age after menopause.</th>
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
              <th scope="row">There are no effective treatments for osteoporosis available in India..</th>
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
    )
  }

export default Sevaform;
