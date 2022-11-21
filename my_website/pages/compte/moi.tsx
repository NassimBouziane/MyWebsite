import Footer from '../footer';
import NavBar from '../header';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function moi(){
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

 return <div>
    <NavBar/>
        <Box id="BoxInfo">
            <Tabs value={value} onChange={handleChange}centered>
            <Tab className='account_title' label="Compte" />
            <Tab className='account_title' label="Parameter" />
            </Tabs>
        </Box>
    <Footer/>
</div>
}




{/* <div>
                <button className='account_title' onClick={sample.focusProfil()}>Compte</button>
            
                <button className='account_title'  onClick={sample.focusParameter()}>Paramètre</button>
            </div>
            <div className='account_info'id='profil'>
                <h1>je suis info</h1>
            </div>
            <div className='account_parameter'id='parameter'>
                <h1>je suis parametre</h1>
            </div> */}