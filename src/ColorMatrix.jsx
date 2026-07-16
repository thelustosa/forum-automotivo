import React, { useState, useEffect } from 'react';
import r34White2Raw from './assets/r34_white2.svg?raw';
import r34RedRaw from './assets/r34_red.svg?raw';
import r34MNP2Raw from './assets/r34MNP2.svg?raw';
import r34blackRaw from './assets/r34black.svg?raw';
import r34amareloRaw from './assets/r34amarelo.svg?raw';
import r34cinzaRaw from './assets/r34cinza.svg?raw';
import r34milleniumRaw from './assets/r34millenium.svg?raw';
import r34azulRaw from './assets/r34azul.svg?raw';

const carSvgs = [r34White2Raw, r34RedRaw, r34MNP2Raw, r34amareloRaw, r34blackRaw, r34cinzaRaw, r34milleniumRaw, r34azulRaw];

const tMatrix = {
  PT: {
    title: "MATRIZ DE CORES DE PRODUÇÃO",
    desc: "Combinações documentadas de variantes × cores com contagens de produção, incluindo quaisquer lacunas observadas ou registros não atribuídos.",
    model: "Modelo",
    total: "Total",
    legend: "Legenda de Cores",
    totalText: "Total por cor: 11.559 + Desconhecido(S1)=19 = 11.578.",
    byColour: "Por Cor",
    series1: "Série 1",
    series2: "Série 2",
    colors: {
      AR2: "Active Red",
      EV1: "Lightning Yellow",
      EY0: "Silica Brass",
      GV1: "Black Pearl",
      JW0: "Millennium Jade",
      KR4: "Sonic Silver",
      KV2: "Athlete Silver",
      LV4: "Midnight Purple II",
      LX0: "Midnight Purple III",
      QM1: "White",
      QT1: "Pearl White",
      QX1: "Pearl White",
      TV2: "Bayside Blue",
      WV2: "Sparkling Silver"
    }
  },
  EN: {
    title: "PRODUCTION COLOR MATRIX",
    desc: "Documented variant × color combinations with production counts, including any noted gaps or unassigned records.",
    model: "Model",
    total: "Total",
    legend: "Color Legend",
    totalText: "Total by colour: 11,559 + Unknown(S1)=19 = 11,578.",
    byColour: "By Colour",
    series1: "Series 1",
    series2: "Series 2",
    colors: {
      AR2: "Active Red",
      EV1: "Lightning Yellow",
      EY0: "Silica Brass",
      GV1: "Black Pearl",
      JW0: "Millennium Jade",
      KR4: "Sonic Silver",
      KV2: "Athlete Silver",
      LV4: "Midnight Purple II",
      LX0: "Midnight Purple III",
      QM1: "White",
      QT1: "Pearl White",
      QX1: "Pearl White",
      TV2: "Bayside Blue",
      WV2: "Sparkling Silver"
    }
  },
  ES: {
    title: "MATRIZ DE COLORES DE PRODUCCIÓN",
    desc: "Combinaciones documentadas de variantes × colores con conteos de producción, incluyendo cualquier brecha observada o registros no asignados.",
    model: "Modelo",
    total: "Total",
    legend: "Leyenda de Colores",
    totalText: "Total por color: 11,559 + Desconocido(S1)=19 = 11,578.",
    byColour: "Por Color",
    series1: "Serie 1",
    series2: "Serie 2",
    colors: {
      AR2: "Active Red",
      EV1: "Lightning Yellow",
      EY0: "Silica Brass",
      GV1: "Black Pearl",
      JW0: "Millennium Jade",
      KR4: "Sonic Silver",
      KV2: "Athlete Silver",
      LV4: "Midnight Purple II",
      LX0: "Midnight Purple III",
      QM1: "White",
      QT1: "Pearl White",
      QX1: "Pearl White",
      TV2: "Bayside Blue",
      WV2: "Sparkling Silver"
    }
  },
  JA: {
    title: "生産カラーマトリクス",
    desc: "生産数が記録されたバリエーション×カラーの組み合わせ。記載された欠落や未割り当ての記録も含みます。",
    model: "モデル",
    total: "合計",
    legend: "カラー凡例",
    totalText: "カラー別合計 11,559 + 不明(S1)=19 = 11,578。",
    byColour: "色別",
    series1: "シリーズ 1",
    series2: "シリーズ 2",
    colors: {
      AR2: "アクティブレッド",
      EV1: "ライトニングイエロー",
      EY0: "シリカブレス",
      GV1: "ブラックパール",
      JW0: "ミレニアムジェイド",
      KR4: "ソニックシルバー",
      KV2: "アスリートシルバー",
      LV4: "ミッドナイトパープル II",
      LX0: "ミッドナイトパープル III",
      QM1: "ホワイト",
      QT1: "パールホワイト",
      QX1: "パールホワイト",
      TV2: "ベイサイドブルー",
      WV2: "スパークリングシルバー"
    }
  }
};

