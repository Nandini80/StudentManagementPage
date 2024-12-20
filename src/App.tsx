import React, { useState, useEffect } from "react";
import StudentTable from "./components/StudentTable";
import StudentCard from "./components/StudentCard";
import Pagination from "./components/Pagination";
import { getStudents, Student } from "./utils/getStudents";

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, [page]);

  const fetchStudents = async () => {
    const data = await getStudents(pageSize, page);
    setStudents(data);
    setHasMore(data.length === pageSize);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Student's Details</h1>

      <div className="hidden md:block">
        <StudentTable students={students} />
      </div>

      <div className="md:hidden">
        {students.map((student) => (
          <StudentCard key={student.rollNumber} student={student} />
        ))}
      </div>

      <Pagination currentPage={page} onPageChange={setPage} hasMore={hasMore} />
    </div>
  );
};

export default App;
