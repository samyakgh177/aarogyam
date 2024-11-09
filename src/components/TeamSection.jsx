import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn and GitHub icons
import Kunal from "../assets/Kunal.jpg"; // Ensure this path is correct
import Samyak from "../assets/Samyak.jpg"; // Ensure this path is correct
import Tamanna from "../assets/Tamanna.png"; // Ensure this path is correct
import Jatin from "../assets/Jatin.png"; // Import Jatin's image
import colors from "./colors"; // Import the color palette


export const TeamSection = () => {
    const teamMembers = [
        {
            name: "Kunal Sinha",
            role: "AI/ML & IoT Developer",
            image: Kunal, // Use the imported image directly
            linkedin: "https://www.linkedin.com/in/kunal-sinha-244044278/",
            github: "https://github.com/Sinha-Kunal",
        },
        {
            name: "Jatin Kumar",
            role: "AI/ML & Backend Developer",
            image: Jatin, // Use the imported image for Jatin
            linkedin: "https://www.linkedin.com/in/jatinkumar2005/",
            github: "https://github.com/jatinkumar300403",
        },
        {
            name: "Samyak Gupta",
            role: "Fullstack Developer",
            image: Samyak, // Use the imported image directly
            linkedin: "https://www.linkedin.com/in/samyak-gupta-9b601724a",
            github: "https://github.com/samyakgh177",
        },
        {
            name: "Tamanna Agarwal",
            role: "UI/UX Designer",
            image: Tamanna, // Use the imported image directly
            linkedin: "https://linkedin.com/in/tamanna-agarwal-656140262",
            github: "https://github.com/Tamanna1604",
        },
    ];

    return (
        <section id='team' style={{ backgroundColor: colors.background }} className="py-4">
            <div className="container mx-auto px-4">
                <p
                    className="mt-2 text-6xl font-extrabold leading-8 tracking-tight"
                    style={{ color: colors.text }}
                >
                    Meet the Team
                    <br />
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="team-member bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between transition-shadow duration-300 hover:shadow-xl border-2 border-gray-200"
                        >

                            <div className="flex items-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="rounded-full w-24 h-24 border-2 border-gray-300 mr-4 object-cover"
                                />
                                <div className="flex flex-col justify-center">
                                    <h3
                                        style={{ color: colors.primary }}
                                        className="text-xl font-semibold"
                                    >
                                        {member.name}
                                    </h3>
                                    <p style={{ color: colors.dark }} className="text-gray-600 pt-2">
                                        {member.role}
                                    </p>
                                    <div className="flex justify-center mt-4">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:text-blue-700 transition-colors duration-300 transform hover:scale-110 mx-2"
                                        >
                                            <FaLinkedin size={28} />
                                        </a>
                                        <a
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-800 transition-colors duration-300 transform hover:scale-110 mx-2"
                                        >
                                            <FaGithub size={28} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}