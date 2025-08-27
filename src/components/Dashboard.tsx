import React, { useState, useCallback, useMemo, Suspense, lazy } from 'react';
import { useUsers } from '../hooks/useUsers';
import { useUserSearch } from '../hooks/useUserSearch';
import { useUserContext } from '../context/UserContext';
import UserList from './UserList';
import SearchBar from './SearchBar';
import Loading from './Loading';
import ErrorDisplay from './Error';
import type { User, UserFormData } from '../types/user';

// Lazy load components that might not be needed immediately
const UserForm = lazy(() => import('./UserForm'));
const UserDetails = lazy(() => import('./UserDetails'));

const Dashboard: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { users, isLoading, isError, mutate } = useUsers();
  const { selectedUser, selectUser } = useUserContext();
  const { searchTerm, setSearchTerm, filteredUsers } = useUserSearch(users);

  const handleUserSelect = useCallback((user: User) => {
    selectUser(user);
  }, [selectUser]);

  const handleShowForm = useCallback(() => {
    setShowForm(true);
  }, []);

  const handleHideForm = useCallback(() => {
    setShowForm(false);
  }, []);

  const handleCloseDetails = useCallback(() => {
    selectUser(null);
  }, [selectUser]);

  const handleFormSubmit = useCallback(async (data: UserFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call to add user
      const newUser: User = {
        id: Date.now(), // Simple ID generation for demo
        name: data.name,
        username: data.username,
        email: data.email,
        address: {
          street: 'N/A',
        },
        phone: 'N/A',
        website: 'N/A',
      };

      // In a real app, you would make an API call here
      // For now, we'll simulate it and update the local cache
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
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>User Dashboard</h1>
        <button onClick={handleShowForm} className="add-user-btn" type="button">
          Add New User
        </button>
      </header>

      <div className="dashboard-content">
        <div className="sidebar">
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

        <div className="main-content">
          {selectedUser && (
            <Suspense fallback={<Loading />}>
              <UserDetails user={selectedUser} onClose={handleCloseDetails} />
            </Suspense>
          )}
          
          {!selectedUser && (
            <div className="welcome-message">
              <h2>Welcome to User Dashboard</h2>
              <p>Select a user from the list to view their details.</p>
            </div>
          )}
        </div>
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
    </div>
  );
};

export default Dashboard;
