import ButtonCreate from './components/ButtonCreate';
import { Header } from './components/Header';
import Input from './components/Input';

function App() {
  return (
    <main className="h-screen bg-gray-600 font-inter leading-line">
      <Header />

      <div className="max-w-[736px] mx-auto px-3 md:px-0">
        <div className="flex justify-center gap-2 -mt-8">
          <Input />
          <ButtonCreate />
        </div>

        <div className="flex justify-between mt-16">
          <h2 className="flex items-center gap-2 text-blue text-sm font-bold">
            Tarefas criadas
            <span className="text-gray-200 bg-gray-400 px-2 py-[2px] rounded-full text-xs">
              0
            </span>
          </h2>
          <h2 className="flex items-center gap-2 text-purple text-sm font-bold">
            Concluídas
            <span className="text-gray-200 bg-gray-400 px-2 py-[2px] rounded-full text-xs">
              0
            </span>
          </h2>
        </div>

        <div className="h-[286px] flex flex-col gap-4 justify-center items-center mt-6 rounded-lg border-t-2 border-gray-400">
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
      </div>
    </main>
  );
}

export default App;
