import './App.css';
import Home from './pages/Home/Home';
import CustomizedBadges from './components/ShoppingCart/ShppingCartBadge';

function App() {
    return (
        <>
            <div className=" flex items-center justify-between mb-4 p-6 w-full h-[60px] bg-slate-400">
                <p className="text-gray-100 font-bold">Batch44 Shopping</p>
                <div className='flex justify-end ml-auto'>
                    <CustomizedBadges></CustomizedBadges>
                </div>
            </div>
            <Home></Home>
        </>
    );
}

export default App;
