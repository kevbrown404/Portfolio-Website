"use client";
import React, {useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Fullstack Academy of Code</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
]

const AboutSection = () => {
    const [tab,setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

return (
    
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/page-image.jpeg" width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base md:text-lg">
                You know what the fuck going on. Got this matte black rari in my head and I will eventually own one.
                People in my DMs asking me for my kimonos and im like "fuck boy, you cain't afford dis."
                On the flip side, life is good, we getting healthy, and we ready to take over the world.
            </p>
            <div className="flex flex-row mt-8">
                <TabButton 
                    selectTab={() => handleTabChange("skills")}
                    activeTab={tab === "skills"}
                >
                    {" "}
                    Skills{" "}
                </TabButton>
                <TabButton 
                    selectTab={() => handleTabChange("education")}
                    activeTab={tab === "education"}
                >
                    {" "}
                    Education{" "}
                </TabButton>
                <TabButton 
                    selectTab={() => handleTabChange("certifications")}
                    activeTab={tab === "certifications"}
                >
                    {" "}
                    Certifications{" "}
                </TabButton>
            </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}

            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutSection