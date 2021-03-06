import React from 'react'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
export default function DashBoardLayout({ children }) {
  let list = [
    {
      name: 'Dashboard',
      url: '/dashboard',
    },
    {
      name: 'Tasks',
      url: '/tasks',
    },
    {
      name: 'Gorillas',
      url: '/gorillas',
    },
    {
      name: 'Rangers',
      url: '/rangers',
    },
    {
      name: 'Doctors',
      url: '/doctors',
    },
    {
      name: 'Kwitizina',
      url: '/kwitizina',
    },
    {
      name: 'Reports',
      url: '/reports',
    },
    {
      name: 'Store',
      url: '/store',
    },
    {
      name: 'Settings',
      url: '/settings',
    },
  ]
  return (
    <div className="h-screen bg-gray-100 grid md:grid-cols-8 gap-0 overflow-y-hidden">
      <div className="hidden md:block md:col-span-1">
        <SideBar items={list} />
      </div>

      <div className="md:col-span-7 flex flex-col h-screen overflow-y-auto">
        <Nav />
        <div className="px-2 py-2">{children}</div>
      </div>
    </div>
  )
}
