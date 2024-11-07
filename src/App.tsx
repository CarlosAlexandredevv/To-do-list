import { useState, useEffect, ChangeEvent } from 'react';
import ButtonCreate from './components/ButtonCreate';
import { Header } from './components/Header';
import Input from './components/Input';
import Task from './components/Task';

type TaskType = {
  id: string;
  text: string;
  isChecked: boolean;
};

function App() {
  const [isTask, setIsTask] = useState(false);
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [taskCreated, setTaskCreated] = useState(tasks.length);
  const [taskCompleted, setTaskCompleted] = useState(
    tasks.filter((task) => task.isChecked).length,
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setTaskCreated(tasks.length);
    setTaskCompleted(tasks.filter((task) => task.isChecked).length);
    setIsTask(tasks.length > 0);
  }, [tasks]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleCreateTask() {
    if (inputValue.trim().length === 0) {
      alert('Digite uma tarefa para adicionar');
    } else {
      setIsTask(true);
      const newTask = {
        id: `${Date.now()}-${Math.random()}`,
        text: inputValue,
        isChecked: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  }

  function incrementTaskCompleted() {
    setTaskCompleted(taskCompleted + 1);
  }

  function decrementTaskCompleted() {
    setTaskCompleted(taskCompleted - 1);
  }

  function handleDeleteTask(taskId: string) {
    const taskToDelete = tasks.find((task) => task.id === taskId);
    if (taskToDelete?.isChecked) {
      decrementTaskCompleted();
    }
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  function handleCompleteTask(taskId: string) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isChecked: true } : task,
      ),
    );
    incrementTaskCompleted();
  }

  function handleUncompleteTask(taskId: string) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isChecked: false } : task,
      ),
    );
    decrementTaskCompleted();
  }

  return (
    <main className="min-h-screen bg-gray-600 font-inter leading-line">
      <Header />

      <div className="max-w-[736px] mx-auto px-3 md:px-0">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center gap-2 -mt-8"
        >
          <Input
            value={inputValue}
            placeholder="Adicione uma nova tarefa"
            onChange={handleChange}
          />
          <ButtonCreate
            onClick={handleCreateTask}
            src="plus.svg"
            text="Criar"
          />
        </form>
        <div className="flex justify-between mt-16">
          <h2 className="flex items-center gap-2 text-blue text-sm font-bold">
            Tarefas criadas
            <span className="text-gray-200 bg-gray-400 px-2 py-[2px] rounded-full text-xs">
              {taskCreated}
            </span>
          </h2>
          <h2 className="flex items-center gap-2 text-purple text-sm font-bold">
            Concluídas
            <span className="text-gray-200 bg-gray-400 px-2 py-[2px] rounded-full text-xs">
              {taskCompleted + ' de ' + taskCreated}
            </span>
          </h2>
        </div>

        {isTask ? (
          <div className="flex flex-col gap-3 mt-6 last:pb-3">
            {tasks.map((task) => (
              <Task
                key={task.id}
                onDelete={() => handleDeleteTask(task.id)}
                text={task.text}
                isChecked={task.isChecked}
                onComplete={() => handleCompleteTask(task.id)}
                onUncomplete={() => handleUncompleteTask(task.id)}
              />
            ))}
          </div>
        ) : (
          <div className="h-[287px] flex flex-col gap-4 justify-center items-center mt-6 rounded-lg border-t-2 border-gray-400">
            <img src="Clipboard.svg" alt="Clipboard" />
            <div className="text-center">
              <h3 className="text-gray-300 font-bold">
                Você ainda não tem tarefas cadastradas
              </h3>
              <span className="text-gray-300">
                Crie tarefas e organize seus itens a fazer
              </span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
