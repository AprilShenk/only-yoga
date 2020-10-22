import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getOneLog, putLog } from '../services/logs';

const LogEdit = ({poses}) => {
  const [log, setLog] = useState(null);
  // const [poseId, setPoseId] = useState('');
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchLog = async () => {
      const logItem = await getOneLog(id);
      setLog(logItem)
    }
    fetchLog();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const logItem = await putLog(id, log);
    setLog(logItem);
    history.push('/logs')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setLog({
      ...log, 
      [name]: value,
    });
  }

  return (
    <div>
      {
        log && 
        <>
          <h6>{new Date(log.created_at).toLocaleString()}</h6>
          <div>Poses: {log.poses ? log.poses.map(pose => (
            <p key={pose.id}>{pose.name}</p>
          ))
            : ''}
          </div>
          <form onSubmit={handleSubmit}>
            <label>Notes:&nbsp;
              <input
              value={log.description}
              name="description"
              onChange={handleChange}
            />
            </label>
            
            <button>Save</button>
          </form>
        </>
      }
    </div>
  );
};

export default LogEdit;