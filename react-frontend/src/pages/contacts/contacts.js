import React from "react";
import "./contacts.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Contacts() {
  return (
    <div>
      <Header />
      <section className="container pt-3 pb-5 pb-md-6 mb-2 mb-lg-0">
        <div className="row mb-lg-5">
          <div className="col-md-12">
            <div className="card bg-dark text-white">
              <img
                src="https://vertality.es/wp-content/uploads/2020/04/contactanos.png"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <h1 className="card-title">Comunicate con nosotros</h1>
                <p className="card-text">Descubre todas nuestras variedades!</p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="well well-sm text-center">
                {" "}
                {/* Agregamos la clase "text-center" para centrar */}
                <form className="form-horizontal" method="post">
                  <fieldset>
                    <legend className="text-center header1">Contact us</legend>

                    <div className="form-group">
                      <span className="col-md-1 col-md-offset-2 text-center">
                        <i className="fa fa-user bigicon"></i>
                      </span>
                      <div className="col-md-8">
                        <input
                          id="fname"
                          name="name"
                          type="text"
                          placeholder="First Name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="col-md-1 col-md-offset-2 text-center">
                        <i className="fa fa-user bigicon"></i>
                      </span>
                      <div className="col-md-8">
                        <input
                          id="lname"
                          name="name"
                          type="text"
                          placeholder="Last Name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <span className="col-md-1 col-md-offset-2 text-center">
                        <i className="fa fa-envelope-o bigicon"></i>
                      </span>
                      <div className="col-md-8">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          placeholder="Email Address"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <span className="col-md-1 col-md-offset-2 text-center">
                        <i className="fa fa-phone-square bigicon"></i>
                      </span>
                      <div className="col-md-8">
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          placeholder="Phone"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <span className="col-md-1 col-md-offset-2 text-center">
                        <i className="fa fa-pencil-square-o bigicon"></i>
                      </span>
                      <div className="col-md-8">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Enter your massage for us here. We will get back to you within 2 business days."
                          rows="7"
                        ></textarea>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-md-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contacts;
