export async function fetchChatAnswer(question: string, context?: { category?: string; subCategory?: string }) {
  const response = await fetch('http://localhost:8000/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      question,
      category: context?.category,
      subCategory: context?.subCategory,
    }),
  });
  if (!response.ok) throw new Error('서버 오류');
  const data = await response.json();
  return data.answer as string;
} 