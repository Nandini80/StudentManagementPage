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
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold text-blue-700">{student.name}</h2>
      <p className="text-gray-600">Age: <span className="font-medium">{student.age}</span></p>
      <p className="text-gray-600">Marks: <span className="font-medium">{student.marks}</span></p>
      <p className="text-gray-600">Roll Number: <span className="font-medium">{student.rollNumber}</span></p>
    </div>
  );
};

export default StudentCard;
