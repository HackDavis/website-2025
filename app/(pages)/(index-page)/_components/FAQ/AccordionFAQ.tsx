'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styles from './AccordionFAQ.module.scss';
import Link from 'next/link';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import Image from 'next/image';

const whatIsHackathonAnswer = (
  <>
    A hackathon is where you transform your crazy ideas into real projects.
    Hundreds of students from across California form teams around an idea and
    collaboratively create technical solutions to problems we face in our local
    communities. These ideas turn into websites, mobile apps, hardware, and
    more! <br /> <br />
    Join HackDavis to make some of the most imaginative projects alongside
    fellow creators! You take care of building and we'll take care of you.
    <br /> <br /> We will be following the{' '}
    <Link
      style={{
        textDecoration: 'underline',
        fontWeight: 'normal',
        fontFamily: 'Metropolis',
      }}
      href="https://drive.google.com/file/d/1KnWwN5sFYTe49Z5312OKnS5FA8OtL4iD/view"
      target="_blank"
    >
      HackDavis Rules & Policies,
    </Link>{' '}
    <span
      style={{
        fontFamily: 'Metropolis',
      }}
    >
      {' '}
      and{' '}
    </span>
    <Link
      style={{
        textDecoration: 'underline',
        fontWeight: 'normal',
        fontFamily: 'Metropolis',
      }}
      href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
      target="_blank"
    >
      MLH's Code Of Conduct.
    </Link>
  </>
);

const whatToHelpAnswer = (
  <>
    HackDavis is largely built upon the efforts of our mentors and volunteers,
    who ensure that our hackers have a great experience at our event! Our mentor
    applications are open and volunteer applications will open up soon, so keep
    an eye out! If you're interested in making a tax-deductible contribution to
    HackDavis, please get in touch with us at{' '}
    <a
      style={{
        textDecoration: 'underline',
        fontWeight: 'normal',
        fontFamily: 'Metropolis',
      }}
      href="mailto:team@hackdavis.io"
    >
      team@hackdavis.io.
    </a>
  </>
);

