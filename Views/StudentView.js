// StudentView.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentView = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('/api/students');
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            {student.name} - {student.email} - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentView;
