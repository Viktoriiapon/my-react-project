
import './profile_module.css'

const Profile = ({
    name,
    tag,
    location,
    image,
    stats:{followers, views, likes },
}) => {
  return (
    <div className="profile">
    <div className="info">
      <img className="img"
        src={image} alt="User avatar"
        width="120px"
      />
      <p className="userName">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>  
    </div>
  
    <ul className="statistic">
      <li className="list">
        <span className="statTitle">Followers</span>
        <span className="statValue">{followers}</span>
      </li>
      <li className="list">
        <span className="statTitle">Views</span>
        <span className="statValue">{views}</span>
      </li>
      <li className="list">
        <span className="statTitle">Likes</span>
        <span className="statValue">{likes}</span>
      </li>
    </ul>
  </div>
  )
};
export default Profile;