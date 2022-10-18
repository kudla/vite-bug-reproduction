import * as React from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom'

import { Deps } from './components/Deps'

export default function App() {
  return (
      <Container maxWidth="xs">
        <Box sx={{ my: 4, minHeight: '70%' }}>
          <Routes>
            <Route path="*" element={<Deps/>} />
          </Routes>
        </Box>
      </Container>
  );
}
