import React, { useEffect } from 'react'
import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <React.Suspense fallback="">
      <div className={classNames('app', { hovered: true }, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </React.Suspense>
  )
}

export default App
