import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import CategorySelector from './components/CategorySelector';
import SubCategorySelector from './components/SubCategorySelector';
import ChatWindow, { ChatMessage } from './components/ChatWindow';
import QuestionInput from './components/QuestionInput';
import { categories, Category, SubCategory } from './data/categories';
import { fetchChatAnswer } from './api/chat';

const getMockAnswer = (question: string, context?: { category?: Category; subCategory?: SubCategory }) => {
  if (context?.subCategory) {
    return `"${context.subCategory.name}"에 대한 답변 예시입니다. (실제 답변은 추후 AI/백엔드 연동)`;
  }
  if (context?.category) {
    return `"${context.category.name}" 관련 질문에 대한 답변 예시입니다. (실제 답변은 추후 AI/백엔드 연동)`;
  }
  return '질문에 대한 답변 예시입니다. (실제 답변은 추후 AI/백엔드 연동)';
};

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCategorySelect = (cat: Category) => {
    setSelectedCategory(cat);
    setSelectedSubCategory(null);
    setMessages([]);
  };

  const handleSubCategorySelect = (sub: SubCategory) => {
    setSelectedSubCategory(sub);
    setMessages([]);
  };

  const handleBackToCategory = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setMessages([]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const answer = await fetchChatAnswer(userMsg.text, {
        category: selectedCategory?.name,
        subCategory: selectedSubCategory?.name,
      });
      setMessages((prev) => [...prev, { sender: 'bot', text: answer }]);
    } catch (e) {
      setMessages((prev) => [...prev, { sender: 'bot', text: '서버와 통신에 실패했습니다.' }]);
    }
    setLoading(false);
  };

  return (
    <Box>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {!selectedCategory ? (
          <>
            <CategorySelector categories={categories} onSelect={handleCategorySelect} />
            <ChatWindow messages={messages} />
            <QuestionInput value={input} onChange={(e) => setInput(e.target.value)} onSend={handleSend} disabled={loading} />
          </>
        ) : !selectedSubCategory ? (
          <>
            <SubCategorySelector
              subCategories={selectedCategory.subCategories}
              onSelect={handleSubCategorySelect}
              onBack={handleBackToCategory}
            />
            <ChatWindow messages={messages} />
            <QuestionInput value={input} onChange={(e) => setInput(e.target.value)} onSend={handleSend} disabled={loading} />
          </>
        ) : (
          <>
            <SubCategorySelector
              subCategories={selectedCategory.subCategories}
              onSelect={handleSubCategorySelect}
              onBack={handleBackToCategory}
            />
            <ChatWindow messages={messages} />
            <QuestionInput value={input} onChange={(e) => setInput(e.target.value)} onSend={handleSend} disabled={loading} />
          </>
        )}
      </Container>
    </Box>
  );
};

export default App; 