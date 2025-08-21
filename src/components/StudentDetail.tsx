import React from 'react';
import { useParams } from 'react-router-dom';
import { students } from '@/utils/constants';

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const student = students.filter((s) => s.id === Number(id))[0];

  return (
    <div>
      <h2>Student Detail</h2>
      <p>Student ID: {id}</p>
      <p>Student Name: {student.name}</p>
      <p>Student Course: {student.course}</p>
    </div>
  );
};

export default StudentDetail;
