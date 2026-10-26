import { useTranslation } from 'react-i18next';
import { teamMembers } from '@/mocks/teamMembers';

function MemberCard({ member }: { member: typeof teamMembers[0] }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center text-center">
      {/* Square Photo */}
      {!member.hideImage && (
        <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-background-200">
          <img
            src={member.image}
            alt={member.imageAlt}
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}

      {/* Name & Role Below */}
      <div className="mt-4">
        <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-950">
          {member.name}
        </h3>
        {!member.hideRole && (
          <p className="text-sm text-foreground-500 mt-1">
            {t(`team.roles.${member.name}`)}
          </p>
        )}
      </div>
    </div>
  );
}

export default function TeamSection() {
  const { t } = useTranslation();

  return (
    <section id="equipo" className="relative bg-background-100 py-20 md:py-28">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <p className="text-sm md:text-base font-label tracking-widest uppercase text-accent-500 mb-3">
            {t('team.sectionLabel')}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground-950 leading-none">
            {t('team.titleLine1')}
            <br />
            <span className="italic font-normal text-accent-500">{t('team.titleLine2')}</span>
          </h2>
        </div>

        {/* Flat Grid — all members same level */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}