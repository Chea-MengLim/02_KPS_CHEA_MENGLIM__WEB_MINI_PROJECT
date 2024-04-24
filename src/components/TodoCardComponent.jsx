import Image from "next/image";
import React from "react";
import EditDeleteTaskComponent from "./EditDeleteTaskComponent";

export default function TodoCardComponent({taskDetail}) {
  function chooseColor(){
    if(taskDetail.status == 1)
      return "bg-yellow-400"
    else if(taskDetail.status == 2)
      return "bg-blue-400"
    else if(taskDetail.status == 3)
      return "bg-orange-400"
    else if(taskDetail.status == 4)
      return "bg-green-400"
  }
  return (
    <div className=" border border-gray rounded-lg w-full mt-5 relative">
      <div className="p-5">
        <div className="flex justify-between">
          <p> {taskDetail?.taskTitle} </p>
          <div className="absolute top-2 right-3">
            <EditDeleteTaskComponent workspaceId={taskDetail.workspaceId}  taskId ={taskDetail.taskId} />  
          </div>
        </div>

        <p className="text-gray"> {taskDetail?.description} </p>
        <div className="flex justify-between items-center mt-5">
          <div className="bg-bgTag text-colorTag py-1 px-5 rounded-lg font-bold">
            {taskDetail?.tag}
          </div>
          <div className={"rounded-full w-5 h-5 " + chooseColor()}></div>
        </div>
      </div>

      <hr className="text-gray" />
      <div className="flex gap-2 justify-end pr-3 py-2">
        <Image
          src={"/assets/icons/calendar.svg"}
          width={20}
          height={20}
          alt="calendar icon"
        />
        <p className="text-gray">March 1, 2024</p>
      </div>
    </div>
  );
}
