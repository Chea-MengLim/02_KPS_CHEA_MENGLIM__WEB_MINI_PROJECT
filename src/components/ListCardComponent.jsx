import React from 'react'

const ListCardComponent = ({task}) => {
    const chooseColorBg = (status) => {
        if(task.status == 1)
            return "bg-yellow-400 flex gap- rounded-xl overflow-hidden items-center justify-start";
        else if(task.status == 2)
            return "bg-blue-400 flex gap- rounded-xl overflow-hidden items-center justify-start"
        else if(task.status == 3)
            return "bg-orange-400 flex gap- rounded-xl overflow-hidden items-center justify-start"
        else if(task.status == 4)
            return "bg-green-400 flex gap- rounded-xl overflow-hidden items-center justify-start"
    }
  return (
    <div className='w-[900px] block'>
        <div class=" mt-5">
        <div class={chooseColorBg(task.status)}>
            <div class="relative w-32 h-36 flex-shrink-0">
                <div class=" w-30 mt-5 h-28 bg-white rounded-lg ml-5" >
                    <div className='ml-6 pt-5'>
                        <span className='text-3xl font-bold text-red-600' >Wed</span>
                        <p className='text-3xl font-bold'>17</p>
                    </div>
                </div>

            </div>

            <div class="flex flex-col gap-2 py-2">
                <p class="text-xl font-bold"> {task.taskTitle} </p>
                <p class="text-gray-500">
                {task.description}
                </p>
            </div>
            <div>
                <button className='bg-white h-8 rounded-lg w-24 mt-24 ml-72'> {task.tag} </button>
            </div>

        </div>

    </div>
    </div>
  )
}

export default ListCardComponent;