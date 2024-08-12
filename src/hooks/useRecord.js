import { useState } from "react";

function useRecord() {
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleStartRecord = () => {
    setIsRecording(true);
  }

  const handleStopRecord = () => {
    setIsRecording(false);
    setIsAnalyzing(true);
  }

  // 분석이 멈추면 setIsAnalyzing(false)하는 코드 필요

  return {
    isRecording,
    isAnalyzing,
    handleStartRecord,
    handleStopRecord,
  }
}

export default useRecord;