import Footer from '../footer'
import NavBar from '../header'
import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useEffect } from 'react'

export default function moi() {
  useEffect(() => {
    document.title = 'Compte'
  }, [])
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div>
      <NavBar />
      <Box id="BoxInfo">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab className="account_title" label="Compte" />
          <Tab className="account_title" label="Parameter" />
        </Tabs>
      </Box>
      <Footer />
    </div>
  )
}


