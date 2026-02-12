import Image from "next/image"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    image: "/images/blog-1.jpg",
    category: "โซลาร์เซลล์",
    title: "5 เหตุผลที่ควรติดโซลาร์เซลล์ในปี 2026",
    excerpt:
      "ค่าไฟแพงขึ้นทุกปี การติดโซลาร์เซลล์ช่วยลดค่าไฟได้ถึง 70% พร้อมเพิ่มมูลค่าให้บ้านคุณ",
    date: "15 ม.ค. 2026",
  },
  {
    image: "/images/blog-2.jpg",
    category: "ประหยัดพลังงาน",
    title: "วิธีคำนวณค่าไฟ และขนาดโซลาร์ที่เหมาะกับบ้านคุณ",
    excerpt:
      "เรียนรู้วิธีคำนวณขนาดระบบโซลาร์ที่เหมาะสม เพื่อให้ได้ประสิทธิภาพสูงสุดและคุ้มค่าที่สุด",
    date: "8 ม.ค. 2026",
  },
  {
    image: "/images/blog-3.jpg",
    category: "Smart Security",
    title: "ระบบ Smart Security คืออะไร ทำไมบ้านยุคใหม่ต้องมี",
    excerpt:
      "ทำความรู้จักระบบรักษาความปลอดภัยอัจฉริยะ ที่ช่วยดูแลบ้านคุณได้แม้ไม่อยู่บ้าน",
    date: "2 ม.ค. 2026",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            บทความความรู้
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground lg:text-4xl">
            เรื่องน่ารู้เกี่ยวกับโซลาร์เซลล์
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-muted-foreground">
                  {article.date}
                </span>
                <h3 className="mt-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                  อ่านเพิ่มเติม
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
