import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import TodoCardComponent from '@/components/TodoCardComponent';
import { getTasksByWorkSpaceByIdService, getWorkSpaceByIdService } from '@/service/todo.service';
import React from 'react'

const TodoBoardDetailPage = async ({params}) => {
  function chooseRulerColor(index){
    const statisStyle = "border-b-4 pb-3 text-xl"
    if(index == 0)
        return "border-todo " + statisStyle;
    else if(index == 1)
        return "border-workingOn " + statisStyle;
    else if(index == 2)
        return "border-checking" + statisStyle;
    else return "border-completed" + statisStyle;
}
    const todoBoardId = params.todoBoardId;
    const workspace = await getWorkSpaceByIdService(todoBoardId);
    const allStatusList = ["Todo", "Working On", "Checking", "Complete"]
    const tasks = await getTasksByWorkSpaceByIdService(todoBoardId);
  return (
    <div>
       <ListBoardComponentHeader workspace={workspace} />
       <div className='p-7'>
       <h1 className=" text-3xl text-black">{workspace.workSpaceName}</h1>
       <div className=" mt-5 grid grid-cols-4 gap-x-3 w-full">
       {allStatusList.map((task, index) => (
                    <div key={index}>
                        <h1 className={chooseRulerColor(index)}>{task}</h1>
                        <div className="w-full">
                            {tasks.data?.map(async (task) => {
                                if (task.status == index + 1) {
                                    return (
                                        <div key={index} className="w-full">
                                            <TodoCardComponent taskDetail={task} />
                                        </div>
                                    )
                                }
                            })}

                        </div>
                    </div>
                ))}
       </div>
       </div>
    </div>
  )
}

export default TodoBoardDetailPage