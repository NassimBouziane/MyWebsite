import Image from "next/image"
import Footer from '../pages/footer';

export default function panier(){

return(
<div>
    <div className="courses-container">
        <div className="course">
            <div className="course-preview">
            <Image
                src="/TESTE.png"
                alt="Grento Logo with sticks and point and circle"
                width={100}
                height={100}
              />
            </div>
            <div className="course-info">
                <div className="progress-container">
                    <div className="progress"></div>
                </div>
                <h2>name product</h2>
                <p>price</p>
                <p>quantité:</p>
            </div>
        </div>
    
    </div>
    <Footer/>
</div>
)
}