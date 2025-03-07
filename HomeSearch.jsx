import React, {useState} from 'react';
import { FaFireAlt } from "react-icons/fa";
import '../styles/HomeSearch.css';
import abs from '../assets/abs.jpg'
import dumbell from '../assets/dumbell.jpg'
import kettlebell from '../assets/kettlebell.jpg'
import sholder from '../assets/sholder.jpg'
import { Link } from 'react-router-dom';


const HomeSearch = () => {
  const [searchType, setSearchType] = useState('bodyPart');
  return (
    <div className='home-search-component' id='search'>
      <h3>Search for Your Perfect Workout</h3>
      <div className="search-type-buttons">
        <h4>Search by: </h4>
        <span>
          <button className={searchType === 'bodyPart' ? 'active' : ''} onClick={() => setSearchType('bodyPart')}>Body Parts</button>
          <button className={searchType === 'equipment' ? 'active' : ''} onClick={() => setSearchType('equipment')}>Equipment</button>

        </span>
      </div>
      <div className='search-body'>
          <select>
          <option value="">{searchType === 'bodyPart' ? 'Choose Body Part' : 'Choose Equipment'}</option>
          <option value={searchType === "bodyPart" ? "sholder" : "dumbbel"}> {searchType === "bodyPart" ? "Shoulder" : "Dumbbel"}</option>
          <option value={searchType === "bodyPart" ? "bicepts" : "bicpts-curl"}> {searchType === "bodyPart" ? "Bicepts" : "Bicepts Curl"}</option>
          <option value={searchType === "bodyPart" ? "tricepts" : "rowing-machine"}> {searchType === "bodyPart" ? "Tricepts" : "Rowing Machin"}</option>
          <option value={searchType === "bodyPart" ? "abs" : "flat-chest-press"}> {searchType === "bodyPart" ? "Abs" : "Flat Chest Press"}</option>
          <option value={searchType === "bodyPart" ? "legs" : "kettlebell"}> {searchType === "bodyPart" ? "Legs" : "Kettlebell"}</option>
          <option value={searchType === "bodyPart" ? "back" : "bench-press"}> {searchType === "bodyPart" ? "Back" : "Bench Press"}</option>
        </select>
        <Link to="/exercise/1">
    <button>Search</button>
</Link>
      </div>
      <div className="popular-categories-container">
        <span>
          <h5>Popular Categories</h5>
          <FaFireAlt className="fire-icon" />
        </span>
        <div className="popular-categories">
          <div className="popular-category">
          <Link to="/exercise/1">
            <img src={sholder} alt="sholder-img" />
                
            <p>Sholder</p>
            </Link>
          </div>
          <div className="popular-category">
            <img src={kettlebell} alt="kettlebell-img" />
                
            <p>Kettlebell</p>
          </div>
          <div className="popular-category">
            <img src={abs} alt='abs-img'/>
            <p>Abs</p>
          </div>
          <div className="popular-category">
            <img src={dumbell} alt='dumbell-img' />
            <p>Dumbbells</p>
          </div>
        </div>
      </div>
      <div className="footer"><p>Radient power Fitness - &copy; 2025 - All Rights Reserved</p></div>
    </div>
  );
};

export default HomeSearch;
