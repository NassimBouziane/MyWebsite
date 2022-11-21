import Footer from '../footer';
import NavBar from '../header';
export default function moi(){
    return <div>
        <NavBar/>
        <div id='BoxInfo'>
            <div>
                <button className='account_title'>Compte</button>
            
                <button className='account_title'>Paramètre</button>
            </div>
            <div className='account_info'>
                <h1>je suis info</h1>
            </div>
            <div className='account_parameter'>
                <h1>je suis parametre</h1>
            </div>
        </div>
        <Footer/>
    </div>
}