import DocsTable from "@/components/docs-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-rubik grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex w-full justify-between text-end">
        <h1 className="text-[18px] font-semibold">توثيق الانتهاكات في قرية رساس</h1>
        <div className="text-end">
          <h3 className="text-[18px] font-semibold">اللجنة القانونية العليا لتقصي الحقائق في السويداء</h3>
          <br />
          <h4 className="text-[18px] font-semibold">لجنة قرية رساس</h4>
        </div>
      </div>
      <main className="flex flex-col gap-[32px] w-full row-start-2 font-rubik items-center">
        <DocsTable/>
        <div className="flex gap-4 items-center flex-col sm:flex-row">

        </div>
      </main>
    </div>
  );
}
