import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import MoviesComponent from './pages/moviesPage/movies.component';
import SeriesComponent from './pages/seriesPage/series.component';
import HeaderComponentHeader from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import WatchComponent from './components/watch/watch.component';

function App() {
  return (
    <Router>
      <main className="main-container">
        <HeaderComponentHeader />

        <Routes>
          <Route
            path="/movies"
            element={<MoviesComponent />}
          />

          <Route
            path="/series"
            element={<SeriesComponent />}
          />

          <Route
            path="watch/:id"
            element={<WatchComponent />}
          />

          <Route
            path="/"
            element={
              <Navigate
                replace
                to="/movies"
              />
            }
          />
        </Routes>
      </main>

      <FooterComponent />
    </Router>
  );
}

export default App;
