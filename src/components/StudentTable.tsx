import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
    <div className="overflow-x-auto">
      <Table className="min-w-full border-collapse border border-gray-300 rounded-lg shadow-md">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="py-3 px-4 font-semibold text-gray-700">Name</TableHead>
            <TableHead className="py-3 px-4 font-semibold text-gray-700">Age</TableHead>
            <TableHead className="py-3 px-4 font-semibold text-gray-700">Marks</TableHead>
            <TableHead className="py-3 px-4 font-semibold text-gray-700">Roll Number</TableHead>
            <TableHead className="py-3 px-4 font-semibold text-gray-700">Attendance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student, index) => (
            <TableRow
              key={student.rollNumber}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-200 transition`}
            >
              <TableCell className="py-3 px-4">{student.name}</TableCell>
              <TableCell className="py-3 px-4">{student.age}</TableCell>
              <TableCell className="py-3 px-4">{student.marks}</TableCell>
              <TableCell className="py-3 px-4">{student.rollNumber}</TableCell>
              <TableCell className="py-3 px-4">{student.attendance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentTable;
