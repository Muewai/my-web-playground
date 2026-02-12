import Image from "next/image"
import { Sun, Camera, Wifi, BatteryCharging } from "lucide-react"

const solarItems = [
  { icon: Sun, label: "แผงโซลาร์เซลล์ Tier 1" },
  { icon: BatteryCharging, label: "Inverter คุณภาพสูง" },
  { icon: Wifi, label: "ระบบ Monitoring ออนไลน์" },
]

const securityItems = [
  { icon: Camera, label: "กล้อง IP Camera 4 ตัว" },
  { icon: Wifi, label: "เซ็นเซอร์ประตู-หน้าต่าง" },
  { icon: BatteryCharging, label: "Smart Hub พร้อม App" },
]

export function SolarSecurity() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            แพ็กเกจพิเศษ
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground lg:text-4xl">
            Solar + ระบบ Security ฟรี
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            ทุกแพ็กเกจโซลาร์เซลล์มาพร้อมชุด Smart Security ฟรี
            ดูแลบ้านคุณแบบครบวงจร
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="bg-primary px-6 py-4">
              <h3 className="text-lg font-bold text-primary-foreground">
                ระบบโซลาร์เซลล์
              </h3>
            </div>
            <div className="p-6">
              <div className="relative mb-6 aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/images/solar-system.jpg"
                  alt="Solar panel system components"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="flex flex-col gap-4">
                {solarItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.label} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">
                        {item.label}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="bg-foreground px-6 py-4">
              <h3 className="text-lg font-bold text-background">
                ระบบ Smart Security (ฟรี)
              </h3>
            </div>
            <div className="p-6">
              <div className="relative mb-6 aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/images/security-system.jpg"
                  alt="Smart security system components"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="flex flex-col gap-4">
                {securityItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.label} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">
                        {item.label}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
