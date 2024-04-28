import React, { useState, useEffect } from "react";
import "./home.css";
import job from "../../assets/job.mp4";
import { MdOutlineSubtitles } from "react-icons/md";
import { FaFileContract, FaLocationDot } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getOffresList } from "../Offres/offreSaga";
import { RiArticleLine } from "react-icons/ri";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const offres = useSelector((state) => state.offre.offres);
  const [filteredOffres, setFilteredOffres] = useState([]);

  useEffect(() => {
    if (!offres) {
      dispatch(getOffresList());
    }
  }, [dispatch, offres]);

  useEffect(() => {
    if (offres) {
      const filteredData = offres.filter((offre) =>
      offre.Titre.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredOffres(filteredData);
    }
    
  }, [searchInput, offres]);

  const handleSearch = () => {
    alert(`Recherche (${filteredOffres.length}) résultats trouvés sur ${offres.length}`);
  };

  return (
    <div>
      <section className="home">
        <div className="overlay"></div>
        <video src={job} muted autoPlay loop type="video/mp4"></video>
        <div className="homeContent container">
          <div className="textDiv">
            <span className="smallText">Notre Packets</span>
            <h1 className="homeTitle">Rechercher Votre Prochain Travail! </h1>
          </div>
          <div className="cardDiv grid">
            <div className="titleInput">
              <label htmlFor="title">Rechercher votre Titre</label>
              <div className="input flex">
                <input
                  type="text"
                  placeholder="Enter your title here"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <MdOutlineSubtitles className="icon" />
              </div>
            </div>
            <div className="contratInput">
              <label htmlFor="contrat">Selectionner Votre Contrat</label>
              <div className="input flex">
                <select>
                  <option value="someOption">CDI</option>
                  <option value="otherOption">Contrat</option>
                  <option value="otherOption">Stage</option>
                  <option value="otherOption">CDD</option>
                  <option value="otherOption">Volontariat</option>
                </select>
                <FaFileContract className="icon" />
              </div>
            </div>
            <button className="recherche" onClick={handleSearch}>
              Recherche 
            </button>
          </div>
        </div>
      </section>

      <div className="container main">
      <br />
        <br />
        <div className="homebox">
          <div className="jobliste">
            <header className="row">
              <div className="col col-xs-12 col-m-8">
                <div className="job-header">
                  <div className="job-title marginright">
                    <h2 className="marginright padding-lef padding-top">
                      Offres d'emploi : Emploi en Tunisie
                    </h2>
                  </div>
                </div>
              </div>
            </header>
            {/* Mapping through filtered offres */}
            {filteredOffres.map((offre) => (
              <a
                href={`DescriptionOffre/${offre.id}`}
                className="job1"
                key={offre.id}
              >
                <div>
                  <ul className="job padding-lef">
                    <article className="clicky">
                      <header className="job-header">
                        <div className="job-title">
                          <h2>
                            <a href="#" className="lien">
                              {offre.Titre}
                            </a>
                          </h2>
                        </div>
                        <div className="job-button">
                          <button
                            type="submit"
                            title="Sauvegarder ce poste"
                            className="sauvegarder"
                          >
                            <FaRegBookmark className="icon" />
                          </button>
                        </div>
                      </header>
                      <p className="company">{offre.Nom_Entreprise}</p>
                      <ul className="location">
                        <li>
                          <FaLocationDot className="icon" />
                          {offre.Lieu_travail}
                          <RiArticleLine  className='iconloc'/>
                          {offre.Type_Contrat}
                        </li>
                      </ul>

                      <div className="desc">{offre.Description}</div>
                    </article>
                  </ul>
                  <footer>
                    <ul className="tags padding-lef">
                      <li>
                        <span className="badge badge-r badge-s top-distance">
                          {offre.Duree}
                        </span>
                      </li>
                    </ul>
                  </footer>
                </div>
              </a>
            ))}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
