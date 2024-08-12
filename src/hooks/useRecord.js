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

  const handleStopAnalysis = () => {
    setIsAnalyzing(false);
  }

  return {
    isRecording,
    isAnalyzing,
    handleStartRecord,
    handleStopRecord,
    handleStopAnalysis
  }
}

export default useRecord;