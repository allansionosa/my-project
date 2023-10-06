import AppLayout from "./AppLayout";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import { Resource } from "./pages/Resource";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<About />} path="/about" />
        <Route element={<Home />} path="/" />
        <Route element={<Company />} path="/company" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Resources />} path="/resources" />
        <Route element={<Resource />} path="/resource/:id" />
      </Route>
    </Routes>
  );
}
