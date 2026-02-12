import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const packages = [
  {
    name: "3 kW",
    subtitle: "สำหรับบ้านขนาดเล็ก",
    price: "99,000",
    monthly: "1,500",
    features: [
      "แผงโซลาร์ 3 kW",
      "Inverter 3 kW",
      "ชุด Smart Security ฟรี",
      "ประกันงานติดตั้ง 10 ปี",
      "ลดค่าไฟได้ ~3,000 บาท/เดือน",
    ],
    popular: false,
  },
  {
    name: "5 kW",
    subtitle: "สำหรับบ้านขนาดใหญ่",
    price: "159,000",
    monthly: "2,300",
    features: [
      "แผงโซลาร์ 5 kW",
      "Inverter 5 kW",
      "ชุด Smart Security Pro ฟรี",
      "ประกันงานติดตั้ง 10 ปี",
      "ลดค่าไฟได้ ~5,000 บาท/เดือน",
      "ฟรี Monitoring 1 ปี",
    ],
    popular: true,
  },
  {
    name: "10 kW",
    subtitle: "สำหรับธุรกิจ",
    price: "299,000",
    monthly: "4,200",
    features: [
      "แผงโซลาร์ 10 kW",
      "Inverter 10 kW",
      "ชุด Smart Security Business ฟรี",
      "ประกันงานติดตั้ง 10 ปี",
      "ลดค่าไฟได้ ~10,000 บาท/เดือน",
      "ฟรี Monitoring 2 ปี",
    ],
    popular: false,
  },
]

export function PackagesSection() {
  return (
    <section id="packages" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            แพ็กเกจยอดนิยม
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground lg:text-4xl">
            เลือกแพ็กเกจที่เหมาะกับคุณ
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            ทุกแพ็กเกจรวมระบบ Smart Security ฟรี พร้อมผ่อนสบายสูงสุด 84 เดือน
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:shadow-lg ${
                pkg.popular
                  ? "border-primary ring-2 ring-primary"
                  : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
                  ยอดนิยม
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {pkg.subtitle}
                </p>
                <div className="my-6">
                  <span className="text-4xl font-bold text-foreground">
                    {pkg.price}
                  </span>
                  <span className="ml-1 text-muted-foreground">บาท</span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {"หรือเริ่มต้น "}
                    <span className="font-semibold text-primary">
                      {pkg.monthly} บาท/เดือน
                    </span>
                  </p>
                </div>
                <ul className="mb-8 flex flex-col gap-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full text-base ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                  size="lg"
                >
                  เลือกแพ็กเกจนี้
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
