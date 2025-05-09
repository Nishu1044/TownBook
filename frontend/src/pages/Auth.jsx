import React, { useState } from 'react';
import { Container, Card, CardContent, Typography } from '@mui/material';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Container 
      maxWidth="sm" 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4
      }}
    >
      <Card sx={{ width: '100%', maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            {isLogin ? 'Login' : 'Sign Up'}
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* ... rest of your form code ... */}
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Auth; 