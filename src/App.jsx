import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import FavoritePage from "./pages/FavoritePage";
import WatchListPage from "./pages/WatchListPage";
import UserProfile from "./pages/UserProfile";
import SignUpPage from "./pages/SignUpPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="watchlists" element={<WatchListPage />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
        <Route path="login" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
