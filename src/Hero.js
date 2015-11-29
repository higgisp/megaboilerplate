import React from 'react';

class Banner extends React.Component {

  componentDidMount() {
    //this.loadCarbonAds();
  }

  loadCarbonAds() {
    let carbonAdsContainer = this.refs.carbonAds;
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=sahatyalkabovcom';
    script.id = '_carbonads_js';
    carbonAdsContainer.appendChild(script);
  }

  render() {
    return (
      <div className="hero">
        <div className="container">
          <span className="text-center bd-booticon outline">B</span>
          <h1>Mega Boilerplate</h1>
          <p className="lead">Clean, simple, easy to use, hand-crafted project starters.</p>
          <iframe src="https://ghbtns.com/github-btn.html?user=sahat&repo=satellizer&type=star&count=true" frameBorder="0" scrolling="0" width="100px" height="20px"></iframe>
          <iframe src="https://ghbtns.com/github-btn.html?user=sahat&type=follow&count=true" frameBorder="0" scrolling="0" width="170px" height="20px"></iframe>
          <div ref="carbonAds"></div>
        </div>
      </div>
    );
  }
}

export default Banner;