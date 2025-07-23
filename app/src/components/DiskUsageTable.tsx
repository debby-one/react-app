
import React from 'react';
import { Table } from 'react-bootstrap';

const data = [
  { filesystem: '/dev/sda1', size: '100G', used: '50G', avail: '50G', use: '50%', mounted: '/' },
  { filesystem: '/dev/sdb1', size: '500G', used: '250G', avail: '250G', use: '50%', mounted: '/data' },
];

const DiskUsageTable: React.FC = () => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Filesystem</th>
          <th>Size</th>
          <th>Used</th>
          <th>Avail</th>
          <th>Use%</th>
          <th>Mounted on</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.filesystem}</td>
            <td>{row.size}</td>
            <td>{row.used}</td>
            <td>{row.avail}</td>
            <td>{row.use}</td>
            <td>{row.mounted}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DiskUsageTable;
