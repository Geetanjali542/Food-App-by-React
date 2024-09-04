import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Nav from "./components/Nav";

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const SingleFood = lazy(() => import('./components/SingleFood'));
const MealDetails = lazy(() => import('./components/MealDetails'));
const RandomMeal = lazy(() => import('./components/RandomMeal'));
const FlavorsPage = lazy(() => import('./components/FlavorsPage'));

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Suspense fallback={<div>Loading please wait...</div>}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/singlefood" element={<SingleFood />} />
          <Route path="/mealdetails/:idMeal" element={<MealDetails />} />
          <Route path="/randommeal" element={<RandomMeal />} />
          <Route path="/flavorspage" element={<FlavorsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
