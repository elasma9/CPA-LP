import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Lp from "./components/lp/Lp";
import Lpsecond from "./components/lp2/lpsecond";
import Imageview from "./components/image/Imageview";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { Grid, Row, Col } from "react-flexbox-grid";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Grid className="container" fluid>


        <Row className = "align-items-center justify-content-center">
<Col  xs={9} sm={9} md={10} lg={10}>
<div>
  <nav id="nav-mobile" />
  <section className="main">
    <div className="container12 main-content-area">
      {/* *************** MAIN CONTENT AREA ***************  */}
      <div className="column10 prefix2 article-main-content">
        {/* *************** MAIN ARTICLE COPY + TITLE + IMG + CAPTION ***************  */}
        {/* *************** TITLE *************** */}
        <h1>What Happens To New Cars That Don't Sell? The Truth Is Huge Discounts</h1>
        {/* *************** AUTHOR INFO + POST TIME *************** */}
        <div className="article-info">
          <span className="story-time"><i className="fa fa-clock-o" /> 2 hour ago</span> | Published by Samantha Wells
        </div>
        {/* *************** ARTICLE IMAGE + CAPTION *************** */}
        <div className="article-main-image">
          {/*  IMAGE */}
          <a href="http://trk.web2carz.com/aff_c?offer_id=176&aff_id=1324&aff_sub=" target="_blank">
            <img src="img/main-image-alt.jpg" alt="Web2Carz" />
          </a>
          {/* CAPTION */}
          <div className="main-article-image-caption">
            You can get the car you want
          </div>
        </div>{/* /article-main-image */}
        {/* *************** ARTICLE COPY *************** */}
        <p><b>You won't believe how much money you could save beating the dealerships at their own game …</b></p>
        <p>Once new cars leave the factory, they belong to the dealer, and dealers usually have no choice but to keep them until they sell. Dealerships are franchises. They buy cars from the manufacturer and then, ideally, sell them at a profit. If the dealer buys 500 vehicles from the factory, they’ll be responsible for those 500 vehicles.</p>
        <p>If cars don’t get sold, the manufacturer won’t take them back. This leaves dealers in a bind. They don’t want to sell cars at auction as that would mean forking over part of the sales price to an auction house, and they’d lose money if they sold a car for parts. This works out to being a great deal for consumers, who can find huge discounts because car makers want to get rid of inventory so older models aren’t competing with new stock.</p>
        <p><b>To get rid of cars, dealers have to price cars to sell</b>, and these unsold cars are a big problem for dealers. Especially when the dealer was forced to take a bunch of unpopular vehicles or the wrong colour and wrong options by the auto maker. It's one way auto makers punish dealers who complain.</p>
        <p>The owners of these dealerships can't afford to let this inventory sit around forever, so they’re forced to offer amazing deals to move inventory. A <b>free</b> online service like <a href="http://trk.web2carz.com/aff_c?offer_id=176&aff_id=1324&aff_sub=" target="_blank">Web2Carz.com</a> could get you the best deal possible by simply giving you the option of fair interest rates. People are shocked at how quick and easy it is to get access to flexible financing with great interest rates, regardless of bad credit, no credit, or bankruptcy.</p>
        <p>These discount are only advertised a few places online, so you probably won’t find the same prices anywhere else - no matter how many dealer sites you check. So do yourself a favor and get a <b>free</b> quote in a matter of seconds, and see <a href="http://trk.web2carz.com/aff_c?offer_id=176&aff_id=1324&aff_sub=" target="_blank">what vehicles you can get a massive discount on</a>.</p>
        {/* *************** CALL TO ACTION *************** */}
        <h2>Get Accepted Today!</h2>
        <p><b>Step 1:</b> <a href="http://trk.web2carz.com/aff_c?offer_id=176&aff_id=1324&aff_sub=" target="_blank">Apply for a loan online</a></p>
        <p><b>Step 2:</b> Get matched with a local lender that can advise you on your options</p>
        <p><b>Step 3:</b> Drive away in a new vehicle!</p>
        <h2>Tap Your Age:</h2>
        <div className="divider" />
        <div className="tap-age-img">
          <a href="http://trk.web2carz.com/aff_c?offer_id=176&aff_id=1324&aff_sub=" target="_blank"><img src="/assets/img/cta/age-group1.png" alt="Eautorates" /></a>
          <a href="http://trk.web2carz.com/aff_c?offer_id=176&aff_id=1324&aff_sub=" target="_blank"><img src="/assets/img/cta/age-group2.png" alt="Eautorates" /></a>
          <a href="http://trk.web2carz.com/aff_c?offer_id=176&aff_id=1324&aff_sub=" target="_blank"><img src="/assets/img/cta/age-group3.png" alt="Eautorates" /></a>
          <a href="http://trk.web2carz.com/aff_c?offer_id=176&aff_id=1324&aff_sub=" target="_blank"><img src="/assets/img/cta/age-group4.png" alt="Eautorates" /></a>
          <div style={{clear: 'both'}} />
        </div>{/* /tap-age-img */}
        <p className="red-button">
          <a href="http://trk.web2carz.com/aff_c?offer_id=176&aff_id=1324&aff_sub=" target="_blank">Click Here To Compare Free Quotes »</a>
        </p>{/* /.red-button */}
        {/* *************** VISITOR COMMENTS *************** */}
      </div>
    </div></section></div>
    </Col>
