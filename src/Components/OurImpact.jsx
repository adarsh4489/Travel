const impactStats = [
  {
    id: 1,
    number: "10,000+",
    label: "Happy Travelers",
  },
  {
    id: 2,
    number: "50+",
    label: "Destinations Covered",
  },
  {
    id: 3,
    number: "4.9★",
    label: "Average Rating",
  },
  {
    id: 4,
    number: "7+ Years",
    label: "Of Experience",
  },
];

const OurImpactSection = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="w-[90%] max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-900 underline mb-12">
          Our Impact
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {impactStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <h3 className="text-4xl font-extrabold text-orange-500">{stat.number}</h3>
              <p className="text-gray-700 mt-2 text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpactSection;
