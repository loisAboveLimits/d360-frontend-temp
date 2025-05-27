'use client';

export default function SanabilSteps() {
  const steps = [
    {
      number: 1,
      title: 'Open the D360 app',
      description:
        'From the home screen, scroll to the “Discover Products” section, then tap “Open Sanabil Daily Savings Account”',
    },
    {
      number: 2,
      title: 'Create an account',
      description: "Tap on Create 'Sanabil Daily Account'",
    },
    {
      number: 3,
      title: 'Add money',
      description:
        'Top up your account with at least SAR 2,500 and earn profits on your savings',
    },
  ];

  return (
    <section className="bg-[#F6F7F8] py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E293B]">
          How to Open a Sanabil Daily Distribution Account
        </h2>
        <p className="text-sm md:text-base text-[#475569] mt-2">
          Put your salary to work or activate unspent cash in 3 simple steps
        </p>

        <div className="grid md:grid-cols-3 gap-6 px-28 mt-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#F6F7F8]  flex  items-center-safe gap-6 rounded-xl p-4 text-left shadow-sm"
            >

              <div className="text-8xl  text-[#D9D9D9] ">
                {step.number}
              </div>
              <div>
              <h3 className="font-semibold text-[#1E293B] text-sm md:text-base mb-1">
                {step.title}
              </h3>
              <p className="text-xs text-[#475569]">{step.description}</p>
              </div>
            </div>
          ))}
        <p className="text-xs text-left text-[#64748B]  underline cursor-pointer">
          *Terms & conditions apply
        </p>
        </div>

      </div>
    </section>
  );
}
