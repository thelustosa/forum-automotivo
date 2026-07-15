import React from 'react';

const tChassis = {
  PT: {
    title: "INTERVALOS DE NÚMEROS DE CHASSI",
    desc: "Intervalos conhecidos de sequências de VIN para o R34. Use-os para identificar a série e variante do seu veículo a partir do número do chassi.",
    prefix: "Prefixo",
    series: "Série",
    variant: "Variante",
    start: "Início",
    end: "Fim",
    count: "Quantidade"
  },
  EN: {
    title: "CHASSIS NUMBER RANGES",
    desc: "Known VIN sequence ranges for the R34. Use these to identify your vehicle's series and variant from its chassis number.",
    prefix: "Prefix",
    series: "Series",
    variant: "Variant",
    start: "Start",
    end: "End",
    count: "Count"
  },
  ES: {
    title: "INTERVALOS DE NÚMEROS DE CHASIS",
    desc: "Intervalos conocidos de secuencias de VIN para el R34. Utilícelos para identificar la serie y variante de su vehículo a partir de su número de chasis.",
    prefix: "Prefijo",
    series: "Serie",
    variant: "Variante",
    start: "Inicio",
    end: "Fin",
    count: "Cantidad"
  },
  JA: {
    title: "シャシー番号の範囲",
    desc: "R34で知られているVINシーケンスの範囲。これらを使用して、シャシー番号から車両의シリーズとバリエーションを特定します。",
    prefix: "プレフィックス",
    series: "シリーズ",
    variant: "バリエーション",
    start: "開始",
    end: "終了",
    count: "台数"
  }
};

export default function ChassisRanges({ lang = 'PT' }) {
  const t = tChassis[lang] || tChassis.PT;

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
      <div>
        <div className="mb-8">
          <h2 className="text-lg font-black tracking-tighter uppercase font-heading">{t.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary text-left">
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.prefix}</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.series}</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.variant}</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-right">{t.start}</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-right">{t.end}</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-right">{t.count}</th>
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
              </tr>
              <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold">BNR34</td>
                <td className="px-4 py-3">Series 1</td>
                <td className="px-4 py-3">Pre-Production (Series 1)</td>
                <td className="px-4 py-3 font-mono text-right">000051</td>
                <td className="px-4 py-3 font-mono text-right">000104</td>
                <td className="px-4 py-3 font-mono font-bold text-right">54</td>
              </tr>
              <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold">JN1GAPR34U</td>
                <td className="px-4 py-3">Great Britain Export</td>
                <td className="px-4 py-3">V-Spec (Great Britain)</td>
                <td className="px-4 py-3 font-mono text-right">000101</td>
                <td className="px-4 py-3 font-mono text-right">000180</td>
                <td className="px-4 py-3 font-mono font-bold text-right">80</td>
              </tr>
              <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold">BNR34</td>
                <td className="px-4 py-3">Series 1</td>
                <td className="px-4 py-3">GT-R / V-Spec (Series 1)</td>
                <td className="px-4 py-3 font-mono text-right">000201</td>
                <td className="px-4 py-3 font-mono text-right">07,131</td>
                <td className="px-4 py-3 font-mono font-bold text-right">6,931</td>
              </tr>
              <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold">BNR34</td>
                <td className="px-4 py-3">Series 2</td>
                <td className="px-4 py-3">Pre-Production (Series 2)</td>
                <td className="px-4 py-3 font-mono text-right">10,001</td>
                <td className="px-4 py-3 font-mono text-right">10,010</td>
                <td className="px-4 py-3 font-mono font-bold text-right">10</td>
              </tr>
              <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold">BNR34</td>
                <td className="px-4 py-3">Series 2</td>
                <td className="px-4 py-3">Early Series 2</td>
                <td className="px-4 py-3 font-mono text-right">10,101</td>
                <td className="px-4 py-3 font-mono text-right">10,107</td>
                <td className="px-4 py-3 font-mono font-bold text-right">7</td>
              </tr>
              <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold">BNR34</td>
                <td className="px-4 py-3">Series 2</td>
                <td className="px-4 py-3">GT-R / V-Spec II / M-Spec / Nür (Series 2)</td>
                <td className="px-4 py-3 font-mono text-right">400,001</td>
                <td className="px-4 py-3 font-mono text-right">404,495</td>
                <td className="px-4 py-3 font-mono font-bold text-right">4,495</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
