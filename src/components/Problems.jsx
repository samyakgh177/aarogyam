import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import { Quote } from "lucide-react"; // Assuming you want to keep this icon
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme CSS
import "./Problems.css"; // Import custom CSS for styling
import colors from "./colors";


export const Problems = ()=>{

    const testimonials = [
        {
          id: 1,
          name: "Shreyas M.",
          village: "Chattisgarh",
          quote:
            "Last year, my father had a heart attack. The nearest hospital was 12 kilometers away. We lost precious time trying to arrange transport. If only we had a way to get medical help quickly...",
          issue: "Limited Healthcare Access",
        },
        {
          id: 2,
          name: "Yash G.",
          village: "Uttar Pradesh",
          quote:
            "I'm the only doctor serving 15 villages. It's impossible to reach everyone. Some patients travel for hours only to find I'm attending an emergency elsewhere. We need a better way to coordinate care.",
          issue: "Doctor Shortage",
        },
        {
          id: 3,
          name: "Aakansh T.",
          village: "Karnataka",
          quote:
            "When my brother had a high fever, I couldn't understand the medicine instructions in English. By the time I found someone to translate, his condition had worsened. Why can't we get medical advice in Kannada?",
          issue: "Language Barriers",
        },
        {
          id: 4,
          name: "Aayush P.",
          village: "Madhya Pradesh",
          quote:
            "My sister's diabetes was diagnosed very late because we couldn't afford regular check-ups in the city. Now the complications are severe. Early detection could have prevented this.",
          issue: "Delayed Diagnosis",
        },
      ];
    
      // Slider settings
      const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Slower transition
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false, // Disable navigation arrows
      };
    

    return (
        <div style={{ backgroundColor: "#FAF3E0" }} className="py-16">
      <div className="container mx-auto px-4">
        <p
          className="mt-2 text-6xl font-extrabold leading-8 tracking-tight"
          style={{ color: colors.text }}
        >
          Why India Needs digital Rural Healthcare
          <br />
        </p>
        <Slider {...settings} className="mt-8">
          {" "}
          {/* Add margin-top here */}
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-primary-500 mb-4" />
              <p className="text-gray-600 italic mb-4 text-xl">{item.quote}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800 text-lg">{item.name}</p>
                <p className="text-sm text-gray-500 ">{item.village}</p>
                <span className="inline-block mt-2 text-xs font-medium text-primary-600 bg-primary-50 rounded-full">
                  {item.issue}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    )
}