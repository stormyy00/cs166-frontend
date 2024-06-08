import Dashboard from '@/components/Dashboard'
import { COLUMNS } from "@/data/columns";
import React from 'react'

const page = ({params}) => {
  return (
    <div className='h-full font-poppins flex flex-col py-4 gap-3 w-full'><Dashboard title={params.type} columns={COLUMNS[params.type]} page={params.type} empty={`no ${params.type}`}/></div>
  )
}

export default page