import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-1">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  L
                </span>
              </div>
              <span className="text-xl font-bold text-background">
                LET<span className="text-primary">care</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-background/60">
              ผู้นำด้านพลังงานแสงอาทิตย์และระบบรักษาความปลอดภัยอัจฉริยะ
              ครบวงจรในที่เดียว
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-background">บริการ</h4>
            <ul className="flex flex-col gap-2 text-sm text-background/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  โซลาร์เซลล์สำหรับบ้าน
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  โซลาร์เซลล์สำหรับธุรกิจ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  ระบบ Smart Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Monitoring Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-background">เกี่ยวกับเรา</h4>
            <ul className="flex flex-col gap-2 text-sm text-background/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  เกี่ยวกับ LETcare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  ผลงานติดตั้ง
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  บทความ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  ร่วมงานกับเรา
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-background">ติดต่อเรา</h4>
            <ul className="flex flex-col gap-3 text-sm text-background/60">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                02-000-1234
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                info@letcare.co.th
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                123 ถ.สุขุมวิท แขวงคลองตัน เขตคลองเตย กรุงเทพฯ 10110
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-8 text-center text-sm text-background/40">
          <p>
            {"Copyright 2026 LETcare. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
