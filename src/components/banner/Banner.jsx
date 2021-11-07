// import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Banner() {
  return (

        <>
           <main>


                <div className="cover-container  flex-column banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="banner-caption px-3 mt-8">
                                    <h2>GoesUpStrong</h2>
                                    <p>Next Leading BEP-20 (crypto)currency project with Tokenomics: run and owned by its community.</p>
                                    <div className="banner-link">
                                        <span><a className="btn btn-secondary btn-md" href="s">Live Chart</a></span>
                                        <span><a className="btn btn-default transparent" href="d">Buy Now</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
 
                            </div>
                        </div>
                    </div>
                </div>
           </main>
        </>
          );
    }

export default Banner ;
