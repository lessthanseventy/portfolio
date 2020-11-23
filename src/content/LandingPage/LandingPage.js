import React from 'react';
import under_construction from './under_construction.gif';
import under_construction_hammer from './under_construction_hammer.gif';
import { Tabs, Tab } from 'carbon-components-react';

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <h1 className="landing-page__heading">lessthanseventy</h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="About">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <h2 className="landing-page__subheading">Andrew Moore</h2>
                    <p className="landing-page__p">
                      I recently moved to Denver and am looking forward to
                      getting to explore the city post-COVID. I enjoy building
                      and learning new things, and have a real passion for
                      writing clean, maintainable code and solving real
                      problems. I'm going to use this space to start a blog at
                      some point, and just as a place to keep all of the cool
                      things I manage to make.
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Design">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <div className="bx--content">
                      <h1 className="underConstructionHeader">Coming Soon!</h1>
                      <div className="bx--row">
                        <div className="bx--col">
                          <img src={under_construction_hammer} />
                        </div>
                        <div className="bx--col">
                          <img src={under_construction} />
                        </div>
                        <div className="bx--col">
                          <img src={under_construction_hammer} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Develop">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <h1 className="developHeader">
                      Technologies I am familiar with:
                    </h1>
                    <ul className="skills-list">
                      <li>React/Redux</li>
                      <li>Vanilla Javascript (ES6)</li>
                      <li>HTML5/CSS3</li>
                      <li>Linux Admin and Bash Scripting</li>
                      <li>Wordpress, Drupal, other headless CMSes</li>
                      <li>Docker</li>
                      <li>Working knowledge of Amazon AWS, GCP, Azure</li>
                      <li>sed, grep, awk, ssh, etc...</li>
                      <li>Enough Python to get around</li>
                      <li>
                        Various databases (MySQL, MariaDB, PostgreSQL, MongoDB)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="bx--row landing-page__r3">
        <div className="bx--col">
          <div className="bx--content">This work maybe?</div>
        </div>
        <div className="bx--col">
          <div className="bx--content">This shit i don't fucking know</div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
