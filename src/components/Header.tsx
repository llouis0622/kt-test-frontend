import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        부산시 청년 창업 챗봇
      </Typography>
      <Typography variant="body2" sx={{ ml: 2 }}>
        청년 창업을 위한 맞춤형 정보와 상담을 제공합니다
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header; 