import React from 'react';
import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <>
      <div className="body">
        <div className="cont">
          <Outlet />
        </div>
      </div>
    </>
  );
}
