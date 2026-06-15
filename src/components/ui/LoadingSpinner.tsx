export default function LoadingSpinner({ size = 40 }: { size?: number }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: '2px solid rgba(183, 110, 121, 0.1)',
          borderTop: '2px solid var(--color-rose-gold)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
