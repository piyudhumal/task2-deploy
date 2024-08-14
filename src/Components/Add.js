// StudentAdd.js

import React, { useState } from 'react';

const Add = ({ addStudentCallback }) => {
  const [newStudent, setNewStudent] = useState({
    srno: '',
    name: '',
    sub1: '',
    sub2: '',
    sub3: '',
    sub4: '',
    sub5: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [id]: value,
    }));
  };

  const calculateTotalMarks = () => {
    // Calculate the total marks by converting the subject scores to numbers
    const totalMarks =
      Number(newStudent.sub1) +
      Number(newStudent.sub2) +
      Number(newStudent.sub3) +
      Number(newStudent.sub4) +
      Number(newStudent.sub5);

    return totalMarks;
  };

  const calculatePercentage = () => {
    // Calculate the percentage based on the total marks
    const totalMarks = calculateTotalMarks();
    const percentage = (totalMarks / 5).toFixed(2);
    return percentage;
  };

  const handleAddButtonClick = () => {
    // Calculate Total Marks and Percentage before adding the student
    const totalMarks = calculateTotalMarks();
    const percentage = calculatePercentage();

    // Call the callback to add the new student with Total Marks and Percentage
    addStudentCallback({
      ...newStudent,
      totalMarks,
      percentage,
    });

    // Log the new student data to the console
    console.log('New Student Data:', {
      ...newStudent,
      totalMarks,
      percentage,
    });

    // Clear the form fields after processing
    setNewStudent({
      srno: '',
      name: '',
      sub1: '',
      sub2: '',
      sub3: '',
      sub4: '',
      sub5: '',
    });
  };

  return (
    <div>
      <h2>Add Student</h2>
      <table border="1">
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Subject 1</th>
            <th>Subject 2</th>
            <th>Subject 3</th>
            <th>Subject 4</th>
            <th>Subject 5</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <td>
              <input
                type="text"
                name="name"
                id="name"
                value={newStudent.name}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="sub1"
                id="sub1"
                value={newStudent.sub1}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="sub2"
                id="sub2"
                value={newStudent.sub2}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="sub3"
                id="sub3"
                value={newStudent.sub3}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="sub4"
                id="sub4"
                value={newStudent.sub4}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="sub5"
                id="sub5"
                value={newStudent.sub5}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="button"
                value="Add"
                onClick={handleAddButtonClick}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Add;

