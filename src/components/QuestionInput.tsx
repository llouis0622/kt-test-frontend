import React from 'react';
import { Box, TextField, Button } from '@mui/material';

interface QuestionInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  disabled?: boolean;
}

const QuestionInput: React.FC<QuestionInputProps> = ({ value, onChange, onSend, disabled }) => (
  <Box sx={{ display: 'flex', gap: 1 }}>
    <TextField
      fullWidth
      variant="outlined"
      placeholder="질문을 입력하세요..."
      value={value}
      onChange={onChange}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey && !disabled) {
          e.preventDefault();
          onSend();
        }
      }}
      disabled={disabled}
    />
    <Button variant="contained" color="primary" onClick={onSend} disabled={disabled || !value.trim()}>
      전송
    </Button>
  </Box>
);

export default QuestionInput; 