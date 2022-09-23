import DetailPostPage from "./Pages/DetailPostPage";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>        
        <Route path="detail/:postId" element={<DetailPostPage />} />
      </Routes>
    </div>
  );
}
export default App;
