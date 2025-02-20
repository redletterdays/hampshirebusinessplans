"use client";

import React, { ReactNode } from "react";

export const ListTick = ({ children }: { children: ReactNode }) => {
  return (
    <p className="flex items-center space-x-10 font-open-sans text-4xl text-body-color">
      <svg
        className="h-7 w-7 flex-shrink-0 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L9 11.586l6.293-6.293a1 1 0 0 1 1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-base">{children}</span>
    </p>
  );
};
