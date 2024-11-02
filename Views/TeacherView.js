// TeacherView.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeacherView = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const response = await axios.get('/api/teachers');
      setTeachers(response.data);
    };
    fetchTeachers();
  }, []);

  return (
    <div>
      <h2>Teacher List</h2>
      <ul>
        {teachers.map(teacher => (
          <li key={teacher._id}>
            {teacher.name} - {teacher.email} - {teacher.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherView;
