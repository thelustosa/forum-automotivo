import React from 'react';

export default function ChassisRanges() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
      <div>
        <div className="mb-8">
          <h2 className="text-lg font-black tracking-tighter uppercase font-heading">Chassis Number Ranges</h2>
          <p className="mt-2 text-sm text-muted-foreground">Known VIN sequence ranges for the R34. Use these to identify your vehicle's series and variant from its chassis number.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary text-left">
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Prefix</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Series</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Variant</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-right">Start</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-right">End</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-right">Count</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Confidence</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold">JN1GAPR34U</td>
                <td className="px-4 py-3">Great Britain Export</td>
                <td className="px-4 py-3">V-Spec (GB Pre-Production)</td>
                <td className="px-4 py-3 font-mono text-right">000001</td>
                <td className="px-4 py-3 font-mono text-right">000001</td>
                <td className="px-4 py-3 font-mono font-bold text-right">1</td>
                <td className="px-4 py-3"><span className="badge-confidence confidence-confirmed"><span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>confirmed</span></td>
              </tr>
              <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold">BNR34</td>
                <td className="px-4 py-3">Series 1</td>
                <td className="px-4 py-3">Pre-Production (Series 1)</td>
                <td className="px-4 py-3 font-mono text-right">000051</td>
                <td className="px-4 py-3 font-mono text-right">000104</td>
                <td className="px-4 py-3 font-mono font-bold text-right">54</td>
                <td className="px-4 py-3"><span className="badge-confidence confidence-confirmed"><span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>confirmed</span></td>
              </tr>
              <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold">JN1GAPR34U</td>
                <td className="px-4 py-3">Great Britain Export</td>
                <td className="px-4 py-3">V-Spec (Great Britain)</td>
                <td className="px-4 py-3 font-mono text-right">000101</td>
                <td className="px-4 py-3 font-mono text-right">000180</td>
                <td className="px-4 py-3 font-mono font-bold text-right">80</td>
                <td className="px-4 py-3"><span className="badge-confidence confidence-confirmed"><span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>confirmed</span></td>
              </tr>
              <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold">BNR34</td>
                <td className="px-4 py-3">Series 1</td>
                <td className="px-4 py-3">GT-R / V-Spec (Series 1)</td>
                <td className="px-4 py-3 font-mono text-right">000201</td>
                <td className="px-4 py-3 font-mono text-right">07,131</td>
                <td className="px-4 py-3 font-mono font-bold text-right">6,931</td>
                <td className="px-4 py-3"><span className="badge-confidence confidence-confirmed"><span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>confirmed</span></td>
              </tr>
              <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold">BNR34</td>
                <td className="px-4 py-3">Series 2</td>
                <td className="px-4 py-3">Pre-Production (Series 2)</td>
                <td className="px-4 py-3 font-mono text-right">10,001</td>
                <td className="px-4 py-3 font-mono text-right">10,010</td>
                <td className="px-4 py-3 font-mono font-bold text-right">10</td>
                <td className="px-4 py-3"><span className="badge-confidence confidence-confirmed"><span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>confirmed</span></td>
              </tr>
              <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold">BNR34</td>
                <td className="px-4 py-3">Series 2</td>
                <td className="px-4 py-3">Early Series 2</td>
                <td className="px-4 py-3 font-mono text-right">10,101</td>
                <td className="px-4 py-3 font-mono text-right">10,107</td>
                <td className="px-4 py-3 font-mono font-bold text-right">7</td>
                <td className="px-4 py-3"><span className="badge-confidence confidence-confirmed"><span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>confirmed</span></td>
              </tr>
              <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold">BNR34</td>
                <td className="px-4 py-3">Series 2</td>
                <td className="px-4 py-3">GT-R / V-Spec II / M-Spec / Nür (Series 2)</td>
                <td className="px-4 py-3 font-mono text-right">400,001</td>
                <td className="px-4 py-3 font-mono text-right">404,495</td>
                <td className="px-4 py-3 font-mono font-bold text-right">4,495</td>
                <td className="px-4 py-3"><span className="badge-confidence confidence-confirmed"><span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>confirmed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
