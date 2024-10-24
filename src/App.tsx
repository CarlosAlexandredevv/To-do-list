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

        <div className="flex justify-between mt-16 pb-6 border-b border-gray-400">
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
      </div>
    </main>
  );
}

export default App;
