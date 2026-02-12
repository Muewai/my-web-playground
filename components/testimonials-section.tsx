import { Star } from "lucide-react"

const testimonials = [
  {
    name: "คุณสมชาย วงศ์สุวรรณ",
    role: "เจ้าของบ้านเดี่ย กรุงเทพฯ",
    text: "ติดตั้งแพ็กเกจ 5 kW ค่าไฟลดจาก 6,000 เหลือ 1,500 บาท ได้ระบบกล้องวงจรปิดฟรีด้วย คุ้มมากครับ ทีมงานมืออาชีพ ติดตั้งเสร็จใน 1 วัน",
    rating: 5,
    initials: "ส",
  },
  {
    name: "คุณนภา พรหมเมศ",
    role: "เจ้าของธุรกิจ นนทบุรี",
    text: "ใช้แพ็กเกจ 10 kW สำหรับออฟฟิศ ค่าไฟลดลงกว่าครึ่ง พนักงานรู้สึกปลอดภัยมากขึ้นเพราะมีระบบ Security ครบ แนะนำเลยค่ะ",
    rating: 5,
    initials: "น",
  },
  {
    name: "คุณวิทยา เจริญศิลป์",
    role: "เจ้าของโรงงาน สมุทรปราการ",
    text: "ศูนย์ Monitoring ดีมากครับ มีเหตุอะไรแจ้งเราทันที เรื่องโซลาร์ก็ประหยัดได้เยอะ คืนทุนไม่ถึง 5 ปี ROI ดีมาก",
    rating: 5,
    initials: "ว",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            รีวิวจากลูกค้า
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground lg:text-4xl">
            ลูกค้าพูดถึงเราอย่างไร
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={`star-${testimonial.name}-${i}`}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                {`"${testimonial.text}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
