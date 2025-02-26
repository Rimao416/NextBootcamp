import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <div>
      <Card>Notifications</Card>
      <div>
        <Link href="/dashboard">Notifications</Link>
      </div>
    </div>
  );
}
