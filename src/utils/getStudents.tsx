export interface Student {
    name: string;
    age: number;
    marks: number;
    rollNumber: string;
    attendance: string;
  }
  
  export const getStudents = (pageSize: number, pageNumber: number): Promise<Student[]> => {
    const students = require('../students.json');
    return new Promise((resolve) => {
      setTimeout(() => {
        const startIndex = (pageNumber - 1) * pageSize;
        const paginatedData = students.slice(startIndex, startIndex + pageSize);
        resolve(paginatedData);
      }, 2000);
    });
  };
  