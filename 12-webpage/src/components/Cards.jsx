export const Cards = ({title, subtitle, image}) => {



  return (
    <div className="card black">
      <img src={image} alt={title}/>

      <h6>{title}</h6>
      <span>
        {subtitle}
      </span>
    </div>
  );
};
