import './ProjectsList.css';
import { useNavigate } from 'react-router-dom';

function ProjectList() {
  const navigate = useNavigate();

  const list = [
    {
      id: 1,
      name: 'Deepak',
      key: 'EV',
      type: 'Team Manager Software',
      lead: 'Deepak-barnasiya'
    },
    {
      id: 2,
      name: 'Deepak',
      key: 'EV',
      type: 'Team Manager Software',
      lead: 'Deepak-barnasiya'
    },
    {
      id: 3,
      name: 'Deepak',
      key: 'EV',
      type: 'Team Manager Software',
      lead: 'Deepak-barnasiya'
    },
    {
      id: 4,
      name: 'Deepak',
      key: 'EV',
      type: 'Team Manager Software',
      lead: 'Deepak-barnasiya'
    },
    {
      id: 5,
      name: 'Deepak',
      key: 'EV',
      type: 'Team Manager Software',
      lead: 'Deepak-barnasiya'
    },
    {
      id: 6,
      name: 'Deepak',
      key: 'EV',
      type: 'Team Manager Software',
      lead: 'Deepak-barnasiya'
    }
  ];
  return (
    <div className="list-id">
      <table className="table-width">
        <thead>
          <tr>
            <th>S No.</th>
            <th>Name</th>
            <th>Key</th>
            <th>Type</th>
            <th>Lead</th>
          </tr>
        </thead>
        <tbody>
          {list.map((project) => {
            return (
              <tr key={project.id} onClick={() => navigate(`/project/${project.id}`)}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.name}</td>
                <td>{project.name}</td>
                <td>{project.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectList;
