import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Colors from './Colors.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Colors number={100}/>
  </StrictMode>,
)
