'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

interface CountDownProps {
    campaign_number: string;
    affiliate_number: string;
    sponsor_number: string;
}

export default function CountDown({ campaign_number, affiliate_number, sponsor_number }: CountDownProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { value: campaign_number, label: 'Active Campaign', suffix: '+' },
    { value: affiliate_number, label: 'Affiliate', suffix: '+' },
    { value: sponsor_number, label: 'Sponsor', suffix: '+' },
  ]

  return (
    <div className="bg-white/10 backdrop-blur-sm p-5 border-white/10 rounded-lg max-w-[500px] border" ref={ref}>
      <div className="flex flex-row items-center justify-between gap-5">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-white text-[28px] md:text-[40px] font-[500] mb-2">
              {inView ? (
                <CountUp
                  end={Number(stat.value)}
                  duration={2.5}
                  separator=","
                  suffix={stat.suffix}
                />
              ) : '0'}
            </div>
            <div className="text-secondary text-[15px] md:text-[21px] font-[400]">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}