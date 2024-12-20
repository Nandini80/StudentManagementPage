import React, { useState, useEffect } from 'react';
import StudentTable from './components/StudentTable';
import StudentCard from './components/StudentCard ';
import Pagination from './components/Pagination';
import { getStudents } from './utils/getStudents'

interface Student {
  name: string;
  age: number;
  marks: number;
  rollNumber: string;
  attendance: string;
}

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [page, setPage] = useState<number>(1);
  const pageSize: number = 10;

  useEffect(() => {
    fetchStudents();
  }, [page]);

  const fetchStudents = async () => {
    const data = await getStudents(pageSize, page);
    setStudents(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Management</h1>
      <div className="hidden md:block">
        <StudentTable students={students} />
      </div>
      <div className="block md:hidden">
        {students.map((student) => (
          <StudentCard key={student.rollNumber} student={student} />
        ))}
      </div>
      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
};

export default App;
