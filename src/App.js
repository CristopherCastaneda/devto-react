import DetailPostPage from "./Pages/DetailPostPage";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from 'react-router-dom';
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>        
        <Route path="detail/:postId" element={<DetailPostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
