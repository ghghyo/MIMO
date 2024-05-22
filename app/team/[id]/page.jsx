import React from 'react';
import teamData from '@/components/data/team-data';
import TeamMembersClient from './TeamMembersClient';

// Function to generate static parameters
export async function generateStaticParams() {
    return teamData.map(team => ({
        id: team.id.toString(),
    }));
}

const TeamMembersPage = ({ params }) => {
    return <TeamMembersClient params={params} />;
};

export default TeamMembersPage;