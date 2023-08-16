import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const data = [
    { id: 1, firstName: 'moin', lastName: 'uddin', email: 'monu@example.com', phoneNumber: '123456789' },
    { id: 2, firstName: 'john', lastName: 'z', email: 'john@example.com', phoneNumber: '987654321' },
    { id: 3, firstName: 'xy', lastName: 'z', email: 'xyz@example.com', phoneNumber: '987654321' },
    { id: 4, firstName: 'ab', lastName: 'c', email: 'abc@example.com', phoneNumber: '987654321' },
];

const DataTable = () => {
  const [searchValue, setSearchValue] = useState('');
  const filteredData = data.filter(item =>
    item.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
    item.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
    item.email.toLowerCase().includes(searchValue.toLowerCase()) ||
    item.phoneNumber.includes(searchValue)
  );

  return (
    <div className="container">
      <div className="mt-4 mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>S No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
