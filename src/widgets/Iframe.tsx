const Iframe: React.FC<{ url: Post["url"] }> = ({ url }) => {
  return (
    <iframe
      width="540"
      height="315"
      src={url}
      allowFullScreen={true}
      allow="fullscreen;"
      style={{
        border: "none",
        margin: "auto",
        display: "block",
        marginBottom: "40px",
        maxWidth: "90vw",
      }}
    />
  );
};

export default Iframe;
