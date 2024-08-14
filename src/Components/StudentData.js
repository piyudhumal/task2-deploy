import React from 'react';

const StudentData = () => {
    const students = [
        {
            srNo: 1,
            name: 'A',
            subjects: [90, 85, 75, 95, 88]
        },
        {
            srNo: 2,
            name: 'B',
            subjects: [78, 92, 88, 80, 91]
        },
        {
            srNo: 3,
            name: 'C',
            subjects: [85, 79, 92, 88, 76]
        },
        {
            srNo: 4,
            name: 'D',
            subjects: [94, 87, 82, 90, 95]
        },
        {
            srNo: 5,
            name: 'E',
            subjects: [89, 93, 84, 78, 87]
        },
    ];

    const studentsResults = students.map((student) => {
        const total = student.subjects.reduce((acc, mark) => acc + mark, 0);
        const percentage = (total / (student.subjects.length * 100)) * 100;

        let grade;
        if (percentage >= 90) {
            grade = 'A';
        } else if (percentage >= 80) {
            grade = 'B';
        } else if (percentage >= 70) {
            grade = 'C';
        } else if (percentage >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        return { ...student, total, percentage, grade };
    });

    return (
        <div>
            <h1>Student Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Subjects</th>
                        <th>Total</th>
                        <th>Percentage</th>
                        
                            
                            <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {studentsResults.map((student) => (
                        <tr key={student.srNo}>
                            <td>{student.srNo}</td>
                            <td>{student.name}</td>
                            <td> {student.subjects.map((subject, index) => (
                                <span key={index}>{subject}
                                    {index < student.subjects.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                            </td>
                            <td>{student.total}</td>
                            <td>{student.percentage.toFixed(0)}%</td>
                            <td>{student.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentData;
