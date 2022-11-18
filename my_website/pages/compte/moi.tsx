import Footer from '../footer';
import NavBar from '../header';
export default function moi(){
    return <div>
        <NavBar/>
        <div id='BoxInfo'>
            <div>
                <div className='account_title'>
                    <p >Compte</p>
                </div>
                <div className='account_title'>
                    <p >Paramètre</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}