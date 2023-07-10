import { PlusCircle, Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import {
  ButtonTask,
  CompletedTask,
  ContainerInfoTask,
  CreateTask,
  FormContainer,
  InputTask,
  ListContainer,
  ListTask,
} from './styled'

interface TaskProps {
  id: string
  task: string
  checked: boolean
}

export function List() {
  const [listTasks, setListTasks] = useState<TaskProps[]>([])
  const [tasks, setTasks] = useState<string>('')

  function handleSubmitTask(event: ChangeEvent<HTMLInputElement>) {
    setTasks(event.target.value)
  }

  console.log(tasks)

  return (
    <ListContainer>
      <FormContainer action="#">
        <label htmlFor="tarefa">Adicione uma nova tarefa</label>
        <InputTask
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="Adicione uma nova tarefa"
          value={tasks}
          onChange={handleSubmitTask}
        />
        <ButtonTask>
          criar
          <PlusCircle size={16} />
        </ButtonTask>
      </FormContainer>

      <ContainerInfoTask>
        <div>
          <CreateTask>
            Tarefas criadas <span>0</span>
          </CreateTask>
        </div>

        <div>
          <CompletedTask>
            Concluídas <span>0</span>
          </CompletedTask>
        </div>
      </ContainerInfoTask>

      <ListTask>
        <li>
          <input type="checkbox" name="checked" id="checked" />
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <Trash size={24} color="#fff" />
        </li>
      </ListTask>
    </ListContainer>
  )
}
