import ButtonCreate from './components/ButtonCreate';
import { Header } from './components/Header';
import Input from './components/Input';

function App() {
  return (
    <main className="h-screen bg-gray-600 font-inter leading-line ">
      <Header />

      <div className="max-w-[736px] flex justify-center px-3 gap-2 mx-auto -mt-8">
        <Input />
        <ButtonCreate />
      </div>
    </main>
  );
}

export default App;
