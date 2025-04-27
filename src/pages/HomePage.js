import React from 'react';
import '../App.css';


const HomePage = () => {
  const maidList = [
    { id: 1, name: 'Anjali', address: 'Ganesh Sthan, Madhepura', phone: '9876543210' },
    { id: 2, name: 'Sunita', address: 'Madhepura Main Market', phone: '9876543211' },
    { id: 3, name: 'Priya', address: 'Ganesh Sthan', phone: '9876543212' },
    { id: 4, name: 'Aarti', address: 'Madhepura Station Road', phone: '9876543213' },
    { id: 5, name: 'Pooja', address: 'Ganesh Sthan', phone: '9876543214' },
    { id: 6, name: 'Meera', address: 'Madhepura Bazar', phone: '9876543215' },
  ];

  // Function to generate a UI Avatar URL based on name initials
  const getAvatarUrl = (name) => {
    const initials = name.split(' ').map((part) => part.charAt(0).toUpperCase()).join('');
    return `https://ui-avatars.com/api/?name=${initials}&size=150`;
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-center">
          <h1>Madhepura और Ganesh Sthan Maid Service</h1>
        </div>
      </div>

      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        Maid बुक करें आसानी से
      </h1>

      {/* Register as Maid Section */}
      <div className="register-maid-section">
        <p>अगर आप Maid के रूप में रजिस्टर करना चाहते हैं, तो हमें <a href="https://wa.me/9905483289?text=नमस्कार!%20मैं%20घरेलू%20सहायक%20(मेड)%20के%20रूप%20में%20registration%20कराना%20चाहता/चाहती%20हूँ।%20कृपया%20प्रक्रिया%20बताएं।%20धन्यवाद!" target="_blank" rel="noopener noreferrer">WhatsApp पर संपर्क करें</a></p>
      </div>

      {/* Available Maids Title */}
      <h2>Available Maids</h2>

      {/* Maid List Grid */}
      <div className="maid-container">
        {maidList.map((maid) => (
          <div key={maid.id} className="maid-card">
            {/* Generate the avatar dynamically based on the maid's name */}
            <img
              src={getAvatarUrl(maid.name)} // Get avatar URL with initials
              alt="Maid Avatar"
              className="maid-avatar"
            />
            <h3>{maid.name}</h3>
            <p><strong>Address:</strong> {maid.address}</p>
            <p><strong>Phone:</strong> {maid.phone}</p>
            <a href={`tel:${maid.phone}`}>
              <button className="contact-now-btn">Contact Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
