import React from 'react';

const Navbar1 = () => {

	return (
		<>
		  <nav className="navbar navbar-dark bg-dark navbar-expand-lg sticky-top  ">
            <div className="container-fluid">
                <a className="navbar-brand" href='/' >Parking Portal</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                       
                    </ul>
                </div>
            </div>
        </nav>
		</>
	);
}

export default Navbar1;
