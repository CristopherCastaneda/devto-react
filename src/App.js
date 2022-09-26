import DetailPostPage from "./Pages/DetailPostPage";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from 'react-router-dom';
import LoginPage from "./Pages/LoginPage";
import CreateAccountPage from "./Pages/CreateAccountPage";
import CreatePostPage from "./Pages/CreatePostPage";
import SearchHome from "./Pages/SearchHome";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>        
        <Route path="detail/:postId" element={<DetailPostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage/>}/>
        <Route path="/create-post" element={<CreatePostPage/>}/>
        <Route path="/search-home" element={<SearchHome/>}/>
      </Routes>
    </div>
  );
}
export default App;
