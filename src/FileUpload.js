import React, { useState } from "react";

const FileUpload = () => {
  return (
    <div className="UploadForm">
      <h1>Batch Processing</h1>
      <FormBatch />
    </div>
  );
};

export default FileUpload;

const FormBatch = () => {
  const [file, setFile] = useState({
    selectFile: null,
    resFromServer: null,
    output: false,
  });

  const handleFile = (e) => {
    console.log(e.target.value);
    setFile({ ...file, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/scoreFile/";
    var formdata = new FormData();
    // console.log(file.selectFile, file.selectFile.name);
    formdata.append("filePath", file.selectFile, file.selectFile.name);
    const reqOpt = { method: "POST", body: formdata };
    const res = await fetch(url, reqOpt);
    const resJ = await res.json();

    setFile({ ...file, resFromServer: resJ.score, output: true });
  };

  const checkPoint = file.output;
  const iterateData = file.resFromServer;

  let finalTableData;
  if (checkPoint) {
    const tableData = iterateData.map((x, i) => {
      return (
        <tr key={i}>
          <td>{x[0]}</td>
          <td>{x[1]}</td>
        </tr>
      );
    });

    finalTableData = (
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Probability</th>
          </tr>
          {tableData}
        </tbody>
      </table>
    );
  } else {
    finalTableData = "No response";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="selectFile" onChange={handleFile} />
        <input type="submit" value="Submit" />
      </form>
      <div>{finalTableData}</div>
    </div>
  );
};
