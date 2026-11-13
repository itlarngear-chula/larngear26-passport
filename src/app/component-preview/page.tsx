"use client";

import { ChevronLeft, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { TextField } from "@/components/ui/TextField";

// Dev page to check UI components against Figma; not linked from the app.
export default function ComponentPreview() {
  const [username, setUsername] = useState("LG-Z0000");
  const [password, setPassword] = useState("");

  return (
    <main className="bg-base-white mx-auto flex w-full max-w-[402px] flex-col gap-8 px-6 py-8">
      <h1 className="text-th-h1 text-background-900">Component preview</h1>

      <section className="flex flex-col gap-4">
        <h2 className="text-th-h2 text-background-900">Button</h2>
        <Button className="w-full" leftIcon={<Star />} rightIcon={<Star />}>
          ข้อความ
        </Button>
        <Button className="w-full" size="md" leftIcon={<Star />}>
          ข้อความ
        </Button>
        <Button className="w-full" size="sm" rightIcon={<Star />}>
          ข้อความ
        </Button>
        <Button className="w-full" variant="lavender">
          ข้อความ
        </Button>
        <Button className="w-full" variant="ctaNavy">
          เข้าสู่ระบบ
        </Button>
        <Button className="w-full" variant="ctaCream">
          เข้าสู่ระบบ
        </Button>
        <Button className="w-full" disabled>
          disabled
        </Button>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-th-h2 text-background-900">IconButton</h2>
        <IconButton label="ย้อนกลับ" icon={<ChevronLeft />} />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-th-h2 text-background-900">TextField</h2>
        <TextField label="หัวข้อ" placeholder="ข้อความ" hint="คำอธิบาย" />
        <TextField
          label="ชื่อผู้ใช้"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onClear={() => setUsername("")}
          hint="อยู่ในเมลตอนสมัคร เช่น LG-000"
        />
        <TextField
          label="รหัสผ่าน"
          type="password"
          placeholder="วัน/เดือน/ปีเกิด"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          hint="วัน/เดือน/ปีเกิด ค.ศ. เช่น 22122026"
        />
        <TextField
          label="ชื่อผู้ใช้"
          defaultValue="LG-9999"
          error="ไม่พบชื่อผู้ใช้"
        />
      </section>
    </main>
  );
}
