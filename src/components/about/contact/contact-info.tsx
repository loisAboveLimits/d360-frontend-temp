"use client"

import { Button } from "@/components/ui/button"

interface ContactInfoProps {
  title?: string
  subtitle?: string
  showPhone?: boolean
  insideSaudi?: string
  outsideSaudi?: string
  showEmail?: boolean
  email?: string
  showAppSection?: boolean
  appTitle?: string
  appDescription?: string
  appPoints?: string[]
  showComplaintText?: boolean
  complaintText?: string
  complaintEmail?: string
  showButton?: boolean
  buttonText?: string
}

export function ContactInfo({
  title = "",
  subtitle = "",
  showPhone = true,
  insideSaudi = "8001244410",
  outsideSaudi = "00966920024360",
  showEmail = true,
  email = "customer.care@d360.com",
  showAppSection = true,
  appTitle = "D360 Bank App",
  appDescription = 'You can reach us via the "Help" section in the app:',
  appPoints = [
    "Send us message through the app",
    "Request a Callback"
  ],
  showComplaintText = false,
  complaintText = "If you remain unsatisfied with the resolution, you can escalate the issue by emailing:",
  complaintEmail = "complaints@d360.com",
  showButton = true,
  buttonText = "Download App"
}: ContactInfoProps) {
  return (
    <div className="text-[#263244]  text-sm space-y-6 lg:px-0 mb-12 lg:mb-0 px-6">
      {title && <h3 className="text-xl font-bold">{title}</h3>}
      {subtitle && <p className="text-base text-[#263244]">{subtitle}</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {showPhone && (
          <>
            <div>
              <h4 className="text-[#6D809C] font-medium">Inside Saudi Arabia</h4>
              <p>{insideSaudi}</p>
            </div>
            <div>
              <h4 className="text-[#6D809C] font-medium">Outside Saudi Arabia</h4>
              <p>{outsideSaudi}</p>
            </div>
          </>
        )}
        {showEmail && (
          <div>
            <h4 className="text-[#6D809C] font-medium">Email</h4>
            <p>{email}</p>
          </div>
        )}
      </div>

      {showAppSection && (
        <div>
          <h4 className="text-[#E74529] font-bold text-base mb-2">{appTitle}</h4>
          <p className="text-[#6D809C] mb-2">{appDescription}</p>
          <ul className="list-disc list-inside space-y-1">
            {appPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {showComplaintText && (
        <div className="space-y-2 text-sm">
          <p>
            Your satisfaction is our priority. {complaintText}{" "}
            <span className="font-bold text-[#E74529]">{complaintEmail}</span>
          </p>
        </div>
      )}

      {showButton && (
        <Button
          size="lg"
          className="bg-[#E74529] text-white rounded-[15px] hover:bg-[#e6391f]"
        >
          {buttonText}
        </Button>
      )}
    </div>
  )
}
