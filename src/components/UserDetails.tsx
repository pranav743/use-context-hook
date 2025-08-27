import React from 'react';
import type { User } from '../types/user';

interface UserDetailsProps {
  user: User;
  onClose: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user, onClose }) => {
  return (
    <div className="user-details-modal-content">
      <div className="user-details-header">
        <div className="header-content">
          <div className="profile-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="profile-title">
            <h2>{user.name}</h2>
            <p className="username">@{user.username}</p>
            <p className="user-id">ID: {user.id}</p>
          </div>
        </div>
        <button onClick={onClose} className="close-btn" type="button">
          ×
        </button>
      </div>
      
      <div className="user-details-content">
        <div className="detail-section">
          <h3>Contact Information</h3>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href={`mailto:${user.email}`} className="contact-value email-link">
                {user.email}
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <a href={`tel:${user.phone}`} className="contact-value phone-link">
                {user.phone}
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Website:</span>
              <a 
                href={user.website.startsWith('http') ? user.website : `https://${user.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-value website-link"
              >
                {user.website}
              </a>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3>Address</h3>
          <div className="address-card">
            <div className="address-line">
              <strong>Street:</strong> {user.address.street}
            </div>
            {user.address.suite && (
              <div className="address-line">
                <strong>Suite:</strong> {user.address.suite}
              </div>
            )}
            {user.address.city && (
              <div className="address-line">
                <strong>City:</strong> {user.address.city}
              </div>
            )}
            {user.address.zipcode && (
              <div className="address-line">
                <strong>Zipcode:</strong> {user.address.zipcode}
              </div>
            )}
            {user.address.geo && (
              <div className="geo-info">
                <strong>Coordinates:</strong> 
                <span>Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</span>
              </div>
            )}
          </div>
        </div>

        {user.company && (
          <div className="detail-section">
            <h3>Company Information</h3>
            <div className="company-card">
              <div className="company-item">
                <strong>Company:</strong> {user.company.name}
              </div>
              <div className="company-item">
                <strong>Catch Phrase:</strong> "{user.company.catchPhrase}"
              </div>
              <div className="company-item">
                <strong>Business:</strong> {user.company.bs}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
