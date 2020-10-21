import React from 'react';

const Logs = ({ logs }) => {

  const logsJSX = 
    logs.map(log => (
      <div key={log.id}>
        <h6>{new Date(log.created_at).toLocaleString()}</h6>
        <p>{log.description}</p>
      </div>
    ))
  

  return (
    <div>
      <h2>Logs</h2>
        {logsJSX}
    </div>
  );
};

export default Logs;