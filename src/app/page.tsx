import { redirect } from "next/navigation";

export default function Home() {
  // TODO 先转到欢迎页，主页策略待定
  redirect("/welcome");
  
  return (
    <div className="min-h-screen">
    </div>
  )
}

