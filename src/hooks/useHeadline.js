import { useState, useEffect, useRef } from 'react';

function useHeadline() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [headline, setHeadline] = useState({
    createdAt: '',
    title: '',
    description: '',
  });

  const adjustHeight = (textarea) => {
    if (textarea) {
      textarea.style.height = '0';
      textarea.style.height = `${textarea.scrollHeight+2}px`;
    }
  };

  const handleTitleChange = (newTitle) => {
    setHeadline(prev => ({ ...prev, title: newTitle }));
  };

  const handleDescriptionChange = (newDescription) => {
    setHeadline(prev => ({ ...prev, description: newDescription }));
  };

  const handleUpdateTitle = () => {
    // 제목을 저장하는 로직. textarea가 focus out 되었을 때 실행됨
  };

  const handleUpdateDescription = () => {
    // 설명을 저장하는 로직. textarea가 focus out 되었을 때 실행됨
  };

  useEffect(() => {
    adjustHeight(titleRef.current);
    adjustHeight(descriptionRef.current);
  }, [headline.title, headline.description])

  useEffect(()=>{
    setHeadline(mockHeadline);
    // API가 나오면, headline 데이터를 가져오는 로직으로 수정하기
  }, []);

  const mockHeadline = {
    createdAt: "2024.08.12 14:44",
    title: "무선 네트워크와 핸드오프 이해하기",
    description: "무선 네트워크에서의 데이터 전송, 주소 지정, 그리고 핸드오프 과정에 대한 문제",
  };

  return {
    headline,
    titleRef,
    descriptionRef,
    handleTitleChange,
    handleDescriptionChange,
    handleUpdateTitle,
    handleUpdateDescription
  };
}

export default useHeadline;