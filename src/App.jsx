import "./App.scss";
import { Header, Footer, Iconwp, IconDonate } from "./components";
import { ROUTES } from "./constant/routes";
import {
  About,
  Actions,
  Contact,
  History,
  Home,
  NotFound,
  Participate,
  RTE,
} from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  const headerPages = [
    ROUTES.HOME,
    ROUTES.ACTION,
    ROUTES.PARTICIPATE,
    ROUTES.HISTORY
  ];
  return (
    <div className="principalContainer__app">
      <Header pages={headerPages} />
      <main>
        <Routes>
          <Route path={ROUTES.HOME.path} element={<Home />} />
          <Route path={ROUTES.PARTICIPATE.path} element={<Participate />} />
          <Route path={ROUTES.ACTION.path} element={<Actions />} />
          <Route path={ROUTES.HISTORY.path} element={<History />} />
          {/* <Route path={ROUTES.CONTACT.path} element={<Contact />} /> */}
          <Route path={ROUTES.RTE.path} element={<RTE />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <IconDonate />
        <Iconwp /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
