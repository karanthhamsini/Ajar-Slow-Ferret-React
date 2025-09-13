import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Ajar Slow Ferret</title>
        <meta property="og:title" content="Ajar Slow Ferret" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#about-me</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#education</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#experience</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#skills</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">About Me</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Education</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Experience</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Skills</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Contact Me</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Download CV</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Learn more about me and my background.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Explore my educational qualifications and achievements.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Discover my work experience and projects.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              View my skills and competencies.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text114">About Me</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text115">Education</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text116">Experience &amp; Skills</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text117">
              Introduce yourself and your objectives
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text118">
              Highlight your educational background
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text119">
              Showcase your work experience and skills
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text120">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text121">
              Showcase your skills and experience with a professional online
              resume.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text122">
              Create Your Personal Website Today
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text123">About Me</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text124">Education</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text125">Experience</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text126">
              A brief introduction about myself and my background.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text127">
              Details about my educational background, degrees, and
              certifications.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text128">
              Information about my work experience, previous roles, and key
              accomplishments.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text129">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text130">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text131">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text132">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text133">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text134">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text135">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text136">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text137">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text138">$9.99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text139">$19.99/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text140">$29.99/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text141">Subscribe Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text142">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text143">$99/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text144">Subscribe Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text145">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$199/year</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text147">Subscribe Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text148">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text149">$299/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text150">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text151">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text152">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text153">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text155">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text156">Customizable templates</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text157">Unlimited sections</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text158">Contact form integration</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text159">All features from Plan 1</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text160">Custom domain</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text161">Google Analytics integration</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text163">All features from Plan 2</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text164">E-commerce integration</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text165">SEO optimization tools</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text167">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text180">About Me</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text181">Education</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text182">Experience</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text183">Skills</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text184">
              A brief introduction about myself and my background.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text185">
              Details about my educational background, degrees, and
              certifications.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text186">
              Information about my work experience, previous roles, and key
              accomplishments.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text187">
              List of skills and competencies that I possess relevant to the
              positions I am seeking.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text188">
              John is a highly skilled professional with a great work ethic. He
              exceeded our expectations and delivered exceptional results.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text189">
              I had the pleasure of working with John on a challenging project.
              His attention to detail and problem-solving skills were
              impressive.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text190">
              John&apos;s leadership qualities and ability to collaborate with
              team members make him a valuable asset to any organization.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text191">
              Working with John was a fantastic experience. His professionalism
              and dedication to his work are truly commendable.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text192">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text193">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text195">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text196">Michael Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text197">Sarah Williams</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text198">CEO at ABC Inc.</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text199">Senior Manager at XYZ Company</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text200">HR Director at LMN Corporation</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text201">Project Manager at PQR Ltd.</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text202">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text204">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text205">Cluj - Napoca</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text207">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text208">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text209">About Me</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text210">Education</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text211">Experience</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text212">Skills</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text213">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text214">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text215">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
