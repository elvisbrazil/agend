import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  table: {
    borderCollapse: 'collapse',
  

  },
  tableCell: {
    border: '5px solid #cccc',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px',
  },
  form: {
    container: {
      padding: '20px',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px',
    },
    containergeral: {
      border: '5px solid #cccc',
      width: 'max-content',
      marginBottom: '40px',
    },
    inputs: {
      marginBottom: '5px',
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px',
    },
  },
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [firstName, setFirstName] = useState('Elvis');
  const [lastName, setLastName] = useState('Gonçalves');
  const [phone, setPhone] = useState('94992615575');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntryToPhoneBook({ firstName, lastName, phone });
    // Clear the form after submission
    setFirstName('');
    setLastName('');
    setPhone('');
  };

  return (
    <body>
      <container id ="containerGeral">
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
    </container>
    </body>

  );
}

function InformationTable({ phoneBook }) {
  // Sort the phone book entries by last name
  const sortedPhoneBook = [...phoneBook].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );

  return (
    <table style={style.table} className='informationTable'>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {sortedPhoneBook.map((entry, index) => (
          <tr key={index}>
            <td style={style.tableCell}>{entry.firstName}</td>
            <td style={style.tableCell}>{entry.lastName}</td>
            <td style={style.tableCell}>{entry.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application() {
  const [phoneBook, setPhoneBook] = useState([]);

  const addEntryToPhoneBook = (entry) => {
    setPhoneBook([...phoneBook, entry]);
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable phoneBook={phoneBook} />
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);

export default Application;