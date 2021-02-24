import React from 'react';

const Home = () => {
  return (
    <div className="container mt-2">
      <div className="row">
      <div className="col-8 offset-2">
          <h1 className="text-center mb-4">Home</h1>
        <div className="row">
          <div className="col-6">
            <img src="person.jpg" alt="person photo2" />
          </div>
          <div className="col-6">
          
          <div className="contaienr">
            <h4 className="text-secondary ml-5">

              For each student, each class. Real results. <br/> <br/>
              We are an organization with a mission to provide quantityy, quality education, 
              for everyone, everywhere.

              You're searching something to lear? registry below first <br/>
              <button onClick={()=> window.location.href="/sign-up"} className="btn btn-outline-primary mt-2">Registry</button>

              
            </h4>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;