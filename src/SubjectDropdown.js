import React, { useState } from 'react';

function SubjectDropdown() {
  // State to keep track of the selected subject
  const [selectedSubject, setSelectedSubject] = useState('');

  // Define the subjects as options
  const courses = [
    'African Studies', 
    'American Studies', 
    'Anthropology and Sociology', 
    'Arabic', 
    'Art', 
    'Biology', 
    'Business', 
    'Chemistry', 
    'Chinese', 
    'Classics', 
    'Community and Global Health', 
    'Computer Science', 
    'Critical Ethnic Studies', 
    'East Asian Studies', 
    'Economics', 
    'English', 
    'Environmental Studies', 
    'French', 
    'German', 
    'Hebrew Language', 
    'History', 
    'Interdisciplinary', 
    'International Area Studies', 
    'Japanese', 
    'Language', 
    'Latin', 
    'Mathematics', 
    'Music', 
    'Philosophy', 
    'Physical Education', 
    'Physics', 
    'Political Science', 
    'Psychology', 
    'Religion', 
    'Shared Passage Seminar', 
    'Spanish', 
    'Theatre Arts', 
    'Women, Gender, and Sexuality', 
  ];

  // Event handler for when a subject is selected
  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  return (
    <div>
      <h2>Courses:</h2>
      <select value={courses} onChange={handleSubjectChange}>
        <option value="">Courses</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>
            {course}
          </option>
        ))}
      </select>
      {courses && (
        <p>You selected: {selectedSubject}</p>
      )}
    </div>
  );
}

export default SubjectDropdown;