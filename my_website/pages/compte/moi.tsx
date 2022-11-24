import Footer from '../footer'
import NavBar from '../header'
import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import { useEffect, useState, useEffec } from 'react'
import { fetchUser } from '../../user/userService'

export default function moi() {
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchUser(77).then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <div>
      <NavBar />
      <Box id="BoxInfo">
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              TabIndicatorProps={{ style: { backgroundColor: '#eff8f6' } }}
              textColor="inherit"
            >
              <Tab disableRipple style={{ minWidth: '50%' }} className="account_title" label="Compte" value="1" />
              <Tab disableRipple style={{ minWidth: '50%' }} className="account_title" label="Paramètre" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            Nom d'utilisateur {data && <p>{data.username} </p>} Mot de passe{' '}
            {data && <p className="password">{data.password}</p>}
          </TabPanel>
          <TabPanel value="2"></TabPanel>
          <button onClick="">hide</button>
        </TabContext>
      </Box>
      <Footer />
    </div>
  )
}
