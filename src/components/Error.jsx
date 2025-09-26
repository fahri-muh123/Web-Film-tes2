import React from "react";

const Error = ({ message, onRetry }) => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="bg-card border-border border rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="text-red-500 mb-4">
          <svg
            className="w-12 h-12 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Something went wrong
        </h3>
        <p className="text-muted mb-6">{message}</p>
        {onRetry && (
          <button onClick={onRetry} className="btn-primary w-full">
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default Error;
