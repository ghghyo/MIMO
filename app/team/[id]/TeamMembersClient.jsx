"use client"

import React from 'react';
import { useParams, useRouter } from "next/navigation";
import teamData from '@/components/data/team-data';
import TeamSingle from '@/components/pages/teams/team-single';

const TeamMembersClient = () => {
    const params = useParams();
    const teamDetails = teamData.find((team) => team.id === params.id);
    const router = useRouter();

    if (!teamDetails) {
        if (typeof window !== 'undefined') {
            router.push("/404-error");
        }
        return null; // Render nothing on the server
    }

    return (
        <>
            <TeamSingle teamDetails={teamDetails} />
        </>
    );
};

export default TeamMembersClient;