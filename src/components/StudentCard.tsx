import React from "react";

interface Student {
  name: string;
  age: number;
  marks: number;
  rollNumber: string;
}

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <h2 className="text-lg font-bold">{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Marks: {student.marks}</p>
      <p>Roll Number: {student.rollNumber}</p>
    </div>
  );
};

export default StudentCard;
