import { Header } from './components/Header';
import Input from './components/Input';

function App() {
  return (
    <main className="h-screen w-full bg-gray-600 font-inter leading-line ">
      <Header />

      <div className="flex gap-2 mx-auto -mt-8">
        <Input />
      </div>
    </main>
  );
}

export default App;
