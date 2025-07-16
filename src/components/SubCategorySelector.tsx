import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { SubCategory } from '../data/categories';

interface SubCategorySelectorProps {
  subCategories: SubCategory[];
  onSelect: (subCategory: SubCategory) => void;
  onBack: () => void;
}

const SubCategorySelector: React.FC<SubCategorySelectorProps> = ({ subCategories, onSelect, onBack }) => (
  <Stack spacing={2} sx={{ my: 2, alignItems: 'center' }}>
    <Typography variant="h6">세부 항목을 선택하세요</Typography>
    <Stack direction="row" spacing={2}>
      {subCategories.map((sub) => (
        <Button key={sub.id} variant="outlined" onClick={() => onSelect(sub)}>
          {sub.name}
        </Button>
      ))}
    </Stack>
    <Button variant="text" color="secondary" onClick={onBack} sx={{ mt: 1 }}>
      ← 카테고리로 돌아가기
    </Button>
  </Stack>
);

export default SubCategorySelector; 