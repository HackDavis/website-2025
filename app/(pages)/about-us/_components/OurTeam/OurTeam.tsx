'use client';
import ProfileCard from './_components/ProfileCard';
import styles from './OurTeam.module.scss';
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import teamMembersData from '../../_data/teamMembers.json';
// import teamMembersData from '_data/teamMembers.json'; // Import team members JSON file

type TeamMember = {
  id: string;
  name: string;
  position: string;
  teamCategory: string;
  profileImageUrl: string;
  linkedinURL: string;
};

export default function OurTeam() {
  const [allTeamMembers, setAllTeamMembers] = useState<TeamMember[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [activeTeam, setActiveTeam] = useState<string | null>('Design');

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'start',
      dragFree: true,
      skipSnaps: true,
      watchDrag: true,
    },
    [WheelGesturesPlugin()]
  );

  useEffect(() => {
    function loadAllTeamMembers() {
      // Transform JSON data to match the TeamMember type
      const members: TeamMember[] = teamMembersData.map((member) => ({
        id: `${member.name}-${member.team_category}`,
        name: member.name, // Access the `name` property
        position: member.position, // Access the `position` property
        teamCategory: member.team_category, // Correctly map `team_category` to `teamCategory`
        profileImageUrl: member.profile_image_url, // Correctly map `profile_image_url` to `profileImageUrl`
        linkedinURL: member.linkedinURL, // Access the `linkedinURL` property
      }));

      if (members) {
        setAllTeamMembers(members);
        filterTeam('Design', members);
      }
    }

    loadAllTeamMembers();
  }, []);

  function filterTeam(teamName: string, members: TeamMember[]) {
    const filteredMembers = members
      .filter((member) => member.teamCategory === teamName)
      .sort((a, b) => {
        const aIsLead =
          a.position.includes('Lead') || a.position.includes('Co-Lead');
        const bIsLead =
          b.position.includes('Lead') || b.position.includes('Co-Lead');

        if (aIsLead && !bIsLead) return -1;
        if (!aIsLead && bIsLead) return 1;

        return a.name.localeCompare(b.name);
      });
    setTeamMembers(filteredMembers);
    setActiveTeam(teamName);
  }

  const teamNames = [
    'Design',
    'Technical',
    'External',
    'Finance',
    'Marketing',
    'Operations',
    'Sponsorship',
  ];

  return (
    <div className={styles.ourTeam}>
      <div className={styles.ourTeam_container}>
        <div className={styles.ourTeam_container_title}>
          <h1>Get to know our team</h1>
          <p>HackDavis is built by students, for students.</p>
        </div>
        <div className={styles.ourTeam_container_embla} ref={emblaRef}>
          <div className={styles.ourTeam_container_embla_filterButtons}>
            {teamNames.map((teamName, index) => (
              <div key={index}>
                <div
                  className={`${
                    styles.ourTeam_container_embla_filterButtons_button
                  } ${activeTeam === teamName ? styles.active : ''}`}
                  onClick={() => {
                    if (emblaApi) emblaApi.scrollTo(index, false);
                    filterTeam(teamName, allTeamMembers);
                  }}
                >
                  <p>{teamName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ourTeam_container_team}>
          {teamMembers.map((member) => (
            <ProfileCard
              key={member.id}
              name={member.name}
              title={member.position}
              imageUrl={member.profileImageUrl}
              linkedinURL={member.linkedinURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
