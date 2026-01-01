import React from 'react';
import {getNodeIcon} from '../utils/nodeIcons';

interface SidebarIconProps {
  nodeId: string;
  className?: string;
}

export default function SidebarIcon({nodeId, className = ''}: SidebarIconProps) {
  const iconPath = getNodeIcon(nodeId);
  
  if (!iconPath) {
    return null;
  }

  return (
    <img 
      src={iconPath} 
      alt={`${nodeId} icon`}
      className={`sidebar-icon ${className}`}
      style={{
        width: '16px',
        height: '16px',
        marginRight: '8px',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    />
  );
}
