import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
// import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import {
  Accounting,
  Banking,
  Contacts,
  Dashboard,
  Invoicing,
  Queries,
  Reports,
} from "./Pages";
import Bills from "./Components/Bills.tsx";
import Documents from "./Components/Documents.tsx";
import Receipts from "./Components/Receipts.tsx";
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Accounting />}>
        <Route path="" index element={<Bills />} />
        <Route path="documents" element={<Documents />} />
        <Route path="receipts" element={<Receipts />} />
        <Route path="all-documents" element={<Documents />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="banking" element={<Banking />} />
      <Route path="reports" element={<Reports />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoicing" element={<Invoicing />} />
      <Route path="queries" element={<Queries />} />
    </Route>,
  ])
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
