const { createElement, useState, useRef, useEffect } = React;
const h = createElement;
const curiosidades = [{
  texto: "<strong>Polímeros</strong> não são apenas plásticos: moléculas como celulose, proteínas e DNA também são exemplos de polímeros naturais.",
  fonte: {
    nome: "Brasil Escola — Polímeros",
    url: "https://brasilescola.uol.com.br/quimica/polimeros.htm"
  }
},
{
  texto: "A celulose é um dos <strong>biopolímeros</strong> mais abundantes da natureza e forma grande parte das paredes celulares das plantas.",
  fonte: {
    nome: "Brasil Escola — Os principais carboidratos",
    url: "https://brasilescola.uol.com.br/amp/biologia/os-principais-carboidratos.htm"
  }
},
{
  texto: "Muitos <strong>polímeros</strong> são formados pela união de unidades menores chamadas monômeros, conectadas por ligações químicas.",
  fonte: {
    nome: "Brasil Escola — Polímeros",
    url: "https://brasilescola.uol.com.br/quimica/polimeros.htm"
  }
},
{
  texto: "Embora sejam biomoléculas importantes, os <strong>lipídios</strong>, como os triglicerídeos, não são geralmente considerados <strong>polímeros</strong> formados por uma sequência de monômeros repetidos.",
  fonte: {
    nome: "Brasil Escola — Lipídios",
    url: "https://brasilescola.uol.com.br/biologia/lipidios.htm"
  }
},
{
  texto: "O <strong>polietileno</strong> é um polímero sintético muito usado em sacolas e embalagens plásticas. Sacolas feitas de polietileno de alta densidade (PEAD) podem levar de 100 a 400 anos para se degradar no ambiente.",
  fonte: {
    nome: "IEN — Degradação de sacolas plásticas",
    url: "https://www.gov.br/ien/pt-br/ien-e-ctex-vao-desenvolver-projeto-sobre-o-uso-de-radiacao-para-a-degradacao-de-sacolas-plasticas"
  }
},
{
  texto: "Os <strong>fosfolipídios</strong> possuem uma cabeça que interage com a água e caudas que a evitam. Essa característica ajuda a formar as membranas das células.",
  fonte: {
    nome: "Brasil Escola — Lipídios",
    url: "https://brasilescola.uol.com.br/biologia/lipidios.htm"
  }
},
{
  texto: "Um <strong>triglicerídeo</strong> é formado por uma molécula de glicerol ligada a três ácidos graxos.",
  fonte: {
    nome: "Brasil Escola — Lipídios",
    url: "https://brasilescola.uol.com.br/biologia/lipidios.htm"
  }
},
{
  texto: "O <strong>colesterol</strong> participa das membranas das células animais e serve de matéria-prima para a produção de hormônios esteroides.",
  fonte: {
    nome: "Brasil Escola — Lipídios",
    url: "https://brasilescola.uol.com.br/biologia/lipidios.htm"
  }
},
{
  texto: "A camada de cera presente em muitas folhas contém substâncias lipídicas que ajudam a reduzir a perda de água para o ambiente.",
  fonte: {
    nome: "SciELO — Ceras epicuticulares e proteção foliar",
    url: "https://www.scielo.br/j/pd/a/DmxZ3vTpTqyF3pwLwYHJSxc/?lang=pt"
  }
},
{
  texto: "Glicose, frutose e galactose possuem a mesma fórmula molecular, C₆H₁₂O₆, mas diferem na organização de seus átomos.",
  fonte: {
    nome: "Brasil Escola — Carboidratos",
    url: "https://brasilescola.uol.com.br/biologia/carboidratos.htm"
  }
},
{
  texto: "O <strong>glicogênio</strong> é um polissacarídeo usado pelos animais para armazenar glicose, principalmente no fígado e nos músculos.",
  fonte: {
    nome: "Brasil Escola — Carboidratos",
    url: "https://brasilescola.uol.com.br/biologia/carboidratos.htm"
  }
},
{
  texto: "A madeira contém muita <strong>celulose</strong>, e os seres humanos não possuem a enzima celulase para digerir diretamente esse carboidrato.",
  fonte: {
    nome: "Brasil Escola — Os principais carboidratos",
    url: "https://brasilescola.uol.com.br/amp/biologia/os-principais-carboidratos.htm"
  }
},
{
  texto: "A <strong>quitina</strong> é um carboidrato que contém nitrogênio e participa da formação do exoesqueleto de muitos artrópodes, como insetos e crustáceos.",
  fonte: {
    nome: "Brasil Escola — Carboidratos",
    url: "https://brasilescola.uol.com.br/biologia/carboidratos.htm"
  }
},
{
  texto: "As proteínas humanas são construídas principalmente a partir de 20 aminoácidos comuns, cuja sequência influencia a forma e a função de cada proteína.",
  fonte: {
    nome: "Brasil Escola — Aminoácidos",
    url: "https://brasilescola.uol.com.br/biologia/aminoacidos.htm"
  }
},
{
  texto: "Na anemia falciforme, a substituição de um único aminoácido na cadeia beta da hemoglobina contribui para deformar as hemácias.",
  fonte: {
    nome: "Ministério da Saúde — Doença falciforme",
    url: "https://bvsms.saude.gov.br/bvs/publicacoes/doenca_falciforme_atencao_integral_saude_mulher.pdf"
  }
},
{
  texto: "Quando aquecidas, proteínas da clara do ovo sofrem <strong>desnaturação</strong> e se agregam, tornando a clara opaca e sólida.",
  fonte: {
    nome: "Brasil Escola — Desnaturação das proteínas",
    url: "https://brasilescola.uol.com.br/quimica/desnaturacao-das-proteinas.htm"
  }
},
{
  texto: "Muitas <strong>enzimas</strong> são proteínas que aceleram reações químicas, como as reações responsáveis pela digestão dos alimentos.",
  fonte: {
    nome: "Brasil Escola — Enzimas",
    url: "https://brasilescola.uol.com.br/biologia/enzimas.htm"
  }
},
{
  texto: "Cada <strong>nucleotídeo</strong> é composto por uma base nitrogenada, um açúcar de cinco carbonos e um grupo fosfato.",
  fonte: {
    nome: "Brasil Escola — Ácidos nucleicos",
    url: "https://brasilescola.uol.com.br/biologia/acidos-nucleicos.htm"
  }
},
{
  texto: "No DNA, a adenina se emparelha com a timina, enquanto a citosina se emparelha com a guanina.",
  fonte: {
    nome: "Brasil Escola — Ácidos nucleicos",
    url: "https://brasilescola.uol.com.br/biologia/acidos-nucleicos.htm"
  }
},
{
  texto: "Existem diferentes tipos de RNA. Alguns transportam instruções genéticas, enquanto outros ajudam a montar proteínas ou participam da regulação celular.",
  fonte: {
    nome: "Brasil Escola — Ácidos nucleicos",
    url: "https://brasilescola.uol.com.br/biologia/acidos-nucleicos.htm"
  }
},
{
  texto: "As mitocôndrias possuem seu próprio DNA, separado do DNA localizado no núcleo das células.",
  fonte: {
    nome: "NIH — Mitochondria and health",
    url: "https://www.nih.gov/news-events/nih-research-matters/mitochondria-health"
  }
}
];
const ELEMENTS = {
  H: {
    n: "Hidrogênio",
    c: 0xf2f2f2,
    r: .31,
    vdw: 1.2,
    z: 1
  },
  C: {
    n: "Carbono",
    c: 0x4a4f57,
    r: .76,
    vdw: 1.7,
    z: 6
  },
  N: {
    n: "Nitrogênio",
    c: 0x3b6ef5,
    r: .71,
    vdw: 1.55,
    z: 7
  },
  O: {
    n: "Oxigênio",
    c: 0xe5342d,
    r: .66,
    vdw: 1.52,
    z: 8
  },
  P: {
    n: "Fósforo",
    c: 0xff9a2e,
    r: 1.07,
    vdw: 1.8,
    z: 15
  }
};
const MOLECULES = {
  polietileno: {
    nome: "Polietileno (segmento de 8 carbonos)",
    formula: "(C₂H₄)ₙ — mostrado: C₈H₁₆ com H terminais omitidos",
    nota: "Representação parcial: o polímero real repete essa unidade milhares de vezes. Geometria calculada a partir de comprimentos e ângulos de ligação padrão.",
    atoms: () => {
      const a = [], L = 1.54, dx = L * Math.sin(109.5 * Math.PI/360), dy = L * Math.cos(109.5 * Math.PI/360);
      for(let i = 0;i<8;i++){
        const s = i%2?1: -1, x = i * dx, y = s * dy/2;
        a.push(["C", x, y, 0], ["H", x, y + s * .36, .89], ["H", x, y + s * .36, -.89]);
      }
      return a;
    }
  },
  glicina: {
    nome: "Glicina (aminoácido mais simples)",
    formula: "C₂H₅NO₂ (NH₂–CH₂–COOH)",
    nota: "Representação esquemática: geometria idealizada com comprimentos de ligação típicos, não uma estrutura cristalográfica.",
    atoms: () => [["C", 0, 0, 0], ["N", -1.17, .87, 0], ["C", 1.52, 0, 0], ["O", 2.125, 1.048, 0], ["O", 2.2, -1.18, 0], ["H", -.36, -.5, .88], ["H", -.36, -.5, -.88], ["H", -1.75, .35, .62], ["H", -1.75, .35, -.62], ["H", 3.1, -.9, 0]]
  }
};
const CATEGORIES = [{
  id: "inicio",
  t: "Início",
  c: "var(--ac)"
},
{
  id: "pol",
  t: "Polímeros",
  c: "var(--pol)",
  intro: "Polímeros são moléculas formadas pela repetição de unidades menores, os monômeros, unidas por ligações covalentes. Quanto mais longa a cadeia, mais a substância ganha resistência e flexibilidade.",
  comp: "Cadeias de carbono com hidrogênio (polietileno, polipropileno) ou de glicose (celulose).",
  ex: ["Polietileno: sacolas e garrafas.", "Polipropileno: embalagens e tampas.", "Celulose: parede celular das plantas."],
  cot: "O plástico das embalagens e o papel são polímeros.",
  mols: ["polietileno", "polipropileno", "celulose"],
  pend: []
},
{
  id: "lip",
  t: "Lipídios",
  c: "var(--lip)",
  intro: "Lipídios são moléculas pouco solúveis em água. Armazenam energia e formam as membranas das células.",
  comp: "Principalmente carbono e hidrogênio, com poucos átomos de oxigênio.",
  ex: ["Triglicerídeos: óleos e gorduras.", "Fosfolipídios: membranas celulares.", "Colesterol: precursor de hormônios."],
  cot: "Óleo de cozinha, manteiga e gordura corporal.",
  mols: ["triglicerideo", "fosfolipideo", "colesterol"],
  pend: []
},
{
  id: "car",
  t: "Carboidratos",
  c: "var(--car)",
  intro: "Carboidratos são açúcares e seus polímeros. Fornecem energia rápida e dão sustentação às plantas.",
  comp: "Carbono, hidrogênio e oxigênio, em geral na proporção Cₙ(H₂O)ₙ.",
  ex: ["Glicose e frutose: açúcares simples.", "Sacarose: glicose + frutose.", "Amido: reserva de energia das plantas."],
  cot: "Pão, frutas, arroz e açúcar de mesa.",
  mols: ["glicose", "frutose", "sacarose", "amido"],
  pend: []
},
{
  id: "pro",
  t: "Aminoácidos e proteínas",
  c: "var(--pro)",
  intro: "Aminoácidos são as unidades das proteínas. Ligados em sequência, formam cadeias que se dobram em formas específicas, e a forma define a função.",
  comp: "Todo aminoácido tem um grupo amina (–NH₂), um grupo carboxila (–COOH) e uma cadeia lateral.",
  ex: ["Glicina: a cadeia lateral é só um hidrogênio.", "Alanina: cadeia lateral com um grupo metil.", "Hemoglobina: proteína que transporta oxigênio."],
  cot: "Carnes, ovos e leguminosas fornecem aminoácidos.",
  mols: ["glicina", "alanina", "glicilglicina", "helice"],
  pend: []
},
{
  id: "nuc",
  t: "Ácidos nucleicos",
  c: "var(--nuc)",
  intro: "DNA e RNA guardam e transmitem a informação genética. São polímeros de nucleotídeos, cada um com açúcar, fosfato e uma base nitrogenada.",
  comp: "Carbono, hidrogênio, oxigênio, nitrogênio e fósforo.",
  ex: ["Bases do DNA: adenina, guanina, citosina, timina.", "No RNA, a uracila substitui a timina."],
  cot: "Testes de paternidade e vacinas de RNA usam esses ácidos.",
  mols: ["adenina", "guanina", "citosina", "timina", "uracila", "dna", "rna"],
  pend: []
}];
function methylate(at, idxs){
  const out = at.filter((_, i) => !idxs.includes(i)), V = THREE.Vector3;
  idxs.forEach(i => {
    const H = new V(at[i][1], at[i][2], at[i][3]);
    let c = null, d = 9;
    at.forEach(a => {
      if(a[0] === "C"){
        const p = new V(a[1], a[2], a[3]), k = p.distanceTo(H);
        if(k<d){
          d = k;
          c = p;
        }
      }
    });
    const u = H.clone().sub(c).normalize(), m = c.clone().add(u.clone().multiplyScalar(1.54)), q = Math.abs(u.x)<.9?new V(1, 0, 0): new V(0, 1, 0), e1 = new V().crossVectors(u, q).normalize(), e2 = new V().crossVectors(u, e1);
    out.push(["C", m.x, m.y, m.z]);
    for(let k = 0;k<3;k++){
      const t = k * 2 * Math.PI/3, dir = u.clone().multiplyScalar(.334).add(e1.clone().multiplyScalar(.943 * Math.cos(t))).add(e2.clone().multiplyScalar(.943 * Math.sin(t))), p = m.clone().add(dir.multiplyScalar(1.09));
      out.push(["H", p.x, p.y, p.z]);
    }
  });
  return out;
}
MOLECULES.alanina = {
  nome: "Alanina (aminoácido com cadeia lateral metil)",
  formula: "C₃H₇NO₂ (NH₂–CH(CH₃)–COOH)",
  nota: "Representação esquemática derivada da glicina, com geometria idealizada. A quiralidade (L ou D) não foi especificada neste modelo.",
  atoms: () => methylate(MOLECULES.glicina.atoms(), [5])
};
MOLECULES.polipropileno = {
  nome: "Polipropileno (segmento de 8 carbonos da cadeia)",
  formula: "(C₃H₆)ₙ — mostrado: 8 C na cadeia principal + 4 grupos metil",
  nota: "Representação parcial e esquemática: hidrogênios terminais omitidos e arranjo espacial dos grupos metil (taticidade) não especificado. O polímero real repete a unidade milhares de vezes.",
  atoms: () => {
    const b = MOLECULES.polietileno.atoms();
    return methylate(b, [4, 10, 16, 22]);
  }
};
Object.assign(CATEGORIES.find(c => c.id == "pol"), {
  cls: ["Quanto à origem: naturais (celulose, borracha natural) e sintéticos (polietileno, polipropileno).", "Quanto à síntese: de adição e de condensação.", "Quanto ao calor: termoplásticos (amolecem e podem ser remodelados) e termorrígidos."],
  est: "Cadeias longas formadas pela repetição de uma unidade, o monômero, unida por ligações covalentes. No polietileno, a unidade –CH₂–CH₂– se repete. O comprimento e as ramificações da cadeia mudam a densidade e a rigidez do material.",
  refs: curiosidades.slice(0, 5).map(c => c.fonte).filter((f, i, a) => a.findIndex(g => g.url === f.url) === i)
});
Object.assign(CATEGORIES.find(c => c.id == "lip"), {
  cls: ["Simples: óleos, gorduras e ceras.", "Compostos: fosfolipídios.", "Derivados: esteroides, como o colesterol.", "Quanto às cadeias: ácidos graxos saturados e insaturados."],
  est: "O triglicerídeo tem um glicerol ligado a três ácidos graxos por ligações éster. O fosfolipídio troca um deles por um grupo fosfato, e assim tem cabeça polar e caudas apolares. O colesterol é um esteroide, com quatro anéis unidos.",
  refs: curiosidades.slice(5, 9).map(c => c.fonte).filter((f, i, a) => a.findIndex(g => g.url === f.url) === i)
});
Object.assign(CATEGORIES.find(c => c.id == "car"), {
  cls: ["Monossacarídeos: glicose e frutose.", "Dissacarídeos: sacarose (glicose + frutose).", "Polissacarídeos: amido, glicogênio e celulose."],
  est: "Monossacarídeos se unem por ligações glicosídicas. Glicose e frutose têm a mesma fórmula, C₆H₁₂O₆, mas arranjos diferentes. Amido e celulose são ambos polímeros da glicose, mas diferem no tipo de ligação, e por isso têm propriedades distintas.",
  refs: curiosidades.slice(9, 13).map(c => c.fonte).filter((f, i, a) => a.findIndex(g => g.url === f.url) === i)
});
Object.assign(CATEGORIES.find(c => c.id == "pro"), {
  cls: ["Aminoácidos essenciais (obtidos pela dieta) e não essenciais (produzidos pelo corpo).", "Proteínas fibrosas, geralmente estruturais, e globulares, como enzimas.", "Estrutura: primária (sequência), secundária (α-hélice e folha β), terciária e quaternária."],
  est: "Todo aminoácido tem um carbono central ligado a um grupo amina, a um grupo carboxila, a um hidrogênio e a uma cadeia lateral. A carboxila de um se une à amina de outro por uma ligação peptídica, formando a cadeia.",
  refs: curiosidades.slice(13, 17).map(c => c.fonte).filter((f, i, a) => a.findIndex(g => g.url === f.url) === i)
});
Object.assign(CATEGORIES.find(c => c.id == "nuc"), {
  cls: ["Bases púricas (dois anéis): adenina e guanina.", "Bases pirimídicas (um anel): citosina, timina e uracila.", "Tipos: DNA e RNA (mensageiro, transportador e ribossômico)."],
  est: "O nucleotídeo é formado por uma base nitrogenada, uma pentose e um grupo fosfato. O DNA tem dupla hélice, com pares A–T (duas ligações de hidrogênio) e C–G (três). O RNA costuma ser de fita simples, tem ribose e usa uracila no lugar da timina.",
  refs: curiosidades.slice(17, 21).map(c => c.fonte).filter((f, i, a) => a.findIndex(g => g.url === f.url) === i)
});
const MODEL_NOTE = "Esquema construído a partir da fórmula estrutural, com comprimentos e ângulos de ligação ideais. A estereoquímica e a conformação reais não são representadas.";
const molecularFormula = a => {
  const c = {
  };
  a.forEach(x => c[x[0]] = (c[x[0]] || 0) + 1);
  const sb = n => String(n).replace(/\d/g, d => "₀₁₂₃₄₅₆₇₈₉"[d]);
  return["C", "H", "N", "O", "P"].filter(k => c[k]).map(k => k + (c[k]>1?sb(c[k]): "")).join("");
};
function parseSmiles(s){
  const at = [], bd = [], st = [], ring = {
  };
  let prev = -1, ord = 1;
  for(let i = 0;i<s.length;i++){
    const c = s[i];
    if(c === "(")st.push(prev);
    else if(c === ")")prev = st.pop();
    else if(c === "=")ord = 2;
    else if(/\d/.test(c)){
      if(ring[c] !== undefined){
        bd.push([ring[c], prev, ord]);
        delete ring[c];
      }
      else ring[c] = prev;
      ord = 1;
    }
    else{
      let e = c, chg = 0;
      if(c === "["){
        const j = s.indexOf("]", i), t = s.slice(i + 1, j);
        e = t[0];
        chg = t.includes("+")?1: t.includes("-")?-1: 0;
        i = j;
      }
      at.push({
        e,
        chg
      });
      const k = at.length - 1;
      if(prev >= 0)bd.push([prev, k, ord]);
      prev = k;
      ord = 1;
    }
  }
  return{
    at,
    bd
  };
}
const BL = {
  "C-C": 1.54,
  "C-N": 1.47,
  "C-O": 1.43,
  "C-H": 1.09,
  "H-N": 1.01,
  "H-O": .96,
  "O-P": 1.6
}, DB = {
  "C-C": 1.34,
  "C-N": 1.29,
  "C-O": 1.22,
  "O-P": 1.48
};
function buildSmiles(smi, planar){
  const{
    at, bd
  }
   = parseSmiles(smi), V = {
    C: 4,
    N: 3,
    O: 2,
    P: 5
  }, n0 = at.length, sum = at.map(() => 0);
  bd.forEach(([a, b, o]) => {
    sum[a] += o;
    sum[b] += o;
  });
  for(let i = 0;i<n0;i++){
    const nh = V[at[i].e] + at[i].chg - sum[i];
    for(let k = 0;k<nh;k++){
      at.push({
        e: "H",
        chg: 0
      });
      bd.push([i, at.length - 1, 1]);
    }
  }
  const N = at.length, nb = at.map(() => []);
  bd.forEach(([a, b, o]) => {
    nb[a].push([b, o]);
    nb[b].push([a, o]);
  });
  const sp2 = at.map((_, i) => nb[i].some(x => x[1] === 2));
  at.forEach((a, i) => {
    if(a.e === "N" && !sp2[i] && nb[i].some(x => at[x[0]].e === "C" && sp2[x[0]]))sp2[i] = true;
  });
  const L = (a, b, o) => {
    const k = [at[a].e, at[b].e].sort().join("-");
    return o === 2?DB[k]: (sp2[a] && sp2[b] && at[a].e !== "H" && at[b].e !== "H")?1.4: BL[k] || 1.5;
  };
  const C = [], ex = new Set(), key = (a, b) => a<b?a * N + b: b * N + a;
  bd.forEach(([a, b, o]) => {
    C.push([a, b, L(a, b, o)]);
    ex.add(key(a, b));
  });
  for(let i = 0;i<N;i++){
    const th = (sp2[i]?120: 109.5) * Math.PI/180;
    for(let x = 0;x<nb[i].length;x++)for(let y = x + 1;y<nb[i].length;y++){
      const a = nb[i][x], b = nb[i][y], la = L(i, a[0], a[1]), lb = L(i, b[0], b[1]);
      C.push([a[0], b[0], Math.sqrt(la * la + lb * lb - 2 * la * lb * Math.cos(th))]);
      ex.add(key(a[0], b[0]));
    }
  }
  const flat = at.map((a, i) => planar && (a.e === "H"?sp2[nb[i][0][0]]: (sp2[i] || nb[i].some(x => sp2[x[0]] && at[x[0]].e !== "H"))));
  const mn = (a, b) => (ELEMENTS[at[a].e].vdw + ELEMENTS[at[b].e].vdw) * .55;
  let best = null, be = 1e18;
  for(let t = 0;t<3;t++){
    const s = Math.sqrt(N) * 2.5, p = at.map((_, i) => [(Math.random() - .5) * s, (Math.random() - .5) * s, flat[i]?0: (Math.random() - .5) * s]);
    const mv = (a, b, d, sh) => {
      const A = p[a], B = p[b], x = B[0] - A[0], y = B[1] - A[1], z = B[2] - A[2], r = Math.hypot(x, y, z) || 1e-6;
      if(sh && r >= d)return 0;
      const k = .5 * (r - d)/r * .7;
      A[0] += x * k;
      A[1] += y * k;
      A[2] += z * k;
      B[0] -= x * k;
      B[1] -= y * k;
      B[2] -= z * k;
      return(r - d) * (r - d);
    };
    for(let it = 0;it<500;it++){
      C.forEach(([a, b, d]) => mv(a, b, d, false));
      for(let a = 0;a<N;a++)for(let b = a + 1;b<N;b++)if(!ex.has(key(a, b)))mv(a, b, mn(a, b), true);
      p.forEach((q, i) => {
        if(flat[i])q[2] = 0;
      });
    }
    let e = 0;
    C.forEach(([a, b, d]) => {
      const r = Math.hypot(p[a][0] - p[b][0], p[a][1] - p[b][1], p[a][2] - p[b][2]);
      e += (r - d) * (r - d);
    });
    for(let a = 0;a<N;a++)for(let b = a + 1;b<N;b++)if(!ex.has(key(a, b))){
      const r = Math.hypot(p[a][0] - p[b][0], p[a][1] - p[b][1], p[a][2] - p[b][2]), d = mn(a, b);
      if(r<d)e += (r - d) * (r - d);
    }
    if(e<be){
      be = e;
      best = p;
    }
  }
  const out = at.map((a, i) => [a.e, best[i][0], best[i][1], best[i][2]]);
  out.bonds = bd.map(([a, b]) => [a, b]);
  return out;
}
function helixDNA(){
  const a = [], b = [], R = 7, n = 12, D = Math.PI/180, add = (e, x, y, z) => a.push([e, x, y, z]) - 1;
  const strands = [0, 1].map(k => {
    const S = [];
    for(let i = 0;i<n;i++){
      const t = (i * 36 + k * 150) * D;
      S.push([R * Math.cos(t), R * Math.sin(t), i * 3.38, t]);
    }
    return S;
  });
  for(let k = 0;k<2;k++){
    const ids = strands[k].map(s => add("C", s[0], s[1], s[2]));
    for(let i = 0;i<n - 1;i++){
      const t = strands[k][i][3] + 18 * D, p = add("P", 8.8 * Math.cos(t), 8.8 * Math.sin(t), i * 3.38 + 1.69);
      b.push([ids[i], p], [p, ids[i + 1]]);
    }
    strands[k].ids = ids;
  }
  for(let i = 0;i<n;i++){
    const s1 = strands[0][i], s2 = strands[1][i], f = u => [s1[0] + (s2[0] - s1[0]) * u, s1[1] + (s2[1] - s1[1]) * u, s1[2]];
    const p1 = f(.27), q1 = f(.42), q2 = f(.58), p2 = f(.73), i1 = add("N", ...p1), j1 = add("N", ...q1), j2 = add("N", ...q2), i2 = add("N", ...p2);
    b.push([strands[0].ids[i], i1], [i1, j1], [strands[1].ids[i], i2], [i2, j2]);
  }
  a.bonds = b;
  return a;
}
function helixRNA(){
  const a = [], b = [], n = 12, D = Math.PI/180, add = (e, r, t, z) => a.push([e, r * Math.cos(t), r * Math.sin(t), z]) - 1;
  let last = -1;
  for(let i = 0;i<n;i++){
    const t = i * 32.7 * D, z = i * 2.8, s = add("C", 7, t, z), m = add("N", 4.9, t, z), u = add("N", 2.8, t, z);
    b.push([s, m], [m, u]);
    if(last >= 0){
      const p = add("P", 8.8, t - 16 * D, z - 1.4);
      b.push([last, p], [p, s]);
    }
    last = s;
  }
  a.bonds = b;
  return a;
}
function alphaHelix(){
  const a = [], b = [], D = Math.PI/180;
  for(let i = 0;i<18;i++){
    a.push(["C", 2.3 * Math.cos(i * 100 * D), 2.3 * Math.sin(i * 100 * D), 1.5 * i]);
    if(i)b.push([i - 1, i]);
  }
  a.bonds = b;
  return a;
}
const CACHE = {
};
function getAtoms(id){
  if(CACHE[id])return CACHE[id];
  const m = MOLECULES[id];
  return CACHE[id] = m.smi?buildSmiles(m.smi, m.planar): m.atoms();
}
const defineMolecule = (k, nome, smi, desc, planar, nota) => {
  MOLECULES[k] = {
    nome,
    smi,
    desc,
    planar,
    nota: nota || MODEL_NOTE
  };
};
const GLC = "OCC1OC(OC2C(CO)OC(OC3C(CO)OC(O)C(O)C3O)C(O)C2O)C(O)C(O)C1O";
defineMolecule("celulose", "Celulose (segmento de 3 unidades de glicose)", GLC, "Polímero linear de glicose com ligações β(1→4). Suas fibras formam as paredes das células vegetais. Mostrado aqui: trecho de 3 unidades; o polímero real tem milhares.", false, "Representação parcial e esquemática: a ligação glicosídica 1→4 está representada, mas a distinção entre β (celulose) e α (amido) exige estereoquímica, que este modelo não inclui.");
defineMolecule("amido", "Amido (segmento de 3 unidades de glicose)", GLC, "Reserva de energia das plantas: amilose (cadeia linear, ligações α(1→4)) e amilopectina (ramificada). Mostrado aqui: trecho de 3 unidades.", false, "Representação parcial e esquemática: a ligação glicosídica 1→4 está representada, mas a distinção entre α (amido) e β (celulose) exige estereoquímica, que este modelo não inclui.");
defineMolecule("glicose", "Glicose (forma piranose)", "OCC1OC(O)C(O)C(O)C1O", "Principal combustível das células, um açúcar de seis carbonos. Em solução, existe sobretudo na forma de anel.");
defineMolecule("frutose", "Frutose (forma piranose)", "OCC1(O)OCC(O)C(O)C1O", "Açúcar presente em frutas e no mel; isômero da glicose, com a mesma fórmula molecular e outro arranjo dos átomos.");
defineMolecule("sacarose", "Sacarose", "OCC1OC(OC2(CO)OC(CO)C(O)C2O)C(O)C(O)C1O", "Açúcar de mesa: uma glicose e uma frutose unidas por ligação glicosídica, formando um dissacarídeo.");
defineMolecule("triglicerideo", "Triglicerídeo (cadeias de 6 carbonos)", "CCCCCC(=O)OCC(OC(=O)CCCCC)COC(=O)CCCCC", "Reserva de energia: um glicerol ligado a três ácidos graxos por ligações éster. As cadeias aqui são curtas para facilitar a visualização; nos organismos costumam ser mais longas.");
defineMolecule("fosfolipideo", "Fosfolipídio (fosfatidilcolina, caudas curtas)", "CCCCCC(=O)OCC(OC(=O)CCCCC)COP(=O)([O-])OCC[N+](C)(C)C", "Componente das membranas celulares: cabeça polar (fosfato e colina) e duas caudas apolares. As caudas aqui são curtas para facilitar a visualização.");
defineMolecule("colesterol", "Colesterol", "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C", "Esteroide de quatro anéis presente nas membranas das células animais e precursor de hormônios esteroides.");
defineMolecule("glicilglicina", "Glicilglicina (dipeptídeo)", "NCC(=O)NCC(=O)O", "Dois resíduos de glicina unidos por uma ligação peptídica (–CO–NH–), o mesmo tipo de ligação que forma as cadeias das proteínas.");
const BN = "Estrutura plana construída a partir da fórmula estrutural, com comprimentos e ângulos de ligação ideais.";
defineMolecule("adenina", "Adenina", "C1=NC2=NC=NC(=C2N1)N", "Base púrica; pareia com a timina no DNA e com a uracila no RNA.", true, BN);
defineMolecule("guanina", "Guanina", "C1=NC2=C(N1)C(=O)NC(=N2)N", "Base púrica; pareia com a citosina por três ligações de hidrogênio.", true, BN);
defineMolecule("citosina", "Citosina", "C1=C(NC(=O)N=C1)N", "Base pirimídica presente no DNA e no RNA.", true, BN);
defineMolecule("timina", "Timina", "CC1=CNC(=O)NC1=O", "Base pirimídica exclusiva do DNA.", true, BN);
defineMolecule("uracila", "Uracila", "C1=CNC(=O)NC1=O", "Base pirimídica do RNA, que ocupa o lugar da timina.", true, BN);
MOLECULES.dna = {
  nome: "DNA (12 pares de bases, modelo didático)",
  formula: "Esquema de dupla hélice",
  desc: "Duas fitas enroladas em hélice, com cerca de 10 pares de bases por volta na forma B. Os fosfatos (laranja) formam o esqueleto externo; as bases (azul) ficam no interior e se pareiam por ligações de hidrogênio.",
  nota: "Modelo esquemático: usa passo de 3,38 Å e giro de 36° por par de bases, mas simplifica cada açúcar e cada base em poucos átomos. Não é uma estrutura atômica real.",
  atoms: helixDNA
};
MOLECULES.rna = {
  nome: "RNA (12 nucleotídeos, modelo didático)",
  formula: "Esquema de fita simples helicoidal",
  desc: "Em geral de fita simples, com ribose e uracila. Pode se dobrar e formar trechos em dupla hélice. Aqui, uma fita em hélice do tipo A.",
  nota: "Modelo esquemático: usa passo de 2,8 Å e giro de 32,7° por nucleotídeo, mas simplifica açúcar e base. Não é uma estrutura atômica real.",
  atoms: helixRNA
};
MOLECULES.helice = {
  nome: "Hélice α (traço dos carbonos α)",
  formula: "18 resíduos, apenas carbonos α",
  desc: "Estrutura secundária comum das proteínas: 3,6 resíduos por volta e cerca de 1,5 Å de avanço por resíduo, estabilizada por ligações de hidrogênio entre os grupos da cadeia principal.",
  nota: "Representação parcial: mostra só os carbonos α dispostos segundo os parâmetros geométricos da hélice α, sem cadeias laterais nem os demais átomos da cadeia principal.",
  atoms: alphaHelix
};
MOLECULES.polietileno.desc = "Polímero de adição do eteno, muito usado em sacolas, filmes e garrafas.";
MOLECULES.polipropileno.desc = "Polímero do propeno, mais rígido que o polietileno; usado em tampas, seringas e embalagens.";
MOLECULES.glicina.desc = "O aminoácido mais simples: sua cadeia lateral é apenas um hidrogênio.";
MOLECULES.alanina.desc = "Aminoácido com um grupo metil (–CH₃) como cadeia lateral.";
function MoleculeCatalog({
  ids
}){
  const[sel, setSel] = useState(ids[0]);
  return ids.length?createElement(React.Fragment, null, createElement("div", {
    className: "ctl",
    role: "group",
    "aria-label": "Moléculas da categoria"
  }, ids.map(i => createElement("button", {
    key: i,
    "aria-pressed": i === sel,
    onClick: () => setSel(i)
  }, MOLECULES[i].nome.split(" (")[0]))), createElement(MoleculeViewer, {
    id: sel,
    key: sel
  })): null;
}
function createMoleculeScene(el, atoms, cb){
  const r = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  r.setPixelRatio(Math.min(devicePixelRatio, 2));
  el.appendChild(r.domElement);
  const sc = new THREE.Scene(), cam = new THREE.PerspectiveCamera(45, 1, .1, 100), g = new THREE.Group();
  sc.add(g);
  sc.add(new THREE.AmbientLight(0xffffff, .6));
  const dl = new THREE.DirectionalLight(0xffffff, .9);
  dl.position.set(5, 8, 10);
  sc.add(dl);
  const ctr = new THREE.Vector3();
  atoms.forEach(a => ctr.add(new THREE.Vector3(a[1], a[2], a[3])));
  ctr.divideScalar(atoms.length);
  let rad = 0;
  const P = atoms.map(a => new THREE.Vector3(a[1], a[2], a[3]).sub(ctr));
  P.forEach(p => rad = Math.max(rad, p.length()));
  const meshes = [], bonds = [];
  atoms.forEach((a, i) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), new THREE.MeshStandardMaterial({
      color: ELEMENTS[a[0]].c,
      roughness: .45
    }));
    m.position.copy(P[i]);
    m.userData = {
      i,
      e: a[0]
    };
    g.add(m);
    meshes.push(m);
  });
  const pr = [];
  if(atoms.bonds)pr.push(...atoms.bonds);
  else for(let i = 0;i<atoms.length;i++)for(let j = i + 1;j<atoms.length;j++){
    const d = P[i].distanceTo(P[j]);
    if(d<(ELEMENTS[atoms[i][0]].r + ELEMENTS[atoms[j][0]].r) * 1.25 && d>.4)pr.push([i, j]);
  }
  pr.forEach(([i, j]) => {
    const d = P[i].distanceTo(P[j]);
    {
      const b = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, d, 10), new THREE.MeshStandardMaterial({
        color: 0xb8c4d6,
        roughness: .5
      }));
      b.position.copy(P[i]).add(P[j]).multiplyScalar(.5);
      b.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), P[j].clone().sub(P[i]).normalize());
      g.add(b);
      bonds.push(b);
    }
  });
  let model = "bs", auto = true, sel = null, dist = rad * 2.6 + 4, home = dist, raf;
  function setModel(m){
    model = m;
    meshes.forEach((s, i) => {
      const e = ELEMENTS[atoms[i][0]];
      s.scale.setScalar(m === "bs"?e.r * .45: e.vdw * .8);
    });
    bonds.forEach(b => b.visible = m === "bs");
  }
  function setSel(i){
    meshes.forEach((s, k) => s.material.emissive.setHex(k === i?0x555522: 0));
    sel = i;
  }
  function size(){
    const w = el.clientWidth, hh = el.clientHeight;
    r.setSize(w, hh, false);
    cam.aspect = w/hh;
    cam.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(size);
  ro.observe(el);
  size();
  setModel("bs");
  let drag = false, moved = 0, lx = 0, ly = 0, pts = new Map(), pd = 0;
  const cv = r.domElement;
  cv.onpointerdown = e => {
    cv.setPointerCapture(e.pointerId);
    pts.set(e.pointerId, e);
    drag = true;
    moved = 0;
    lx = e.clientX;
    ly = e.clientY;
    if(pts.size === 2){
      const[a, b] = [...pts.values()];
      pd = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    }
  };
  cv.onpointermove = e => {
    if(!pts.has(e.pointerId))return;
    pts.set(e.pointerId, e);
    if(pts.size === 2){
      const[a, b] = [...pts.values()], d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      dist = Math.min(40, Math.max(3, dist * pd/d));
      pd = d;
      return;
    }
    const dx = e.clientX - lx, dy = e.clientY - ly;
    moved += Math.abs(dx) + Math.abs(dy);
    g.rotation.y += dx * .01;
    g.rotation.x += dy * .01;
    lx = e.clientX;
    ly = e.clientY;
  };
  cv.onpointerup = e => {
    pts.delete(e.pointerId);
    if(moved<5 && pts.size === 0){
      const rc = cv.getBoundingClientRect(), rcast = new THREE.Raycaster();
      rcast.setFromCamera(new THREE.Vector2((e.clientX - rc.left)/rc.width * 2 - 1, -(e.clientY - rc.top)/rc.height * 2 + 1), cam);
      const hit = rcast.intersectObjects(meshes)[0];
      if(hit){
        setSel(hit.object.userData.i);
        cb(hit.object.userData.e);
      }
      else{
        setSel(null);
        cb(null);
      }
    }
  };
  cv.onpointercancel = cv.onpointerup;
  cv.onwheel = e => {
    e.preventDefault();
    dist = Math.min(40, Math.max(3, dist * (1 + e.deltaY * .001)));
  };
  (function loop(){
    raf = requestAnimationFrame(loop);
    if(auto && !pts.size)g.rotation.y += .006;
    cam.position.set(0, 0, dist);
    r.render(sc, cam);
  })();
  return{
    setModel,
    setAuto: v => auto = v,
    reset(){
      g.rotation.set(0, 0, 0);
      dist = home;
      setSel(null);
      cb(null);
    },
    dispose(){
      cancelAnimationFrame(raf);
      ro.disconnect();
      g.traverse(o => {
        if(o.geometry)o.geometry.dispose();
        if(o.material)o.material.dispose();
      });
      r.dispose();
      r.forceContextLoss();
      el.removeChild(cv);
    }
  };
}
function webgl(){
  try{
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
  }
  catch{
    return false;
  }
}
function MoleculeViewer({
  id
}){
  const m = MOLECULES[id], box = useRef(), api = useRef(), [model, setModel] = useState("bs"), [auto, setAuto] = useState(true), [info, setInfo] = useState(null), [err, setErr] = useState(!webgl());
  useEffect(() => {
    if(err)return;
    try{
      api.current = createMoleculeScene(box.current, getAtoms(id), setInfo);
    }
    catch{
      setErr(true);
      return;
    }
    return() => api.current && api.current.dispose();
  }, [id]);
  const used = [...new Set(getAtoms(id).map(a => a[0]))], e = info && ELEMENTS[info];
  return createElement("section", {
    className: "mol",
    "aria-label": m.nome
  }, createElement("header", null, createElement("h3", null, m.nome), createElement("span", {
    className: "tag"
  }, m.formula || molecularFormula(getAtoms(id)))), createElement("div", {
    className: "view",
    ref: box
  }, err && createElement("div", {
    className: "msg",
    role: "alert"
  }, "Não foi possível iniciar o visualizador 3D. Verifique o suporte a WebGL no navegador e tente novamente.")), !err && createElement("div", {
    className: "ctl"
  }, createElement("button", {
    "aria-pressed": model === "bs",
    onClick: () => {
      setModel("bs");
      api.current.setModel("bs");
    }
  }, "Bolas e bastões"), createElement("button", {
    "aria-pressed": model === "sf",
    onClick: () => {
      setModel("sf");
      api.current.setModel("sf");
    }
  }, "Preenchimento espacial"), createElement("button", {
    "aria-pressed": auto,
    onClick: () => {
      api.current.setAuto(!auto);
      setAuto(!auto);
    }
  }, "Rotação automática"), createElement("button", {
    onClick: () => api.current.reset()
  }, "Restaurar vista")), createElement("div", {
    className: "info",
    "aria-live": "polite"
  }, e?`${e.n} (${info}) · número atômico ${e.z} · raio covalente ${e.r} Å`: "Arraste para girar, role ou use dois dedos para o zoom, toque num átomo para identificá-lo."), createElement("div", {
    className: "leg"
  }, used.map(k => createElement("span", {
    key: k,
    style: {
      "--c": "#"+ELEMENTS[k].c.toString(16).padStart(6, "0")
    }
  }, ELEMENTS[k].n + " ("+k + ")"))), m.desc && createElement("p", null, m.desc), createElement("p", {
    className: "mut",
    style: {
      fontSize: 14
    }
  }, m.nota));
}
const ICONS = {
  "house": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjAvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQiPg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjxzdmcgdmVyc2lvbj0iMS4wIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgDQoJIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NCA2NCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBmaWxsPSIjMjMxRjIwIiBkPSJNNjIuNzksMjkuMTcybC0yOC0yOEMzNC4wMDksMC4zOTEsMzIuOTg1LDAsMzEuOTYyLDBzLTIuMDQ3LDAuMzkxLTIuODI4LDEuMTcybC0yOCwyOA0KCWMtMS41NjIsMS41NjYtMS40ODQsNC4wMTYsMC4wNzgsNS41NzhjMS41NjYsMS41NywzLjg1NSwxLjgwMSw1LjQyMiwwLjIzNEw4LDMzLjYxN1Y2MGMwLDIuMjExLDEuNzg5LDQsNCw0aDE2VjQ4aDh2MTZoMTYNCgljMi4yMTEsMCw0LTEuNzg5LDQtNFYzMy42OTVsMS4xOTUsMS4xOTVjMS41NjIsMS41NjIsMy45NDksMS40MjIsNS41MTYtMC4xNDFDNjQuMjc0LDMzLjE4OCw2NC4zNTYsMzAuNzM0LDYyLjc5LDI5LjE3MnoiLz4NCjwvc3ZnPg==",
  "triangle": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIgNEMxMS40NDc3IDQgMTEgNC40NDc3MiAxMSA1QzExIDUuMzU4OTQgMTEuMTg4NCA1LjY3NDcxIDExLjQ3NjYgNS44NTI0QzExLjYyODEgNS45NDU4NyAxMS44MDYyIDYgMTIgNkMxMi4xOTM4IDYgMTIuMzcxOSA1Ljk0NTg3IDEyLjUyMzQgNS44NTI0QzEyLjgxMTYgNS42NzQ3MSAxMyA1LjM1ODk0IDEzIDVDMTMgNC40NDc3MiAxMi41NTIzIDQgMTIgNFpNOSA1QzkgMy4zNDMxNSAxMC4zNDMxIDIgMTIgMkMxMy42NTY5IDIgMTUgMy4zNDMxNSAxNSA1QzE1IDUuNzE0NDUgMTQuNzUgNi4zNzAxMyAxNC4zMzQgNi44ODQ3MUwxOS4zNjkxIDE1LjA2NjdDMTkuNTcyOCAxNS4wMjMgMTkuNzgzOSAxNSAyMCAxNUMyMS42NTY5IDE1IDIzIDE2LjM0MzEgMjMgMThDMjMgMTkuNjU2OSAyMS42NTY5IDIxIDIwIDIxQzE4LjY5MzggMjEgMTcuNTgyNSAyMC4xNjUyIDE3LjE3MDcgMTlINi44MjkyOUM2LjQxNzQ2IDIwLjE2NTIgNS4zMDYyMiAyMSA0IDIxQzIuMzQzMTUgMjEgMSAxOS42NTY5IDEgMThDMSAxNi4zNDMxIDIuMzQzMTUgMTUgNCAxNUM0LjIxNjA4IDE1IDQuNDI3MjMgMTUuMDIzIDQuNjMwOTUgMTUuMDY2N0w5LjY2NiA2Ljg4NDcxQzkuMjUwMDQgNi4zNzAxMyA5IDUuNzE0NDUgOSA1Wk0xMS4zNjkxIDcuOTMzMzNMNi4zMzQgMTYuMTE1M0M2LjU0NTc2IDE2LjM3NzIgNi43MTQ1MSAxNi42NzU4IDYuODI5MTcgMTdIMTcuMTcwOEMxNy4yODU1IDE2LjY3NTggMTcuNDU0MiAxNi4zNzcyIDE3LjY2NiAxNi4xMTUzTDEyLjYzMDkgNy45MzMzM0MxMi40MjcyIDcuOTc3MDIgMTIuMjE2MSA4IDEyIDhDMTEuNzgzOSA4IDExLjU3MjggNy45NzcwMiAxMS4zNjkxIDcuOTMzMzNaTTQgMTdDMy40NDc3MiAxNyAzIDE3LjQ0NzcgMyAxOEMzIDE4LjU1MjMgMy40NDc3MiAxOSA0IDE5QzQuNTUyMjggMTkgNSAxOC41NTIzIDUgMThDNSAxNy42NDExIDQuODExNTYgMTcuMzI1MyA0LjUyMzQ0IDE3LjE0NzZDNC4zNzE4NiAxNy4wNTQxIDQuMTkzNzggMTcgNCAxN1pNMjAgMTdDMTkuODA2MiAxNyAxOS42MjgxIDE3LjA1NDEgMTkuNDc2NiAxNy4xNDc2QzE5LjE4ODQgMTcuMzI1MyAxOSAxNy42NDExIDE5IDE4QzE5IDE4LjU1MjMgMTkuNDQ3NyAxOSAyMCAxOUMyMC41NTIzIDE5IDIxIDE4LjU1MjMgMjEgMThDMjEgMTcuNDQ3NyAyMC41NTIzIDE3IDIwIDE3WiIgZmlsbD0iIzAwMDAwMCIvPg0KPC9zdmc+",
  "waterdrop": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIGZpbGw9IiMwMDAwMDAiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgDQoJIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDQwNS4wNDcgNDA1LjA0NyINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMjgzLjg5Nyw5Mi44NDZjLTM2LjU4Mi00OS4zNDUtNzMuNjg4LTg5LjI2Ny03NC4wNjEtODkuNjY0QzIwNy45NDQsMS4xNTMsMjA1LjI5NiwwLDIwMi41MjMsMA0KCQljLTIuNzc0LDAtNS40MjMsMS4xNTItNy4zMTQsMy4xODJjLTAuMzcxLDAuMzk3LTM3LjQ3OCw0MC4zMTktNzQuMDYsODkuNjY0Yy00OS45NzEsNjcuNDAzLTc1LjMwOCwxMTkuNzI2LTc1LjMwOCwxNTUuNTEzDQoJCWMwLDg2LjM5Niw3MC4yODcsMTU2LjY4OCwxNTYuNjgyLDE1Ni42ODhjODYuMzk2LDAsMTU2LjY4My03MC4yOSwxNTYuNjgzLTE1Ni42ODhDMzU5LjIwNiwyMTIuNTcyLDMzMy44NjgsMTYwLjI1LDI4My44OTcsOTIuODQ2eg0KCQkgTTIxOC4xNzEsMzU0LjM0MmMtOC4yMTMsMS45NDEtMTYuNjgsMi45MjYtMjUuMTYyLDIuOTI2Yy02MC4yOTQsMC0xMDkuMzQ3LTQ5LjA1NS0xMDkuMzQ3LTEwOS4zNQ0KCQljMC04LjMxMiwyLjU1OS0yMy4zNzMsMTQuNzUtNDcuOTE0YzEuMjI1LTIuNDY3LDQuMDQ2LTMuNjkxLDYuNjg3LTIuOTA4YzIuNjM5LDAuNzg1LDQuMzMsMy4zNTcsNC4wMDcsNi4wOTENCgkJYy0wLjI4LDIuMzYxLTAuNDIxLDQuNTg0LTAuNDIxLDYuNjA3YzAsNjQuNjI5LDQ1Ljk2NiwxMjAuNzcsMTA5LjI5OCwxMzMuNDg0YzIuNjA3LDAuNTI1LDQuNSwyLjc5NSw0LjU0NSw1LjQ1NQ0KCQlDMjIyLjU3NSwzNTEuMzk2LDIyMC43NjEsMzUzLjcyOSwyMTguMTcxLDM1NC4zNDJ6Ii8+DQo8L2c+DQo8L3N2Zz4=",
  "carbs": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMiA0TDEwLjg1MjIgNS45MTMwM0M5Ljk0OTc4IDcuNDE3MDQgOS40OTg1NyA4LjE2OTA1IDkuNDk4NTcgOUM5LjQ5ODU3IDkuODMwOTUgOS45NDk3OCAxMC41ODMgMTAuODUyMiAxMi4wODdMMTEuNTcxMyAxMy4yODU0QzExLjc2MjcgMTMuNjA0NSAxMS44NTg1IDEzLjc2NDEgMTIgMTMuNzY0MUMxMi4xNDE1IDEzLjc2NDEgMTIuMjM3MyAxMy42MDQ1IDEyLjQyODcgMTMuMjg1NEwxMy4xNDc4IDEyLjA4N0MxNC4wNTAyIDEwLjU4MyAxNC41MDE0IDkuODMwOTUgMTQuNTAxNCA5QzE0LjUwMTQgOC4xNjkwNSAxNC4wNTAyIDcuNDE3MDQgMTMuMTQ3OCA1LjkxMzAzTDEyIDRaTTEyIDRWMiIgc3Ryb2tlPSIjMjIyMjIyIi8+DQo8cGF0aCBkPSJNMjAuMTYwMyAxMi41OTgxTDE3LjkyOTYgMTIuNTYwNkMxNi4xNzU5IDEyLjUzMTEgMTUuMjk5MSAxMi41MTYzIDE0LjU3OTQgMTIuOTMxOEMxMy44NTk4IDEzLjM0NzMgMTMuNDM0MiAxNC4xMTQgMTIuNTgyOCAxNS42NDc1TDExLjkwNDUgMTYuODY5NUMxMS43MjM5IDE3LjE5NDkgMTEuNjMzNiAxNy4zNTc1IDExLjcwNDMgMTcuNDgwMUMxMS43NzUxIDE3LjYwMjcgMTEuOTYxMiAxNy42MDU4IDEyLjMzMzIgMTcuNjEyMUwxMy43MzA3IDE3LjYzNTZDMTUuNDg0NCAxNy42NjUxIDE2LjM2MTIgMTcuNjc5OSAxNy4wODA5IDE3LjI2NDRDMTcuODAwNSAxNi44NDg5IDE4LjIyNjIgMTYuMDgyMSAxOS4wNzc1IDE0LjU0ODZMMjAuMTYwMyAxMi41OTgxWk0yMC4xNjAzIDEyLjU5ODFMMjEuODkyMyAxMS41OTgxIiBzdHJva2U9IiMyMjIyMjIiLz4NCjxwYXRoIGQ9Ik0zLjgzOTcyIDEyLjU5ODFMNi4wNzAzNSAxMi41NjA2QzcuODI0MDcgMTIuNTMxMSA4LjcwMDkzIDEyLjUxNjMgOS40MjA1NiAxMi45MzE4QzEwLjE0MDIgMTMuMzQ3MyAxMC41NjU4IDE0LjExNCAxMS40MTcyIDE1LjY0NzVMMTIuMDk1NSAxNi44Njk1QzEyLjI3NjEgMTcuMTk0OSAxMi4zNjY0IDE3LjM1NzUgMTIuMjk1NyAxNy40ODAxQzEyLjIyNDkgMTcuNjAyNyAxMi4wMzg4IDE3LjYwNTggMTEuNjY2OCAxNy42MTIxTDEwLjI2OTMgMTcuNjM1NkM4LjUxNTYxIDE3LjY2NTEgNy42Mzg3NiAxNy42Nzk5IDYuOTE5MTMgMTcuMjY0NEM2LjE5OTUgMTYuODQ4OSA1Ljc3Mzg1IDE2LjA4MjEgNC45MjI1NCAxNC41NDg2TDMuODM5NzIgMTIuNTk4MVpNMy44Mzk3MiAxMi41OTgxTDIuMTA3NjcgMTEuNTk4MSIgc3Ryb2tlPSIjMjIyMjIyIi8+DQo8cGF0aCBkPSJNMTIgMTVWMjIuNSIgc3Ryb2tlPSIjMjIyMjIyIi8+DQo8L3N2Zz4=",
  "chemical-structure": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIGZpbGw9IiMwMDAwMDAiIGhlaWdodD0iODAwcHgiIHdpZHRoPSI4MDBweCIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiANCgkgdmlld0JveD0iMCAwIDQ4OS43OSA0ODkuNzkiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTQ3NS4xNCwyNTQuMzgzbC05Ni4yNi01NS41NjhWODcuOTU2YzAtOC45ODYtNC43OTktMTcuMjgxLTEyLjU2OC0yMS43NzRMMjU3LjQ3OSwzLjM2NA0KCWMtNy43ODYtNC40ODUtMTcuMzQ1LTQuNDg1LTI1LjEzNSwwTDEyMy40OTUsNjYuMTgyYy03Ljc3MSw0LjQ5My0xMi41NjUsMTIuNzg4LTEyLjU2NSwyMS43NzR2MTEwLjg1MWwtOTYuMjc5LDU1LjU2OA0KCWMtNy43NzQsNC40OTMtMTIuNTY5LDEyLjc5MS0xMi41NjksMjEuNzczdjEyNS42ODljMCw4Ljk4Miw0Ljc5NSwxNy4yODEsMTIuNTY5LDIxLjc3NGwxMDguODQ1LDYyLjgxOA0KCWMzLjg5NywyLjI0MSw4LjIzNSwzLjM2MSwxMi41NjksMy4zNjFjNC4zMzgsMCw4LjY3Ni0xLjEyLDEyLjU2OS0zLjM2MWw5Ni4yNi01NS41Nmw5Ni4yNzksNTUuNTYNCgljMy44OTMsMi4yNDEsOC4yMywzLjM2MSwxMi41NjksMy4zNjFjNC4zMzgsMCw4LjY3Mi0xLjEyLDEyLjU2OS0zLjM2MWwxMDguODI4LTYyLjgxOGM3Ljc3NS00LjQ5MywxMi41NjktMTIuNzkyLDEyLjU2OS0yMS43NzQNCglWMjc2LjE0OUM0ODcuNzA5LDI2Ny4xNjcsNDgyLjkxNSwyNTguODY4LDQ3NS4xNCwyNTQuMzgzeiBNMjQ0LjkxMyw1NC4xNjFsODMuNjksNDguMzExdjk2LjMzNWwtODMuNzEsNDguMzE4bC04My42OS00OC4zMTENCgl2LTk2LjM0M0wyNDQuOTEzLDU0LjE2MXogTTEzNi4wNjUsNDM1LjYzMmwtODMuNzA2LTQ4LjMxdi05Ni42NTdsODMuNDI4LTQ4LjE1Nmw4My45NzMsNDguNDY5djk2LjM0M0wxMzYuMDY1LDQzNS42MzJ6DQoJIE00MzcuNDMzLDM4Ny4zMjJsLTgzLjY5LDQ4LjMxbC04My43MS00OC4zMXYtOTYuMzI3bDgzLjk4OC00OC40OTNsODMuNDEyLDQ4LjE2NFYzODcuMzIyeiIvPg0KPC9zdmc+",
  "dna": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiwyMmExLDEsMCwwLDAsMiwwYzAtLjAyMy4xMjQtMi4yMjYsNC0zLjkxLDMuODEyLDEuNjU1LDMuOTkzLDMuOCw0LDMuOTI4QTEsMSwwLDAsMCwxOCwyMmMwLS4xMy0uMDU2LTIuOC0zLjY1Ny00Ljk1N0MxNy42OTQsMTUuMzQsMTgsMTMuODQxLDE4LDEycy0uMzA2LTMuMzQtMy42NTctNS4wNDNDMTcuOTQ0LDQuOCwxOCwyLjEzLDE4LDJhMSwxLDAsMCwwLTIsMGMwLC4wMjMtLjEyNCwyLjIyNi00LDMuOTFDOC4xNTYsNC4yNDEsOCwyLjA3NCw4LDJBMSwxLDAsMCwwLDYsMmMwLC4xMy4wNTYsMi44LDMuNjU3LDQuOTU3QzYuMzA2LDguNjYsNiwxMC4xNTksNiwxMnMuMzA2LDMuMzQsMy42NTcsNS4wNDNDNi4wNTYsMTkuMiw2LDIxLjg3LDYsMjJaTTgsMTJjMC0xLjMwOC4wMTItMi4yNjYsNC0zLjkxNywzLjk4OCwxLjY1MSw0LDIuNjA5LDQsMy45MTdzLS4wMTIsMi4yNjYtNCwzLjkxN0M4LjAxMiwxNC4yNjYsOCwxMy4zMDgsOCwxMloiLz48L3N2Zz4=",
  "lamp": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+Cjxzdmcgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgDQogICAgPHRpdGxlPi9zdmcvaWMtbGFtcDwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+Cg08L2RlZnM+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJpYy1sYW1wIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiM0QTRBNEEiPg0KICAgICAgICAgICAgPHBhdGggZD0iTTE0LDE1IEwxNCwxNSBDMTQsMTUgMTcsMTAuNzE3OTYwMyAxNyw4Ljg2MTExMTExIEMxNyw2LjE3NjM5MzU4IDE0Ljc2MTQyMzcsNCAxMiw0IEM5LjIzODU3NjI1LDQgNyw2LjE3NjM5MzU4IDcsOC44NjExMTExMSBDNywxMS41NDU4Mjg2IDEwLDE1IDEwLDE1IEwxNCwxNSBaIE0xNCwxNyBMMTAsMTcgTDkuMDg4MDE2NDQsMTcgTDguNDkwMDA0MDcsMTYuMzExNDU0MyBDOC4wNTIyNzM4OCwxNS44MDc0NTU5IDcuNDI5ODk4NDUsMTQuOTk4MDMwOSA2LjgwNDM0ODA1LDEzLjk5Nzg3MzggQzYuMTY5NjI2MjEsMTIuOTgzMDUzIDUuNjY5NjI2MTQsMTEuOTc1MTY2NCA1LjM1NTYxOTY2LDEwLjk4Mjg4NjggQzUuMTI1Nzg3ODEsMTAuMjU2NjA0MiA1LDkuNTUwMTU2NzUgNSw4Ljg2MTExMTExIEM1LDUuMDU5MDE4NyA4LjE0NjQxOTIzLDIgMTIsMiBDMTUuODUzNTgwOCwyIDE5LDUuMDU5MDE4NyAxOSw4Ljg2MTExMTExIEMxOSw5Ljg4MDMzMjU0IDE4LjU5NzgxNjQsMTEuMDE4Mzc5NiAxNy44OTEwNzA4LDEyLjQxMzMzMzYgQzE3LjY5MjY0MTMsMTIuODA0OTg4MiAxNy40NzIxNTUxLDEzLjIwOTg1ODYgMTcuMjMzMjM5OCwxMy42MjQ4MTE4IEMxNi44ODQ3MTgxLDE0LjIzMDEzMTcgMTYuNTEzODUwNywxNC44MjgzNTI1IDE2LjE0MzA0NzMsMTUuMzk1ODY5IEMxNS45MTk1MjE1LDE1LjczNzk3NjIgMTUuNzQzNDk5NiwxNS45OTcwMDI1IDE1LjYzODAwMTQsMTYuMTQ3NTg1IEwxNS4wNDA3OTg5LDE3IEwxNCwxNyBaIE0xMCwyMCBDOS40NDc3MTUyNSwyMCA5LDE5LjU1MjI4NDcgOSwxOSBDOSwxOC40NDc3MTUzIDkuNDQ3NzE1MjUsMTggMTAsMTggTDE0LDE4IEMxNC41NTIyODQ3LDE4IDE1LDE4LjQ0NzcxNTMgMTUsMTkgQzE1LDE5LjU1MjI4NDcgMTQuNTUyMjg0NywyMCAxNCwyMCBMMTAsMjAgWiBNMTEsMjMgQzEwLjQ0NzcxNTMsMjMgMTAsMjIuNTUyMjg0NyAxMCwyMiBDMTAsMjEuNDQ3NzE1MyAxMC40NDc3MTUzLDIxIDExLDIxIEwxMywyMSBDMTMuNTUyMjg0NywyMSAxNCwyMS40NDc3MTUzIDE0LDIyIEMxNCwyMi41NTIyODQ3IDEzLjU1MjI4NDcsMjMgMTMsMjMgTDExLDIzIFogTTExLjI1LDYgQzEwLjk1NjQ1OTYsNiAxMC41Njg2OTM3LDYuMDY0NjI3NjQgMTAuMTY0NTg5OCw2LjI2NjY3OTYxIEM5LjQ1MDE1NTgsNi42MjM4OTY2MSA5LDcuMjk5MTMwMzEgOSw4LjI1IEM5LDguNjY0MjEzNTYgOS4zMzU3ODY0NCw5IDkuNzUsOSBDMTAuMTY0MjEzNiw5IDEwLjUsOC42NjQyMTM1NiAxMC41LDguMjUgQzEwLjUsNy44ODgzNjk2OSAxMC42MTIzNDQyLDcuNzE5ODUzMzkgMTAuODM1NDEwMiw3LjYwODMyMDM5IEMxMC45OTM4MDYzLDcuNTI5MTIyMzYgMTEuMTY4NTQwNCw3LjUgMTEuMjUsNy41IEMxMS42NjQyMTM2LDcuNSAxMiw3LjE2NDIxMzU2IDEyLDYuNzUgQzEyLDYuMzM1Nzg2NDQgMTEuNjY0MjEzNiw2IDExLjI1LDYgTDExLjI1LDYgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj4KDTwvcGF0aD4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="
};
const P = {
  atom: "M12 12h.01M12 3c4 0 6 9 0 18M12 3c-6 9-4 18 0 18M3 12c0 4 9 6 18 0M3 12c0-4 9-6 18 0",
  arr: "M5 12h14M13 6l6 6-6 6",
  book: "M4 5h7a3 3 0 013 3v12a2 2 0 00-2-2H4zM20 5h-7a3 3 0 00-3 3",
  ext: "M14 4h6v6M20 4l-9 9M18 13v6H5V6h6",
  chev: "M9 5l7 7-7 7"
};
const Ic = ({
  n
}) => createElement("svg", {
  className: "ic",
  viewBox: "0 0 24 24",
  "aria-hidden": true
}, createElement("path", {
  d: P[n]
}));
const PAGE_URLS = {
  inicio: "index.html",
  polimeros: "polimeros.html",
  lipidios: "lipidios.html",
  carboidratos: "carboidratos.html",
  aminoacidos: "proteinas.html",
  acidos: "acidos-nucleicos.html",
  quiz: "quiz.html",
  fontes: "fontes.html"
};
const NAVIGATION = [
  ["inicio", "Início", "house"],
  ["polimeros", "Polímeros", "triangle", "pol"],
  ["lipidios", "Lipídios", "waterdrop", "lip"],
  ["carboidratos", "Carboidratos", "carbs", "car"],
  ["aminoacidos", "Aminoácidos e proteínas", "chemical-structure", "pro"],
  ["acidos", "Ácidos nucleicos", "dna", "nuc"],
  ["quiz", "Quiz", "triangle"],
  ["fontes", "Fontes", "lamp"]
];
const HOME_CARDS = [
  {id: "polimeros", category: "pol", title: "Polímeros", icon: "triangle", description: "Macromoléculas naturais e sintéticas formadas por unidades menores. Estão em materiais, embalagens e organismos vivos.", tags: ["ambiente", "tecnologia"]},
  {id: "lipidios", category: "lip", title: "Lipídios", icon: "waterdrop", description: "Moléculas que armazenam energia, compõem membranas e participam de processos importantes do organismo.", tags: ["alimentação", "saúde"]},
  {id: "carboidratos", category: "car", title: "Carboidratos", icon: "carbs", description: "Açúcares e seus polímeros, presentes em alimentos e em estruturas de reserva e sustentação.", tags: ["alimentação", "saúde"]},
  {id: "aminoacidos", category: "pro", title: "Aminoácidos e proteínas", icon: "chemical-structure", description: "Aminoácidos se ligam para formar proteínas, que atuam na estrutura, no transporte e nas reações do organismo.", tags: ["alimentação", "saúde"]},
  {id: "acidos", category: "nuc", title: "Ácidos nucleicos", icon: "dna", description: "DNA e RNA participam do armazenamento, da transmissão e do uso da informação genética.", tags: ["saúde", "tecnologia"]}
];
const CAROUSEL_ITEMS = [
  {title: "Celulose", text: "A celulose forma a parede celular das plantas e também está presente no papel.", url: "https://brasilescola.uol.com.br/amp/biologia/os-principais-carboidratos.htm"},
  {title: "Membranas celulares", text: "Fosfolipídios formam membranas com uma região que interage com a água e outra que a evita.", url: "https://brasilescola.uol.com.br/biologia/lipidios.htm"},
  {title: "DNA mitocondrial", text: "As mitocôndrias possuem DNA próprio, separado do DNA do núcleo celular.", url: "https://www.nih.gov/news-events/nih-research-matters/mitochondria-health"}
];
const currentPage = () => document.body.dataset.page || "inicio";
function normalizeText(value){
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
}
function Home(){
  const [query,setQuery]=useState("");
  const [filter,setFilter]=useState("todos");
  const [slide,setSlide]=useState(0);
  const [curiosity]=useState(()=>curiosidades[Math.floor(Math.random()*curiosidades.length)]);
  const normalizedQuery=normalizeText(query);
  const visibleCards=HOME_CARDS.filter(card=>{
    const matchesQuery=normalizeText(card.title+" "+card.description).includes(normalizedQuery);
    const matchesFilter=filter==="todos"||card.tags.some(tag=>normalizeText(tag)===filter);
    return matchesQuery&&matchesFilter;
  });
  const featured=CAROUSEL_ITEMS[slide];
  const changeSlide=direction=>setSlide((slide+direction+CAROUSEL_ITEMS.length)%CAROUSEL_ITEMS.length);

  return h(React.Fragment,null,
    h("section",{className:"hero-card glass",id:"inicio"},
      h("div",{className:"hero-text"},
        h("h2",{className:"hero-title"},"Macromoléculas ",h("span",null,"em foco")),
        h("p",{className:"hero-desc"},"Da vida ao ",h("strong",null,"laboratório"),", das células aos ",h("strong",null,"materiais do dia a dia.")," Explore a química por trás das macromoléculas."),
        h("a",{className:"explore-button",href:PAGE_URLS.polimeros},"Explore os temas ",h(Ic,{n:"arr"})),
        h("p",{className:"student-info"},"Enzo Alves e Raphael Diniz · 3º Ano do Técnico Integrado em Informática")
      ),
      h("div",{className:"hero-art","aria-hidden":true})
    ),
    h("section",{className:"home-tools glass","aria-label":"Buscar e filtrar temas"},
      h("label",{className:"search-field"},
        h("span",null,"Buscar temas"),
        h("input",{type:"search",value:query,onChange:event=>setQuery(event.target.value),placeholder:"Ex.: DNA, energia, plásticos"})
      ),
      h("div",{className:"filters",role:"group","aria-label":"Filtrar temas"},
        [["todos","Todos"],["alimentacao","Alimentação"],["saude","Saúde"],["tecnologia","Tecnologia"],["ambiente","Meio ambiente"]].map(([value,label])=>
          h("button",{key:value,type:"button",className:"filter-button","aria-pressed":filter===value,onClick:()=>setFilter(value)},label)
        )
      )
    ),
    h("section",{className:"topic-grid","aria-label":"Temas de macromoléculas"},
      visibleCards.length
        ? visibleCards.map(card=>h("article",{key:card.id,className:"topic-card "+card.id+"-card"},
            h("div",{className:"card-head"},
              h("span",{className:"badge"},HOME_CARDS.indexOf(card)+1),
              h("h3",{className:"card-title"},card.title)
            ),
            h("img",{className:"card-art",src:ICONS[card.icon],alt:"Ilustração de "+card.title}),
            h("p",{className:"card-desc"},card.description),
            h("a",{className:"vermais-button",href:PAGE_URLS[card.id]},"Saiba mais ",h(Ic,{n:"arr"}))
          ))
        : h("p",{className:"empty-state","aria-live":"polite"},"Nenhum tema corresponde à busca.")
    ),
    h("section",{className:"carousel glass","aria-label":"Aplicações em destaque"},
      h("div",{className:"carousel-copy"},
        h("p",{className:"eyebrow"},"Em destaque"),
        h("h2",null,featured.title),
        h("p",null,featured.text),
        h("a",{href:featured.url,target:"_blank",rel:"noopener noreferrer"},"Leia a fonte")
      ),
      h("div",{className:"carousel-controls"},
        h("button",{type:"button", "aria-label":"Item anterior",onClick:()=>changeSlide(-1)},"Anterior"),
        h("span",{"aria-live":"polite"},String(slide+1)+" / "+CAROUSEL_ITEMS.length),
        h("button",{type:"button", "aria-label":"Próximo item",onClick:()=>changeSlide(1)},"Próximo")
      )
    ),
    h("aside",{className:"vocesabia-card"},
      h("h3",{className:"vocesabia-title"},h("img",{src:ICONS.lamp,alt:""}),"Você sabia?"),
      h("p",{className:"vocesabia-text",dangerouslySetInnerHTML:{__html:curiosity.texto}}),
      h("div",{className:"vocesabia-source"},
        h("span",null,"Fonte:"),
        h("a",{href:curiosity.fonte.url,target:"_blank",rel:"noopener noreferrer"},curiosity.fonte.nome,h(Ic,{n:"ext"}))
      )
    ),
    h("a",{className:"explore-button quiz-link",href:PAGE_URLS.quiz},"Acessar o quiz ",h(Ic,{n:"arr"}))
  );
}
function Sources(){
  const entries=new Map();
  curiosidades.forEach(item=>entries.set(item.fonte.url,item.fonte.nome));
  return h("section",{className:"topic-page glass"},
    h("h2",null,"Fontes"),
    h("p",null,"Referências usadas nos textos e curiosidades do site."),
    h("ul",null,[...entries].map(([url,name])=>
      h("li",{key:url},h("a",{href:url,target:"_blank",rel:"noopener noreferrer"},name))
    )),
    h("h3",null,"Créditos visuais"),
    h("p",null,"O visualizador 3D de moléculas permite girar os modelos, aproximar e selecionar átomos. Foi desenvolvido com Three.js e WebGL."),
    h("p",null,"Os ícones SVG vieram do ",h("a",{href:"https://www.svgrepo.com/",target:"_blank",rel:"noopener noreferrer"},"SVG Repo"),"."),
    h("p",null,"Documentação do recurso: ",h("a",{href:"https://threejs.org/docs/",target:"_blank",rel:"noopener noreferrer"},"Three.js"),".")
  );
}
const CARBOHYDRATE_TABS=[
  {id:"mono",label:"Monossacarídeos",text:"A glicose e a frutose são açúcares simples. A glicose é usada pelas células como fonte de energia."},
  {id:"di",label:"Dissacarídeos",text:"A sacarose é formada pela união de glicose e frutose. É o açúcar comum de mesa."},
  {id:"poli",label:"Polissacarídeos",text:"Amido, glicogênio e celulose são cadeias longas de monossacarídeos; armazenam energia ou formam estruturas."}
];
const QUIZ_QUESTIONS=[
  {question:"Qual destes é um polímero natural?",options:["Polietileno","Celulose","Nylon"],answer:1,explanation:"A celulose é um polímero natural formado por unidades de glicose."},
  {question:"Qual componente dos lipídios forma parte das membranas celulares?",options:["Fosfolipídios","Glicogênio","Nucleotídeos"],answer:0,explanation:"Fosfolipídios formam a bicamada das membranas celulares."},
  {question:"Qual é um polissacarídeo de reserva das plantas?",options:["Glicose","Sacarose","Amido"],answer:2,explanation:"As plantas armazenam energia principalmente na forma de amido."},
  {question:"Que ligação une aminoácidos em uma cadeia proteica?",options:["Peptídica","Glicosídica","Fosfodiéster"],answer:0,explanation:"A ligação peptídica une o grupo carboxila de um aminoácido ao grupo amina de outro."},
  {question:"Qual base aparece no RNA no lugar da timina?",options:["Citosina","Uracila","Guanina"],answer:1,explanation:"O RNA usa uracila; o DNA usa timina."}
];
function Topic({cat}){
  const [expanded,setExpanded]=useState(false);
  const [modalOpen,setModalOpen]=useState(false);
  const [carbohydrateTab,setCarbohydrateTab]=useState("mono");
  const [nucleicTab,setNucleicTab]=useState("dna");
  const extraDetails={
    pol:"O descarte inadequado de plásticos pode persistir no ambiente e afetar animais e ecossistemas. Reduzir o uso e separar materiais recicláveis ajuda a diminuir esse impacto.",
    pro:"Proteínas estruturais, como o colágeno, ajudam a formar tecidos; enzimas aceleram reações; a hemoglobina transporta oxigênio."
  };
  const detail=extraDetails[cat.id];
  const curiosity=cat.id==="pol"?curiosidades[4]:cat.id==="lip"?curiosidades[5]:null;
  useEffect(()=>{
    if(!modalOpen)return;
    const closeOnEscape=event=>{if(event.key==="Escape")setModalOpen(false);};
    addEventListener("keydown",closeOnEscape);
    return()=>removeEventListener("keydown",closeOnEscape);
  },[modalOpen]);

  return h("section",{className:"topic-page glass"},
    h("h2",{style:{color:cat.c}},cat.t),
    h("p",null,cat.intro),
    h("h3",null,"Composição química"),
    h("p",null,cat.comp),
    h("h3",null,"Estrutura molecular"),
    h("p",null,cat.est),
    cat.id==="car"&&h("section",{className:"interactive-panel","aria-label":"Classificação dos carboidratos"},
      h("h3",null,"Explore as classes"),
      h("div",{className:"tab-list",role:"tablist","aria-label":"Classes de carboidratos"},
        CARBOHYDRATE_TABS.map(tab=>h("button",{key:tab.id,type:"button",role:"tab","aria-selected":carbohydrateTab===tab.id,onClick:()=>setCarbohydrateTab(tab.id)},tab.label))
      ),
      h("p",{role:"tabpanel"},CARBOHYDRATE_TABS.find(tab=>tab.id===carbohydrateTab).text)
    ),
    cat.id==="nuc"&&h("section",{className:"interactive-panel","aria-label":"Comparação entre DNA e RNA"},
      h("h3",null,"Compare DNA e RNA"),
      h("div",{className:"tab-list",role:"group","aria-label":"Escolha uma molécula"},
        [["dna","DNA"],["rna","RNA"]].map(([id,label])=>h("button",{key:id,type:"button","aria-pressed":nucleicTab===id,onClick:()=>setNucleicTab(id)},label))
      ),
      h("p",{className:"comparison"},nucleicTab==="dna"
        ?"O DNA armazena a informação genética e geralmente forma duas fitas; usa desoxirribose e as bases A, T, C e G."
        :"O RNA participa da expressão da informação genética e geralmente forma uma fita; usa ribose e as bases A, U, C e G.")
    ),
    h("h3",null,"Classificações"),
    h("ul",null,cat.cls.map(item=>h("li",{key:item},item))),
    detail&&h("div",{className:"expandable"},
      expanded&&h("p",null,detail),
      h("button",{type:"button","aria-expanded":expanded,onClick:()=>setExpanded(!expanded)},expanded?"Ver menos":"Ver mais")
    ),
    cat.id==="lip"&&h("button",{className:"secondary-button",type:"button",onClick:()=>setModalOpen(true)},"Abrir curiosidade sobre lipídios"),
    curiosity&&h("aside",{className:"vocesabia-card topic-curiosity"},
      h("h3",{className:"vocesabia-title"},h("img",{src:ICONS.lamp,alt:""}),"Você sabia?"),
      h("p",{className:"vocesabia-text",dangerouslySetInnerHTML:{__html:curiosity.texto}}),
      h("div",{className:"vocesabia-source"},
        h("span",null,"Fonte:"),
        h("a",{href:curiosity.fonte.url,target:"_blank",rel:"noopener noreferrer"},curiosity.fonte.nome,h(Ic,{n:"ext"}))
      )
    ),
    h(MoleculeCatalog,{ids:cat.mols}),
    cat.pend.length>0&&h("div",{className:"pend"},"Modelos 3D não incluídos: "+cat.pend.join(", ")+"."),
    h("h3",null,"Exemplos"),
    h("ul",null,cat.ex.map(item=>h("li",{key:item},item))),
    h("h3",null,"No cotidiano"),
    h("p",null,cat.cot),
    h("h3",null,"Referências"),
    h("ul",null,cat.refs.map(ref=>h("li",{key:ref.url},h("a",{href:ref.url,target:"_blank",rel:"noopener noreferrer"},ref.nome)))),
    modalOpen&&ReactDOM.createPortal(h("div",{className:"modal-backdrop",onClick:event=>{if(event.target===event.currentTarget)setModalOpen(false);}},
      h("section",{className:"modal glass",role:"dialog","aria-modal":true,"aria-labelledby":"lipid-modal-title"},
        h("button",{className:"modal-close",type:"button","aria-label":"Fechar janela",onClick:()=>setModalOpen(false)},"Fechar"),
        h("h2",{id:"lipid-modal-title"},"Lipídios no organismo"),
        h("p",null,"Fosfolipídios formam membranas; triglicerídeos armazenam energia. Uma alimentação equilibrada considera a quantidade e o tipo de gordura."),
        h("a",{href:"https://brasilescola.uol.com.br/biologia/lipidios.htm",target:"_blank",rel:"noopener noreferrer"},"Fonte: Brasil Escola ? Lipídios")
      )
    ),document.body)
  );
}
function Quiz(){
  const [questionIndex,setQuestionIndex]=useState(0);
  const [answers,setAnswers]=useState([]);
  const [finished,setFinished]=useState(false);
  const question=QUIZ_QUESTIONS[questionIndex];
  const selected=answers[questionIndex];
  const score=answers.reduce((total,answer,index)=>total+(answer===QUIZ_QUESTIONS[index].answer?1:0),0);
  function chooseAnswer(index){
    if(selected!==undefined)return;
    setAnswers(current=>[...current,index]);
  }
  function nextQuestion(){
    if(questionIndex===QUIZ_QUESTIONS.length-1)setFinished(true);
    else setQuestionIndex(questionIndex+1);
  }
  function restart(){
    setQuestionIndex(0);
    setAnswers([]);
    setFinished(false);
  }
  return h("section",{className:"topic-page glass quiz-page"},
    h("h2",null,"Quiz de macromoléculas"),
    finished
      ? h("div",{className:"quiz-result"},
          h("p",null,"Você acertou "+score+" de "+QUIZ_QUESTIONS.length+" questões."),
          h("button",{type:"button",onClick:restart},"Reiniciar quiz")
        )
      : h(React.Fragment,null,
          h("p",{className:"eyebrow"},"Pergunta "+(questionIndex+1)+" de "+QUIZ_QUESTIONS.length),
          h("h3",null,question.question),
          h("div",{className:"quiz-options",role:"group","aria-label":"Alternativas"},
            question.options.map((option,index)=>h("button",{
              key:option,
              type:"button",
              className:selected===index?(index===question.answer?"correct":"incorrect"):"",
              disabled:selected!==undefined,
              "aria-pressed":selected===index,
              onClick:()=>chooseAnswer(index)
            },option))
          ),
          selected!==undefined&&h("p",{className:"quiz-feedback","aria-live":"polite"},
            (selected===question.answer?"Correto. ":"Não é essa. ")+question.explanation
          ),
          h("button",{type:"button",disabled:selected===undefined,onClick:nextQuestion},questionIndex===QUIZ_QUESTIONS.length-1?"Ver resultado":"Próxima pergunta")
        )
  );
}
function ThemeToggle(){
  const [theme,setTheme]=useState(()=>localStorage.getItem("macromoleculas-theme")||"dark");
  useEffect(()=>{
    document.documentElement.dataset.theme=theme;
    localStorage.setItem("macromoleculas-theme",theme);
  },[theme]);
  return h("button",{className:"theme-toggle",type:"button",onClick:()=>setTheme(theme==="dark"?"light":"dark"),"aria-label":theme==="dark"?"Ativar modo claro":"Ativar modo escuro"},theme==="dark"?"Modo claro":"Modo escuro");
}
function App(){
  const page=currentPage();
  const currentNav=NAVIGATION.find(item=>item[0]===page)||NAVIGATION[0];
  const category=CATEGORIES.find(item=>item.id===currentNav[3]);
  const [menuOpen,setMenuOpen]=useState(false);
  const content=page==="fontes"?h(Sources):page==="quiz"?h(Quiz):category?h(Topic,{cat:category,key:page}):h(Home);
  return h(React.Fragment,null,
    h("div",{className:"bg-glow","aria-hidden":true},h("span"),h("span"),h("span")),
    h("div",{className:"page"},
      h("header",{className:"title-card glass"},
        h("button",{className:"menu-toggle",type:"button","aria-expanded":menuOpen,"aria-controls":"site-navigation","aria-label":menuOpen?"Fechar menu":"Abrir menu",onClick:()=>setMenuOpen(!menuOpen)},h("svg",{viewBox:"0 0 24 24","aria-hidden":true},h("path",{d:"M4 6h16M4 12h16M4 18h16"})),h("span",null,menuOpen?"Fechar":"Menu")),
        h("div",{className:"brand"},
          h("div",{className:"logo","aria-hidden":true},h("svg",{viewBox:"0 0 24 24"},h("path",{d:P.atom}))),
          h("div",null,h("h1",{className:"title"},"Macromoléculas em Foco"),h("p",{className:"subtitle"},"Ciência que conecta a vida"))
        ),
        h(ThemeToggle)
      ),
      h("aside",{className:"sidebar glass"+(menuOpen?" menu-open":"")},
        h("nav",{id:"site-navigation",className:"sidebar-nav","aria-label":"Seções"},
          NAVIGATION.map(item=>h("a",{
            key:item[0],
            className:"card"+(item[0]===page?" active":""),
            href:PAGE_URLS[item[0]],
            "aria-current":item[0]===page?"page":undefined,
            onClick:()=>setMenuOpen(false)
          },h("img",{src:ICONS[item[2]],alt:""}),h("span",null,item[1])))
        )
      ),
      h("main",{className:"content-cards"},content),
      h("footer",{className:"downbar glass"},
        h("div",{className:"downbar-info"},
          h(Ic,{n:"atom"}),
          h("span",null,"Macromoléculas em Foco"),h("span",{className:"footer-separator","aria-hidden":true},"·"),
          h("span",null,"Química III"),h("span",{className:"footer-separator","aria-hidden":true},"·"),
          h("span",null,"3º Ano de Informática"),h("span",{className:"footer-separator","aria-hidden":true},"·"),
          h("span",null,"Por Enzo Alves e Raphael Diniz")
        ),
        h("a",{className:"downbar-sources",href:PAGE_URLS.fontes},h(Ic,{n:"book"}),"Fontes",h(Ic,{n:"chev"}))
      )
    )
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(createElement(App));
