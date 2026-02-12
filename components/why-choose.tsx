import { Zap, Wrench, ShieldCheck, Award } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Solar + Security Bundle",
    description:
      "ได้ทั้งโซลาร์เซลล์และระบบ Smart Security ในแพ็กเกจเดียว ประหยัดกว่าซื้อแยก",
  },
  {
    icon: Wrench,
    title: "วิศวกรมืออาชีพ",
    description:
      "ทีมวิศวกรผู้เชี่ยวชาญ ออกแบบและติดตั้งตามมาตรฐาน พร้อมใบรับรองจาก กฟผ.",
  },
  {
    icon: ShieldCheck,
    title: "ศูนย์ดูแล 24 ชม.",
    description:
      "ศูนย์ Monitoring Center เฝ้าระวังความปลอดภัยให้คุณตลอด 24 ชั่วโมง ทุกวัน",
  },
  {
    icon: Award,
    title: "รับประกันงานติดตั้ง",
    description:
      "รับประกันงานติดตั้ง 10 ปี อุปกรณ์มีใบรับประกันจากผู้ผลิต สูงสุด 25 ปี",
  },
]

export function WhyChoose() {
  return (
    <section id="services" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            ทำไมต้อง LETcare
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground lg:text-4xl">
            เราให้มากกว่าแค่โซลาร์เซลล์
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            LETcare คือผู้นำด้านพลังงานแสงอาทิตย์และระบบรักษาความปลอดภัย
            ครบวงจรในที่เดียว
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
