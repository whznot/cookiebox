import profilePic from './assets/profile.jpeg'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"/>
            <h2 className="card-title">Profile Card</h2>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, reiciendis.</p>
        </div>
    );
}

export default Card