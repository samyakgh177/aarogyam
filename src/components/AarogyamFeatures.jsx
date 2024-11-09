import React from "react";
import { motion } from "framer-motion";
import colors from "./colors";

export const AarogyamFeatures = () => {

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const hoverVariants = {
        scale: 1.05,
        backgroundColor: colors.light, // Change to your desired hover background color
        color: colors.dark, // Change text color to dark on hover
    };


    return (
        <>
            <section id="service">
                {" "}
                {/* Add the section ID here */}
                <div
                    className="container p-6 mx-auto"
                    style={{ backgroundColor: colors.background }}
                >
                    <div className="mb-16 text-center">
                        <p
                            className="mt-2 text-6xl font-extrabold leading-8 tracking-tight"
                            style={{ color: colors.text }}
                        >
                            Our Services
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {[
                            {
                                title: "Computer Vision for Disease Detection",
                                description:
                                    "Advanced computer vision models trained on extensive datasets. Instant, highly accurate diagnoses with over 90% success rate. Identification of a wide range of conditions, from agricultural diseases to skin ailments.",
                            },
                            {
                                title: "First-Aid Guidance",
                                description:
                                    "Step-by-step instructions for basic first-aid procedures. Knowledge base curated by medical experts for rural contexts. Clear, easy-to-follow guidance on administering immediate care.",
                            },
                            {
                                title: "Integrated Healthcare Referrals",
                                description:
                                    "Automatic identification of nearest appropriate healthcare facility. Facilitation of appointment booking and patient transfers. Removal of barriers in navigating the healthcare system.",
                            },
                            {
                                title: "Preventive Health Monitoring",
                                description:
                                    "Tracks key health indicators using smartphone sensors. Provides personalized recommendations for lifestyle adjustments and preventive care. Empowers users to proactively manage their health and catch potential issues early.",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="flex p-8 border rounded-lg shadow-md bg-white"
                                initial="hidden"
                                animate="visible"
                                variants={cardVariants}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={hoverVariants} // Apply hover animations
                            >
                                <div className="flex-shrink-0">
                                    <svg
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className="w-6 h-6 text-indigo-500 transition-colors duration-300"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                                    <p className="leading-loose text-black text-md pt-2 text-lg">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}