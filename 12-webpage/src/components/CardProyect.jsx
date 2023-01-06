export const CardProyect = ({ title, image }) => {
  const img = {
    background: `url(${image})`,
    // backgroundFilter:"blur(1px)",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="card" style={img}>
      <h6>{title}</h6>
      
    </div>
  );
};
