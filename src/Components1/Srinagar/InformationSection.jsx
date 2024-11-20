import React from "react";

const InformationSection = () => {
  const sections = [
    {
      heading: "How to reach",
      content:
        "Tourists can choose a bus or taxi, as the roads are well connected to Srinagar.",
    },
    {
      heading: "Survival Tips & Tricks",
      content:
        "Be sure to bring warm and waterproof clothing, as the weather can be unpredictable. Be mindful of the tap water and ice, as they are not safe for consumption. Avoid brushing your teeth with unfiltered water. If trekking, be sure to bring the necessary supplies and equipment, such as a map, food, water, and a first aid kit. Respect the local culture and customs. Be aware of the potential for avalanches, landslides, and floods. If camping, take the necessary precautions such as setting up a safe and secure campsite. Be aware of the local wildlife and take the necessary safety precautions. Stay up to date on the current political situation in the region.",
    },
    {
      heading: "Folklore or Story",
      content:
        "There is a great wealth of folktales in Srinagar. Some of the most popular ones include 'Zohra Khatun and Haya Bund', 'Gulala Shah', 'Bombur and Loare', 'Usman Cacha from the Old City', 'Destiny & The First Day', and many more. These stories often contain morals and themes of wisdom, justice, courage, and loyalty. Folklore of Srinagar is also expressed through its music, experimenting with a blend of Kashmiri music and Persian tunes.",
    },
  ];

  return (
    <div className="p-6 min-h-screen mx-20 mt-5">
      <h1 className="text-3xl font-bold mb-6">
        Information About Srinagar
      </h1>
      <div className="space-y-2">
        {sections.map((section, index) => (
          <div
            key={index}
            className="p-6"
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              {section.heading}
            </h2>
            <p className="text-gray-600 font-mono leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformationSection;
