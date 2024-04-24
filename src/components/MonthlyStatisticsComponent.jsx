import React from "react";

export default function MonthlyStatisticsComponent({tasks}) {
  function getTaskByStatus(status){
    return tasks.data.filter(task => task.status === status)
  }
  const todo = getTaskByStatus(1).length;
  const workingOn = getTaskByStatus(2).length;
  const checking = getTaskByStatus(3).length;
  const complete = getTaskByStatus(4).length;
  return (
    <div>
      <h1 className="text-xl font-bold mb-5 mt-12 text-center">Statistics on July</h1>
      <div className="flex gap-3 items-center">
        <div className="bg-completed h-5 rounded-lg w-1"></div>
        <p>
          Todo : <span> {todo} </span> tasks
        </p>
        <p>
          Working On : <span> {workingOn} </span> tasks
        </p>
        <p>
          Checking : <span> {checking} </span> tasks
        </p>
        <p>
          Complete : <span> {complete} </span> tasks
        </p>
      </div>
    </div>
  );
}
