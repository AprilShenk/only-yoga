import React from 'react';
import { useParams } from 'react-router-dom';

const LogDetail = ({ logs }) => {
  const { id } = useParams();
  const log = logs && logs.find(log => log.id === Number(id))

  return (
    <div>
      {log &&
        <>
          <h6>{new Date(log.created_at).toLocaleString()}</h6>
        <p key={log.name}>Notes: {log.description}</p>
        <div>
          Poses: {log.poses ? log.poses.map(pose => (
            <p key={pose.id}>{pose.name}</p>
          )) :
          ''}
        </div>
        </>
      }
    </div>
  );
};

export default LogDetail;