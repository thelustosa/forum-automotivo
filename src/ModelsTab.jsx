import React from 'react';

const tModels = {
  PT: {
    title: "MODELOS E VARIANTES",
    desc: "Visão geral detalhada de todas as versões do BNR34, especificações e notas de mercado.",
    h_trim: "Versão",
    h_years: "Anos",
    h_interior: "Interior",
    h_aero: "Aero e Painéis",
    h_driveline: "Mecânica",
    h_note: "Nota do Comprador",
    rows: [
      { trim: "GT-R Base", years: "1999 a 2002", int: "Bancos cinza (primeiros modelos)", aero: "Carroceria GT-R, capô e para-lamas dianteiros de alumínio", drive: "RB26DETT, ATTESA E-TS", note: "Muitas vezes o melhor custo-benefício de um BNR34 GT-R autêntico." },
      { trim: "V-Spec", years: "1999 a 2000", int: "Bancos cinza", aero: "Aero adicional incluindo difusor traseiro de carbono", drive: "RB26DETT, ATTESA E-TS Pro", note: "Versão de colecionador inicial focada em performance." },
      { trim: "V-Spec II", years: "2000 a 2002", int: "Bancos pretos e acabamento interior preto", aero: "Capô de carbono com duto NACA, difusor traseiro de carbono", drive: "RB26DETT, ATTESA E-TS Pro", note: "Produção mais tardia e alta demanda de compradores." },
      { trim: "M-Spec", years: "2001", int: "Interior em couro", aero: "Carroceria GT-R com foco no conforto", drive: "RB26DETT, ATTESA E-TS Pro", note: "GT-R de colecionador focado em conforto." },
      { trim: "V-Spec II Nur", years: "2002", int: "Interior preto", aero: "Detalhes do V-Spec II com o apelo de edição final", drive: "Motor RB26 Nur, ATTESA E-TS Pro", note: "Um dos R34 GT-Rs de produção regular mais colecionáveis." },
      { trim: "M-Spec Nur", years: "2002", int: "Interior em couro", aero: "Foco no conforto M-Spec com status de edição final Nur", drive: "Motor RB26 Nur, ATTESA E-TS Pro", note: "Rara edição final focada no conforto." },
      { trim: "N1", years: "1999 a 2002", int: "Varia pela versão exata", aero: "Detalhes leves e focados em automobilismo", drive: "Especificações N1 do RB26", note: "Muito raro e sensível à documentação." }
    ]
  },
  EN: {
    title: "MODELS AND VARIANTS",
    desc: "Detailed overview of all BNR34 trims, specifications and buyer notes.",
    h_trim: "Trim",
    h_years: "Years",
    h_interior: "Interior",
    h_aero: "Aero and panels",
    h_driveline: "Driveline",
    h_note: "Buyer note",
    rows: [
      { trim: "GT-R Base", years: "1999 to 2002", int: "Grey seats on early cars", aero: "GT-R bodywork, aluminum hood and front fenders", drive: "RB26DETT, ATTESA E-TS", note: "Often the best value real BNR34 GT-R." },
      { trim: "V-Spec", years: "1999 to 2000 era", int: "Grey seats", aero: "Added aero features including carbon rear diffuser", drive: "RB26DETT, ATTESA E-TS Pro", note: "Performance focused early collector trim." },
      { trim: "V-Spec II", years: "2000 to 2002 era", int: "Black seats and black interior trim", aero: "Carbon hood with NACA duct, carbon rear diffuser", drive: "RB26DETT, ATTESA E-TS Pro", note: "Later production and high buyer demand." },
      { trim: "M-Spec", years: "2001 era", int: "Leather interior", aero: "GT-R bodywork with comfort focused trim", drive: "RB26DETT, ATTESA E-TS Pro", note: "Comfort focused collector GT-R." },
      { trim: "V-Spec II Nur", years: "2002", int: "Black interior", aero: "V-Spec II details with final edition desirability", drive: "Nur spec RB26, ATTESA E-TS Pro", note: "One of the most collectible regular production R34 GT-Rs." },
      { trim: "M-Spec Nur", years: "2002", int: "Leather interior", aero: "M-Spec comfort focus with Nur final edition status", drive: "Nur spec RB26, ATTESA E-TS Pro", note: "Rare comfort focused final edition GT-R." },
      { trim: "N1", years: "1999 to 2002", int: "Varies by exact version", aero: "Lightweight and motorsport focused details", drive: "N1 specification RB26 details", note: "Very rare and documentation sensitive." }
    ]
  },
  ES: {
    title: "MODELOS Y VARIANTES",
    desc: "Descripción detallada de todas las versiones del BNR34, especificaciones y notas del comprador.",
    h_trim: "Versión",
    h_years: "Años",
    h_interior: "Interior",
    h_aero: "Aero y paneles",
    h_driveline: "Mecánica",
    h_note: "Nota del comprador",
    rows: [
      { trim: "GT-R Base", years: "1999 a 2002", int: "Asientos grises en los primeros autos", aero: "Carrocería GT-R, capó y guardabarros delanteros de aluminio", drive: "RB26DETT, ATTESA E-TS", note: "A menudo el mejor GT-R BNR34 auténtico en relación calidad-precio." },
      { trim: "V-Spec", years: "1999 a 2000", int: "Asientos grises", aero: "Características aerodinámicas añadidas, incluye difusor trasero de carbono", drive: "RB26DETT, ATTESA E-TS Pro", note: "Versión temprana de coleccionista enfocada en el rendimiento." },
      { trim: "V-Spec II", years: "2000 a 2002", int: "Asientos y molduras interiores negros", aero: "Capó de carbono con conducto NACA, difusor trasero de carbono", drive: "RB26DETT, ATTESA E-TS Pro", note: "Producción posterior y alta demanda de compradores." },
      { trim: "M-Spec", years: "2001", int: "Interior de cuero", aero: "Carrocería GT-R con enfoque en el confort", drive: "RB26DETT, ATTESA E-TS Pro", note: "GT-R de coleccionista enfocado en el confort." },
      { trim: "V-Spec II Nur", years: "2002", int: "Interior negro", aero: "Detalles V-Spec II con el atractivo de edición final", drive: "Motor RB26 especificación Nur, ATTESA E-TS Pro", note: "Uno de los R34 GT-R de producción regular más coleccionables." },
      { trim: "M-Spec Nur", years: "2002", int: "Interior de cuero", aero: "Enfoque en confort M-Spec con estatus de edición final Nur", drive: "Motor RB26 especificación Nur, ATTESA E-TS Pro", note: "Rara edición final de GT-R enfocada en el confort." },
      { trim: "N1", years: "1999 a 2002", int: "Varía según la versión exacta", aero: "Detalles livianos enfocados en automovilismo", drive: "Especificaciones N1 del motor RB26", note: "Muy raro y sensible a la documentación." }
    ]
  },
  JA: {
    title: "モデルとバリエーション",
    desc: "BNR34のすべてのトリム、仕様、購入者向けメモの詳細な概要。",
    h_trim: "トリム",
    h_years: "年式",
    h_interior: "インテリア",
    h_aero: "エアロとパネル",
    h_driveline: "駆動系",
    h_note: "バイヤーノート",
    rows: [
      { trim: "GT-R Base", years: "1999 ～ 2002", int: "初期型のグレーシート", aero: "GT-R専用ボディ、アルミ製ボンネット＆フロントフェンダー", drive: "RB26DETT, ATTESA E-TS", note: "本物のBNR34 GT-Rの中で最もお買い得なことが多い。" },
      { trim: "V-Spec", years: "1999 ～ 2000", int: "グレーシート", aero: "カーボン製リアディフューザーなどのエアロパーツ追加", drive: "RB26DETT, ATTESA E-TS Pro", note: "パフォーマンスを重視した初期のコレクター向けトリム。" },
      { trim: "V-Spec II", years: "2000 ～ 2002", int: "ブラックシート＆ブラックインテリア", aero: "NACAダクト付きカーボンボンネット、カーボンリアディフューザー", drive: "RB26DETT, ATTESA E-TS Pro", note: "後期生産モデルであり、購入希望者が多い。" },
      { trim: "M-Spec", years: "2001", int: "本革インテリア", aero: "快適性を重視したGT-R専用ボディワーク", drive: "RB26DETT, ATTESA E-TS Pro", note: "快適性を重視したコレクター向けGT-R。" },
      { trim: "V-Spec II Nur", years: "2002", int: "ブラックインテリア", aero: "V-Spec IIの装備に加え、ファイナルエディションとしての希少性", drive: "Nur専用RB26, ATTESA E-TS Pro", note: "量産型R34 GT-Rの中で最もコレクション性が高いモデルの一つ。" },
      { trim: "M-Spec Nur", years: "2002", int: "本革インテリア", aero: "M-Specの快適性とNurのファイナルエディション・ステータスを融合", drive: "Nur専用RB26, ATTESA E-TS Pro", note: "快適性を重視した希少なファイナルエディションGT-R。" },
      { trim: "N1", years: "1999 ～ 2002", int: "正確なバージョンによって異なる", aero: "軽量化とモータースポーツに特化した装備", drive: "N1仕様RB26", note: "非常に希少で、書類の有無が価値を大きく左右する。" }
    ]
  }
};

export default function ModelsTab({ lang = 'PT' }) {
  const t = tModels[lang] || tModels.PT;

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
      <div>
        <div className="mb-8">
          <h2 className="text-lg font-black tracking-tighter uppercase font-heading">{t.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-secondary">
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.h_trim}</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.h_years}</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.h_interior}</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.h_aero}</th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.h_driveline}</th>
              </tr>
            </thead>
            <tbody>
              {t.rows.map((row, index) => (
                <tr key={index} className="border-b border-border hover:bg-secondary/30 transition-colors">
                  <td className="px-4 py-3 font-mono font-bold whitespace-nowrap">{row.trim}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{row.years}</td>
                  <td className="px-4 py-3">{row.int}</td>
                  <td className="px-4 py-3">{row.aero}</td>
                  <td className="px-4 py-3">{row.drive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
