import "./timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div className="timeline">
      <h3 className="title text">my story</h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(315deg, #38ceb7 0%, #12a49f 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #38ceb7" }}
          date="2021 - present"
          iconStyle={{
            background: "linear-gradient(315deg, #38ceb7 0%, #12a49f 100%)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            SKVAD DIGITAL | Budapest
          </h4>
          <p className="list">
            • Building with Next js, implementing necessary API data
          </p>
          <p className="list">
            • Next.js · API · styled-components · JavaScript · React.js · Git ·
            Bootstrap · Redux · Redux-Toolkit · SASS and many more
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(315deg, #2eb8e9 0%,  #5570d1 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #2eb8e9" }}
          date="2016 - present"
          iconStyle={{
            background: "linear-gradient(315deg, #2eb8e9 0%, #5570d1 100%)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Site Builder and Webdesigner
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Freelancer | EyeCandiz.hu
          </h4>
          <p className="list">
            • Designing and building a wide range of websites based on WordPress
          </p>
          <p className="list">• Finding solutions for special requests</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(315deg, #ce57c2 23%, #8f4ec2 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #8f4ec2" }}
          date="2021"
          iconStyle={{
            background: "linear-gradient(315deg, #ce57c2 23%, #8f4ec2 100%)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Front-end Developer Course
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Codecool Hungary
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(315deg, #e361c3 39%, #f00190 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #e361c3" }}
          date="2017 - 2018"
          iconStyle={{
            background: "linear-gradient(315deg, #e361c3 39%, #f00190 100%)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            New Media Graphic Designer Postgradual Course
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Metropolitan University Budapest
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(315deg, #fc670b 0%, #fe0b55 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #fe0b55" }}
          date="2016 - 2018"
          iconStyle={{
            background: "linear-gradient(315deg, #fc670b 0%, #fe0b55 100%)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            GB Credit Controller / Customer Analyst
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            DIAGEO | Budapest
          </h4>
          <p className="list">
            • Communication with british corporate customers
          </p>
          <p className="list">• Checking and managing their invoices</p>
          <p className="list">• Validation customer certificates</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(315deg, #ffef01 23%, #ffa101 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #ffef01" }}
          date="2010-2016"
          iconStyle={{
            background: "linear-gradient(315deg, #ffef01 23%, #ffa101 100%)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            IT Helpdesk - German Speaking Advisor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">HP | Budapest</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(315deg, #97cb82 0%, #31a155 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #31a155" }}
          date="2006 - 2009"
          iconStyle={{
            background: "linear-gradient(315deg, #97cb82 0%, #31a155 100%)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Communication & Mediascience BA Program
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            ELTE | Budapest
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(315deg, #38ceb7 0%, #12a49f 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #38ceb7" }}
          date="2007 - 2010"
          iconStyle={{
            background: "linear-gradient(315deg, #38ceb7 0%, #12a49f 100%)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            German Speaking Customer Service Advisor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            TRANSCOM HUNGARY| Budapest
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
