import React from "react";

const Table = ({ children }) => {
  return (
    <table>
      <tr>
        <th>Website</th>
        <th>Investering</th>
        <th>Aangemaakt op</th>
      </tr>
      {children}
    </table>
  );
};

export default Table;
