export interface SubCategory {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  subCategories: SubCategory[];
}

export const categories: Category[] = [
  {
    id: 'support',
    name: '창업 지원',
    subCategories: [
      { id: 'funding', name: '자금 지원' },
      { id: 'education', name: '교육 프로그램' },
      { id: 'consulting', name: '컨설팅' },
    ],
  },
  {
    id: 'policy',
    name: '정책 안내',
    subCategories: [
      { id: 'local', name: '부산시 정책' },
      { id: 'national', name: '국가 정책' },
    ],
  },
  {
    id: 'space',
    name: '공간/시설',
    subCategories: [
      { id: 'office', name: '공유 오피스' },
      { id: 'maker', name: '메이커 스페이스' },
    ],
  },
  {
    id: 'mentoring',
    name: '멘토링',
    subCategories: [
      { id: 'startup', name: '창업 멘토링' },
      { id: 'business', name: '경영 멘토링' },
    ],
  },
]; 