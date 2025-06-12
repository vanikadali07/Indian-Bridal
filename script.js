const quotes = [
  "ఒక కూతురు కళ్యాణానికి తయారవుతున్న ప్రతి క్షణం, ఆ ఇంటి సంప్రదాయాన్ని ప్రతిబింబిస్తుంది.",
  "వదువు కట్టే దుస్తులు పచ్చటి కలల కన్నా విలువైనవి.",
  "ప్రతి రాష్ట్రం ఒక అందమైన కథను చెబుతుంది – ఒక చీర, ఒక లెహంగా, ఒక జూవెలరీ ద్వారా.",
  "ఆభరణాలు శరీరాన్ని అలంకరిస్తాయి, కానీ సంప్రదాయాలు ఆత్మను.",
  "ఒక తెలుగు వధువు పూల జడలో తన కుటుంబ గౌరవాన్ని ధరించుకుందీ.",
  "బంగారు కంచిపట్టు చీర కన్నా బంగారమే వధువు చిరునవ్వు!",
  "ప్రతి భారతీయ వధువు తన దుస్తులలో ఒక జాతి సంస్కృతి గొప్పదనాన్ని చూపుతుంది."
];

const quoteBox = document.getElementById('quote-box');

function showQuote() {
  if (!quoteBox) return;
  let index = Math.floor(Math.random() * quotes.length);

  quoteBox.classList.remove('visible');
  setTimeout(() => {
    quoteBox.textContent = quotes[index];
    quoteBox.classList.add('visible');
  }, 300); // Small delay for fade-out effect
}
