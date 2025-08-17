"use client";
import { log } from "console";
import React from "react";
interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("ErrorPage", error);

  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button className="btn" onClick={() => reset()}>
        reset
      </button>
    </>
  );
};

export default ErrorPage;
