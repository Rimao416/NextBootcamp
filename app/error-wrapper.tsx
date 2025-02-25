"use client";
import { useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An Error Occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error(message);
  }

  return (
    <div>
      <button onClick={() => setError(true)}>Trigger Error</button>
    </div>
  );
};

export default function ErrorWrapper({ children }: WrapperProps) {
  return (
    <>
      <ErrorSimulator />
      {children}
    </>
  );
}
