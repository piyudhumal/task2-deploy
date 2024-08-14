// StudentList.js

import React from 'react';

const calculateTotalMarks = (student) => {
  return student.sub1 + student.sub2 + student.sub3 + student.sub4 + student.sub5;
};

const Studentlist = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Subject 1</th>
            <th>Subject 2</th>
            <th>Subject 3</th>
            <th>Subject 4</th>
            <th>Subject 5</th>
            <th>Total Marks</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.srno}</td>
              <td>{student.name}</td>
              <td>{student.sub1}</td>
              <td>{student.sub2}</td>
              <td>{student.sub3}</td>
              <td>{student.sub4}</td>
              <td>{student.sub5}</td>
              <td>{calculateTotalMarks(student)}</td>
              <td>{(calculateTotalMarks(student) / 5).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Studentlist;
