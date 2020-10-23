import React from 'react';
import { useParams } from 'react-router-dom';

const LogDetail = ({ logs }) => {
  const { id } = useParams();
  const log = logs && logs.find(log => log.id === Number(id))

  return (
    <div>
      {log && <p key={log.name}>{log.description}</p>}
    </div>
  );
};

export default LogDetail;