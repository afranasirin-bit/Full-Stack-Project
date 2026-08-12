import "../css/profile.css";

function Profile() {
  return (
    <div className="profile">

      <div className="profile-card">

        <img
          src="https://i.pravatar.cc/200"
          alt="User"
        />

        <h2>John Doe</h2>

        <p>john@example.com</p>

        <p>📍 Chennai</p>

        <button>Edit Profile</button>

      </div>

    </div>
  );
}

export default Profile;