import React, { useState, useEffect } from 'react';
import './AdminPage.css';

const AdminPage = () => {
  const [maidList, setMaidList] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    workingTime: '',
    address: '',
    experience: '',
    image: ''
  });

  const defaultImageUrl = 'https://randomuser.me/api/portraits/women/44.jpg'; // Default image URL

  // Step 1: Page load par localStorage se data uthao
  useEffect(() => {
    const storedMaidList = JSON.parse(localStorage.getItem('maidList')) || [];
    setMaidList(storedMaidList);
  }, []);

  // Step 2: Jab maidList update ho, localStorage me bhi update karo
  useEffect(() => {
    if (maidList.length > 0) {
      localStorage.setItem('maidList', JSON.stringify(maidList));
    }
  }, [maidList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMaidList((prevList) => [
      ...prevList,
      { ...formData, id: Date.now() }
    ]);
    setFormData({
      name: '',
      phone: '',
      workingTime: '',
      address: '',
      experience: '',
      image: ''
    });
  };

  return (
    <div className="admin-page">
      <h1 className="admin-title">Madhepura और Ganesh Sthan Maid Service - Admin Panel</h1>

      <form onSubmit={handleSubmit} className="admin-form">
        <h2>Add New Maid</h2>
        <input
          type="text"
          name="name"
          placeholder="Maid Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="workingTime"
          placeholder="Working Time (e.g., 9AM - 5PM)"
          value={formData.workingTime}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="experience"
          placeholder="Experience (Optional)"
          value={formData.experience}
          onChange={handleChange}
        />
        
        {/* Image upload input */}
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          accept="image/*"
        />
        
        <button type="submit" className="submit-btn">Add Maid</button>
      </form>

      <div className="maid-list">
        <h2>Registered Maids</h2>
        {maidList.length === 0 ? (
          <p className="no-maid-text">No maids added yet.</p>
        ) : (
          <div className="maid-cards">
            {maidList.map((maid) => (
              <div key={maid.id} className="maid-card">
                <p><strong>Name:</strong> {maid.name}</p>
                <p><strong>Phone:</strong> {maid.phone}</p>
                <p><strong>Working Time:</strong> {maid.workingTime}</p>
                <p><strong>Address:</strong> {maid.address}</p>
                {maid.experience && <p><strong>Experience:</strong> {maid.experience}</p>}
                <img
                  src={maid.image || defaultImageUrl}
                  alt={maid.name}
                  className="maid-avatar"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
