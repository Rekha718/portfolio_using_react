import React from 'react';
import '../styles/project.css';

const Project = () => {
  return (
    <div id="projects" className="container">
      <h1 className="title">Projects</h1>
      <div className="boxes">
        <div className="box">
          <h2>Weather App</h2>
          <p><strong>Description:</strong> Access real-time weather by city or zip code. Detailed data includes temperature, humidity, and a 5-day forecast, all in a user-friendly interface.</p>
          <p><strong>Technologies Used:</strong> HTML, CSS, Javascript</p>
        </div>
        <div className="box">
          <h2>Content Delivery Network in Azure Cloud</h2>
          <p><strong>Description:</strong> Cloud-based project deploying a website on Azure Cloud for optimized performance. Accessed from the edge, ensuring faster and superior delivery.</p>
          <p><strong>Technologies Used:</strong> Microsoft Azure Cloud Services, Azure Content Delivery Network (CDN), Edge Computing</p>
        </div>
        <div className="box">
          <h2>Movie Recommendation System</h2>
          <p><strong>Description:</strong> Developed and deployed. It recommends top 5 movies based on the given content.</p>
          <p><strong>Technologies Used:</strong> Machine Learning Algorithms, Responsive design framework (Streamlit), Streamlit Sharing (deployment)</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
