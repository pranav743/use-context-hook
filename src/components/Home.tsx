import React, { useState, useCallback, useMemo, Suspense, lazy } from 'react';
import { useUsers } from '../hooks/useUsers';
import { useUserSearch } from '../hooks/useUserSearch';
import { useUserContext } from '../context/UserContext';
import UserList from './UserList';
import SearchBar from './SearchBar';
import Loading from './Loading';
import ErrorDisplay from './Error';
import type { User, UserFormData } from '../types/user';

const UserForm = lazy(() => import('./UserForm'));
const UserDetails = lazy(() => import('./UserDetails'));

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { users, isLoading, isError, mutate } = useUsers();
  const { selectedUser, selectUser } = useUserContext();
  const { searchTerm, setSearchTerm, filteredUsers } = useUserSearch(users);

  const handleUserSelect = useCallback((user: User) => {
    selectUser(user);
    setShowUserDetails(true);
  }, [selectUser]);

  const handleCloseUserDetails = useCallback(() => {
    setShowUserDetails(false);
    selectUser(null);
  }, [selectUser]);

  const handleShowForm = useCallback(() => {
    setShowForm(true);
  }, []);

  const handleHideForm = useCallback(() => {
    setShowForm(false);
  }, []);

  const handleFormSubmit = useCallback(async (data: UserFormData) => {
    setIsSubmitting(true);
    try {
      const newUser: User = {
        id: Date.now(),
        name: data.name,
        username: data.username,
        email: data.email,
        address: {
          street: 'N/A',
        },
        phone: 'N/A',
        website: 'N/A',
      };

      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      // Update SWR cache with new user
      mutate([...users, newUser], false);
      
      setShowForm(false);
    } catch (error) {
      console.error('Error adding user:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [users, mutate]);

  const userCount = useMemo(() => filteredUsers.length, [filteredUsers]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <ErrorDisplay 
        message="Failed to load users. Please try again." 
        onRetry={() => mutate()}
      />
    );
  }

  return (
    <div className="home">
      <header className="home-header">
        <h1>User Management System</h1>
        <button onClick={handleShowForm} className="add-user-btn" type="button">
          Add New User
        </button>
      </header>

      <div className="home-content">
        <div className="users-section">
          <div className="search-section">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder="Search users by name, email, or username..."
            />
            <p className="user-count">{userCount} users found</p>
          </div>
          
          <UserList
            users={filteredUsers}
            selectedUser={selectedUser}
            onUserSelect={handleUserSelect}
          />
        </div>

        {/* <div className="welcome-section">
          <div className="welcome-message">
            <h2>Welcome to User Management</h2>
            <p>Click on any user from the list to view their detailed information.</p>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-icon">👥</span>
                <span>Browse all users</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔍</span>
                <span>Search and filter</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">➕</span>
                <span>Add new users</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <span>View detailed profiles</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <Suspense fallback={<Loading />}>
              <UserForm
                onSubmit={handleFormSubmit}
                onCancel={handleHideForm}
                isSubmitting={isSubmitting}
              />
            </Suspense>
          </div>
        </div>
      )}

      {showUserDetails && selectedUser && (
        <div className="modal-overlay user-details-modal">
          <div className="modal large-modal">
            <Suspense fallback={<Loading />}>
              <UserDetails user={selectedUser} onClose={handleCloseUserDetails} />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
