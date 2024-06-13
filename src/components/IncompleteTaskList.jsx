import {Button} from './base/Button'
import {correspondingTask, removeTask} from '../hooks/useTasks'
import {Title} from './base/Title'
import {PriorityComboBox} from "./PriorityComboBox";


export const IncompleteTaskList = (props) => {
    const {tasks} = props
    return (
        <div className="border-2 border-solid border-[#aacfd0] m-2  p-4 rounded-lg ">
            <Title>未完了のTODO</Title>
            <ul>
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                    />
                ))}
            </ul>
        </div>
    )
}

//Liをコンポーネント化

const Task = (props) => {
    const {task} = props

    return (
        <li className="flex align-middle">
            <p className="m-1.5">{task.title}</p>
            <Button onClick={() => correspondingTask(task.id)}>対応中</Button>
            <Button onClick={() => removeTask(task.id)}>削除</Button>
            <PriorityComboBox task={task}/>
        </li>
    )
}