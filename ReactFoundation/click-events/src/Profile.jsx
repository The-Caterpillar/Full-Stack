function Profile(){
    const imageUrl = './src/assets/profilep.png';

    const handleClick = (e)=> e.target.classList.add("rotate");

return(<>
<img className="Pimage" onClick={(e) => handleClick(e)} src={imageUrl}></img>
</>)
}

export default Profile;