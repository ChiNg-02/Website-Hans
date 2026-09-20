import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Introduction } from "./pages/about/Introduction";
import { Achievements } from "./pages/about/Achievements";
import { ActivityListing } from "./pages/activities/ActivityListing";
import { ActivityDetail } from "./pages/activities/ActivityDetail";
import { DonateMoney } from "./pages/activities/DonateMoney";
import { FeaturedOverview } from "./pages/featured/FeaturedOverview";
import { TrungThuVungCao } from "./pages/featured/TrungThuVungCao";
import { HatGiongVungCao } from "./pages/featured/HatGiongVungCao";
import { QuayMiGoi2K } from "./pages/featured/QuayMiGoi2K";
import { BepAnThienNguyen } from "./pages/featured/BepAnThienNguyen";
import { FeaturedComingSoon } from "./pages/featured/FeaturedComingSoon";
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
        <Route path="du-an-noi-bat" element={<FeaturedOverview />} />
        <Route path="du-an-noi-bat/trung-thu-vung-cao" element={<TrungThuVungCao />} />
        <Route path="du-an-noi-bat/hat-giong-vung-cao" element={<HatGiongVungCao />} />
        <Route path="du-an-noi-bat/quay-mi-goi-2k" element={<QuayMiGoi2K />} />
        <Route path="du-an-noi-bat/bep-an-thien-nguyen" element={<BepAnThienNguyen />} />
        <Route path="du-an-noi-bat/:slug" element={<FeaturedComingSoon />} />
        <Route path="hoat-dong" element={<ActivityListing />} />
        <Route path="hoat-dong/:slug" element={<ActivityDetail />} />
        <Route path="hoat-dong/:slug/ung-ho" element={<DonateMoney />} />
        <Route path="lien-he" element={<Contact />} />
        <Route path="tim-kiem" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
