import {BaseTaskList} from "./BaseTaskList";

export const CompleteTaskList = (props) => {
    const {tasks} = props

    return <BaseTaskList tasks={tasks} className="border-2 border-solid border-[#aacfd0]  rounded-lg p-4"
                         title="完了のTODO"/>
}