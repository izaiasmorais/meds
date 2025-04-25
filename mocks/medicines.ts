import { Medicine } from "@/interfaces/interfaces";

export const medicines: Medicine[] = [
	{
		id: "a12bc345-6d78-90ef-gh12-3456ij789k01",
		name: "Aciclovir",
		indication:
			"Herpes genital, varicela zoster, Infecções graves por HSV/VZV (por exemplo, infecções do SNC)",
		presentation: "COMP 200 mg FR, AMP 250 mg",
		dilution:
			"União química: reconstuição- 10 mL de água para injeção ou solução NaCl 0,9%   diluição- 100 mL de solução NaCl 0,9% (até 500 mg, para doses superiores utilizar em concentração de até 5 mg/mL).",
		dose: "Herpes simples - 400 mg 8/8h VO; Herpes zoster - 800 mg VO 5x/dia,Infecções graves por HSV/VZV: 5-12,5 mg/kg EV 8/8h",
		renalFunction: "Comp:",
		via: "VO e EV",
		class: "Antiviral análogo de nucleosídeo",
		actionMecanism: "inibe a síntese de DNA e a replicação viral",
		actionPlaces:
			"Mucocutânea, região genital e SNC. Alcança ampla penetração nos tecidos e fluidos, incluindo o líquido cefalorraquidiano.",
		solubility: "",
		oralBioavailability: "10 a 20%",
		pkPd: "sem dados",
		micCbm: "Antiviral",
		vol: "0,7 L/Kg",
		lig: "9 a 33%",
		actionSpectrum: "Vírus herpes simples\nVírus varicela-zoster\n(não CMV)",
	},
	{
		id: "b23cd456-7e89-01fg-hi23-4567jk890l12",
		name: "Ampicilina-sulbactam",
		indication:
			"Infecções do trato respiratório inferior e superior incluindo sinusite,\notite média e epiglotite; pneumonias bacterianas; infecções do trato urinário e pielonefrite; infecções intraabdominais incluindo peritonite, colecistite, endometrite e celulite pélvica; sepse bacteriana; infecções da pele e\ntecidos moles, infecções do osso e articulações e infecções gonocócicas",
		presentation: "FR - AMP 1,5 g e 3,0 g   ",
		dilution:
			"Reconstituição 1,5g EV: 3,2ml SF 0,9 ou AD Diluição: 50 a 100ml de SF 0,9% Reconstituição EV 3,0: 6,4ml de AD ou SF 0,9% Diluição:100ml de SF 0,9% Reconstiuição 1,5 IM:3,2ml de AD ou Licocaína 0,5%  Reconstituição 3,0 IM: 6,2 ml de AD ou Lidocaína 0,5%. ",
		dose: "Infecção grave, bacilos gram-negativos aeróbicos, suscetível in vitro - 3 g (2 g amp.+1 g sulb) EV durante 30 min. q6h; Pneumonia associada à ventilação mecânica (PAV) por Acinetobacter - 9 g (6 g amp. + 3 g sulb) EV durante 4 horas e repetir a cada 8 horas como parte da terapia de combinação. Não use como monoterapia por risco de resistência.",
		renalFunction:
			"CrCl ≥30: 1,5-3 g 6/6h CrCl 15-29: 1,5-3 g 12/12h  CrCl 5-14: 1,5-3 g 24/24h  Hemodiálise: 1,5-3 g 24/24h (após a hemodiálise, em dias em que houver hemodiálise)  Diálise peritoneal ambulatorial contínua: 3 g 24/24h  Terapia de subst. renal contínua: 1,5-3 g 8/8h ou 12/12h   Diálise de baixa eficiência sustentada (SLED): 3 g 12/12h\n(Can J Kidney Health Dis 5:1, 2018)",
		via: "EV e IM",
		class: "Aminopenicilina (betalactâmico) + inibidor de betalactamase",
		actionMecanism:
			"Inibe a síntese da parede celular bacteriana ligando-se a uma ou mais proteínas de ligação à penicilina. O sulbactam é um inibidor de beta-lactamase, estende o espectro de ação da ampicilina.",
		actionPlaces: "Pele/IIA/IG",
		solubility: "Hidrofílico",
		oralBioavailability: "-",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "0,29 (amp)/ 0,3 (sulb) L/Kg",
		lig: "28 (amp)/ 38 (sulb)",
		actionSpectrum: "Gram Positivos / Gram Negativos",
	},
	{
		id: "c34de567-8f90-12gh-ij34-5678kl901m23",
		name: "Amoxicilina",
		indication:
			"Infecções de ouvido, nariz e garganta (faringite/amigdalite, otite média), Erradicação do Helicobacter pylori, Infecções do trato respiratório inferior (incluindo pneumonia), Rinossinusite bacteriana aguda, Infecções da pele e da estrutura da pele, Infecção do trato urinário",
		presentation: "COMP 500 mg",
		dilution: "-",
		dose: " Dose usual (adulto): 500 mg VO a 1 g 8/8h;  Faringoamigdalite: 500 mg VO 8/8h ou 1.000 mg VO 24/24h; H. pylori: Use como parte da terapia combinada; Doença de Lyme precoce: 500 mg VO 8/8h por 14-21 dias; Pneumonia (comunidade), ambulatorial  1000 mg VO 8/8h por 5 dias no mínimo; Rinossinusite: 500 mg VO 8/8h ou 875 mg VO 12/12h por 5-7 dias; Erisipela (leve) ou Erisepiloide (cutâneo local): 500 mg VO 8/8h por 5-10 dias; Cistite não complicada por Enterococcus sp: 500 mg VO 8/8h ou 875 mg VO 12/12h por 5 dias; Bacteriúria assintomática por Streptococcus do grupo B na gravidez: 500 mg VO 8/8h ou 875 mg VO 12/12h por 4-7 dias.",
		renalFunction:
			"CrCl >30: não necessário ajuste; CrCl 10-30: VO 250–500 mg 12h/12h; CrCl <10: VO 250–500 mg 24/24h; Hemodiálise: VO 250–500 mg 24/24h (+ dose extra pós diálise)",
		via: "VO",
		class: "Aminopenicilina (betalactâmico)",
		actionMecanism:
			"Inibe a síntese da parede celular bacteriana ligando-se as proteínas de ligação à penicilina",
		actionPlaces:
			"ITU, pele, pulmões, próstata, músculo, seio maxilar, ossos, vesícula biliar, bile e nos líquidos ascítico e sinovial",
		solubility: "Lipofílico",
		oralBioavailability: "80%",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "0,36 L/kg",
		lig: "17-20%",
		actionSpectrum:
			"Streptococcus spp. (somente isolados alfa e beta-hemolíticos), Streptococcus pneumoniae , Staphylococcus spp. ou Haemophilus influenzae, H. pylori, Escherichia coli, Proteus mirabilis, or Enterococcus faecalis, Corynebacterium spp., Bacillus anthracis, Listaria monocytogenes, Clostridium spp., Salmonella spp., Shigella spp., Bordella pertussis, Brucella spp., Neisseira gonorrhoeae, Neisseria meninhitidis, Pasteurella septica, Vibrio cholerae.",
	},
	{
		id: "d45ef678-9g01-23hi-jk45-6789lm012n34",
		name: "Amoxicilina + Clavulanato",
		indication:
			"Infecções do trato respiratório superior,  infecções do trato respiratório inferior,  infecções do trato geniturinário, infecções de pele e tecidos moles,  infecções de ossos e articulações",
		presentation:
			"COMP 500 + 125 mg                                            FR-AMP 1000 + 200 mg",
		dilution:
			"Apresentação injetável indisponível no momento.                                      Reconstituição: 1 fr-amp em 10 mL de água para injeção. Diluição: 1 fr-amp em 100 mL de solução NaCl 0,9%",
		dose: "Dose habitual: VO 500 mg 8/8h; EV 1g 8/8h.",
		renalFunction:
			"CrCl >30: não necessário ajuste; CrCl 10-30: VO 250–500 mg 12h/12h EV dose inicial 1000 mg/200 mg, depois 500 mg/100 mg 12/12h; CrCl <10: VO 250–500 mg 24/24h EV dose inicial 1000 mg/200 mg, depois 500 mg/100 mg 24/24h; Hemodialysis: VO 250–500 mg 24/24h (+ dose extra pós diálise)  EV dose inicial 1000 mg/200 mg, depois 500 mg/100 mg 24/24h (+ dose extra pós diálise)",
		via: "VO e EV",
		class: "Aminopenicilina (betalactâmico) + inibidor de betalactamase",
		actionMecanism:
			"Inibe a síntese da parede celular bacteriana ligando-se as proteínas de ligação à penicilina",
		actionPlaces:
			"Trato respiratório inferior e superior, trato geniturinário, pele e tecidos moles, ossos e articulações",
		solubility: "Hidrofílico",
		oralBioavailability: "Amox: 80%\nClav: 30-98%",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "Amox: 0.36 L/kg\nClav: 0.21 L/kg ",
		lig: "Amox: 18%\nClav: 25%",
		actionSpectrum:
			"Aeróbios gram-positivos - Staphylococcus aureus, Staphylococcus coagulase negativos, Enterococcus faecalis, Streptococcus pneumoniae, Streptococcus pyogenes, Streptococcus viridans, Streptococcus agalactiae, Bacillus anthracis, Listeria monocytogenes, Gardnerella vaginalis, Nocardia asteroides, Streptococcus sp., Staphylococcus saprophyticus.\nAnaeróbios gram-positivos- Clostridium sp., Peptostreptococcus sp., Peptococcus niger, Peptostreptococcus magnus, Peptostreptococcus micros. Aeróbio gram-negativos - Haemophilus influenzae, Moraxella catarrhalis, Neisseria gonorrhoeae, Bordetella pertussis, Vibrio cholerae, Pasteurella multocida, Heliobacter pylori, Haemophilus parainfluenzae. Anaeróbio gram-negativos: Bacteroides sp. (inclusive B. fragilis), Fusobacterium sp., Capnocytophaga sp., Eikenella corrodens, Fusobacterium nucleatum, Porphyromonas sp., Prevotella sp.",
	},
	{
		id: "e56fg789-0h12-34ij-kl56-7890mn123o45",
		name: "Azitromicina",
		indication:
			"Pneumonia adquirida na comunidade causada por organismos susceptíveis, incluindo Legionella pneumophila. A azitromicina di-hidratada também é indicada para o tratamento de doença inflamatória pélvica causada por organismos susceptíveis (Chlamydia trachomatis, Neisseria gonorrhoeae, Mycoplasma hominis), conjuntivite bacteriana, infecções bacterianas do trato respiratório superior, complexo Mycobacterium avium disseminado (MAC), coqueluche, clamídia, DSTs gonocócicas e doença da arranhadura do gato.",
		presentation:
			"Comprimidos orais: 250 mg, 500 mg, 600 mg\nSuspensão oral de dose única: 1 g\nSuspensão pediátrica de liberação imediata: 100 mg/5 mL e 200 mg/5 mL\nSolução oftálmica, 1%\nPó para reconstituição e utilização IV, frascos para injetáveis de 500 mg",
		dilution:
			"Cristália: Reconstuição- 4,8 mL de água para injeção   Diluição- 250 mL de solução NaCl 0,9%, Ringer com lactato ou glicose 5% para uma concentração final de 2mg/mL ou 500 mL para uma concentração de 1mg/mL",
		dose: "ADULTO: Conjuntivite bacteriana Solução oftálmica de azitromicina 1 gota x 2 dias,\ndepois 1 gota uma vez ao dia x 5 dias,Trato respiratório (infecção leve/moderada): 500 mg VO dia 1, depois 250 mg VO 24/24h, dias 2-5; Pneumonia adquirida na comunidade (PAC): 500 mg EV 24/24h (frequentemente combinado com beta-lactâmico); Cancróide: 1 g VO dose única; C. trachomatis: 1 g VO dose única; N. gonorrhoeae: 2 g VO dose única. PEDIÁTRICO: Dose (Idade >28 dias)\n(PO) 5-12 mg/kg/dia (uma vez ao dia)\n-\n(IV) 10 mg/kg/dia (uma vez ao dia)",
		renalFunction:
			"Meia-vida, hrs (função renal normal)        68\nMeia-vida, hrs (DRT)        Inalterado\nDose (função renal normal)        250-500 mg IV/po q24h\nClCr ou TFGe Sem ajuste posológico para compromisso renal\nHemodiálise Sem ajuste posológico\nCAPD Sem ajuste posológico\nCRRT Sem ajuste posológico\nSLED Sem dados",
		via: "VO e EV",
		class: "Macrolídeos",
		actionMecanism: "inibe a sintese protéica (50S)",
		actionPlaces: "Pele/TRS/TRI/DIP/URETRA/COLO DO ÚTERO",
		solubility: "Lipofílico",
		oralBioavailability: "37%",
		pkPd: "AUC 24H/MIC",
		micCbm: "Bacteriostática",
		vol: "33,3 L/Kg",
		lig: "7 - 51 %",
		actionSpectrum: "BGP/BGN",
	},
];