export default function ColorMatrix({ lang = 'PT' }) {
  const t = tMatrix[lang] || tMatrix.PT;
  const [carIndex, setCarIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarIndex(prev => (prev + 1) % carSvgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
      <div className="space-y-12">
        <div>
          <div className="mb-8">
            <h2 className="text-lg font-black tracking-tighter uppercase font-heading">{t.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
          </div>
          <div className="border border-border bg-card p-4 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr>
                    <th className="sticky left-0 z-10 bg-card px-3 py-2 text-left font-normal text-muted-foreground w-40">{t.model}</th>
                    <th className="px-1 py-2 text-center font-normal"><div className="mx-auto mb-1 h-3.5 w-3.5 border border-foreground/10" style={{ background: 'rgb(204, 43, 30)' }}></div><div className="text-[10px] text-muted-foreground">AR2</div></th>
                    <th className="px-1 py-2 text-center font-normal"><div className="mx-auto mb-1 h-3.5 w-3.5 border border-foreground/10" style={{ background: 'rgb(245, 208, 0)' }}></div><div className="text-[10px] text-muted-foreground">EV1</div></th>
                    <th className="px-1 py-2 text-center font-normal"><div className="mx-auto mb-1 h-3.5 w-3.5 border border-foreground/10" style={{ background: 'rgb(138, 122, 60)' }}></div><div className="text-[10px] text-muted-foreground">EY0</div></th>
                    <th className="px-1 py-2 text-center font-normal"><div className="mx-auto mb-1 h-3.5 w-3.5 border border-foreground/10" style={{ background: 'rgb(42, 42, 42)' }}></div><div className="text-[10px] text-muted-foreground">GV1</div></th>
                    <th className="px-1 py-2 text-center font-normal"><div className="mx-auto mb-1 h-3.5 w-3.5 border border-foreground/10" style={{ background: '#a8b89a' }}></div><div className="text-[10px] text-muted-foreground">JW0</div></th>
                    <th className="px-1 py-2 text-center font-normal"><div className="mx-auto mb-1 h-3.5 w-3.5 border border-foreground/10" style={{ background: 'rgb(176, 176, 176)' }}></div><div className="text-[10px] text-muted-foreground">KR4</div></th>
                    <th className="px-1 py-2 text-center font-normal"><div className="mx-auto mb-1 h-3.5 w-3.5 border border-foreground/10" style={{ background: 'rgb(154, 172, 184)' }}></div><div className="text-[10px] text-muted-foreground">KV2</div></th>
                    <th className="px-1 py-2 text-center font-normal"><div className="mx-auto mb-1 h-3.5 w-3.5 border border-foreground/10" style={{ background: 'rgb(123, 79, 140)' }}></div><div className="text-[10px] text-muted-foreground">LV4</div></th>
                    <th className="px-1 py-2 text-center font-normal"><div className="mx-auto mb-1 h-3.5 w-3.5 border border-foreground/10" style={{ background: 'rgb(90, 58, 122)' }}></div><div className="text-[10px] text-muted-foreground">LX0</div></th>
                    <th className="px-1 py-2 text-center font-normal"><div className="mx-auto mb-1 h-3.5 w-3.5 border border-foreground/10" style={{ background: 'rgb(240, 240, 240)' }}></div><div className="text-[10px] text-muted-foreground">QM1</div></th>
                    <th className="px-1 py-2 text-center font-normal"><div className="mx-auto mb-1 h-3.5 w-3.5 border border-foreground/10" style={{ background: 'rgb(232, 224, 208)' }}></div><div className="text-[10px] text-muted-foreground">QT1</div></th>
                    <th className="px-1 py-2 text-center font-normal"><div className="mx-auto mb-1 h-3.5 w-3.5 border border-foreground/10" style={{ background: 'rgb(220, 220, 208)' }}></div><div className="text-[10px] text-muted-foreground">QX1</div></th>
                    <th className="px-1 py-2 text-center font-normal"><div className="mx-auto mb-1 h-3.5 w-3.5 border border-foreground/10" style={{ background: 'rgb(58, 108, 176)' }}></div><div className="text-[10px] text-muted-foreground">TV2</div></th>
                    <th className="px-1 py-2 text-center font-normal"><div className="mx-auto mb-1 h-3.5 w-3.5 border border-foreground/10" style={{ background: 'rgb(192, 192, 184)' }}></div><div className="text-[10px] text-muted-foreground">WV2</div></th>
                    <th className="px-3 py-2 text-right font-normal text-muted-foreground w-16">{t.total}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-secondary"><td className="sticky left-0 z-10 bg-secondary px-3 py-1.5 font-bold text-[10px] uppercase tracking-wider">{t.series1}</td><td colSpan="14"></td><td className="px-3 py-1.5 text-right font-bold">7,066</td></tr>
                  <tr className="bg-muted/30"><td className="sticky left-0 z-10 bg-muted/30 px-3 py-1.5 whitespace-nowrap">GT-R (Series 1)</td><td className="px-1 py-1.5 text-center tabular-nums"><span>47</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>19</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>345</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>412</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>208</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>65</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>66</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>941</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>606</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-3 py-1.5 text-right font-bold">2,709</td></tr>
                  <tr className="bg-card"><td className="sticky left-0 z-10 bg-card px-3 py-1.5 whitespace-nowrap">V-Spec</td><td className="px-1 py-1.5 text-center tabular-nums"><span>61</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>44</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>522</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>514</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>227</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>282</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>132</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>1,222</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>1,190</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-3 py-1.5 text-right font-bold">4,194</td></tr>
                  <tr className="bg-muted/30"><td className="sticky left-0 z-10 bg-muted/30 px-3 py-1.5 whitespace-nowrap">V-Spec N1</td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>38</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-3 py-1.5 text-right font-bold">38</td></tr>
                  <tr className="bg-card"><td className="sticky left-0 z-10 bg-card px-3 py-1.5 whitespace-nowrap">V-Spec (GB)</td><td className="px-1 py-1.5 text-center tabular-nums"><span>11</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>3</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>10</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>22</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>1</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>34</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-3 py-1.5 text-right font-bold">81</td></tr>
                  <tr className="bg-muted/30"><td className="sticky left-0 z-10 bg-muted/30 px-3 py-1.5 whitespace-nowrap">V-Spec (HK)</td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>1</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>1</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>8</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-3 py-1.5 text-right font-bold">10</td></tr>
                  <tr className="bg-card"><td className="sticky left-0 z-10 bg-card px-3 py-1.5 whitespace-nowrap">V-Spec (NZ)</td><td className="px-1 py-1.5 text-center tabular-nums"><span>1</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>1</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>3</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-3 py-1.5 text-right font-bold">5</td></tr>
                  <tr className="bg-muted/30"><td className="sticky left-0 z-10 bg-muted/30 px-3 py-1.5 whitespace-nowrap">V-Spec (SG)</td><td className="px-1 py-1.5 text-center tabular-nums"><span>2</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>1</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>2</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>1</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>1</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>3</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-3 py-1.5 text-right font-bold">10</td></tr>
                  <tr className="bg-card"><td className="sticky left-0 z-10 bg-card px-3 py-1.5 whitespace-nowrap">Unknown (Series 1)</td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-3 py-1.5 text-right font-bold">19</td></tr>
                  
                  <tr className="bg-secondary"><td className="sticky left-0 z-10 bg-secondary px-3 py-1.5 font-bold text-[10px] uppercase tracking-wider">{t.series2}</td><td colSpan="14"></td><td className="px-3 py-1.5 text-right font-bold">4,512</td></tr>
                  <tr className="bg-card"><td className="sticky left-0 z-10 bg-card px-3 py-1.5 whitespace-nowrap">GT-R (Series 2)</td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>167</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>31</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>246</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>196</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>312</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>316</span></td><td className="px-3 py-1.5 text-right font-bold">1,268</td></tr>
                  <tr className="bg-muted/30"><td className="sticky left-0 z-10 bg-muted/30 px-3 py-1.5 whitespace-nowrap">V-Spec II</td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>198</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>44</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>357</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>1</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>303</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>604</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>348</span></td><td className="px-3 py-1.5 text-right font-bold">1,855</td></tr>
                  <tr className="bg-card"><td className="sticky left-0 z-10 bg-card px-3 py-1.5 whitespace-nowrap">V-Spec II N1</td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>18</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-3 py-1.5 text-right font-bold">18</td></tr>
                  <tr className="bg-muted/30"><td className="sticky left-0 z-10 bg-muted/30 px-3 py-1.5 whitespace-nowrap">V-Spec II (NZ)</td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>1</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>1</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-3 py-1.5 text-right font-bold">2</td></tr>
                  <tr className="bg-card"><td className="sticky left-0 z-10 bg-card px-3 py-1.5 whitespace-nowrap">M-Spec</td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>122</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>39</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>93</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>112</span></td><td className="px-3 py-1.5 text-right font-bold">366</td></tr>
                  <tr className="bg-muted/30"><td className="sticky left-0 z-10 bg-muted/30 px-3 py-1.5 whitespace-nowrap">V-Spec II Nür</td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>62</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>156</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>159</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>141</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>119</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>81</span></td><td className="px-3 py-1.5 text-right font-bold">718</td></tr>
                  <tr className="bg-card"><td className="sticky left-0 z-10 bg-card px-3 py-1.5 whitespace-nowrap">M-Spec Nür</td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>9</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>24</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>144</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>75</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span className="text-muted-foreground/40">–</span></td><td className="px-1 py-1.5 text-center tabular-nums"><span>33</span></td><td className="px-3 py-1.5 text-right font-bold">285</td></tr>
                  
                  <tr className="border-t border-border bg-secondary"><td className="sticky left-0 z-10 bg-secondary px-3 py-2 font-bold text-[10px] uppercase tracking-wider">{t.byColour}</td><td className="px-1 py-2 text-center font-bold tabular-nums">122</td><td className="px-1 py-2 text-center font-bold tabular-nums">68</td><td className="px-1 py-2 text-center font-bold tabular-nums">131</td><td className="px-1 py-2 text-center font-bold tabular-nums">1,370</td><td className="px-1 py-2 text-center font-bold tabular-nums">300</td><td className="px-1 py-2 text-center font-bold tabular-nums">927</td><td className="px-1 py-2 text-center font-bold tabular-nums">533</td><td className="px-1 py-2 text-center font-bold tabular-nums">347</td><td className="px-1 py-2 text-center font-bold tabular-nums">199</td><td className="px-1 py-2 text-center font-bold tabular-nums">2,983</td><td className="px-1 py-2 text-center font-bold tabular-nums">1</td><td className="px-1 py-2 text-center font-bold tabular-nums">808</td><td className="px-1 py-2 text-center font-bold tabular-nums">2,880</td><td className="px-1 py-2 text-center font-bold tabular-nums">890</td><td className="px-3 py-2 text-right font-bold">11,559</td></tr>
                  <tr className="bg-background"><td className="sticky left-0 z-10 bg-background px-3 py-1 text-muted-foreground text-[10px]">%</td><td className="px-1 py-1 text-center text-[10px] text-muted-foreground tabular-nums">1.1%</td><td className="px-1 py-1 text-center text-[10px] text-muted-foreground tabular-nums">&lt;1%</td><td className="px-1 py-1 text-center text-[10px] text-muted-foreground tabular-nums">1.1%</td><td className="px-1 py-1 text-center text-[10px] text-muted-foreground tabular-nums">11.8%</td><td className="px-1 py-1 text-center text-[10px] text-muted-foreground tabular-nums">2.6%</td><td className="px-1 py-1 text-center text-[10px] text-muted-foreground tabular-nums">8.0%</td><td className="px-1 py-1 text-center text-[10px] text-muted-foreground tabular-nums">4.6%</td><td className="px-1 py-1 text-center text-[10px] text-muted-foreground tabular-nums">3.0%</td><td className="px-1 py-1 text-center text-[10px] text-muted-foreground tabular-nums">1.7%</td><td className="px-1 py-1 text-center text-[10px] text-muted-foreground tabular-nums">25.8%</td><td className="px-1 py-1 text-center text-[10px] text-muted-foreground tabular-nums">&lt;1%</td><td className="px-1 py-1 text-center text-[10px] text-muted-foreground tabular-nums">7.0%</td><td className="px-1 py-1 text-center text-[10px] text-muted-foreground tabular-nums">24.9%</td><td className="px-1 py-1 text-center text-[10px] text-muted-foreground tabular-nums">7.7%</td><td className="px-3 py-1 text-right text-[10px] text-muted-foreground">99.84%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">{t.legend}</h3>
              <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5"><div className="h-3 w-3 border border-foreground/10" style={{ background: 'rgb(204, 43, 30)' }}></div><span className="font-mono text-[10px] font-medium">AR2</span><span className="text-[10px] text-muted-foreground">{t.colors.AR2}</span></div>
              <div className="flex items-center gap-1.5"><div className="h-3 w-3 border border-foreground/10" style={{ background: 'rgb(245, 208, 0)' }}></div><span className="font-mono text-[10px] font-medium">EV1</span><span className="text-[10px] text-muted-foreground">{t.colors.EV1}</span></div>
              <div className="flex items-center gap-1.5"><div className="h-3 w-3 border border-foreground/10" style={{ background: 'rgb(138, 122, 60)' }}></div><span className="font-mono text-[10px] font-medium">EY0</span><span className="text-[10px] text-muted-foreground">{t.colors.EY0}</span></div>
              <div className="flex items-center gap-1.5"><div className="h-3 w-3 border border-foreground/10" style={{ background: 'rgb(42, 42, 42)' }}></div><span className="font-mono text-[10px] font-medium">GV1</span><span className="text-[10px] text-muted-foreground">{t.colors.GV1}</span></div>
              <div className="flex items-center gap-1.5"><div className="h-3 w-3 border border-foreground/10" style={{ background: '#a8b89a' }}></div><span className="font-mono text-[10px] font-medium">JW0</span><span className="text-[10px] text-muted-foreground">{t.colors.JW0}</span></div>
              <div className="flex items-center gap-1.5"><div className="h-3 w-3 border border-foreground/10" style={{ background: 'rgb(176, 176, 176)' }}></div><span className="font-mono text-[10px] font-medium">KR4</span><span className="text-[10px] text-muted-foreground">{t.colors.KR4}</span></div>
              <div className="flex items-center gap-1.5"><div className="h-3 w-3 border border-foreground/10" style={{ background: 'rgb(154, 172, 184)' }}></div><span className="font-mono text-[10px] font-medium">KV2</span><span className="text-[10px] text-muted-foreground">{t.colors.KV2}</span></div>
              <div className="flex items-center gap-1.5"><div className="h-3 w-3 border border-foreground/10" style={{ background: 'rgb(123, 79, 140)' }}></div><span className="font-mono text-[10px] font-medium">LV4</span><span className="text-[10px] text-muted-foreground">{t.colors.LV4}</span></div>
              <div className="flex items-center gap-1.5"><div className="h-3 w-3 border border-foreground/10" style={{ background: 'rgb(90, 58, 122)' }}></div><span className="font-mono text-[10px] font-medium">LX0</span><span className="text-[10px] text-muted-foreground">{t.colors.LX0}</span></div>
              <div className="flex items-center gap-1.5"><div className="h-3 w-3 border border-foreground/10" style={{ background: 'rgb(240, 240, 240)' }}></div><span className="font-mono text-[10px] font-medium">QM1</span><span className="text-[10px] text-muted-foreground">{t.colors.QM1}</span></div>
              <div className="flex items-center gap-1.5"><div className="h-3 w-3 border border-foreground/10" style={{ background: 'rgb(232, 224, 208)' }}></div><span className="font-mono text-[10px] font-medium">QT1</span><span className="text-[10px] text-muted-foreground">{t.colors.QT1}</span></div>
              <div className="flex items-center gap-1.5"><div className="h-3 w-3 border border-foreground/10" style={{ background: 'rgb(220, 220, 208)' }}></div><span className="font-mono text-[10px] font-medium">QX1</span><span className="text-[10px] text-muted-foreground">{t.colors.QX1}</span></div>
              <div className="flex items-center gap-1.5"><div className="h-3 w-3 border border-foreground/10" style={{ background: 'rgb(58, 108, 176)' }}></div><span className="font-mono text-[10px] font-medium">TV2</span><span className="text-[10px] text-muted-foreground">{t.colors.TV2}</span></div>
              <div className="flex items-center gap-1.5"><div className="h-3 w-3 border border-foreground/10" style={{ background: 'rgb(192, 192, 184)' }}></div><span className="font-mono text-[10px] font-medium">WV2</span><span className="text-[10px] text-muted-foreground">{t.colors.WV2}</span></div>
              <div className="header-car-container pointer-events-none ml-auto" style={{ position: 'relative', width: '80px', height: '2.2rem', marginTop: '-0.5rem' }}>
                {carSvgs.map((svgRaw, idx) => (
                  <div 
                    key={idx} 
                    className="car-svg" 
                    style={{ opacity: idx === carIndex ? 1 : 0 }}
                    dangerouslySetInnerHTML={{ __html: svgRaw }} 
                  />
                ))}
              </div>
            </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-xs text-muted-foreground italic font-mono m-0">{t.totalText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
