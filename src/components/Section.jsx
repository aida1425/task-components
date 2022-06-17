import React from "react";

const Section = ({ users }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20%",
      }}>
      <div className="section">
        <table border="2" width="666px" height="200px">
          <tr className="table-header">
            <td>
              <strong>Name</strong>
            </td>
            <td>
              <strong>Last Name</strong>
            </td>
            <td>
              <strong>Age</strong>
            </td>
          </tr>
          {users.map(item => (
            <tr className="table-content">
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Section;
