import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'shared/config/i18n/i18n'
import { PageError } from 'widgets/PageError'
import { ErrorBoundary } from 'react-error-boundary'
import React from 'react'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ErrorBoundary
      fallback={
        <React.Suspense>
          <PageError />
        </React.Suspense>
      }
    >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
