import { Route, Routes } from "react-router-dom";
import HomePage from "../views/Index";

const AllRoutes = () => (
  <Routes>
    {/* add routes with layouts */}
    {/* <Route path="/admin" element={Admin} /> */}
    {/* <Route path="/auth" element={Auth} /> */}
    {/* add routes without layouts */}
    {/* <Route path="/landing" exact element={Landing} /> */}
    {/* <Route path="/profile" exact element={Profile} /> */}
    <Route path="/" exact element={<HomePage />} />
    {/* add redirect for first page */}
    <Route path="*" exact element={<HomePage />} />
  </Routes>
);

export default AllRoutes;
