import ListBoardComponentHeader from '@/components/ListBoardComponentHeader';
import ListCardComponent from '@/components/ListCardComponent';
import MonthlyStatisticsComponent from '@/components/MonthlyStatisticsComponent';
import { getTasksByWorkSpaceByIdService, getWorkSpaceByIdService } from '@/service/todo.service';
import React from 'react'

const  WorkSpaceDetail = async ({params}) => {
  const workspaceId = params.workspaceId;
  const workspace = await getWorkSpaceByIdService(workspaceId);
  const tasks = await getTasksByWorkSpaceByIdService(workspaceId);
  return (
    <div> 
      <ListBoardComponentHeader workspace = {workspace} />
      <div className='flex w-full'>
        <div>
        {
          tasks.data.map(task=>{
            return(
              <div key={task.taskId} className=''>
                <ListCardComponent task = {task} />
                <br />
              </div>
              
            )
          })
        }
        </div>
        
        <MonthlyStatisticsComponent tasks = {tasks} />
      </div>
      
    </div>
  )
}

export default WorkSpaceDetail;