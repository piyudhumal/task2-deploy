import React, { useState } from 'react';
import StudentData from './Components/StudentData';
import Studentlist from './Components/Studentlist';
import Add from './Components/Add';


export const App = () => {

  const [studentsData, setStudentsData] = useState([
    {
      srno: 1,
      name: 'John Doe',
      sub1: 85,
      sub2: 90,
      sub3: 78,
      sub4: 92,
      sub5: 88,
    },
    {
      srno: 2,
      name: 'Jane Smith',
      sub1: 92,
      sub2: 88,
      sub3: 76,
      sub4: 90,
      sub5: 85,
    },
    // ... other existing student data
  ]);

  const handleAddStudent = (newStudent) => {
    setStudentsData((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div>

      <StudentData addStudentCallback={handleAddStudent} />
      <Studentlist students={studentsData} />
      <Add />

    </div>
  )
}
