function useSummary() {
  const data = '<h3>이게 핵심이에요!</h3> <p> - 무선 통신에서는 송신자와 수신자 간의 신호 세기와 각도를 고려해야 함<br/> - 핸드오프 과정에서 신호 세기가 강해지는 것은 간단한 문제가 아님<br/> - 무선 네트워크에서는 주파수의 발신 속도와 신호 세기를 조절하는 등 여러 기술적 쟁점이 존재<br/> - 무선 통신에서 주파수와 데이터 송수신에 대한 쉬운 이해 필요<br/> - 와이파이 채널 선택, 신호의 종류, 스캐닝 방법, 프레임 포맷 등 무선 통신에서 고려해야 할 다양한 요소가 존재</p> <h3>이렇게 정리했어요!</h3> <ol> <li> <h4>무선 통신에서의 주요 고려 사항</h4> <p>무선 통신에서는 송수신자 간의 신호 세기와 각도를 고려해야 하며, 핸드오프 과정에서의 강도 변화가 중요합니다.</p> </li> <li> <h4>전파 속도와 신호 세기 조절</h4> <p>주파수와 데이터 송수신 속도를 조절하여 무선 통신의 신호 처리에 필요한 기술적 관점을 살펴보았습니다.</p> </li> <li> <h4>와이파이와 채널 선택</h4> <p>와이파이 채널 선택, 신호 종류, 스캐닝 방법, 프레임 포맷 등 무선 통신에서 고려해야 할 여러 가지 요소에 대해 알아봤습니다.</p> </li> </ol> <h3>시험에 나올 수 있어요!</h3> <p>무선 통신 기술에 대한 고려사항과 관련 기술적 문제, 와이파이의 주요 특징 등이 시험에 출제될 수 있습니다.</p>';
  const htmlCode = `<div>${data}</div>`;
  return htmlCode;
}

export default useSummary;