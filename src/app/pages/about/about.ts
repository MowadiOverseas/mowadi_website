import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCard } from '../../components/ui/stat-card/stat-card';
import { ValueCard } from '../../components/ui/value-card/value-card';
import { TeamMember } from '../../components/ui/team-member/team-member';
import { MissionVisionCard } from '../../components/ui/mission-vision-card/mission-vision-card';

interface Value {
  icon: 'shield' | 'users' | 'heart';
  title: string;
  description: string;
}

interface TeamMemberData {
  name: string;
  role: string;
  image: string;
}

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, ValueCard, TeamMember, MissionVisionCard],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  stats: Stat[] = [
    { value: '5000+', label: 'Successful Placements' },
    { value: '15+', label: 'Years of Experience' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '25+', label: 'Partner Companies' }
  ];

  coreValues: Value[] = [
    {
      icon: 'shield',
      title: 'Excellence',
      description: 'We priotize quality and deliver outstanding recruitment services.'
    },
    {
      icon: 'users',
      title: 'Innovation',
      description: 'We embrace new trends and technologies to provide forward-thinking staffing solutions.'
    },
    {
      icon: 'heart',
      title: 'Collaboration',
      description: 'Success lies in building strong partnerships between clients, candidates, and partners like Promex.'
    },
    {
      icon: 'users',
      title: 'Integrity',
      description: 'Transparency, trust, and ethical practices guide all our operations.'
    }
  ];

  teamMembers: TeamMemberData[] = [
    {
      name: '1',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
    },
    {
      name: '1',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop'
    },
    {
      name: '1',
      role: 'Training Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
    },
    {
      name: '1',
      role: 'Recruitment Head',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop'
    }
  ];
}
