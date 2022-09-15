import './ProjectDetail.css';
import Sidebar from '../../../components/Siidebar/Sidebar';
import Board from '../../../components/Board/Board';

function ProjectDetail() {
  return (
    <div className="">
      <div className="flex h-screen">
        <div className="basis-1/5">
          <Sidebar />
        </div>
        <div className="basis-4/5">
          <Board />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
