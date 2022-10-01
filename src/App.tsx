import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./containers/Home"));
const CreateEvent = lazy(() => import("./containers/Create"));
const Events = lazy(() => import("./containers/Events"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
