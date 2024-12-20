import React, { useState, useEffect } from "react";
import StudentTable from "./components/StudentTable";
import Pagination from "./components/Pagination";
import { getStudents, Student } from "./utils/getStudents";

const App: React.FC = () => {
  // Explicitly type the students state as an array of Student
  const [students, setStudents] = useState<Student[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);

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
      <StudentTable students={students} />
      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
};

export default App;
