export default function BackgroundTextures() {
  return (
    <>
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 3,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/texture.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "invert(1) hue-rotate(180deg)",
            mixBlendMode: "screen",
            opacity: 0.1,
          }}
        />
      </div>
    </>
  );
}