</Row>




          <Row className="rowtainer">
            <Col className='imagecol' sm={12} md={12} lg={6}>
              <Imageview />
            </Col>
            <Col className='lpcol' sm={12} md={12} lg={6}>
              <Lp />
            </Col> 
          </Row>
  
          {/* <Row className="rowtainer">
            <Col className='imagecol' sm={12} md={12} lg={12}>
              
<p>We all want to reach our goals quickly and efficiently.
But if someone knows what the weight loss fight looks like, they will know that it is difficult to stick to a regular plan because the results do not happen overnight.
How your genes affect your weight loss
That's right, your weight-loss fight could be genetic.
One way DNAFit does this for humans is to use DNA testing to help people understand their genes and apply our genetic insights and recommendations to their lives.
The science of nutrigenetics
Nutrigenetics aims to identify the genetic susceptibility to disease and the way in which very small differences in our genes alter the effects of nutrient uptake on our bodies.
By understanding and analyzing these variations, specific nutritional recommendations based on your unique genome can be given.
Your individual genetic profile controls what you can and can not digest, your tendency to gain weight, intake of essential nutrients, and how to handle toxins.
Knowing your individual predisposition, we may be able to stop unpleasant symptoms, prevent overweight, and fight disease.
Refined carbohydrates
Nutritional DNA testing can teach you more about:
Sensitivity to carbohydrates and saturated fatty acids
Need vitamin B, D and omega-3
Detoxification and antioxidant requirements
Reaction to salt, alcohol and caffeine
Lactose intolerance and predisposition to celiac disease
When we refer to your individual sensitivity, we refer to your body's individual response to key macronutrient groups (fats, carbohydrates, and proteins).
Depending on your personal genetic profile, you may receive a different amount of energy per calorie from refined carbohydrates and saturated fat than on average.
This is important to understand when preparing your nutritional plan so you can manage the intake of these two food groups for the best possible results.
Your sensitivity to saturated fat
Fats are extremely high in calories, easy to consume, and often consumed too much.
A single serving provides about 5g of fat.
A single serving consists of about 1 teaspoon (index finger tip) of oil, butter, margarine or nut butter, 1/4 avocado, 30 g of nuts and 1 tablespoon (thumb tip) seeds.
As a rule, saturated fat should be limited to 6 to 10% of your total calories as they are non-essential fats.
Animal fats (red meat, poultry skin, whole milk products, eggs, cream, butter butter and lard), tropical oils (coconut and palm kernel oils) and hidden saturated fats (milk powder, tea and coffee cream) are all sources of saturated fat and should be absorbeda minimum be limited.
FTO gene: fat mass and obesity-associated protein
Research has shown that the FTO gene plays a role in your body's sensitivity to saturated fat.
It indicates that the level of fat intake and physical activity only alter the association with fat mass.
In addition, the FTO genotype may alter the association between physical activity and cardiovascular mortality.
Another study also looked at the FTO gene and explained that homozygous participants had a higher mean BMI for the FTO risk allele than the other genotypes only when they consumed high saturated fat.
Finally, the influence of APOA2 polymorphism on body weight was modulated by saturated fatty acids in Mediterranean and Asian populations.
Your carbohydrate sensitivity
Carbohydrates have earned a bad reputation over the years.
To help you optimize your health and fitness goals, it's helpful to learn more about this macronutrient.
Carbohydrates (Carbohydrates) are fibrous, starchy and sugary foods.
They can be further classified as either refined or unrefined.
Refined carbohydrates are processed to the point where all natural fiber has been removed and unrefined carbohydrates are unprocessed and contain naturally occurring fiber.
TCF7L2: transcription factor 7-like 2
Research has shown that the TCF7L2 gene plays a role due to increased insulin requirements, and so does the ACE I / D polymorphism, which is associated with whole body insulin sensitivity and impaired glucose tolerance in our healthy population.
These results confirm possible interactions between the renin-angiotensin system and the glucose metabolism.
Another study also found that the ADRB2 haplotype was independently associated with body fat percentage, abdominal fat distribution, VO2Max, insulin sensitivity, and glucose tolerance.
There are a variety of genes related to carbohydrate sensitivity.
We combine your individual genotype and can tell you where you fall on the sensitivity scale.
Learn how many refined carbs you can tolerate per day for optimal weight management.
Choose the best diet for your body
Do not get involved in the yo-yo dieting cycle.
Instead of trying out diets and trying a lot, our Nutrition and Fitness DNA Test can show you how your body responds</p>
            </Col>
           
          </Row> */}

{/* nav-mobile
main
container12 
main-content-area
column10 
prefix2 
article-main-content
article-info
story-time
fa fa-clock-o
article-main-image
main-article-image-caption
divider
tap-age-img
red-button */}




        </Grid>
        <div className="outer-footer mt-auto">
          <Footer className='footer' />
        </div>
      </div>
    );
  }
}
export default App;

{/* <Route path='/redirect' component={() => { 
                     window.location.href = 'https://example.com/1234'; 
                      return null;
                    }}/> */}