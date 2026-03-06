
import TeamCard from '@/src/components/common/TeamCard';

import DotGrid from '@/components/DotGrid';

export default function TeamPage() {
  const executiveMembers = [
    {
      name: "Member One",
      role: "President",
      image: "https://images.pexels.com/photos/34408249/pexels-photo-34408249.jpeg"
    },
    {
      name: "Member Two",
      role: "Vice President",
      image: "https://images.pexels.com/photos/34408249/pexels-photo-34408249.jpeg"
    },
    {
      name: "Member Three",
      role: "Secretary",
      image: "https://images.pexels.com/photos/34408249/pexels-photo-34408249.jpeg"
    }
  ];

  return (
    <>
   

    
      
     <div className="absolute inset-0 z-10 pointer-events-none">
      
  <DotGrid
    dotSize={2}
    gap={16}
    baseColor="#121212"
    activeColor="#faa41a"
    proximity={100}
    shockRadius={370}
    shockStrength={5}
    resistance={1100}
    returnDuration={1.5}
  />


      </div>
      {/* Spacer for navbar separation */}
      <div className="relative z-10 h-30"></div>
      
      <div className="relative z-10 pb-20">
        <div className="text-3xl md:text-6xl font-bold text-center text- h-50" style={{ color: '#FFA300' }}>
          <p>Meet Our Team</p>
          </div>

          {/* Executive Committee Section */}
          <div className="w-full flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#FFA300' }}>
              Executive Committee
            </h2>
            
            {/* Spacer between line and cards */}
            <div className="h-20"></div>

            {/* Team Cards Grid */}
            <div className="flex justify-center items-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {executiveMembers.map((member, index) => (
                  <TeamCard
                    key={index}
                    image={member.image}
                    name={member.name}
                    role={member.role}
                    className="w-[320px] h-[450px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
