/** @format */
import './App.css';
import Appbar from './components/Appbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import Carts from './components/Carts';
import NotFound from './404';

function App() {
  return (
    <>
      <Appbar />
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/favorite" element={<Carts />}></Route>
      </Routes>
    </>
  );
}

export default App;
