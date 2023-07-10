import { Clipboard, PlusCircle, Trash } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import {
  ButtonTask,
  CompletedTask,
  ContainerInfoTask,
  CreateTask,
  FormContainer,
  InputTask,
  ItemTask,
  ListContainer,
  ListTask,
  Task,
  ZeroTask,
} from './styled'

interface TaskProps {
  id: string
  task: string
  checked: boolean
}

export function List() {
  const [listTasks, setListTasks] = useState<TaskProps[]>([])
  const [tasks, setTasks] = useState<string>('')

  function onTaskValue(event: ChangeEvent<HTMLInputElement>) {
    setTasks(event.target.value)
  }

  function handleSubmitTask(event: FormEvent) {
    event.preventDefault()

    setListTasks((state) => {
      return [
        ...state,
        {
          id: new Date().getTime().toString(),
          task: tasks,
          checked: false,
        },
      ]
    })

    setTasks('')
  }

  function handleIsChecked(id: string) {
    setListTasks(
      listTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            checked: task.checked === false,
          }
        } else {
          return task
        }
      }),
    )
  }

  function onRemoveTask(id: string) {
    setListTasks(listTasks.filter((task) => task.id !== id))
  }

  const filteredCheckedList = listTasks.filter((task) => task.checked === true)

  const listTaskSize = listTasks.length

  const amountTaskChecked =
    filteredCheckedList.length > 0
      ? `${filteredCheckedList.length} de ${listTasks.length}`
      : 0

  return (
    <ListContainer>
      <FormContainer action="#" onSubmit={handleSubmitTask}>
        <label htmlFor="tarefa">Adicione uma nova tarefa</label>
        <InputTask
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="Adicione uma nova tarefa"
          value={tasks}
          onChange={onTaskValue}
          required
        />
        <ButtonTask>
          criar
          <PlusCircle size={16} />
        </ButtonTask>
      </FormContainer>

      <ContainerInfoTask>
        <div>
          <CreateTask>
            Tarefas criadas <span>{listTaskSize}</span>
          </CreateTask>
        </div>

        <div>
          <CompletedTask>
            Concluídas <span>{amountTaskChecked}</span>
          </CompletedTask>
        </div>
      </ContainerInfoTask>

      {listTasks.length > 0 ? (
        <ListTask>
          {listTasks.map((task) => {
            return (
              <ItemTask key={task.id}>
                <input
                  type="checkbox"
                  name="checked"
                  id="checked"
                  checked={task.checked}
                  onChange={() => handleIsChecked(task.id)}
                />
                {task.checked ? <Task>{task.task}</Task> : <p>{task.task}</p>}
                <Trash
                  size={24}
                  color="#fff"
                  onClick={() => onRemoveTask(task.id)}
                />
              </ItemTask>
            )
          })}
        </ListTask>
      ) : (
        <ZeroTask>
          <Clipboard size={56} />
          <p>Você ainda não possui nenhuma tarefa</p>
          <span>Crie tarefas para vê-las</span>
        </ZeroTask>
      )}
    </ListContainer>
  )
}
