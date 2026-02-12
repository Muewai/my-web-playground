import Link from "next/link";
import { ArrowLeft, Rocket, Car, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* ปุ่มกดกลับหน้าหลัก */}
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition-colors mb-12">
        <ArrowLeft className="h-4 w-4" />
        Back to Playground
      </Link>

      <main className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4">About <span className="text-neon">Me</span></h1>
          <p className="text-xl text-muted-foreground">Marketing at LETcare & Content Creator</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* การ์ดประวัติงาน */}
          <div className="p-6 rounded-2xl border border-border bg-card/50">
            <Rocket className="h-8 w-8 text-neon mb-4" />
            <h2 className="text-xl font-semibold mb-2">My Goal</h2>
            <p className="text-muted-foreground">
              มุ่งมั่นทำ Affiliate Marketing ให้ได้เป้าหมาย 100,000 ต่อเดือน และพัฒนาโปรเจกต์ n8n Automation ให้เก่งยิ่งขึ้นครับ
            </p>
          </div>

          {/* การ์ดไลฟ์สไตล์ */}
          <div className="p-6 rounded-2xl border border-border bg-card/50">
            <Car className="h-8 w-8 text-neon mb-4" />
            <h2 className="text-xl font-semibold mb-2">Hobbies</h2>
            <p className="text-muted-foreground">
              ชอบซ่อมรถ ซ่อมของ, ฝึกบินโดรน FPV และงาน 3D Printing สำหรับแก้ปัญหาต่าง ๆ ในบ้านครับ
            </p>
          </div>

          {/* การ์ดความสนใจ */}
          <div className="md:col-span-2 p-6 rounded-2xl border border-border bg-card/50 flex items-center gap-6">
            <div className="h-20 w-20 rounded-full bg-neon/10 flex items-center justify-center">
               <Heart className="h-10 w-10 text-neon" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Learning Next.js</h2>
              <p className="text-muted-foreground">
                กำลังปั้น Web Playground นี้เพื่อใช้ฝึกทักษะการเขียนโค้ด Next.js และ Tailwind CSS ให้ชำนาญครับ
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}