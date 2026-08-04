import { Navigate, Route, Routes } from 'react-router-dom'
import { Mesa } from './rutas/Mesa'
import { DM } from './rutas/DM'

// La ruta del DM es deliberadamente impredecible y no se enlaza
// desde ninguna parte. Si la cambias, cámbiala solo aquí.
export const RUTA_DM = '/dm-x7k2m9'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/mesa" replace />} />
      <Route path="/mesa" element={<Mesa />} />
      <Route path={RUTA_DM} element={<DM />} />
      <Route path="*" element={<Navigate to="/mesa" replace />} />
    </Routes>
  )
}
