import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Category } from '../data/categories';

interface CategorySelectorProps {
  categories: Category[];
  onSelect: (category: Category) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, onSelect }) => (
  <Stack direction="row" spacing={2} sx={{ my: 2, justifyContent: 'center' }}>
    {categories.map((cat) => (
      <Button key={cat.id} variant="contained" color="primary" onClick={() => onSelect(cat)}>
        {cat.name}
      </Button>
    ))}
  </Stack>
);

export default CategorySelector; 