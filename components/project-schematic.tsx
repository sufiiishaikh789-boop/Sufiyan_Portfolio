import { Cpu, CreditCard, Database, LayoutDashboard, ListOrdered, ShieldCheck } from 'lucide-react'

const modules = [
  { icon: LayoutDashboard, label: 'Student Dashboard', note: 'Submit · Pay · Track' },
  { icon: ShieldCheck, label: 'Admin Dashboard', note: 'Analytics · Monitoring' },
  { icon: ListOrdered, label: 'Print Queue', note: 'Job lifecycle' },
  { icon: CreditCard, label: 'Payments & Refunds', note: 'Status-based rules' },
]

export function ProjectSchematic() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-background/60 shadow-[0_30px_60px_-30px] shadow-primary/30 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-foreground/15" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-foreground/15" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-foreground/15" aria-hidden="true" />
        <span className="ml-3 font-mono text-[11px] text-muted-foreground">intelliprint-nexus · system overview</span>
      </div>

      <div className="grid gap-3 p-4 sm:grid-cols-2">
        {modules.map(({ icon: Icon, label, note }) => (
          <div key={label} className="rounded-xl border border-border bg-card p-3.5 transition-colors group-hover/feature:border-primary/20">
            <Icon className="size-4 text-primary" aria-hidden="true" />
            <p className="mt-3 text-sm font-medium">{label}</p>
            <p className="font-mono text-[11px] text-muted-foreground">{note}</p>
          </div>
        ))}

        <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-violet/10 p-3.5 sm:col-span-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="size-4 text-primary" aria-hidden="true" />
              <p className="text-sm font-medium">GPU & Hardware Monitor</p>
            </div>
            <span className="rounded-full bg-card px-2 py-0.5 font-mono text-[10px] text-muted-foreground">CUDA · CPU fallback</span>
          </div>
          <div className="mt-4 flex h-12 items-end gap-1" aria-hidden="true">
            {[40, 65, 50, 80, 60, 90, 70, 55, 85, 75, 95, 68, 78, 58, 88, 72].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm bg-primary/60 transition-all duration-500 group-hover/feature:bg-primary"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <p className="mt-2 font-mono text-[10px] text-muted-foreground">Detection · Benchmarking · Profiling · Telemetry</p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-dashed border-border px-3.5 py-2.5 sm:col-span-2">
          <Database className="size-4 text-muted-foreground" aria-hidden="true" />
          <p className="font-mono text-[11px] text-muted-foreground">SQLite persistence layer</p>
        </div>
      </div>
      <p className="sr-only">Schematic diagram of IntelliPrint Nexus modules. Not a product screenshot.</p>
    </div>
  )
}
