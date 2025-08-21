import { students } from '@/utils/constants';
import React from 'react';
import { useSearchParams, Link, NavLink } from 'react-router-dom';

const StudentsList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const course = searchParams.get('course');

  const filteredStudents = course
    ? students.filter((student) => student.course === course)
    : students;

  return (
    <div>
      <h2>Students List</h2>

      <div>
        <strong>Filter:</strong> <Link to="?course=math">Math</Link> |{' '}
        <Link to="?course=science">Science</Link> |{' '}
        <Link to="/dashboard/students">All</Link>
      </div>

      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>
            <NavLink to={`/dashboard/students/${student.id}`}>
              {student.name} - {student.course}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
