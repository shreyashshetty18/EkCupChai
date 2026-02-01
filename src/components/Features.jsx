import { FaCogs, FaMoneyBill, FaUserFriends, FaBolt } from "react-icons/fa";

const Features = () => {

  const features = [
    {
      title: "Instant Payment Setup",
      desc: "Start receiving chai (payments) in seconds - no complicated setup.",
      icon: <FaBolt className="text-3xl sm:text-4xl text-[#fceee6]" />,
    },
    {
      title: "Custom Membership Options",
      desc: "Offer memberships with exclusive perks to your biggest supporters.",
      icon: <FaCogs className="text-3xl sm:text-4xl text-[#fceee6]" />,
    },
    {
      title: "Simple Dashboard",
      desc: "Manage payments, messages, and supporters in one clean place.",
      icon: <FaUserFriends className="text-3xl sm:text-4xl text-[#fceee6]" />,
    },
    {
      title: "Zero Monthly Fees",
      desc: "Keep more of what you earn. No hidden charges or subscriptions.",
      icon: <FaMoneyBill className="text-3xl sm:text-4xl text-[#fceee6]" />,
    }
  ];
  return (
    <section className='text-center py-2 px-4 sm:py-8 bg-[#f5f1ee] relative z-10 overflow-hidden'>
      {/* Sub Heading */}
      <p className='text-xs text-gray-500 uppercase tracking-wide mb-2'>Creator-First-Platform</p>
      {/* Main Heading */}
      <h2 className='text-2xl sm:text-5xl font-extrabold text-chaiBrown mb-6'>Why Creators Love Us</h2>
      {/* Description */}
      <p className='text-xs sm:text-lg text-gray-600 max-w-2xl mx-auto mb-16 sm:mb-20 px-8 sm:px-8'>We Built EkCupChai to help creators thrive and succeed in their journey. Here's what makes us special.</p>
      {/* Features Cards */}
      <div>
        {features.map((features, index) => (
          <div>
            {/* Chai Logo */}
            <img src="{logo}" alt="logo"
              className="absolute top-[8px] right-3 w-7 h-7 opacitty-25 group-hover:opacity-50 transition-opacity duration-300 pointer-events-name z-0" />

            {/* Feature Icon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-[#3e2723] rounded-full flex items-center justify-center shadow-lg z-10">
              {features.icon}
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-chaiBrown mt-2 z-10 relative">
              {features.title}
            </h3>
            <p className="text-gray-600 text-sm z-10 relative">
              {features.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features