const AccordionFAQ = () => {
  const faqs = [
    {
      question: 'What is a hackathon?',
      answer: whatIsHackathonAnswer,
    },
    {
      question: 'Who can attend?',
      answer: `HackDavis is open to all undergraduate and graduate students from all majors and all schools, and graduates who have completed their degrees within the past year. We are also open to high school students above the age of 18. As long as you're prepared to learn, brainstorm, and bring life to projects, we welcome you to join us!`,
    },
    {
      question: 'Do I need to know how to code?',
      answer: `Nope! Coming in, you do not need to know how to code, but you have to be willing to learn! HackDavis is proud to be a beginner-focused hackathon, and we welcome hackers from all experience levels and backgrounds - over 65% of our hackers are beginners! HackDavis is the perfect time and place to learn new skills - we host beginner-friendly workshops and our mentors provide guidance to help you build something you can be proud of.`,
    },
    {
      question: 'How do teams work?',
      answer: `Teams can have up to 4 members, and submit a single project together! Want to go solo? Fine by us, but we'd highly recommend joining a team to make new friends, bounce ideas off one another, and bring your ideas to life!`,
    },
    {
      question: 'How can I help?',
      answer: whatToHelpAnswer,
    },
    {
      question: 'Why social good?',
      answer: `We want our attendees to create projects with a meaningful impact and hope to foster a community dedicated to social change. We find that most hackathons often don't result in projects as practical solutions to specific societal problems and we're looking to change that.`,
    },
    {
      question: 'What can I create?',
      answer: `You can build whatever your heart desires, whether it's a web app, mobile app, hardware hack, open source tool, or even a simple website! Any social good oriented project is recommended. Our main focus is to provide you a learning experience where you can have fun, ask questions, and experiment with technology.`,
    },
    {
      question: 'What if I don’t have a team or idea?',
      answer: `Worry not! We will host a series of mixers before HackDavis, so check out our social media for announcements about those as we get closer to the event. We'll also have a final mixer right after hacking starts during HackDavis, so we'll make sure you're equipped and ready to go!

      Our non-profit partners, sponsors, and mentors are always here at the event to help you brainstorm and ideate if you don't have an idea!`,
    },
    {
      question: 'How much does it cost?',
      answer: `Zero. Zip. Zilch. Nada. HackDavis is free for all admitted participants, so don't sweat it! We will provide you with WiFi, meals, caffeine, swag, and workspace for the entire weekend.`,
    },
    {
      question: 'Is travel reimbursement provided?',
      answer: `Unfortunately, we are unable to offer travel reimbursement this year. Participants are responsible for covering their own travel costs.`,
    },
  ];

  const teams = [
    // {
    //   question: 'Why join us?',
    //   answer:
    //     'Personal and professional growth in a student-run organization. Add impressive skills and experience to your resume. Collaborate with a team of students passionate about social good. Create valuable connections in the tech industry. ',
    // },
    {
      question: 'Technical',
      answer: (
        <>
          Are you interested in full-stack web development with a desire to
          learn and collaborate with a team of developers? If you have a strong
          foundation in HTML/CSS, JavaScript, and React.js and are eager to
          expand your skill set, join the Technical team! As a Technical
          Director, you will get the chance to create and maintain the HackDavis
          website and web applications, devise creative solutions, participate
          in code review sessions, and grow with your fellow Technical
          directors.
          <br />
          <br />
          <strong>Required Qualifications: </strong>
          Experience with version control, HTML, CSS, JavaScript and React.js.
          Strong desire to learn and grow in the field of web development.
          Excellent problem-solving skills and attention to detail. Ability to
          work well in a team and take constructive feedback positively. Passion
          for technology and a proactive approach to keeping up with industry
          standards and trends.
          <br />
          <br />
          <strong>Preferred Qualifications: </strong>
          Familiarity with Next.js framework and database systems like MongoDB.
        </>
      ),
    },
    {
      question: 'Operations',
      answer: (
        <>
          As an Operations Director, you’ll be a key part of the engine that
          powers one of the biggest hackathons in California. You’ll help plan,
          organize, and execute the behind-the-scenes logistics that ensure
          everything runs smoothly from managing venue and schedules to
          coordinating with vendors. If you’re detail-oriented,
          reliable,interested in large-scale event planning, this role is for
          you.
          <br />
          <br />
          <strong>Required Qualifications: </strong>
          Strong organizational skills and attention to detail. Excellent
          communication skills. Ability to stay calm and make quick decisions,
          particularly in high-pressure situations. A proactive, dependable and
          responsible approach to tackling challenges. Thrive in a team setting,
          fostering a spirit of collaboration and mutual support. A passion for
          learning and developing organizational and leadership skills.
        </>
      ),
    },
    {
      question: 'Marketing',
      answer: (
        <>
          As a Marketing Director, you’ll play a key role in driving our
          visibility and engagement within and beyond the campus community.
          You’ll bring creative ideas to life, run engaging campaigns, and
          collaborate across teams to share our initiatives in fresh, exciting
          ways. This is a role for someone who’s creative, organized,
          enthusiastic, and ready to turn ideas into impact.
          <br />
          <br />
          <strong>Required Qualifications: </strong>
          Strong communication and time management skills. Basic understanding
          of social media platforms, and promotion tactics. Creative thinker
          with a good sense of trends and starategic approach to audience
          engagement. Confident in shooting and editing short-form video
          content. Enthusiasm for marketing and a strong desire to learn and
          grow in the field. Comfortable working both independently and
          collaboratively.
          <br />
          <br />
          <strong>Preferred Qualifications: </strong>
          Prior experience in social media advertising and content analytics.
          Photography, videography or video editing skills. Familiarity with
          email campaign tools like MailChimp.
        </>
      ),
    },
    {
      question: 'Sponsorship',
      answer: (
        <>
          As a Sponsorship Team Member, you’ll help build the partnerships that
          make our hackathons possible. From reaching out to potential sponsors
          to managing ongoing relationships, you'll play a critical role in
          securing funding, resources, and support. You will collaborate with
          other teams to ensure sponsor visibility and fulfillment of
          deliverables. This role is perfect for someone who’s professional,
          proactive, and excited to connect with companies and organizations.
          <br />
          <br />
          <strong>Required Qualifications: </strong>
          Confidence and an ability to think on your feet in negotiations. A
          natural talent for building and maintaining relationships. Proactive
          mindset, always on the lookout for new sponsorship opportunities.
          Strong organizational and communication skills. Ability to manage
          multiple sponsorship commitments and devliverables efficiently.
          Professionalism, attention to detail and ability to take initiative
          and follow up consistently.
          <br />
          <br />
          <strong>Preferred Qualifications: </strong>
          Familiarity with outreach automation and lead generation tools like
          Apollo.io and SalesQL. Experience with sales or fundraising.
        </>
      ),
    },
    {
      question: 'Finance',
      answer: (
        <>
          As a Finance Director, you will play a vital role in managing our
          finances, ensuring the sustainability of our initiatives. From
          budgeting and expense tracking to reimbursements, and grant writing,
          you’ll play a key role in ensuring we use our resources wisely and
          stay financially organized. This is a great role for someone who’s
          detail-oriented, responsible, and interested in learning more about
          financial management in a real-world setting.
          <br />
          <br />
          <strong>Required Qualifications: </strong>
          Strong financial acumen with an interest in budgeting and financial
          planning. Good understanding of cash flow management and financial
          forecasting. Fundraising experience or a willingness to learn and
          engage with donors and sponsors effectively. Exceptional communication
          skills, both written and verbal. A can-do attitude that will be an
          invaluable asset to HackDavis' growth.
          <br />
          <br />
          <strong>Preferred Qualifications: </strong>
          Experience with managing budgets or grant writing. Familiarity with
          nonprofit tax requirements or an interest in learning about them.
        </>
      ),
    },
    {
      question: 'External',
      answer: (
        <>
          As an External Team Member, you'll represent HackDavis to external
          organizations and communities, playing a crucial role in creating and
          managing partnerships with other student clubs, industry
          professionals, mentors, nonprofit organizations, and more. You’ll
          coordinate events, workshops, and outreach efforts that enrich our
          initiatives. If you’re organized, outgoing, and passionate about
          building strong, long-lasting relationships, this role is for you!
          <br />
          <br />
          <strong>Required Qualifications: </strong>
          Spearhead the planning and execution of external events, demonstrating
          your organizational skills and attention to detail. A proactive and
          personable demeanor, radiating energy and enthusiasm. Strong
          communication skills, both written and verbal. Confidence in
          connecting with diverse groups and individuals. Initiative to learn
          and develop organizational and communication skills. Outreach to clubs
          on-campus, students and alumni, and off-campus industry leaders; being
          able to network and foster meaningful connections Familiarity with
          HackDavis or hackathons is preferred but not mandatory.
        </>
      ),
    },
    {
      question: 'Design',
      answer: (
        <>
          Are you a creative, innovative, and proactive designer with a passion
          for human-centered design? Join the Design team and help us create
          brand-consistent, minimal, and aesthetically pleasing designs that
          captivate and excite our audience. Your creative talent will play a
          pivotal role in shaping the future of HackDavis. We are looking for
          talented individuals to join our design team in various roles:
          <br />
          <br />
          <strong>Brand Designer: </strong>
          Craft the brand identity for the Hackathon season. Storytelling and
          experimental design. Proficiency in illustration using Figma and Adobe
          Illustrator.
          <br />
          <br />
          <strong>Product Designer: </strong>
          Design products that aim to delight and leave an impression, including
          apparel, stickers, and branded items. Detail-oriented with a focus on
          product specs. Conduct market research to inform design decisions.
          <br />
          <br />
          <strong>Content Designer: </strong>
          Create eye-catching, compelling content for social media and printed
          flyers. Deep understanding of the audience. Attention to detail to
          ensure engaging visuals.
          <br />
          <br />
          <strong>UI/UX Designer: </strong>
          Design beautiful and intuitive web experiences that bring joy to
          users. Focus on responsive design and intuitive user experiences.
          Proficiency in wireframing and creating delightful web interfaces
          using Figma.
        </>
      ),
    },
  ];

  {
    /*
      This interface and AccordionItem is used to define the structure of the accordion item, allowing us to apply our styling to it
    */
  }

  const [fixedHeight, setFixedHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const longestAnswerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (containerRef.current && longestAnswerRef.current) {
      const collapsedHeight = containerRef.current.scrollHeight;
      const longestAnswerHeight = longestAnswerRef.current.scrollHeight;

      setFixedHeight(collapsedHeight + longestAnswerHeight);
    }
  }, []);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      style={{ height: fixedHeight ? `${fixedHeight}px` : 'auto' }}
    >
      <h1 className={styles.FAQText}>Teams</h1>

      {/* 
        Hidden element to measure the longest answer (first question) for calculating fixed height of the container
      */}
      {/* <div
        style={{
          position: 'absolute',
          visibility: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <p ref={longestAnswerRef} className={styles.answer}>
          {teams[6].answer}
        </p>
      </div> */}

      <Accordion transition transitionTimeout={250}>
        {teams.map(({ question, answer }, index) => (
          <React.Fragment key={index}>
            <Item
              key={index}
              header={
                <div className={styles.questionRow}>
                  <p className={styles.questions}>{question}</p>
                  <div>
                    <div className={styles.dropDownPlus}>
                      <Image
                        src="/images/faq/plus_horizontal.svg"
                        alt="expand icon"
                        width={19}
                        height={3}
                      />
                    </div>
                    <Image
                      src="/images/faq/plus_horizontal.svg"
                      alt="collapse icon"
                      width={19}
                      height={3}
                    />
                  </div>
                </div>
              }
              buttonProps={{
                className: ({ isEnter }: { isEnter: boolean }) =>
                  `${styles.itemBtn} ${isEnter ? styles.itemBtnExpanded : ''}`,
              }}
              contentProps={{ className: styles.itemContent }}
            >
              <p className={styles.answer}>{answer}</p>
            </Item>
            {index < faqs.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </Accordion>

      <br id="faq" />
      <br />
      <h1 className={styles.FAQText}>FAQ</h1>

      <Accordion transition transitionTimeout={250}>
        {faqs.map(({ question, answer }, index) => (
          <React.Fragment key={index}>
            <Item
              key={index}
              header={
                <div className={styles.questionRow}>
                  <p className={styles.questions}>{question}</p>
                  <div>
                    <div className={styles.dropDownPlus}>
                      <Image
                        src="/images/faq/plus_horizontal.svg"
                        alt="expand icon"
                        width={19}
                        height={3}
                      />
                    </div>
                    <Image
                      src="/images/faq/plus_horizontal.svg"
                      alt="collapse icon"
                      width={19}
                      height={3}
                    />
                  </div>
                </div>
              }
              buttonProps={{
                className: ({ isEnter }: { isEnter: boolean }) =>
                  `${styles.itemBtn} ${isEnter ? styles.itemBtnExpanded : ''}`,
              }}
              contentProps={{ className: styles.itemContent }}
            >
              <p className={styles.answer}>{answer}</p>
            </Item>
            {index < faqs.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </Accordion>

    </div>
  );
};

export default AccordionFAQ;
