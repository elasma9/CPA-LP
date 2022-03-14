import React, { Component } from 'react';
import styles from '../../scss/blocks/_mission-area.scss';


class Lpsecond extends Component {
    render() { 

        return (  
      <div id="mission-area" className="mission-area section-padding-lg bg-white">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-xl-7">
							<div className="mission-area-content">
								<h6>OUR MISSION</h6>
								<h2>The Goal Is Living Life On Your Own Terms</h2>
								<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration passages
									of Lorem Ipsum available, but the majority suffered alteration passages of Lorem Ipsum available,</p>
								<ul className="cr-liststyle-1">
									<li>There are many variations of passages majority suffered alteration of Lorem</li>
									<li>Many variations of passages of majority suffered </li>
									<li>Variations of passages one of Lorem majority suffered alteration</li>
								</ul>
								<a href="about-us.html" className="cr-btn">
									<span>Know more</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="mission-area-thumb">
					<img className="wow fadeInRight" src="images/about/mission-image-1.png" alt="mission area thumb"/>>
				</div>
			</div>
    );
    }
}
 
export default Lpsecond;