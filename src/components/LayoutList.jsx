import React from 'react';
import { LayoutList } from 'lucide-react';
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CProgress,
  CButton
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

const LayoutList = () => {
  const tasks = [
    { id: 1, name: 'Upgrade NPM', progress: 0 },
    { id: 2, name: 'ReactJS Version', progress: 25 },
    { id: 3, name: 'VueJS Version', progress: 50 },
    { id: 4, name: 'Add new layouts', progress: 75 },
    { id: 5, name: 'Angular Version', progress: 100 },
  ];

  const getProgressColor = (progress) => {
    if (progress === 0) return 'secondary';
    if (progress <= 25) return 'danger';
    if (progress <= 50) return 'warning';
    if (progress <= 75) return 'primary';
    return 'success';
  };

  return (
    <CDropdown alignment="end">
      <CDropdownToggle color="transparent" caret={false} className="p-0">
        <LayoutList size={24} className="text-light" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" style={{ width: '250px', backgroundColor: '#1e1e2d', border: 'none' }}>
        <CDropdownItem className="d-block text-white py-2" style={{ backgroundColor: '#1e1e2d' }}>
          <div className="text-center">You have {tasks.length} pending tasks</div>
        </CDropdownItem>
        {tasks.map((task) => (
          <CDropdownItem key={task.id} className="d-block text-white py-2" style={{ backgroundColor: '#1e1e2d' }}>
            <div className="small mb-1">{task.name}</div>
            <CProgress 
              value={task.progress} 
              color={getProgressColor(task.progress)} 
              className="mb-1" 
              height={4}
            />
            <small className="text-muted">{task.progress}%</small>
          </CDropdownItem>
        ))}
        <CDropdownItem className="text-center py-2" style={{ backgroundColor: '#1e1e2d' }}>
          <CButton color="primary" variant="ghost" className="w-100" style={{ borderColor: '#321fdb' }}>
            View all tasks
          </CButton>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default LayoutList;