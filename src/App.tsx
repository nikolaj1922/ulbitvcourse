import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPageLazy';
import { MainPageLazy } from './pages/MainPage/MainPageLazy';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';
import './styles/index.scss';

const App: React.FC = ({}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true }, [theme])}>
      <button onClick={toggleTheme}>TOOGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <React.Suspense>
        <Routes>
          <Route path={'/about'} element={<AboutPageLazy />} />
          <Route path={'/'} element={<MainPageLazy />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default App;
