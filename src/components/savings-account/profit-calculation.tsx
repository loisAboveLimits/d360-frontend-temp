'use client';

export default function ProfitCalculationSection() {
  const points = [
    'The cutoff time for balance calculation is 12:00 AM (midnight) every day.',
    'Profit is calculated on the minimum balance maintained in your account between 00:00 and 23:59.',
    'Deposits made before the cutoff time will start earning profit from the same day.',
    'Deposits made after midnight or during weekends/holidays will start earning profit from the next business day.',
    'Profit earned each business day is credited to your account at 9:00 AM the following day.',
    'Your account must maintain a minimum balance of SAR 2,500 throughout the day to earn profit for that day.',
  ];

  return (
    <section className="bg-[#F6F7F8] py-12 px-20 md:px-38">
      <h2 className="text-[#EB644C] font-bold text-xl md:text-2xl px-4 mb-6">
        How Profit Is Calculated
      </h2>

      <div className="relative flex gap-6">
        {/* Vertical line */}
        <div className="relative w-6 flex flex-col items-center">
          <div className="absolute top-0 bottom-0 w-[2px] bg-[#E6E8EB]" />
          {points.map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-[#E5E7EB] border border-white z-10"
              style={{ marginTop: i === 0 ? '0px' : '27px' }}
            />
          ))}
        </div>

        {/* Text Content */}
        <ul className="space-y-4">
          {points.map((text, index) => (
            <li key={index} className="text-md text-[#263244] leading-relaxed">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
