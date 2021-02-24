import React from 'react';

const Contact = () => {
  return (
    <div className="container">
			<div className="row">
				<div className="col-sm text-center">
				  <h1 className="div-heading mb-5">Contact US</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<form>
					  <div className="form-group">
						  <input type="name" className="form-control" id="exampleInputName" placeholder="Your Full Name..."/>
					  </div>
            <div className="form-group">
						  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email Address..."/>
					  </div>
					  <div className="form-group">
              <select className="form-control" id="exampleFormControlSelect1" placeholder="Select Services...">
                <option>Corporate</option>
                <option>Wedding</option>
                <option>Pickup</option>
              </select>
					  </div>
            <div className="form-group">
              <textarea placeholder="Your message here !!!" className="form-control" aria-label="With textarea"></textarea>
            </div>
					  <button type="submit" className="btn btn-primary btn-block">Submit</button>
					</form>
			  </div>
			  <div  className="col-md-6">
          <h5>Address: <small className="text-muted">Venkatadri IT Park, HP Avenue, Konnappana, Electronic city, Bengaluru, Karnataka 560069</small></h5><br/>
          <h5>Email: <small className="text-muted">hire@luxurytaxicab.com</small></h5><br/>
          <h5>Contact: <small className="text-muted">+91 98765 10278 || +91 76589 14244</small></h5><br/>
	  		</div>
        
			</div>
		</div>
  );
};

export default Contact;