import { useState, useEffect, useRef } from 'react';

function useQuestion() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [question, setQuestion] = useState({
    createdAt: '',
    title: '',
    description: '',
    contents: []
  });

  const adjustHeight = (textarea) => {
    if (textarea) {
      textarea.style.height = '0';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleTitleChange = (newTitle) => {
    setQuestion(prev => ({ ...prev, title: newTitle }));
  };

  const handleDescriptionChange = (newDescription) => {
    setQuestion(prev => ({ ...prev, description: newDescription }));
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
  }, [question.title, question.description])

  useEffect(()=>{
    setQuestion(mock);
    // API가 나오면, question 데이터를 가져오는 로직으로 수정하기
  }, []);

  const mock = {
    createdAt: "2024.08.12 14:44",
    title: "무선 네트워크와 핸드오프 이해하기",
    description: "무선 네트워크에서의 데이터 전송, 주소 지정, 그리고 핸드오프 과정에 대한 문제",
    contents: [
      {
        id: 1,
        question: "무선 네트워크에서 로드 사이즈에 제한이 없는 이유는 무엇인가요?",
        answer: "무선 네트워크에서는 유선과 달리 충돌 감지 방식이 다릅니다. 무선에서는 데이터를 보내면 받는 방식으로 작동하며, 작은 데이터라도 전송이 가능합니다. 따라서 로드 사이즈의 최소값 제한이 필요 없습니다.",
      },
      {
        id: 2,
        question: "네트워크에서 주소 지정(Addressing)은 어떻게 이루어지나요?",
        answer: "네트워크에서 주소 지정은 상황에 따라 다르게 이루어집니다. 예를 들어, 외부 네트워크로 데이터를 보낼 때, 패킷의 주소 부분에는 목적지의 물리적 주소, 송신자의 주소, 그리고 라우터의 주소 등이 순차적으로 포함됩니다. 각 네트워크 계층에서 필요한 주소 정보를 활용합니다.",
      },
      {
        id: 3,
        question: "무선 네트워크에서 핸드오프(Handoff)란 무엇이며, 어떻게 작동하나요?",
        answer: "핸드오프는 모바일 기기가 한 액세스 포인트의 범위에서 다른 액세스 포인트의 범위로 이동할 때 발생하는 과정입니다. 기기의 IP 주소가 변경되지 않는 한, 네트워크 장비들이 기기의 위치 변화에 따라 트래픽을 적절히 라우팅합니다. 예를 들어, 기기가 AP1에서 AP2로 이동하면, 스위치는 해당 기기로 가는 트래픽을 AP2로 전송하도록 변경합니다.",
      },
      {
        id: 4,
        question: "무선 네트워크에서 스위치가 모바일 기기의 위치 변화를 어떻게 처리하나요?",
        answer: "스위치는 모바일 기기의 IP 주소와 연결된 액세스 포인트 정보를 동적으로 업데이트합니다. 기기가 다른 액세스 포인트로 이동하면, 스위치는 해당 기기의 MAC 주소와 새로운 액세스 포인트의 연결 정보를 학습합니다. 이를 통해 스위치는 기기의 위치가 변경되어도 정확한 액세스 포인트로 트래픽을 전송할 수 있습니다.",
      },
    ],
  };

  return {
    question,
    titleRef,
    descriptionRef,
    handleTitleChange,
    handleDescriptionChange,
    handleUpdateTitle,
    handleUpdateDescription
  };
}

export default useQuestion;