import React from 'react';

interface Student {
  name: string;
  age: number;
  marks: number;
  rollNumber: string;
  attendance: string;
}

interface StudentTableProps {
  students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  return (
    <table className="min-w-full table-auto border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Age</th>
          <th className="border border-gray-300 px-4 py-2">Marks</th>
          <th className="border border-gray-300 px-4 py-2">Roll Number</th>
          <th className="border border-gray-300 px-4 py-2">Attendance</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.rollNumber}>
            <td className="border border-gray-300 px-4 py-2">{student.name}</td>
            <td className="border border-gray-300 px-4 py-2">{student.age}</td>
            <td className="border border-gray-300 px-4 py-2">{student.marks}</td>
            <td className="border border-gray-300 px-4 py-2">{student.rollNumber}</td>
            <td className="border border-gray-300 px-4 py-2">{student.attendance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
