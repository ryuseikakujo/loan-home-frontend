import React, { useState } from "react";

const Home = () => {
  return (
    <div className="Home">
      <h1>Enter details to get approval chance of your application</h1>
      <JsonForm />
    </div>
  );
};

export default Home;

const JsonForm = () => {
  const [inputs, setInputs] = useState({
    gender: "Male",
    married: "No",
    dependents: 0,
    education: "Graduate",
    selfEmployed: "No",
    applicantIncome: 5489,
    coapplicantIncome: 0,
    loanAmount: 128,
    loanAmountTerm: 360,
    creditHistory: 1,
    propertyArea: "Urban",
  });

  const [score, setScore] = useState();

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/scoreJson/";
    const bodyData = JSON.stringify({
      Gender: inputs.gender,
      Married: inputs.married,
      Dependents: inputs.dependents,
      Education: inputs.education,
      Self_Employed: inputs.selfEmployed,
      ApplicantIncome: inputs.applicantIncome,
      CoapplicantIncome: inputs.coapplicantIncome,
      LoanAmount: inputs.loanAmount,
      Loan_Amount_Term: inputs.loanAmountTerm,
      Credit_History: inputs.creditHistory,
      Property_Area: inputs.propertyArea,
    });
    const reqOpt = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: bodyData,
    };
    fetch(url, reqOpt)
      .then((res) => res.json())
      .then((resJ) => setScore(resJ.score * 100));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Gender</td>
              <td>
                <input
                  type="text"
                  name="gender"
                  value={inputs.gender}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Married</td>
              <td>
                <input
                  type="text"
                  name="married"
                  value={inputs.married}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>'Dependents'</td>
              <td>
                <input
                  type="text"
                  name="dependents"
                  value={inputs.dependents}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Education</td>
              <td>
                <input
                  type="text"
                  name="education"
                  value={inputs.education}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Self_Employed</td>
              <td>
                <input
                  type="radio"
                  name="selfEmployed"
                  value="Yes"
                  onChange={handleChange}
                />
                Yes
                <input
                  type="radio"
                  name="selfEmployed"
                  value="No"
                  defaultChecked
                  onChange={handleChange}
                />
                No
              </td>
            </tr>
            <tr>
              <td>Applicant Income</td>
              <td>
                <input
                  type="text"
                  name="applicantIncome"
                  value={inputs.applicantIncome}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Co-applicant Income</td>
              <td>
                <input
                  type="text"
                  name="coapplicantIncome"
                  value={inputs.coapplicantIncome}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Loan Amount</td>
              <td>
                <input
                  type="text"
                  name="loanAmount"
                  value={inputs.loanAmount}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Loan Amount Term</td>
              <td>
                <input
                  type="text"
                  name="loanAmountTerm"
                  value={inputs.loanAmountTerm}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Credit History</td>
              <td>
                <input
                  type="text"
                  name="creditHistory"
                  value={inputs.creditHistory}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Property Area</td>
              <td>
                <input
                  type="text"
                  name="propertyArea"
                  value={inputs.propertyArea}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Submit" />
      </form>
      {score && (
        <div>
          <h3>The probability of getting approval is {score}%</h3>
        </div>
      )}
    </>
  );
};
