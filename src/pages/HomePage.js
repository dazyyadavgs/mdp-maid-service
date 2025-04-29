
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../App.css';

const HomePage = () => {
  const maidList = [
    { id: 1, name: 'Sheela Devi', address: 'Ganesh Sthan', phone: '9905483289' },
    { id: 2, name: 'Sunita Kumari', address: 'Gangeri Chauk', phone: '9905483289' },
    { id: 3, name: 'Priya Kumari', address: 'Ganesh Sthan', phone: '9905483289' },
    { id: 4, name: 'Aarti Shah', address: 'Madhepura Bus Stand', phone: '9905483289' },
    { id: 5, name: 'Pooja Devi', address: 'Ganesh Sthan', phone: '9905483289' },
    { id: 6, name: 'Meera Bharti', address: 'College Chauk', phone: '9905483289' },
    { id: 7, name: 'Pooja Devi', address: 'Ganesh Sthan', phone: '9905483289' },
    { id: 8, name: 'Meera Bharti', address: 'College Chauk', phone: '9905483289' }
  ];

  const getAvatarUrl = (name) => {
    const initials = name.split(' ').map((part) => part.charAt(0).toUpperCase()).join('');
    return `https://ui-avatars.com/api/?name=${initials}&size=150`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
      <div className="navbar">
        <div className="navbar-center">
          <h1>Madhepura and Nearby Maid Service</h1>
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-5 text-black font-bold">
        Maid Booking – Just a click away!
      </h1>

      <h2 className="text-2xl text-center mt-10 text-black  font-semibold">
        Available Maids
      </h2>

      <div className="maid-container">
        {maidList.map((maid) => (
          <div key={maid.id} className="maid-card">
            <div className="avatar-container flex justify-center mb-4">
              <img
                src={getAvatarUrl(maid.name)}
                alt="Maid Avatar"
                className="maid-avatar"
              />
            </div>
            <h3 className="text-xl text-center font-semibold text-gray-900">{maid.name}</h3>
            <p className="text-center text-gray-700 mt-2"><strong>Address:</strong> {maid.address}</p>
            <p className="text-center text-gray-700"><strong>Phone:</strong> {maid.phone}</p>
            <div className="text-center mt-4">
              <a href={`tel:${maid.phone}`}>
                <button className="contact-now-btn">
                  Contact Now
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
       {/* Floating Button for Maid Registration */}
      <div className="floating-button">
        <a
          href="https://wa.me/919905483289?text=नमस्कार!%20मैं%20घरेलू%20सहायक%20(मेड)%20के%20रूप%20में%20registration%20कराना%20चाहता/चाहती%20हूँ।%20कृपया%20प्रक्रिया%20बताएं।%20धन्यवाद!"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold text-sm"
        >
          <FaWhatsapp className="text-2xl text-white" />
          <span>Register as a Maid</span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
