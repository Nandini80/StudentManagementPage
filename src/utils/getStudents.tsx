import students from '../students.json'; 

export interface Student {
  name: string;
  age: number;
  marks: number;
  rollNumber: string;
  attendance: string;
}

export const getStudents = (pageSize: number, pageNumber: number): Promise<Student[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const startIndex = (pageNumber - 1) * pageSize;
      console.log(students);
      const paginatedData = students.slice(startIndex, startIndex + pageSize);
      resolve(paginatedData);
    }, 2000);
  });
};
