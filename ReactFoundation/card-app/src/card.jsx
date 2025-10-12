import ProfilePic from './assets/profilep.png'
import './card.css'

function Card() {
return (
    <div className='card'>
        <img className='profilePic' src={ProfilePic} alt='ProfilePicture'/>
        <h1 className='cardTitle'>Saras</h1>
        <p className='cardDesc'>I am a frontend developer. I make web-apps and I dance.</p>
    </div>
);
}
export default Card;