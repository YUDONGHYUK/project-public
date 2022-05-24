import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./pages/Order";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
