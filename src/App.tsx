import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Introduction } from "./pages/about/Introduction";
import { Achievements } from "./pages/about/Achievements";
import { ActivityListing } from "./pages/activities/ActivityListing";
import { ActivityDetail } from "./pages/activities/ActivityDetail";
import { Contact } from "./pages/Contact";
import { Search } from "./pages/Search";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ve-hans/gioi-thieu" element={<Introduction />} />
        <Route path="ve-hans/thanh-tich" element={<Achievements />} />
        <Route path="hoat-dong" element={<ActivityListing />} />
        <Route path="hoat-dong/:slug" element={<ActivityDetail />} />
        <Route path="lien-he" element={<Contact />} />
        <Route path="tim-kiem" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
