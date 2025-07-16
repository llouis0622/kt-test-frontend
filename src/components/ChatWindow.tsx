import React from 'react';
import { Box, Paper, Typography, Stack } from '@mui/material';

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

interface ChatWindowProps {
  messages: ChatMessage[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => (
  <Box sx={{ height: 350, overflowY: 'auto', p: 2, bgcolor: '#f5f5f5', borderRadius: 2, mb: 2 }}>
    <Stack spacing={1}>
      {messages.map((msg, idx) => (
        <Box key={idx} display="flex" justifyContent={msg.sender === 'user' ? 'flex-end' : 'flex-start'}>
          <Paper sx={{ p: 1.5, maxWidth: 320, bgcolor: msg.sender === 'user' ? 'primary.light' : 'grey.200' }}>
            <Typography variant="body1">{msg.text}</Typography>
          </Paper>
        </Box>
      ))}
    </Stack>
  </Box>
);

export default ChatWindow; 