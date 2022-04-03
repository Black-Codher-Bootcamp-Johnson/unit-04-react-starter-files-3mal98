import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const LogForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('0');
  const [Location, setLocation] = useState('');
  const [hasSubmitted ,setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h1>Your Details</h1>
      <h2>Please fill in the form details</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name:<input type="text" value={name} onChange={(e) => { setName(e.target.value); setSubmitted(false) }} /></label>
          <label>Age <input type="number" value={age} onChange={(e) => { setAge(e.target.value); setSubmitted(false) }} /></label>
          <label>Location <input type="text" value={Location} onChange={(e) => { setLocation(e.target.value); setSubmitted(false) }} /></label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <h2>Results</h2>
            Name: {name}<br />
            Location: {Location}<br />
            Age: {age}<br />
            {hasSubmitted && <p>Thank you for submitting the form</p>}
      </div>
    </div>
  );
}

ReactDOM.render(<LogForm />, document.getElementById('root'));
