"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeamMemberCarousel } from "./team-member-carousel"
import { useTranslations } from "@/lib/i18n"
import { useState } from "react"
import type { TeamMemberId } from "@/types"
import { TeamMemberCard } from "./team-member-card"
import { motion, AnimatePresence } from "framer-motion"

interface TeamTabsProps {
  teamMembers: {
    id: TeamMemberId
    image: string
  }[]
}

export function TeamTabs({ teamMembers }: TeamTabsProps) {
  const { t } = useTranslations()
  const [selectedId, setSelectedId] = useState<TeamMemberId | null>(null)

  const handleSelect = (id: TeamMemberId) => {
    setSelectedId(id === selectedId ? null : id)
  }

  const renderTabContent = (tabKey: string) => (
    <TabsContent value={tabKey} className="">
      {/* Mobile and Tablet: Use Carousel */}
      <div className="block lg:hidden">
        {/* Mobile Details Panel with Animation */}
        <AnimatePresence mode="wait">
          {selectedId && (
            <motion.div
              key="mobile-details-panel"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
                type: "tween",
              }}
              className="p-4 mb-6 bg-[#F8F8F8] shadow-md rounded-xl"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-800">{t(`team.members.${selectedId}.name` as any)}</h3>
                <button
                  onClick={() => setSelectedId(null)}
                  className="text-[#E74529] text-xl font-bold hover:text-red-600 transition-colors"
                >
                  ×
                </button>
              </div>
              <p className="text-slate-600 mb-2">{t(`team.members.${selectedId}.title` as any)}</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t(`team.members.${selectedId}.description` as any)}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <TeamMemberCarousel teamMembers={teamMembers} selectedId={selectedId} onSelect={handleSelect} />
      </div>

      {/* Desktop: Grid with sliding sidebar */}
      <div className="hidden lg:block">
        <div className="flex gap-6 relative overflow-hidden">
          {/* Details Panel with smooth in/out animation */}
          <AnimatePresence mode="wait">
            {selectedId && (
              <motion.div
                key="details-panel"
                initial={{ x: -320, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -320, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                  type: "tween",
                }}
                className="w-[300px] p-6 bg-white shadow-lg rounded-xl border border-gray-200 h-fit flex-shrink-0"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-800">{t(`team.members.${selectedId}.name` as any)}</h3>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="text-[#E74529] text-2xl font-bold hover:text-red-600 transition-colors"
                  >
                    ×
                  </button>
                </div>
                <p className="text-[#E74529] font-semibold mb-4">{t(`team.members.${selectedId}.title` as any)}</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t(`team.members.${selectedId}.description` as any)}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Cards Grid with smooth width animation */}
          <motion.div
            animate={{
              width: selectedId ? "calc(100% - 320px)" : "100%",
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
              type: "tween",
            }}
            className="flex-1 min-w-0"
          >
            <motion.div
              className="grid grid-cols-4 gap-4"
              layout
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                type: "tween",
              }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  layout
                  transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                    type: "tween",
                  }}
                >
                  <TeamMemberCard
                    id={member.id}
                    image={member.image}
                    index={index}
                    selectedId={selectedId}
                    onSelect={handleSelect}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </TabsContent>
  )

  return (
    <Tabs defaultValue="board" className="w-full px-0 md:px-12 relative">
      <div className="mb-8">
        <TabsList className="grid w-full max-w-lg grid-cols-3 bg-transparent p-0 gap-2">
          <TabsTrigger
            value="board"
            className="rounded-full md:px-6 md:py-3 text-[11px] md:text-sm font-medium transition-all duration-200 data-[state=active]:bg-[#E74529] data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
          >
            {t("investors.tabs.board")}
          </TabsTrigger>
          <TabsTrigger
            value="management"
            className="rounded-full md:px-6 md:py-3 text-[10px] md:text-sm font-medium transition-all duration-200 data-[state=active]:bg-[#E74529] data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
          >
            {t("investors.tabs.management")}
          </TabsTrigger>
          <TabsTrigger
            value="advisors"
            className="rounded-full md:px-6 md:py-3 text-[11px] md:text-sm font-medium transition-all duration-200 data-[state=active]:bg-[#E74529] data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
          >
            {t("investors.tabs.advisors")}
          </TabsTrigger>
        </TabsList>
      </div>

      {renderTabContent("board")}
      {renderTabContent("management")}
      {renderTabContent("advisors")}
    </Tabs>
  )
}
