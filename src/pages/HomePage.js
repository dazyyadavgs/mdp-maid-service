import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';



const HomePage = () => {
  // const maidList = [
  //   { id: 1, name: 'Anjali', address: 'Ganesh Sthan, Madhepura', phone: '9876543210', imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg' },
  //   { id: 2, name: 'Sunita', address: 'Madhepura Main Market', phone: '9876543211', imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
  //   { id: 3, name: 'Priya', address: 'Ganesh Sthan', phone: '9876543212', imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg' },
  //   { id: 4, name: 'Aarti', address: 'Madhepura Station Road', phone: '9876543213', imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg' },
  //   { id: 5, name: 'Pooja', address: 'Ganesh Sthan', phone: '9876543214', imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg' },
  //   { id: 6, name: 'Meera', address: 'Madhepura Bazar', phone: '9876543215', imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg' },
  // ];
  const [maidList, setMaidList] = useState([]);

  useEffect(() => {
    // 🔥 Local storage se maid list uthao
    const storedMaidList = JSON.parse(localStorage.getItem('maidList')) || [];
    setMaidList(storedMaidList);
  }, []);
  const defaultImageUrl = 'https://randomuser.me/api/portraits/women/44.jpg'; // Default image URL


  return (
    <div>
      <div className="navbar">
          <div className="admin-link-container">
            <Link to="/admin" className="admin-link">Admin Panel</Link>
          </div>

          <div className="navbar-center">
              <h1>Madhepura और Ganesh Sthan Maid Service</h1>
          </div>
      </div>

      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        Maid बुक करें आसानी से
      </h1>

      {/* Register as Maid Section */}
      <div className="register-maid-section">
        <p>अगर आप Maid के रूप में रजिस्टर करना चाहते हैं, तो हमें <a href="https://wa.me/youradminwhatsapplink" target="_blank" rel="noopener noreferrer">WhatsApp पर संपर्क करें</a></p>
      </div>
      

      {/* Available Maids Title */}
      <h2>Available Maids</h2>

      {/* Maid List Grid */}
      <div className="maid-container">
        {maidList.map((maid) => (
          <div key={maid.id} className="maid-card">
            {/* <img src={maid.imageUrl} alt={maid.name} /> */}
            <img
              src={maid.image || defaultImageUrl}
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
