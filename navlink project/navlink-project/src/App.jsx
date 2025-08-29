import { Suspense } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="main px-4 py-2">
        <Suspense
          fallback={
            <>
              <h2>Loading...</h2>
            </>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default App;
