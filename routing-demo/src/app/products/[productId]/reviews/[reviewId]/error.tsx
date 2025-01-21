"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ padding: "16px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button
        onClick={reset}
        style={{
          backgroundColor: "#b30000",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
          marginTop: "16px",
        }}
      >
        Try Again
      </button>
    </div>
  );
}
