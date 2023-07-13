import { Clipboard, PlusCircle, Trash } from 'phosphor-react'
import { ChangeEvent, FormEvent, useEffect, useReducer, useState } from 'react'
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
  const [listTasks, dispatch] = useReducer(
    (state: TaskProps[], action: any) => {
      switch (action.type) {
        case 'ADD':
          return [
            ...state,
            {
              id: action.payload.id,
              task: action.payload.task,
              checked: false,
            },
          ]
        case 'COMPLETE':
          return state.map((task) => {
            if (task.id === action.id) {
              return { ...task, checked: !task.checked }
            } else {
              return task
            }
          })
        case 'REMOVE':
          return state.filter((task) => task.id !== action.id)
        default:
          return state
      }
    },
    [],
    () => {
      const storageList = localStorage.getItem('list')

      if (storageList) {
        return JSON.parse(storageList)
      }
    },
  )
  const [tasks, setTasks] = useState<string>('')

  useEffect(() => {
    const stateJson = JSON.stringify(listTasks)

    localStorage.setItem('list', stateJson)
  }, [listTasks])

  function onTaskValue(event: ChangeEvent<HTMLInputElement>) {
    setTasks(event.target.value)
  }

  function handleSubmitTask(event: FormEvent) {
    event.preventDefault()

    dispatch({
      type: 'ADD',
      payload: {
        id: new Date().getTime().toString(),
        task: tasks,
      },
    })

    setTasks('')
  }

  function handleIsChecked(taskID: string) {
    dispatch({ type: 'COMPLETE', id: taskID })
  }

  function onRemoveTask(taskID: string) {
    dispatch({
      type: 'REMOVE',
      id: taskID,
    })
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
          required
          onChange={onTaskValue}
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
