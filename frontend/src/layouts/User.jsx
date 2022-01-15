import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const User = () => {
  let navigate = useNavigate();
  const changePage = (e) => {
    if (e.target.name === 'login') navigate('/account/login');
    else if (e.target.name === 'signup') navigate('/account/signup');
  };
  return (
    <Box sx={{ position: 'absolute', right: 20, top: -50 }}>
      <Button variant="contained" sx={{ mr: 2 }} onClick={changePage} name="login">
        로그인
      </Button>
      <Button variant="contained" onClick={changePage} name="signup">
        회원 가입
      </Button>
    </Box>
  );
};

export default User;
