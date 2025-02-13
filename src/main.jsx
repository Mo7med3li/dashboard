import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
// @ts-ignore
import Contacts from "./pages/contacts/contacts";
import Team from "./pages/team/Team";
import Invoices from "./pages/invoices/Invoices";
import Form from "./pages/Form/Form";
import Faq from "./pages/Faq/Faq";
import Line from "./pages/Line/Line";
import Pie from "./pages/Pie/Pie";
import Calender from "./pages/Calender/Calender";
import Bar from "./pages/Bar/Bar";
import Geograph from "./pages/Geograph/Geograph";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/team" element={<Team />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/line" element={<Line />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/calender" element={<Calender />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/geography" element={<Geograph />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
