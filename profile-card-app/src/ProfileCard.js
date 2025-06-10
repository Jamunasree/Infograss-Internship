import React from 'react';

function ProfileCard({ name, age, job }) {
  return (
    <div style={styles.card}>
      <h2>Profile Card</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Job:</strong> {job}</p>
    </div>
  );
}
const styles = {
  card: {
    width: '300px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'left',
    fontFamily: 'Arial'
  }
};
export default ProfileCard;
