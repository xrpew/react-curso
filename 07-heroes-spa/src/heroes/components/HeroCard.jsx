import { Link } from 'react-router-dom'



export const HeroCard = ({ 
    id,
    superhero, 
    publisher, 
    alter_ego, 
    first_appearance, 
    characters }) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;
    const charactersByHero = (<p>{characters}</p>);
  return (
<div className="card mb-3" >
  <div className="row g-0">
    <div className="animate__animated animate__fadeIn">
      <img src={heroImageUrl} alt={superhero}/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{alter_ego}</p>
        {
           (alter_ego !== characters ) && charactersByHero
        }
        <p className="card-text">
            <small className="text-muted">{first_appearance}</small>
        </p>

        <Link to={`/hero/${ id }`}>
            Mas...
        </Link>


      </div>
    </div>
  </div>
</div>


    )
}
