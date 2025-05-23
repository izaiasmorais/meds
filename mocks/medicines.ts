import { Medicine } from "@/interfaces/interfaces";

export const medicines: Medicine[] = [
	{
		name: "Aciclovir",
		indication:
			"Herpes genital, varicela zoster, Infecções graves por HSV/VZV (por exemplo, infecções do SNC)",
		presentation: "COMP 200 mg                                FR - AMP 250 mg",
		dilution:
			"União química: reconstuição- 10 mL de água para injeção ou solução NaCl 0,9%   diluição- 100 mL de solução NaCl 0,9% (até 500 mg, para doses superiores utilizar em concentração de até 5 mg/mL).",
		dose: "Herpes simples - 400 mg 8/8h VO; Herpes zoster - 800 mg VO 5x/dia,Infecções graves por HSV/VZV: 5-12,5 mg/kg EV 8/8h",
		renalFunction: "Comp:",
		via: "VO e EV",
		class: "Antiviral análogo de nucleosídeo",
		actionMecanism: "inibe a síntese de DNA e a replicação viral",
		actionPlaces:
			"Mucocutânea, região genital e SNC. Alcança ampla penetração nos tecidos e fluidos, incluindo o líquido cefalorraquidiano.",
		solubility: "Indefinido",
		oralBioavailability: "10 a 20%",
		pkPd: "sem dados",
		micCbm: "Antiviral",
		vol: "0,7 L/Kg",
		lig: "9 a 33%",
		actionSpectrum: "Vírus herpes simples\nVírus varicela-zoster\n(não CMV)",
		id: "a38ec475-7fd4-4932-8821-2d19026a2b01",
	},
	{
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
		id: "6506860c-64e9-4f63-a8c0-1ea4b4d58296",
	},
	{
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
		id: "71f4afb1-593f-4905-bfb8-420a05fef8ee",
	},
	{
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

		id: "17d9f4ea-dc36-4ea1-8178-e0ab57dd2ff3",
	},
	{
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

		id: "6ac0d188-b3fd-46a2-b241-5d01bc98b61f",
	},
	{
		name: "Anfotericina B (desoxicolato)",
		indication:
			"Infecçoes fungicas invasivas, leishmaniose. Não deve ser usado no tratamento de infecçoes fungicas não invasivas.",
		presentation: "FR-AMP 50 mg",
		dilution:
			"Reconstituição: 50mg com 10 mL de água para injetáveis e Diluição com SG 5%.",
		dose: "0,5 a 1,0 mg/kg/dia. Dose maxina 1,5 mg/kg/dia",
		renalFunction:
			"Não. Considere mudar para outro agente antifungico a base de lipideos.",
		via: "IV",
		class: "Antifúngico poliênico",
		actionMecanism:
			"Liga-se ao ergosterol alterando a permeabilidade da membrana celular",
		actionPlaces: "Infecções invasivas no tecidos, partes moles e meninges",
		solubility: "Lipofílico",
		oralBioavailability: "não possui",
		pkPd: "C>MIC",
		micCbm: "Bactericida",
		vol: "0,5 - 0,2 L/Kg",
		lig: "90%",
		actionSpectrum:
			"Histoplasma capsulatum, Coccidioides immitis, espécies de Candida spp, Blastomyces dermatitidis,\nRhodotorula, Cryptococcus neoformans, Sporothrix schenckii, Mucor mucedo e Aspergillus fumigatus.",

		id: "dc10548f-1b67-49a0-8501-01ef2a4eb827",
	},
	{
		name: "Anfotericina B (lipossomal)",
		indication: "Indefinido",
		presentation: "FR-AMP 50 mg",
		dilution:
			"Reconstituição: Adicionar 12mL de AD para uma concentração de 4mg/mL (Atenção: volume de expansão de 0,5mL). \nAgitar o frasco-ampola vigorosamente por 30 segundos ou até dispersar completamente o conteúdo. \nUtilizar o filtro de 5 micras (utilizar um filtro por frasco). Diluição: Usualmente: 250 mL de SG 5%.",
		dose: "Adulto e Pediatria 3-6mg/kg/dia, EV",
		renalFunction: "Indefinido",
		via: "IV",
		class: "Antifúngico poliênico",
		actionMecanism:
			"Liga-se ao ergosterol alterando a permeabilidade da membrana celular",
		actionPlaces: "Infecções invasivas no tecidos, partes moles e meninges",
		solubility: "Lipofílico",
		oralBioavailability: "não possui",
		pkPd: "C>MIC",
		micCbm: "Fungicida",
		vol: "0,1-0,16 L/kg",
		lig: "95-99%",
		actionSpectrum:
			"Paracoccidioides brasiliensis, Histoplasma capsulatum, Coccidioides immitis, Blastomyces dermatitidis, Cryptococcus neoformans var. neoformans e var. gattii e Sporothrix schenckii",

		id: "c56362ee-5c06-427a-b37a-645039e251ae",
	},
	{
		name: "Anfotericina B complexo lipídico",
		indication: "Indefinido",
		presentation: "FR-AMP 100mg/20ml",
		dilution: "Diluição: S.G 5% para obter-se a concentração de 1mg/ml",
		dose: "0,25 a 1,0 mg/kg. Infusão EV lenta (2 a 6 hrs)",
		renalFunction: "Indefinido",
		via: "IV",
		class: "Antifúngico poliênico",
		actionMecanism:
			"Liga-se ao ergosterol alterando a permeabilidade da membrana celular",
		actionPlaces: "Infecções invasivas no tecidos, partes moles e meninges",
		solubility: "Lipofílico",
		oralBioavailability: "não possui",
		pkPd: "C>MIC",
		micCbm: "Fungicida",
		vol: "8 L/kg",
		lig: "90%",
		actionSpectrum:
			"Aspergillus fumigatus, Candida albicans, C. guillermondi, C. stellatoideae e C. tropicalis, Cryptococcus sp., Coccidioidomyces sp., Histoplasma sp. e Blastomyces sp.",

		id: "82fafa75-5887-4fdf-b3ca-336ae73d11a8",
	},
	{
		name: "Anidulafungina",
		indication:
			" Candidíase esofágica (CE), candidemia e outras infecções complicadas por Candida ",
		presentation: "FR-AMP 100 mg",
		dilution:
			"Reconstituir em 30 ml de água p/ injeção, diluir em 100 ml de SF 0,9% ou SG 5%. Tempo de infusão minimo 90 minutos, taxa de infusão 1,4ml/minuto.",
		dose: "Candidemia: 200 mg IV no dia 1 seguido de 100 mg/dia IV\nCandida esofágica: 200 mg IV diariamente",
		renalFunction: "Indefinido",
		via: "IV",
		class: "Antifungico Equinocandinas",
		actionMecanism: "Inibe a síntese de b - (1,3)-d glucana da parede celular",
		actionPlaces: "infecções de corrente sanguinea",
		solubility: "Hidrofílico",
		oralBioavailability: "não possui",
		pkPd: "Cmax/CIM ou AUC24h/MIC",
		micCbm: "Fungicida (Candida) Fungistático (Aspergillus)",
		vol: "30 a 50  L/kg",
		lig: "99%",
		actionSpectrum: "Candida/Aspergillus/Blastomyces/Coccidioides/Histoplasma",

		id: "f3e0c121-d0d5-4fcf-b371-5ecd121c463b",
	},
	{
		name: "Amicacina",
		indication:
			" Infecções por bacilos gram-negativos aeróbios, incluindo P. aeruginosa , e micobactérias suscetíveis.",
		presentation:
			"100mg injetável - 50mg/mL (ampola 2mL); 500mg injetável - 250mg/mL (ampola 2mL).",
		dilution: "Diluição: 100-200mL de SF, SG 5% e RL.",
		dose: "Indefinido",
		renalFunction:
			"Dose Diária Múltipla (MDD): 7,5 mg/kg a cada 12h IV ou IM; Dose uma vez ao dia: 15 mg/kg q24h IV ou IM; Endoftalmite: Intravítreo 0,4 mg/0,1 mL de solução salina normal com vancomicina; Intratecal/intraventricular: 30 mg/dia + terapia sistêmica; Peritonite relacionada à DP: Intermitente: 2 mg/kg adicionados a uma troca por dia (permanência mínima de 6 horas)\nContínuo (adicionar a todas as trocas): dose de ataque 25 mg/L, dose de manutenção 12 mg/L; ",
		via: "IV E IM",
		class: "Aminoglicosídeos",
		actionMecanism: "inb sntese proteica (30S)",
		actionPlaces:
			"Infecção do tracto biliar; infecção óssea; infecção articular; infecção do sistema nervoso central; infecção intra-abdominal; pneumonia por bactérias Gram-negativas; septicemia bacteriana; infecção da pele e dos tecidos moles; infecção urinária.",
		solubility: "Hidrofílico",
		oralBioavailability: "não possui",
		pkPd: "AUC/MIC 24 horas",
		micCbm: "Bactericida",
		vol: "0,26 L/Kg",
		lig: "0% - 10%",
		actionSpectrum: "Gram Negativos Aerobios/ Gram Positivos",

		id: "b5da11fe-b039-4996-bba5-f4dc3c6eb251",
	},
	{
		name: "Aztreonam",
		indication:
			"Infecções no trato urinário; bacteremia; Infecções respiratórias do trato inferior; Infecções ósseas e articulares; Infecções no SNC por N. meningites; Infecções no trato gastrointestinal",
		presentation: "FR-AMP 1G",
		dilution:
			"BioChimico: ​Reconstituição: IM - 3mL de diluente por grama de aztreonam; \nIV- Direto - 6 a 10mL de água p/ injetáveis \nInfusão IV: reconstituir cada grama em 3ml de água p/ injetáveis; diluir em SF 0,9%; ou RL; ou SG 5% ou 10% desde que a concentração final NÃO exceda 2% p/v, infundir durante 20 a 60 min.",
		dose: "Infecção do trato urinário: 0,5-1 g IV a cada 8-12h;\nInfecção sistêmica (gravidade moderada): 1-2 g IV a cada 8-12h;\nInfecção sistêmica (grave ou com risco de vida): 2 g IV q6-8h",
		renalFunction:
			"ClCr ≥ 30: 2g de 6/6h ou 8/8h; 30 > ClCr > 10: 2g de 12/12h; ClCr < 10: 2g a cada 24h; Hemodiálise: 2g a cada 24h (após diálise nos dias de diálise); Diálise peritoneal ambulatorial contínua e Terapia renal substitutiva contínua: 2 g a cada 24h.",
		via: "IV e IM",
		class: "Betalactâmicos (Monobactan)",
		actionMecanism: "Inibe a síntese da parede celular",
		actionPlaces:
			"ITU;  Ele é distribuído na maioria dos fluidos corporais, incluindo osso, líquor, fluído da vesícula, a bile,\nsecreção brônquica e intestinal",
		solubility: "Indefinido",
		oralBioavailability: "não possui",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "12,6 L/kg",
		lig: "56 %",
		actionSpectrum: "Bacilos Gram Negativos",

		id: "f6f306fa-4d0d-44c4-b8fa-e1db71b6eb7a",
	},
	{
		name: "Benzilpenicilina benzatina",
		indication:
			"Infecções estreptocócicas (grupo A, sem bacteremia); Infecções leves e moderadas do trato respiratório superior e da pele; Infecções venéreas: sífilis, bouba, bejel (sífilis endêmica) e pinta; Profilaxia da glomerulonefrite aguda e doença reumática; Profilaxia de recorrências da febre reumática e/ou coreia de Sydenham.",
		presentation: "FR-AMP 1.200.000 UI",
		dilution: "Suspensão injetável",
		dose: "Infecções estreptocócicas (grupo A) do trato respiratório superior e da pele: injeção única de 1.200.000 unidades para adultos.  Sífilis primária, secundária e latente: injeção única de 2.400.000 unidades. Sífilis tardia (terciária e neurossífilis): 3 injeções de 2.400.000 unidades com intervalo de 1 semana entre as doses. Bouba, bejel (sífilis endêmica) e pinta: injeção única de 1.200.000 unidade. Profilaxia da febre reumática e da glomerulonefrite: uso a cada 4 semanas, na dose de 1.200.000 unidades",
		renalFunction:
			"CrCl >50-90: 0,5-4 milhões de U a cada 4h\nCrCl 10-50: 0,5-4 milhões de U a cada 8h\nCrCl <10: 0,5-4 milhões de U a cada 12h",
		via: "IM",
		class: "Betalactâmicos",
		actionMecanism: "Inibição sintese de parede celular",
		actionPlaces:
			"Concentrações mais elevadas são encontradas nos rins, e em menor intensidade, no fígado,\npele e intestinos. A benzilpenilicina penetra em todos os outros tecidos e no líquor, em menor grau.",
		solubility: "Hidrofilico",
		oralBioavailability: "-",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "0,35 L/Kg",
		lig: "65%",
		actionSpectrum:
			"Strep. pyogenes, Strep. pneumoniae, S. aureus não produtor de penicilinases, Treponema pallidum.",

		id: "3f157ab9-0c96-4835-a95a-e196e63508f7",
	},
	{
		name: "Cefalexina",
		indication:
			"Sinusites bacterianas; Infecções do trato respiratório; Otite média; Infecções da pele e tecidos moles; Infecções ósseas; Infecções do trato geniturinário incluindo prostatite aguda; Infecções dentárias.",
		presentation:
			"COMP 500 mg                                                               SUSPENSÃO ORAL 50 mg/mL, 100 mL​ ",
		dilution: "-",
		dose: "Faixa de dose usual p/ adulto: 250 mg a 1 g de 6/6h ou 500 mg de 12/12 (máximo: 4 g/dia); Profilaxia de endocardite: 2 g em 30 a 60 minutos antes do procedimento; Cistite: 250 a 500 mg de 6/6h por 5 a 7 dias; Infecções pele e tecidos moles: 500mg de  6/6h por dia 5 a 7 dias.",
		renalFunction:
			"ClCr> 50 ml/min: sem ajuste; 10 > ClCr > 50mL/min: 250 a 500mg de 8/8h ou 12/12h; ClCr < 10mL/min: 250 a 1000 mg a cada 24h ou 48h; Hemodiálise: 250 a 500 mg a cada 12h ou 24h após diálise nos dias de diálise; Diálise peritoneal ambulatorial contínua:  250 a 500 mg a cada 12h ou 24h.",
		via: "VO",
		class: "Cefalosporinas 1ªG",
		actionMecanism: "Inibição sintese de parede celular",
		actionPlaces:
			"Pele/Ossos/Trato genitourinário/Boa distribuição na maioria dos tecidos e fluidos corporais, incluindo bexiga, fígado, rins, ossos, bile, líquido pleural e sinovial.",
		solubility: "Hidrofílico",
		oralBioavailability: "90%",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "0,38 L/Kg",
		lig: "5 a 15%",
		actionSpectrum:
			"Aeróbios gram-positivos: Estreptococos beta-hemolítico; Estafilococos (incluindo cepas coagulase positivas, coagulase negativas e produtoras de penicilinase; estafilococos meticilino-resistente são resistentes); Streptococcus pneumoniae (cepas sensíveis à penicilina). Aeróbios gram-negativos: Escherichia coli; Haemophilus influenzae; Klebsiella spp.; Moraxella catarrhalis; Proteus mirabilis.",

		id: "af3baa96-36eb-4c94-83fc-322ec355f1fa",
	},
	{
		name: "Cefalotina",
		indication:
			"Infecções do trato respiratório; Infecções da pele e tecidos moles; Infecções do trato geniturinário; Septicemia; Infecções gastrintestinais; Meningite; Infecções ósseas e articulares; Profilaxia cirúrgica.",
		presentation: "FR-AMP 1 g",
		dilution:
			"Blau: IM ou IV direta: reconstituir em 5mL de água p/ injeção; Infusão IV: reconstituir em 5mL de água  p/ injeção, diluir em 100mL de SF ou SG 5%. //// ABL: IM: reconstituir em 3mL de água  p/ injeção; IV direta: reconstituir em 10ml de água  p/ injeção; Infusão IV: reconstituir em 10ml de água  p/ injeção, diluir em 50 a 100mL de SF ou SG 5%. ",
		dose: "Adultos: 500 - 2.000mg de 4/4h ou 6/6h (dose máxima: 12g por dia). Profilaxia cirúrgica (IV): 2g, 30 a 60 min antes da cirurgia (+ 2g durante cirurgia com duração ≥ 2h); 2g de 6/6h após a cirurgia, durante até 48h.",
		renalFunction:
			"80 > ClCr > 50 ml/min: até 2g de 6/6h; 50 > ClCr > 25 mL/min: até 1,5g de 6/6h; 25 > ClCr > 10 ml/min: até 1g de 6/6h; 10 > ClCr > 2 ml/min: até 500mg de 6/6h; ClCr < 2 ml/min: até 500 mg de 8/8h",
		via: "IM/EV",
		class: "Cefalosporinas de 1ªG",
		actionMecanism: "inibição da sintese de parede celular",
		actionPlaces:
			"Pulmão/Infecção de Trato Urinário/Infecção de Trato Gastrointestinal/Infecção de corrente Sanguinea/Tecidos, partes moles e pele/Ossos",
		solubility: "Hidrofílico",
		oralBioavailability: "não possui",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "15 -  20 L/kg (IM)",
		lig: "60 - 65% (IM)",
		actionSpectrum:
			"Aeróbicos Gram-positivos: S. aureus (incluindo cepas produtoras de betalactamase, estafilococos meticilino-resistente são resistentes), S. epidermidis (incluindo cepas produtoras de betalactamase), S. pneumoniae, S. pyogenes. Aeróbicos Gram-negativos: E. coli, Haemophilus influenzae, Klebsiella sp., Proteus mirabilis, Salmonella sp., Shigella sp.",

		id: "f7c0f458-e53b-4b96-a708-afde2c49c6a0",
	},
	{
		name: "Cefazolina",
		indication:
			"Infecções do Trato Respiratório; Infecções do Trato Urinário; Infecções da Pele e Estruturas da Pele; Infecções do Trato Biliar; Infecções Ósseas e Articulares; Septicemia; Endocardites causadas por Staphylococcus aureus (penicilino-suscetíveis e penicilino-resistentes) e estreptococos beta-hemolíticos do grupo A; Profilaxia Cirúrgica.",
		presentation: "FR-AMP 1 g",
		dilution:
			"ABL: IM: 2,5 ml de água p/ injeção ou solução de lidocaína 0,5%; IV direta: 10 ml de água p/ injeção; Infusão IV: reconstituir em 10mL de água p/ injeção, diluir em um volume de 50 a 100ml de SF ou SG 5%.",
		dose: "Adultos: 1 a 2g 8/8h (dose máxima: 12g/dia); Profilaxia cirúrgica: 2g IV 60 min antes do procedimento. Considerar 3g se o peso for  ≥ 120 kg. Repetir a dose após 4h, caso o procedimento ainda esteja sendo realizado.",
		renalFunction:
			"ClCr > 50 ml/min: 1 a 2g de 8/8h; 10 > ClCr > 50mL/min: 500mg a 2g de 8/8h ou 12/12h; ClCr < 10mL/min: 500 mg a 1g a cada 24h; Hemodiálise:500 mg a 1g a cada 24h (após diálise nos dias de diálise); Diálise peritoneal ambulatorial: 500 mg 12/12h; Terapia renal substitutiva contínua: 1 a 2g 12/12h.",
		via: "IM/IV",
		class: "Cefalosporinas 1ª G",
		actionMecanism: "inibição da sintese de parede celular",
		actionPlaces:
			"Infecção de corrente Sanguinea/Intra-abdominal/Ossos/Articulações/Pulmão/ Pele e  partes moles/Infecção de Trato Urinário",
		solubility: "Hidrofílico",
		oralBioavailability: "não possui",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "0,19 L/kg (adulto)",
		lig: "73 a 87%",
		actionSpectrum:
			"Aeróbicos Gram-positivos: S. aureus (incluindo cepas produtoras de penicilinase, estafilococos meticilina-resistentes são resistentes); S. epidermidis; Estreptococos beta-hemolíticos do Grupo A e outras cepas de estreptococos (muitas cepas de enterococos são resistentes); S. pneumoniae. Aeróbicos Gram-negativos: Klebsiella spp.; E. coli; Enterobacter aerogenes; Proteus mirabilis; Haemophilus influenzae.",

		id: "b76532d4-75fa-47bf-96e5-60cff34a09b7",
	},
	{
		name: "Cefepima",
		indication:
			"Infecção de Corrente Sanguínea; fibrose cística (exarcebação pulmonar aguda); Infecção de pé diabético; Infecção intra-abdominal; Abcesso intracraniano; Meningite bacteriana; Enterocolite neutropênica; Neutropenia febril; Osteomielite; Peritonite; Infecção articular de prótese; Sepse e choque séptico; Artrite séptica; Infecção de pele e tecidos moles; ITU complicada.",
		presentation: "FR-AMP 1 g e FR-AMP 2 g",
		dilution:
			"Reconstituir IM: 3 ml de água p/ injeção, SF 0,9%, SG 5%; IV: 10 ml de água p/ injeção, SF 0,9%, SG 5%; Diluição: 100 ml de SF 0,9%, SG 5% ou Ringer com lactato.",
		dose: "Adultos: Infusão intermitente: 1-2g a cada 8/12 horas EV, infundidos por 30 minutos; para cobertura de infecções graves por Pseudomonas aeruginosa: 2g a cada 8 horas. Infusão prolongada: 2g a cada 8 horas infundidos por 3 ou 4 horas; Infusão contínua (off-label): 4 a 6g infundidos em 24 horas.",
		renalFunction:
			"ClCr >60 ml/min: 2g de 8/8h; ClCr 30-60 ml/min:  2g de 12/12h; ClCr 11-29 ml/min: 2g de 24/24h. ClCr < 10 ml/min: 1g a cada 24 horas.",
		via: "IM/IV",
		class: "Cefalosporinas 4ª G",
		actionMecanism: "Inibição sintese de parede celular",
		actionPlaces:
			"Infecção de Corrente Sanguinea/Intra-abdominal/Pulmão/Pele/Tecidos moles/SNC/Ossos/Articulações/ITU",
		solubility: "Hidrofílico",
		oralBioavailability: "não possui",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "18 L (Vss)",
		lig: "20%",
		actionSpectrum:
			"Gram-positivos aeróbios: S. aureus (incluindo cepas produtoras de beta-lactamase); S. epidermidis; S. hominis e S. saprophyticus; Streptococcus pyogenes; Streptococcus agalactiae; Streptococcus pneumoniae e outros estreptococos beta-hemolíticos. Gram-negativos aeróbicos: Aeromonas hydrophila; Capnocytophaga sp.; Citrobacter sp.; Campylobacter jejuni; Enterobacter sp.; E. coli; Gardnerella vaginalis; Haemophilus ducreyi, Haemophilus influenzae (incluindo cepas produtoras de beta-lactamase), Haemophilus parainfluenzae; Hafnia alvei; Klebsiella sp.; Morganella morganii; Moraxella catarrhalis; Neisseria gonorrhoeae; Neisseria meningitidis; Proteus sp.; Providencia sp.; Pseudomonas sp.",

		id: "99fc75cf-63c2-4dbe-a92a-bf6d75e3b506",
	},
	{
		name: "Cefoxitina",
		indication:
			"Infecção de Corrente Sanguínea; Infecções ósseas e articulares; Infecções ginecológicas; Infecções do trato respiratório inferior; Septicemia; Infecções de pele e tecidos moles; ITU; Doença inflamatória pélvica; Profilaxia cirúrgica.",
		presentation: "FR-AMP 1 g",
		dilution:
			"Reconstituir IV: 10 ml de água p/ injeção           Infusão IV: 50 a 1000 ml de SF 0,9% ou SG 5%.",
		dose: "1-2g a cada 6/8 horas (dose máxima 12 g/dia)",
		renalFunction:
			"CrCl >50-90: 2 g a cada 8h\nCrCl 10-50: 2 g a cada 8-12h\nCrCl <10: 2 g a cada 24-48h\n",
		via: "IV",
		class: "Cefalosporinas 2ª G",
		actionMecanism: "Inibição sintese de parede celular",
		actionPlaces:
			"Infecção de Trato Gastro Intestinal/ Infecção Sexualmente Trasnmissivel/Pulmão/Pele e tecidos moles/Ossos e articulações/Intra-abdominal",
		solubility: "Hidrofílico",
		oralBioavailability: "não possui",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "16,1 L/kg (adultos obesos)",
		lig: "65 - 79%",
		actionSpectrum:
			"Gram-positivos aeróbicos: S. aureus; Staphylococcus epidermidis; S. pneumoniae; S. agalactiae; S. pyogenes; Gram-negativos aeróbicos: Escherichia coli; Klebsiella spp; Haemophilus influenzae; Morganella morganii; Neisseria gonorrhoeae; Proteus mirabilis; Proteus vulgaris; Providencia spp. Anaeróbicos: Clostridium spp.; Peptococcus niger; Peptostreptococcus spp.; Bacteroides spp.",

		id: "a7c8ed07-da2f-4c4a-ba04-c7267bdb7cb1",
	},
	{
		name: "Ceftazidima",
		indication:
			"Infecção de Corrente Sanguínea; Infecções ósseas e articulares; Infecções do SNC; Infecções ginecológicas; Infecção intra-abdominal; Infecções do trato respiratório inferior; Infecções de pele e tecidos moles; ITU.",
		presentation: "FR-AMP 1 g",
		dilution:
			"IM: 3 ml de água p/ injeção ou lidocaína 0,5% ou 1%;           Infusão IV: reconstituição em 10 ml de água p/ injeção e diluição em 10- 50  SF 0,9%, SG 5% ou RL.",
		dose: "Infusão intermitente: EV 1-2g a cada 8 horas infundidos em 30 minutos. Infusão estendida: 2g a cada 8 horas, infundido por 3 a 4 horas. Infusão contínua: 6g infudidos em 24 horas. ",
		renalFunction:
			"CrCl >50-90: 1-2 g de 8/8h ou 12/12h\nCrCl 10-50: 1-2 g 12/12h ou 24/24h\nCrCl <10: 1-2 g de 24/24h",
		via: "IM/IV",
		class: "Cefalosporinas 3ª G",
		actionMecanism: "Inibição sintese de parede celular",
		actionPlaces:
			"Infecção de Corrente Sanguinea/Intra-abdominal/Pulmão/Pele/Tecidos moles/SNC/Ossos/Articulações/ITU",
		solubility: "Hidrofílico",
		oralBioavailability: "não possui",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "0,24 L/kg",
		lig: "< 10%",
		actionSpectrum:
			"Aeróbicos Gram-positivos: estreptococos β-hemolíticos, Staphylococcus aureus (suscetíveis à meticilina), Staphylococcus coagulase negativo (suscetível à meticilina)\nAeróbicos Gram-negativos: Haemophilus influenzae (inclusive cepas resistentes à ampicilina), Haemophilus parainfluenzae, Neisseria gonorrhoeae, Neisseria meningitidis, Pasteurella multocida, Proteus spp., Providencia spp., Salmonella spp., Shigella spp.",

		id: "fdde41c6-6904-4331-88f9-a3d13f71acf5",
	},
	{
		name: "Ceftazidima/Avibactam",
		indication:
			"Infecções intra-abdominais; Infecção de Trato Urinário Complicada; Pneumonia adquirida no hospital ou associada a ventilação mecânica;Infecção por Stenotrophomonas maltophilia , multirresistente.",
		presentation: "FR-AMP 2,5 g",
		dilution:
			"Reconstituição: 10 mL AD (ocorre expansão de 2mL). Diluição: 100 mL SF 0,9% ou SG5%",
		dose: "1-2 g IV/IM q8-12h . Administrar por infusão intermitente durante 2 horas.",
		renalFunction:
			"CrCl 50-30mL/min: 1,25 g a cada 8 horas.; CrCl 30-15 mL/min: 0,94 g a cada 12 horas.; CrCl 15-5 mL/min: 0,94 g a cada 24 horas; CrCl ≤5 mL/minuto: 0,94 g a cada 48 horas.",
		via: "EV",
		class: "Betalactâmicos",
		actionMecanism: "Inibição sintese de parede celular",
		actionPlaces:
			"Infecção de Trato Urinario/Pulmão/ Infecção intra-abdominal.",
		solubility: "Hidrofílico",
		oralBioavailability: "Não possui",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "17L (ceftazidima)/ 22,2L (avibactam)",
		lig: "<10% (cef)/ 5,7-8,2% (av)",
		actionSpectrum:
			"Bacilos Gram Negativos (E. coli (KPC); Klebsiella sp. (KPC)",

		id: "42c6287e-39b1-4562-b48c-88dc22e35eb9",
	},
	{
		name: "Ceftriaxona",
		indication:
			"Sepse; Meningite; Borreliose de Lyme disseminada (estágios iniciais e tardios da doença) (doença de Lyme); Infecções intra-abdominais (peritonites, infecções do trato gastrintestinal e biliar); Infecções ósseas, articulares, tecidos moles, pele e feridas; Infecções em pacientes imunocomprometidos; Infecções renais e do trato urinário Infecções do trato respiratório, particularmente pneumonia e infecções otorrinolaringológicas; Infecções genitais, inclusive gonorreia; Profilaxia perioperatória de infecções.",
		presentation: "FR-AMP 500 mg; FR-AMP 1 g",
		dilution:
			"​Reconstituição:\nEV: 10mL de AD.1\nIM: 3,5mL de AD ou Lidocaína 1%.1\nDiluição:\nAté 1g pode ser administrado sem diluição. Para infusão contínua: 40mL de SF, SG 5% e SG 10%",
		dose: " 1-2g a cada 12-24 horas.                         Dose Máxima\n4g/dia",
		renalFunction: "Não é necessário ajuste de dose.",
		via: "IM/IV",
		class: "Cefalosporinas 3ª G",
		actionMecanism: "Inibição sintese de parede celular",
		actionPlaces: "ITU/ ICS/ IST/ ITR",
		solubility: "Hidrofílico",
		oralBioavailability: "Não possui",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "5,8-13,5 litros",
		lig: "85 - 95%",
		actionSpectrum:
			"Bacilos gram-negativos aeróbios, alguns aeróbios gram-positivos e alguns anaeróbios além disso,  Strep. pneumoniae , N. meningitidis e MSSA.  Bula eurofarma",

		id: "665f1813-db30-4385-8991-6b51fec5ac6f",
	},
	{
		name: "Cefuroxima",
		indication:
			"- Infecções do trato respiratório, por exemplo: exacerbações agudas de bronquite crônica, bronquiectasia infectada, pneumonia \nbacteriana, abscesso pulmonar e infecções pós-operatórias do tórax. \n- Infecções do ouvido, nariz e garganta, por exemplo: sinusite, amigdalite, faringite e otite média. - Infecções do trato urinário, por exemplo: pielonefrite aguda e crônica, cistite e bacteriúria assintomática. \n- Infecções de tecidos moles, por exemplo: celulite, erisipela e infecções de feridas. \n- Infecções de juntas e ossos, por exemplo: osteomielite e artrite séptica. \n- Infecções ginecológicas, obstétricas e doenças inflamatórias pélvicas. \n- Gonorreia, particularmente quando a penicilina não é adequada. \n- Outras infecções, incluindo sepse, meningite e peritonite. Profilaxia contra infecção nas cirurgias abdominal, pélvica, ortopédica, cardíaca, pulmonar, esofágica e vascular, nas quais existe \nelevado risco de infecção. ",
		presentation: "FR-AMP 750mg",
		dilution:
			"BioChimico e Aurobindo: Reconstituição IV ​6mL de AD/ IM 3mL AD ou lidocaína 1% Não aplicar mais do que 750 mg em um local intramuscular; Diluição 50-100mL de SF, SG 5%, SG 10% ou RL.",
		dose: "Dose usual: 750 mg EV/IM 8/8h; Infecções graves: até 1,5 g IV 6/6h; Profilaxia cirúrgica: 1,5 g em 60 minutos após a incisão cirúrgica",
		renalFunction:
			"CrCl >50-90: 0,75–1,5g 8/8h; CrCl 10-50: 0,75–1,5g 8/8 a 12/12h  CrCl <10: 0,75–1,5g 24/24h; hemodiálise:  0,75 -1,5g 24/24h (em dia de diálise, administrar dose após hemodiálise)",
		via: "IV, IM ",
		class: "Cefalosporinas 2ª G",
		actionMecanism: "Inibição sintese de parede celular",
		actionPlaces: "PULMÃO/OUVIDO/TGU/PARTES MOLES/PELE",
		solubility: "Hidrofílico",
		oralBioavailability: "-",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "0,19 L/kg",
		lig: "33-50%",
		actionSpectrum: "Gram Negativos/Gram Positivos",

		id: "147fc3dd-4302-41b5-9666-b474c30da3b0",
	},
	{
		name: "Ciprofloxacino",
		indication:
			"Infecções do trato urinário, infeccções do olho, ouvido médio, orgãos reprodutores, pele e tecidos moles, septicemia, profilaxia em pacientes imunocomprometidos,  infecções ósseas e articulares e diarreia infecciosa causada por organismos suscetíveis.\nFrequentemente usado em combinação com metronidazol para tratar infecções intra-abdominais ou combinado com uma penicilina de espectro estendido em pacientes neutropênicos febris",
		presentation: "Comp 500mg; Bolsa 2mg/mL (100 ou 200mL)",
		dilution: "Bolsa pronta para Infusão EV",
		dose: "VO: 250-750mg a cada 12h EV: 200-400 mg 8/8 - 12/12",
		renalFunction:
			"EV\nClcr ≥ 30 mL/minuto: Não é necessário ajuste para insuficiência renal;\nClcr 5 - 29mL/minuto: 200 - 400mg a cada 18 - 24 horas\nVO \nClcr 30-50mL/minuto: 250-500mg  a cada 12 horas;\nClcr 5-29mL/minuto: 250-500mg a cada 18 horas.\nPediatria \nEV e VO \nClCr 10 - 29mL/minuto: 10 a 15mg/kg/dose a cada 18 horas;\nClCr  < 10mL/minuto: 10 a 15mg/kg/dose a cada 24 horas.\nHemodiálise: CVVH/CVVHD/CVVHDF\nEV: 200-400mg a cada 12-24 horas;\nVO: 250-500mg a cada 24 horas após a diálise.\nInsuficiência hepática\nNão é necessário ajuste para insuficiência hepática. (Guia Farmacêutico Hospital Sírio Libanês)",
		via: "VO/EV",
		class: "Fluoroquinolonas",
		actionMecanism: "Inb topoisomerase IV/II (síntese do DNA)",
		actionPlaces: "TR/ITU/Intra-abdominal/TM e pele/Ossos e articulações",
		solubility: "Lipofílico",
		oralBioavailability: "70%",
		pkPd: "24h AUC/MIC",
		micCbm: "Bactericida",
		vol: "2.4 L/kg",
		lig: "20-40%",
		actionSpectrum: "Gram Negativos/ Gram Positivos",

		id: "aa366df5-f8ec-4880-93d5-d5874cd0b06c",
	},
	{
		name: "Claritromicina",
		indication:
			"Terapia alternativa para infecções do trato respiratório e da pele, em combinação para algumas infecções micobacterianas e em regimes de combinação para erradicar infecções por H. pylori",
		presentation:
			"COMP 500 mg                                                    FR-AMP 500 mg",
		dilution:
			"Reconstituir 10mL de AD. ​Diluição: em 250mL de SF, SG 5% ou RL.",
		dose: "Exacerbação aguda de bronquite crônica (AECB) ou Pneumonia (comunidade): 500 mg VO a cada 12h por 7-14 dias; Coqueluche: 500 mg VO 12/12h por 7 dias; amigdalofaringite: 250 mg VO 12/12h por 10 dias; Infecções de pele: 250 mg VO 12/12h por 10 dias EV: 1g/dia, divididos a cada 12 horas.",
		renalFunction:
			"CrCl 10-50: 500 mg a cada 12-24h; CrCl <10: 500 mg 24/24h; hemodiálise: 500 mg 24/24h (Administrar após a hemodiálise, em dias de diálise)",
		via: "VO/EV",
		class: "Macrolídeos",
		actionMecanism: "Inibição sintese proteíca (50S)",
		actionPlaces: "Trato respiratório/TM",
		solubility: "Lipofílico",
		oralBioavailability: "50%",
		pkPd: "24h AUC/MIC",
		micCbm: "Bacteriostática",
		vol: "4 L/kg",
		lig: "65-70%",
		actionSpectrum: "Gram Negativos/Gram Positivos",

		id: "ec3d7332-eff1-4034-9f91-fb3a1c491b3b",
	},
	{
		name: "Clindamicina",
		indication:
			"Tratamento de infecções de vias respiratórias superiores e inferiores, infecções de pele e tecidos moles, infecções dentárias, infecções de pelve e trato genital feminino, infecções ósseas e articulares. Tratamento de infecções bacterianas anaeróbicas susceptíveis, e por cepas bacterianas aeróbias Gram-positivas como Streptococcus, Pneumococcus e Staphylococcus. Não é mais recomendada para o tratamento de infecções intra-abdominais.",
		presentation: "Cápsula: 300mg;  injetável: 600mg - 150mg/mL (ampola 4mL)",
		dilution:
			" 50 a 100mL de SF, SG 5%, SG 10% ou RL (concentração máxima: 18 mg/mL)",
		dose: "VO: 150-450 mg a cada 6-8h (máximo 1,8 g/dia) EV/IM: 1,2-2,7 g/dia dividido três vezes (máximo 4,8 g/dia). Para evitar o bloqueio neuromuscular, não exceda a taxa de infusão de 30 mg/min. A administração de >1200 mg em uma infusão de 1 hora não é recomendada.",
		renalFunction: "Não é necessário ajuste de dose.",
		via: "VO/IM/EV",
		class: "Lincosamidas",
		actionMecanism: "Inibição sintese proteíca (50S)",
		actionPlaces: "VA/TM/Ossos/TG",
		solubility: "Lipofílico",
		oralBioavailability: "90%",
		pkPd: "24-hr AUC/MIC",
		micCbm: "Bacteriostática",
		vol: "1,1 L/kg",
		lig: "85-94%",
		actionSpectrum: "Gram Positivos",

		id: "d9a999e0-cc7b-4a83-9dc0-7cd21e63193f",
	},
	{
		name: "Daptomicina",
		indication:
			"Infecções complicadas de pele e tecidos moles causadas por cocos gram-positivos, endocardite e bacteremia por S. aureus. Terapia alternativa para genótipos resistentes a drogas, é ativo contra MRSA e VRE. Não use para pneumonia primária: inativado por surfactante pulmonar",
		presentation: "FR-AMP 350 e 500 mg (Accord Farmacêutica)",
		dilution: "Reconstituição: 10 mL de SF ou RL. Diluição: ​50 mL de SF",
		dose: "Pele e tecidos moles: 4-6 mg/kg EV durante 2 minutos (bolus) ou 30 minutos (infusão) 24/24h;  Bacteremia/endocardite do lado direito: 8-12 mg/kg EV durante 2 minutos (bolus) ou 30 minutos (infusão) 24/24h; Pediátricos: Infusão IV durante 30 a 60 min",
		renalFunction:
			"CrCl > 30-90: 4-6 mg/kg 24/24h; CrCl <30:  6 mg/kg 48/48h; Hemodiálise Administrar 6 mg/kg a cada 48 horas após a diálise. Considere uma dose maior de daptomicina (7-9 mg/kg) se administrada durante os últimos 30 minutos de diálise para compensar a remoção intradialítica da droga. Se o período interdialítco for de 3 dias (ex.: finais de semana), aumente a dose de daptomicina em 50% (ou seja, de 6 mg/kg para 9 mg/kg) na sessão que preceder as 72h de período interdialítico. ",
		via: "EV",
		class: "Lipopeptídeos",
		actionMecanism:
			"A daptomicina liga-se a componentes da membrana celular de organismos suscetíveis e causa despolarização rápida, inibindo a síntese intracelular de DNA, RNA e proteínas.",
		actionPlaces:
			"Tecidos moles e estruturas da pele; ICS; SNC; Tecido ósseo e atriculação.",
		solubility: "Hidrofílica",
		oralBioavailability: "-",
		pkPd: "AUC24h/CIM",
		micCbm: "Bactericida",
		vol: "0,1 L/kg",
		lig: "92%",
		actionSpectrum: "Gram Positivos",

		id: "416a0632-ece1-4923-bced-8d66d9a9c502",
	},
	{
		name: "Ertapenem",
		indication:
			"​Tratamento das seguintes infecções moderadas a graves: Infecções intra-abdominais complicadas, infecções da pele e estrutura da pele (incluindo infecções do pé diabético sem osteomielite), infecção do trato urinário complicadas (incluindo pielonefrite), infecções pélvicas (incluindo pós-parto endomiometrite, aborto séptico, infecções ginecológicas pós-cirúrgicas), septicemia bacteriana e pneumonia comunitária",
		presentation: "FR AMP 1g",
		dilution:
			"IM: Reconstituir em 3,2mL de lidocaína 1% ou 2% (sem epinefrina). IV: Reconstituir em 10 mL de água para Injeção. Diluir em QSP 50mL de SF.1 \nConcentração máxima: 20mg/mL.",
		dose: "1 g EV ou IM a cada 24h",
		renalFunction:
			"CrCl>30-90: 1 g 24/24h; CrCl<30: 0,5 g 24/24h; CrCl<10: 0,5 g 24/24h; Hemodiálise: 0,5 g 24/24h (se administrado dentro de 6 horas antes da HD, administre 150 mg de suplemento pós-HD. Se administrado >6 horas antes da HD, não é necessária dose pós-HD); Diálise Peritoneal Ambulatorial Contínua: 0,5 g 24/24h; Terapia Renal Substitutiva Contínua: 0,5-1 g 24/24h. ",
		via: "EV/IM",
		class: "Carbapenêmico",
		actionMecanism: "Inibição sintese de parede celular",
		actionPlaces: "TM",
		solubility: "Hidrofílico",
		oralBioavailability: "-",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "0,12 L/kg",
		lig: "95%",
		actionSpectrum: "BGP/BGN",

		id: "264242a8-a8ef-4b9c-b84a-d9188db6e84a",
	},
	{
		name: "Fluconazol",
		indication:
			"Tratamento de candidíase (esofágica, orofaríngea, peritoneal, urinária, vaginal); infecções sistêmicas por cândida (candidemia, candidíase disseminada, pneumonia); e meningite criptocócica; e profilaxia antifúngica em receptores de transplante alogênico de células hematopoiéticas. Candida krusei e Candida glabrata são resistentes ao Fluconazol. Pacientes com infecção por Candida e terapia prévia com triazol têm maior probabilidade de resistência ao Fluconazol (e outros triazol). Dose de fluconazol IV = dose oral devido à excelente biodisponibilidade.",
		presentation: "Cápsula de 150 mg; Injetável: 2mg/mL, bolsa de 100mL",
		dilution: "Bolsa pronta para Infusão EV.",
		dose: "100-400 mg 24/24h",
		renalFunction:
			"CrCl>50-90: 100-400 mg 24/24h (dose completa); CrCl 10-50: 50-200 mg 24/24h (redução de 50%); CrCl<10: 50-200 mg 24/24h (redução de 50%); Hemodiálise:50-200 mg 24/24 horas (redução de 50%) em dias sem diálise, 100-400 mg (dose completa) após a diálise em dias de diálise; Diálise Peritoneal Ambulatorial Contínua: 50-200 mg 24/24h; Terapia Renal Substitutiva Contínua: 200-400 mg 24/24h",
		via: "VO/EV",
		class: "Antifúngico triazólico",
		actionMecanism:
			"Interfere na atividade do citocromo P450 fúngico, inbindo a sintese de ergosterol. ",
		actionPlaces: "Aparelho genital/LCR e líquido peritoneal",
		solubility: "Hidrofílico",
		oralBioavailability: "90%",
		pkPd: "AUC24h/MIC",
		micCbm: "Fungistático",
		vol: "50 L (V/F)",
		lig: "10%",
		actionSpectrum:
			"Candida albicans\nCandida dubliniensis\nCandida parapsilosis\nCandida tropicalis\nCandida guilliermondii\nCryptococcus neoformans\nCoccidioides immitis",

		id: "fe683ea2-b9d8-4116-848c-401824f1e487",
	},
	{
		name: "Ganciclovir",
		indication:
			"Ganciclovir é usado para infecções por citomegalovírus (CMV), ou profilaxia de transplante (receptor), para prevenção de infecção por CMV.",
		presentation: "FR-AMP 500mg; Bolsa 1mg/ml 0,1% 500ml",
		dilution:
			"Reconstituição: 10mL de água estéril para injeção.\n Diluição:\n SF 0,9%, SG 5%, solução de Ringer ou Ringer lactato. Infusão com concentrações maiores que 10mg/mL não são recomendadas.Padrão: SF 0,9% 100mL. Concentração: 50mg/mL",
		dose: "Dose de indução: 5 mg/kg IV a cada 12h x14 dias ou implante vítreo no olho afetado (substituir a cada 6 meses ou mais); Dose de manutenção: 5 mg/kg IV a cada 24 horas ou 6 mg/kg 5x/semana",
		renalFunction:
			"CrCl > 50-90: Indução IV- 70-90 mL/min: 5 mg/kg a cada 12h 50-69 mL/min: 2,5 mg/kg 12/12h; Manutenção IV - 2,5-5 mg/kg 24/24h;   CrCl 10-50: Indução IV- 25-49 mL/min: 2,5 mg/kg 24/24h 10-24 mL/min: 1,25 mg/kg 24/24h; Manutenção IV- 0,625-1,25 mg/kg 24/24h; CrCl <10: Indução IV- 1,25 mg/kg 3x/semana; Manutenção IV- 0,625 mg/kg 3x/semana; Hemodiálise: Indução IV- 1,25 mg/kg 3x/semana (dose AD nos dias de diálise); Manutenção IV- 0,625 mg/kg 3x/semana (dose AD nos dias de diálise).",
		via: "EV",
		class: "Antiviral análogo de nucleosídeo",
		actionMecanism:
			"Inibe competitivamente a ligação do trifosfato de desoxiguanosina à\nDNA polimerase, resultando na inibição da síntese de DNA viral.",
		actionPlaces:
			"Olhos (retinite); TGI (colite e esofagite); SNC; Tecido hematopoiético",
		solubility: "Hidrofílico",
		oralBioavailability: "5%",
		pkPd: "sem dados",
		micCbm: "Antiviral",
		vol: "0,7 L/kg ",
		lig: "1-2%",
		actionSpectrum:
			"Citomegalovírus em imunocomprometidos e receptores de transplantes (profilaxia)",

		id: "e27ecc8f-ed1b-42bd-8f1b-7511e18f05a7",
	},
	{
		name: "Gentamicina",
		indication:
			"- septicemia, bacteremia (incluindo sepse neonatal);\n- infecções graves do Sistema Nervoso Central (SNC) (incluindo meningite);\n- infecção nos rins e trato geniturinário (incluindo infecções pélvicas);\n- infecções respiratórias;\n- infecções gastrintestinais;\n- infecções na pele, ossos ou tecidos moles (incluindo queimaduras e feridas infectadas);\n- infecções intra-abdominais (incluindo peritonite);\n- infecções oculares.\n",
		presentation:
			"Solução oftalmica 5mg/mL; Inj 40mg/mL; INj 40mg/1,5 mL; Colírio - Fr. Creme; 10mg; Amp: 80mg; Pomada oftalmica",
		dilution: "Diluição: 50-200mL de SF 0,9%, SG 5% ou RL.",
		dose: "IM e EV: 5mg/kg/dia.",
		renalFunction:
			"Clcr 60-79mL/minuto: 4mg/kg iv /24h\nClcr 50mL/minuto: 3,5mg/kg /24h\nClcr 40mL/minuto:2,5mg/kg a cada 24 h \nClcr < 30mL/minuto: Administrar a dose íntegra e as doses subsequentes conforme as concentrações séricas. \nHemodiálise: Intermitente administrar após a hemodiálise; CVVH/CVVHD/CVVHDF: Dose de ataque de 2-3mg/kg seguida de 1-1,5mg/kg a cada 24-36h. (Guia farmacêutico HSL)",
		via: "IM/IV",
		class: "Aminoglicosídeo",
		actionMecanism: "Inibição sintese proteíca (30S)",
		actionPlaces: "SN/TM/Pele/Ossos",
		solubility: "Hidrofílico",
		oralBioavailability: "Não possui",
		pkPd: "AUC/MIC 24 horas",
		micCbm: "Bactericida",
		vol: "0,29 - 0,37 L/Kg",
		lig: "0 - 10%",
		actionSpectrum: "Gram Negativos/ Gram Positivos",

		id: "36f053b5-37d9-4187-8aa8-5d35b6846cc4",
	},
	{
		name: "Imipenem + cilastatina",
		indication:
			"Tratamento de trato respiratório inferior, infecções urinárias, intra-abdominais, ginecológicas, infecções dos osso e articulações, da pele da estrutura da pele, endocardite (causada por Staphylococcus aureus) e septicemia",
		presentation: "FR-AMP 500 MG",
		dilution: "Diluição: 100-250mL de SF e SG. Concentração máxima: 500mg/60mL",
		dose: "500 mg IV a cada 6 horas OU 1 g IV a cada 8 horas\n",
		renalFunction:
			"CrCl 60-<90: 400-500 mg de 6/6h\nSusc intermediário: 750 mg de 8/8h\nCrCl 30-<60: 300 mg de 6/6h OU 500 mg 8/8h\nSusc intermediário: 500 mg de 6/6h\nCrCl 15-<30: 200 mg de 6/6h OU 500 mg de 12/12h\nIntermediário susc: 500 mg a cada 12h",
		via: "EV",
		class: "Carbapenêmico",
		actionMecanism: "Inibição sintese de parede celular",
		actionPlaces: "Pele/TM/cIAI/ITU/TG/Ossos",
		solubility: "Hidrofilico",
		oralBioavailability: "-",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "0,23 - 0,31L/Kg",
		lig: "15-25%",
		actionSpectrum: "Gram Negativos/ Gram Positivos",

		id: "07f05c65-1263-4eff-ba6b-5a32e1fc6aac",
	},
	{
		name: "Levofloxacino comp",
		indication:
			"infecções do trato respiratório superior e inferior, infecções da pele e tecido subcutâneo, infecções do trato urinário, osteomielite",
		presentation: "COMP 500mg",
		dilution: "-",
		dose: "500-750mg, EV ou VO, 1 vez/dia (máx. 500mg 2 vezes/dia)",
		renalFunction:
			"Insuficiência renal:\nDose de 750mg/dia: \nClcr 20-49mL/min: Administrar 750mg a cada 48 horas. \nClcr 10-19mL/min: Administrar 750mg inicialmente, seguido 500mg a cada 48 horas. \nDose de 500mg/dia: \nClcr 20-49mL/min: Administrar 500mg dose inicial, seguido de  250mg a cada 24 horas. \nClcr 10-19mL/min: Administrar 500mg dose inicial, seguido de 250mg a cada 48 horas. \nDose 250mg/dia: \nClcr 20-49mL/min: Não necessita ajuste. \nClcr 10-19mL/min: Administrar 250mg a cada 48 horas. \nHemodiálise: \nCVVH: Dose de ataque de 500-750mg seguida de 250mg a cada 24h.\nCVVHD: Dose de ataque de 500-750mg seguida de 250-500mg a cada 24h. \nCVVHDF: Dose de ataque de 500-750mg seguida de 250-750mg a cada 24h.\nInsuficiência hepática: Não é necessário ajuste de dose.  ",
		via: "VO",
		class: "Quinolonas",
		actionMecanism: "Inibição topoisomerase IV/II (síntese do DNA)",
		actionPlaces: "Amplamente distribuído no corpo.TU/PULMÃO/PELE",
		solubility: "Lipofilico",
		oralBioavailability: "99%",
		pkPd: "AUC24H/MIC",
		micCbm: "Bactericida",
		vol: "1,27 (adulto) L/Kg (74 a 112 Litros após doses de 500 ou 750 (EMS)",
		lig: "24 - 38%",
		actionSpectrum: "Gram Negativos/ Gram Positivos aeróbios e anaeróbios",

		id: "a5d18558-ff91-4edf-9cab-3d8918df1fac",
	},
	{
		name: "Levofloxacino 5mg/ml",
		indication:
			"Tratamento de infecções do trato respiratório superior e inferior, infecções da pele e tecido subcutâneo, infecções do trato urinário, osteomielite",
		presentation: "5 MG/ML BOLSA C/ 100 ML",
		dilution: "Reconstituição: Medicamento pronto para uso",
		dose: "250-750 mg VO/IV uma vez ao dia \nPara a maioria das indicações, em pacientes com função renal normal, a dose de 750 mg é preferida",
		renalFunction:
			"CrCl > 50-80: Dose inicial de 500 mg e dose subsequênte de 250 mg cada 24h;\nCrCl > 20-49: Dose inicial de 500 mg e dose subsequente de 250 mg cada 48h;\nCrCl > 10-19: Dose inicial de 500 mg e dose subsequente de 250 mg cada 48h;",
		via: "EV",
		class: "Quinolonas",
		actionMecanism: "Inibição topoisomerase IV/II (síntese do DNA)",
		actionPlaces: "Amplamente distribuído no corpo.TU/PULMÃO/PELE",
		solubility: "Lipofilico",
		oralBioavailability: "99%",
		pkPd: "AUC/MIC 24h",
		micCbm: "Bactericida",
		vol: "244 L (Vss)",
		lig: "24 - 38%",
		actionSpectrum: "Gram Negativos/ Gram Positivos",

		id: "3d972885-a7a6-4521-89c9-74f05231d82f",
	},
	{
		name: "Linezolida",
		indication:
			"​Tratamento de infecções resistentes à vancomicina Enterococcus faecium (VRE), pneumonia nosocomial causada por Staphylococcus aureus (incluindo o MRSA) ou Streptococcus pneumoniae (incluindo cepas multirresistentes [MDRSP]), infecções de pele e estrutura de pele complicada e não complicada (incluindo infecções do pé diabético sem concomitante osteomielite), e pneumonia comunitária causada por suscetíveis organismos gram-positivos.",
		presentation: "Bolsa: 2 mg/mL- 300 mL; Comp 600 mg",
		dilution: "Bolsa pronta para o uso",
		dose: "Oral e IV: 400-600mg a cada 12 horas.Dose máxima: 600mg/dose.",
		renalFunction:
			"TFGe <60: 600 mg /12h (300 mg /12h com base na modelagem PK, requer validação); Hemodiálise 600 mg /12h (administrar uma das doses do dia de diálise AD) ",
		via: "VO e EV",
		class: "Oxazolididona",
		actionMecanism: "Inibição sintese proteíca (50S)",
		actionPlaces: "Pulmão/TM/Pele",
		solubility: "Lipofilico",
		oralBioavailability: "100%",
		pkPd: "AUC24H/MIC",
		micCbm: "Bacteriostática",
		vol: "0,7 L/Kg; 40 a 50 L ",
		lig: "31%",
		actionSpectrum: "Gram Positivos",

		id: "c987a09a-240e-44b6-a4cd-d7fcabc7ac10",
	},
	{
		name: "Meropenem",
		indication:
			"Infecções intra-abdominais, meningite bacteriana em crianças com idade > 3 meses e infecções complicadas da pele/estrutura da pele",
		presentation: "FR 1g",
		dilution:
			"Reconstituição: cada 500mg com 10mL de AD ou SF. ​Diluição: a dose pode ser diluída para concentrações de 1 - 20mg/mL de SF 0,9%, SG 5%. Concentração máxima: 1g em 20mL.",
		dose: "1 g IV a cada 8h: Pode variar de acordo com a situação clínica. Pode ser infundido rapidamente durante 3-5 minutos em uma situação urgente.",
		renalFunction:
			"CrCl >50-90: 1 g a cada 8h\nCrCl 25-50: 1 g a cada 12h\nCrCl 10-25: 0,5 g a cada 12h\nCrCl <10: 0,5 g a cada 24h",
		via: "EV",
		class: "Carbapenêmico",
		actionMecanism: "Inibição sintese de parede celular",
		actionPlaces: "ICS",
		solubility: "Hidrofilico",
		oralBioavailability: "-",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "0,23 - 0,35 L/Kg",
		lig: "2 %",
		actionSpectrum: "Gram Negativos",

		id: "c8cc0af3-2850-4c31-8d40-0ab7ffc78aa2",
	},
	{
		name: "Metronidazol",
		indication:
			"Profilaxia e tratamento das infecções causadas por bactérias anaeróbias; Giardíase; Amebíase; Tricomoníase; Vaginites por Gardnerella vaginallis.",
		presentation:
			"COMP 250mg BOLSA 500mg/100ml (administrado quando VO está contraindicada ou impossibilitada)",
		dilution: "Bolsa pronta para o uso",
		dose: "Adultos: Infecção intra-abdominal: 500 mg VO ou IV de 8/8h, por 4 a 5 dias; Peritonite por flora fecal: dose de ataque de 15mg/kg IV por 1h, após 6h administrar 7,5 mg/kg IV de 6/6h; Abscesso cerebral: 7,5 mg/kg IV de 6/6h; Profilaxia cirúrgica: 500mg IV 60 minutos antes do procedimento. Amebíase intestinal ou extraintestinal: 500 a 750mg VO, de 8/8h, por 7 a 10 dias; Giardíase: 250 mg VO, de 8/8h, por 5 dias; Colite por C. difficile: 500mg VO, de 8/8h, por 10 a 14 dias. Vaginose bacteriana: 500mg VO,12/12h por 7 dias. Tricomoníase: 2g em dose unica ou 250mg V, 12/12h, por 10 dias. Dose máxima: 4g/dia.",
		renalFunction:
			"ClCr < 10 ml/min: 7,5 mg/kg de 12/12h; Hemodiálise: 7,5 mg/kg de 12/12h (após diálise, nos dias de diálise); Diálise peritoneal ambulatorial contínua: 7,5mg/kg de 12/12h; Terapia renal substitutiva contínua: 7,5mg/kg de 6/6h.",
		via: "IV/VO",
		class: "Nitroimidazólicos",
		actionMecanism: "Inibição da síntese de ácidos nucleicos",
		actionPlaces: "TGI; SNC; Trato genitourinário; Pele",
		solubility: "Lipofílico",
		oralBioavailability: "100%",
		pkPd: "AUC24H/MIC",
		micCbm: "Bactericida",
		vol: "0,6 a 0,85 L/kg",
		lig: "20%",
		actionSpectrum:
			"Peptostreptococcus, Clostridium\nperfringens, Clostridium difficile, Clostridium sp, Bacteroides sp, Bacteroides fragilis, Prevotella, Fusobacterium, Veillonella, Entamoeba histolytica, Trichomonas vaginalis, Giardia intestinalis",

		id: "1f095805-3b61-4348-b44d-28cde311d657",
	},
	{
		name: "Oxacilina",
		indication:
			"​Tratamento de infecções, tais como osteomielite, endocardite, septicemia e infecções do sistema nervoso central causada por cepas sensíveis de Staphylococcus",
		presentation: "FR 500mg",
		dilution:
			"IM: reconstituir em 2,7mL de água  p/ injeção; IV: reconstituir em 5 mL de água p/ injetáveis ou SF 0,9%; Diluição: em  água p/ injetáveis e diluir em SF 0,9%, SG 5% ou RL, concentração deverá encontrar-se entre 0,5 a 2 mg/ml.",
		dose: "Adultos, dose usual IV: 1 a 2 g, de 4/4h Bacteremia por MSSA: 12g IV por dia. ",
		renalFunction:
			"CrCl >50-90: 2 g a cada 4h\nCrCl 30-50: 2 g a cada 4h\nCrCl 10-30: 2 g a cada 4h",
		via: "IV/IM",
		class: "Betalactâmicos",
		actionMecanism: "Inibição da síntese de parede celular",
		actionPlaces: "SNC; Ossos; Pulmão; Pele",
		solubility: "Lipofílico",
		oralBioavailability: "-",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "0,4 L/kg",
		lig: "90 - 94%",
		actionSpectrum: "Gram Positivos sensíveis à meticilina",

		id: "67b4ae5e-2ce2-4472-bbe7-4cc71aceb8df",
	},
	{
		name: "Penicilina G Cristalina",
		indication:
			" Infecções estreptocócicas (grupo A, sem bacteremia); Infecções leves e moderadas do trato respiratório superior e da pele; Infecções venéreas: sífilis, bouba, bejel (sífilis endêmica) e pinta; Profilaxia da glomerulonefrite aguda e doença reumática; Profilaxia de recorrências da febre reumática e/ou coreia.",
		presentation: "Fr-AMP 5.000.000 UI",
		dilution:
			"Blau: Reconstiuição IM e IV: 10 ml de água p/ injetáveis; Diluição: SF 0,9% ou SG 5%, observar concentração final de 50.000 UI/ml. ",
		dose: " Adultos, IV: Actinomicose: 10 a 20 milhões UI por dia, como infusão contínua ou dividido em doses de 4/4h ou 6/6h, por 4 a 6 semanas; Infecções de corrente sanguínea: 12 a 30 milhões UI por dia, de 4/4h; Endocardite: 5 a 24 milhões UI por dia em doses de 4/4h ou 6/6h; Meningite bacteriana: 4 milhões UI, de 4/4h; Neurossífilis: 18 a 24 milhões de unidades por dia, em infusão contínua ou em doses de 4/4h por 10 a 14 dias; Osteomielite: 20 a 24 milhões UI por dia, em infusão contínua ou em doses de 4/4h; Infecções de pele e partes moles: 2 a 4 milhões UI a cada 4 a 6h. Pneumonia: 5 a 24 milhões UI por dia em doses de 4/4h ou 6/6h. Doses mais altas, atingindo 10.000.000 e 30.000.000UI diários, poderão ser necessárias para o tratamento de casos de endocardite, meningite meningocócica e pneumocócica.",
		renalFunction:
			"ClCr > 50 a 90 ml/min: 0,5 a 4 milhões UI a cada 4h; 50 > ClCr > 10 ml/min: 0,5 a 4 milhões UI a cada 8h; CrCl < 10 ml/min: 0,5 a 4 milhões UI a cada 12h; Hemodiálise: 0,5 a 4 milhões UI a cada 12h (após diálise nos dias de diálise); Diálise peritoneal ambulatorial contínua: 0,5 a 4 milhões UI a cada 12h; Terapia renal substitutiva contínua: 1 a 4 milhões de 6/6h ou 8/8h.",
		via: "IV/IM",
		class: "Betalactâmicos",
		actionMecanism: "Inibição da síntese de parede celular",
		actionPlaces:
			"SNC; Ossos; Pele e partes moles; Fluidos intersticial, sinovial, pericárdico, peritoneal e pleural ",
		solubility: "Hidrofilico",
		oralBioavailability: "Não possui",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "0,35 L/kg",
		lig: "65%",
		actionSpectrum:
			"Gram Positivos e Gram Negativos; Treponema pallidum; Corynebacterium diphtheriae; Bacillus anthracis; Clostridium sp.; Actinomyces bovis; Streptobacillus moniliformis; Listeria monocytogenes e Leptospira.; Neisseria gonorrhoeae.",

		id: "a079193e-343b-428e-813f-3d57bdd47cc5",
	},
	{
		name: "Piperacilina + Tazobactam",
		indication:
			"Infecções do trato respiratório inferior; Infecções do trato urinário; Infecções intra-abdominais; Infecções da pele e tecidos moles; Sepse bacteriana; Infecções ginecológicas; Infecções neutropênicas febris; Infecções osteoarticulares; Infecções polimicrobianas (microrganismos Gram-positivos/Gram-negativos aeróbios e anaeróbios)",
		presentation: "FRA 4g + 0,5g",
		dilution:
			"Eurofarma e Aurobindo: Reconstituição: 20ml de água p/ injetáveis, SF 0,9%, SG 5% Diluição para 50ml, 100 ou 150 ml de SF 0,9% OU SG 5%.",
		dose: "Adultos, dose usual IV:  Infecções leves a moderadas: 3,375g de 6/6h; Infecções severas: 4,5g de 6/6h ou 8/8h; Infecções por P. aeruginosa: 3,375g de 4/4h ou 4,5g de 6/6h. Dose máxima diária: 18g; Infusão prolongada: 4,5g por 30 min, em seguida 3,375g por 4h a cada 8h.",
		renalFunction:
			"Dose usual IV: 40 > ClCr > 20 ml/min: 2,25g de 6/6h; CrCl < 20 ml/min: 2,25g de 8/8h; Hemodiálise: 2,25g de 12/12h + dose extra de 0,75g após diálise; Diálise peritoneal ambulatorial contínua: 2,25g de 12/12h; Terapia renal substitutiva contínua: 2,25g de 6/6h. Infecções por Pseudomonas: 40 > ClCr > 20 ml/min: 3,375 g de 6/6h; CrCl < 20 ml/min: 2,25g de 6/6h; Hemodiálise: 2,25g de 8/8h + dose extra de 0,75g após diálise; Diálise peritoneal ambulatorial contínua: 2,25g de 8/8h; Terapia renal substitutiva contínua: MIC≤16: 3,375g, em 30 min, de 6/6h; MIC >16 a 64: 4,5 g (mais de 4h) a cada 8h. Infusão prolongada: CrCl < 20 ml/min: 3,375g por 4h de 12/12h; Hemodiálise: 3,375g por 4h de 12/12h; Terapia renal substitutiva contínua: 4,5g por 4h de 8/8h.",
		via: "IV",
		class: "Betalactâmicos",
		actionMecanism: "Inibição da síntese de parede celular",
		actionPlaces: "Trato Genitourinário; TGI; Pulmão; Pele e partes moles",
		solubility: "Hidrofílico",
		oralBioavailability: "-",
		pkPd: "T>MIC",
		micCbm: "Bactericida",
		vol: "Pipe: 0,24L/Kg Tazo: 0,40L/Kg",
		lig: "Pipe: 16%; Tazo: 48%",
		actionSpectrum:
			"Gram-positivos aeróbios: E. faecalis (apenas isolados suscetíveis à ampicilina ou penicilina); Listeria monocytogenes; MSSA; Streptococcus agalactiae; Streptococcus pyogenes // Gram-negativos aeróbios: Citrobacter koseri; H. influenzae; Moraxella catarrhalis; P. mirabilis // Anaeróbios: Clostridium spp.; Eubacterium spp.; Cocos gram-positivos anaeróbicos; Grupo do Bacteroides fragilis; Fusobacterium spp.; Porphyromonas spp.; Prevotella spp.",

		id: "c1e18b49-e4ad-40d8-ba16-5af561b61931",
	},
	{
		name: "Polimixina B",
		indication:
			"Infecções agudas causadas por cepas susceptíveis de P. aeruginosa; Infecções do trato urinário, meninges e sangue; Infecções por cepas susceptíveis dos seguintes microrganismos, quando drogas com menor potencial tóxico são ineficazes ou contraindicadas: H. influenzae (no caso de meningite), E. coli (no caso de ITU), Aerobacter aerogenes e Klebsiella pneumoniae (no caso de bacteremias).",
		presentation: "FR - AMP 500.000 UI",
		dilution:
			"Eurofarma: Reconstituição IV: 10ml de SF 0,9% ou 2ml de água p/ injetáveis IM: 2ml de água p/ injetáveis ou SF 0,9% ou solução de lidocaína 1% Intratecal: 10ml de SF 0,9% Diluição para infusão IV: 300 a 500ml de SF 0,9% ou SG 5%. ",
		dose: "        10.000 UI = 1 mg /// Adulto: Infecções severas (MIC≤ 2 μg/mL): dose de ataque de 2,5 mg/kg em 2h de infusão IV, após 12h, administrar dose de manutenção de 1,5 mg/kg em 1h de infusão IV, repetir a cada 12h; Meningite: 5mg IT por dia, durante 3 a 4 dias, depois 5mg em dias alternados por no mínimo 2 semanas.  ",
		renalFunction: "-",
		via: "IV/IM/IT",
		class: "Polipeptídios",
		actionMecanism:
			"As polimixinas interagem, retirando cálcio e magnésio, causando instabilidade da molécula de polissacarídeo, e aumentando a permeabilidade a membrana com rápida perda de conteúdo celular e morte da  bactéria.",
		actionPlaces: "SNC/TGI/Pulmão/ITU",
		solubility: "Anfipático",
		oralBioavailability: "Não possui",
		pkPd: "AUC/MIC",
		micCbm: "Bactericida",
		vol: "periférico: 0,33 L/kg; central: ~0,09L/kg",
		lig: "60%",
		actionSpectrum: "Gram Negativos exceto Proteus",

		id: "056713f1-6268-46d6-a216-f3365e022787",
	},
	{
		name: "Sulfametoxazol / Trimetropima",
		indication:
			"Infecção de Trato Urinário; Uretrites, Pielonefrites, Prostatite, Infecções no Trato Respiratório; Otite média aguda; Pneumonia por Pneumocystis; Diarreia infecciosa; Shigelose; Infecção por mordedura; Brucelose; Celulite; Infecção do pé diabético; Infecção intra-abdominal; Infecções de Pele e Tecidos Moles; Profilaxia cirúrgica. ",
		presentation:
			"Comprimido: 400mg ou 800mg de Sulmetoxazol + 80mg ou 160mg de trimetroprima; Ampola: 80mg/ml + 16mg/ml.",
		dilution:
			"Diluição: 20 a 30ml de SF 0,9%, SG 5% ou ringer para cada ml de ampola ",
		dose: "        VO: 800mg/160mg ou 20mL da suspensão a cada 12h. \n            Pneumocistose: 15-20mg/kg/dia de Trimetoprima dividida a cada 6-8h. \n        EV \n            Bacteremia: 3-5mg/kg de Trimetoprima a cada 8h. \n            Meningite bacteriana: 10-20mg/kg/dia de Trimetoprima dividida a cada 6-12h. \n            Encefalite por toxoplasma: 10mg/kg/dia de Trimetoprima dividida a cada 12h por 6 semanas  \n            Shigelose: 8-10mg/kg/dia de Trimetoprima dividida em 2-4 doses por 5 dias.\n            Infecção do trato urinário: 8-10mg/kg/dia de Trimetoprima em 2-4 doses por 14 dias Dose máxima: Adulto e pediatria: 20mg/kg/dia (baseado na dose de trimetoprima)",
		renalFunction:
			"CrCl > 50-90ml/min: 5–20 mg/kg/dia (dividido a cada 6-12h); CrCl 30-50ml/min: 5-20 mg/kg/dia (dividido a cada 6-12h); CrCl 10- 29ml/min: 5-10 mg/kg/dia (dividido a cada 12h); CrCl < 10ml/min: Não recomendado; mas se usado: 5–10 mg/kg q24h",
		via: "VO/EV",
		class: "Sulfonamidas",
		actionMecanism: "Inibição da síntese de ácido fólico",
		actionPlaces: "SNC/TGI/Pulmão/ TGU",
		solubility: "Lipofílico",
		oralBioavailability: "70-90%",
		pkPd: "Sem dados",
		micCbm: "Bacteriostática",
		vol: "12/18L sulfametoxazol e 100-120L trimetoprim.",
		lig: " 44% trimetoprim/\n70% sulfametoxazol. ",
		actionSpectrum:
			"Cocos: Staphylococcus spp., Streptococcus b-hemolíticos), Enterococcus faecalis, Streptococcus não b-hemolíticos, S. pneumoniae, Branhamella catarrhalis. Bastonetes Gram-negativos: Haemophilus influenzae, Haemophilus parainfluenzae, Haemophilus ducreyi, E.coli, Citrobacter spp., Citrobacter freundii, Klebsiella pneumoniae, Klebsiella oxytoca,Enterobacter cloacae, Enterobacter aerogenes, Havnia alvei, Serratia marcescens, Serratia liquefaciens, outras Serratia spp., Proteus mirabilis, Proteus vulgaris, Morganella morganii, Providencia rettgeri, outras Providencia spp., Salmonella typhi, Salmonella enteritis, Shiguella spp., Yersinia spp., Vibrio cholerae.",

		id: "77ecf818-c763-4133-99a1-58b1b47b3362",
	},
	{
		name: "Teicoplanina",
		indication:
			"Infecção complicada de pele e tecidos moles; Pneumonia; ITU complicada s e\nperitonite associada à diálise peritoneal crônica ambulatorial; Infecção óssea e articular; Endocardite; Infecção por C. difficile (V.O). s e\nperitonite associada à diálise peritoneal crônica ambulatorial.\nTambém está indicada no tratamento de infecções em pacientes alérgicos às penicilinas ou cefalosporinas.  ",
		presentation: "FR - 200mg; FR - 400mg",
		dilution:
			"Reconstiuição: 3mL de AD; Diluição: 20-200mL de SF 0,9%, SG 5% ou RL.",
		dose: "Adulto: \nIM e EV: 3 doses de 400mg IV a cada 12 horas, seguida de uma dose de manutenção de 400mg EV ou IM 1 vez/dia -  dose padrão de 400mg corresponde a aproximadamente 6mg/kg. Em pacientes com mais de 85kg, deve-se utilizar a dose de 6mg/kg; Pacientes com endocardite ou queimaduras graves: 12mg/kg/dia; Profilaxia de endocardite: 400mg (6mg/kg) no momento da indução anestésica; Diarreia por Clostridium difficile: 200mg VO 2 vezes/dia por 7-14 dias.  Dose Máxima: 12mg/kg/dia.",
		renalFunction:
			"CrCl 30-80ml/min:6 ou 12 mg/kg a cada 48h. CrCl<30ml/min: 6 ou 12 mg/kg a cada 72h. Terapia sustentada contínua:  6-12 mg/kg a cada 48h.",
		via: "VO/IM/IV",
		class: "Glicopeptídeo",
		actionMecanism: "Inb sintese da parede celular",
		actionPlaces: "SN/Ossos/Pulmão/TGI",
		solubility: "Hidrofílico",
		oralBioavailability: "Não possui",
		pkPd: "AUC24H/MIC",
		micCbm: "Bactericida",
		vol: "0,9-1,6 L/Kg",
		lig: "90 - 95%",
		actionSpectrum:
			"Gram Positivas: \nE. faecalis; S. epidermidis (MR); Staph coag-neg (MR); P. acnes; Peptoestreptococos; S. aureus MRSA; S. aureus MSSA. Anaérobios: Clostridium sp.",

		id: "73b2c0b2-694a-4853-9a62-21f0205612ef",
	},
	{
		name: "Tigeciclina",
		indication:
			"Tratamento de infecções complicadas da pele e da estrutura da pele causada por organismos sensíveis, incluindo Staphylococcus aureus resistente à meticilina e sensíveis à vancomicina; infecções complicadas intra-abdominais e pneumonia comunitária.\n",
		presentation: "Fr - AMP 50MG",
		dilution:
			"Reconstituição 5,3mL de SF (10mg/mL). Diluição 100mL SF ou SG. Concentração Máx: 1mg/mL ",
		dose: "EV: 100 mg seguida de 50 mg a cada 12h",
		renalFunction: "Nenhum ajuste de dose é necessário.",
		via: "EV",
		class: "Glicilciclina",
		actionMecanism: "Inb sintese proteica (30S)",
		actionPlaces: "Pele e partes moles; TGI; Pulmão.",
		solubility: "Lipofílico",
		oralBioavailability: "Não possui",
		pkPd: "AUC/MIC 24h",
		micCbm: "Bacteriostático",
		vol: "7-9 L/kg",
		lig: "71 - 89%",
		actionSpectrum:
			"Gram Positivas: Staphylococcus aureus (meticilina- isolados suscetíveis e resistentes à meticilina), grupo Streptococcus anginosus (inclui S. anginosus , Streptococcus intermedius e Streptococcus constellatus); Enterococcus faecalis (isolados sensíveis à vancomicina). Aeróbios gram negativos:  Citrobacter freundii , Enterobacter cloacae , Escherichia coli , Klebsiella oxytoca , Klebsiella pneumoniae. Anaeróbios: Bacteroides fragilis, Bacteroides thetaiotaomicron , Bacteroides uniformis , Bacteroides vulgatus , Clostridium perfringens.",

		id: "f146eacf-261d-4177-9545-6a34f81acec9",
	},
	{
		name: "Vancomicina",
		indication:
			"A vancomicina é um antibiótico glicopeptídeo mais frequentemente usado na forma parenteral para tratamento empírico ou específico de infecções por Staphylococcus aureus (MRSA) e Staphylococcus epidermidis (MRSE) resistentes à meticilina. No caso de alergia à penicilina, também pode ser usado para Staphylococcus suscetível. A formulação oral é a terapia preferida para colite grave por C. difficile.",
		presentation: "FR - 500 mg",
		dilution:
			"Reconstituir: 10mL de AD. Diluição: em 100 mL SF ou 100 mL de SG",
		dose: "EV infusão intermitente - dose de ataque: 20-30 mg/kg, infundido a uma taxa de 10-15 mg/min (máximo de 3 g), dose de matutenção: 15-20 mg/kg durante 60 min a cada 8-12h ajustado para atingir o alvo AUC 24 de 400-600 µg/mL x h; EV infusão continua - Dose de ataque: 15-20 mg/kg (taxa de infusão 10-15 mg/min) Dose de infusão contínua: 30-40 mg/kg (até 60 mg/kg) durante 24 horas diariamente. Inicie a infusão contínua imediatamente após a conclusão da infusão da dose de ataque; Via oral/SNE - 125 mg VS a cada 6 horas x 10 dias para colite por C. difficile (terapia intravenosa ineficaz). 500 mg - 2 g VS diariamente (dividido a cada 6-8h) para enterocolite estafilocócica.",
		renalFunction:
			"CrCl 50 a 100: 15-20 mg/kg 12/12h; CrCl 20-49: 15-20 mg/kg 24/24h; CrCl <20: 15-20 mg/kg 48/48h; hemodiálise: Diálise Peritoneal Ambulatorial Contínua - 7,5 mg/kg a cada 48-96h Terapia de Substituição Renal Continua (taxa de efluente 20-25 mL/kg/h) 7,5-10 mg/kg 12/12h",
		via: "VO/EV/VS",
		class: "Glicopeptídeo",
		actionMecanism:
			"Inibe a síntese da parede celular bacteriana bloqueando a polimerização do glicopeptídeo através da ligação forte à porção D alanil-D-alanina do precursor da parede celular",
		actionPlaces: "SN/Ossos/Pulmão/TGI",
		solubility: "Hidrofílico",
		oralBioavailability: "-",
		pkPd: "AUC24H/MIC",
		micCbm: "Bactericida",
		vol: "0,7 L/Kg",
		lig: "55%",
		actionSpectrum: "Bacterias Gram Positivos",

		id: "f5378ee6-5f03-450b-bf04-c6beeb503d43",
	},
	{
		name: "Voriconazol",
		indication: "Indefinido",
		presentation: "COMP 200mg",
		dilution: "-",
		dose: "​Dose de ataque: 6mg/kg a cada 12horas. Dose de manutenção:Aspergilose invasiva e Scedosporioses e Fusarioses: 4mg/kg a cada 12 horas. ​Infecções invasivas graves por Candida:​3-4mg/kg a cada 12 horas",
		renalFunction: "Indefinido",
		via: "VO/VO",
		class: "Antifungico triazólico",
		actionMecanism: "Inibição do ergosterol",
		actionPlaces: "TRI/ ICS/ PELE/ ESOFAGO/PULMÃO",
		solubility: "Lipofílico",
		oralBioavailability: "96%",
		pkPd: "AUC24H/MIC",
		micCbm: "Fungistático",
		vol: "4,6  L/Kg",
		lig: "58%",
		actionSpectrum: "Aspergillus/ Candida / Scesdosporium / Fusarium/",

		id: "65f8572b-787e-4817-acfd-b6b990ecf7f0",
	},
	{
		name: "RIFAMPICINA + ISONIAZIDA + PIRAZINAMIDA + ETAMBUTOL",
		indication:
			"Tratamento da tuberculose latente ou ativa (em combinação); Profilaxia meningocócica (tratamento de portadores assintomáticos de Neisseria meningitidis; Anaplasmose sintomática; Infecção por Bartonela spp. Brucelose; Prurido colestático; Endocardite; Hidradenite supurativa, moderada a grave; Lepra; Infecção micobacteriana não tuberculosa.",
		presentation: "RIFAMPICINA COMP 150 mg; Cápsula 300mg.",
		dilution: "-",
		dose: "        Tuberculose: < 20kg: 10mg/kg/dia; 20-35kg: 300mg/dia; 35-45kg: 450mg/dia; > 50kg: 600mg/dia - VO, 1 vez/dia, por 6-9 meses;\n        Endocardite infecciosa: 300mg, VO, 3 vezes/dia, por 6 semanas;\n        Profilaxia de infeção por Haemophilus influenzae: 600mg, VO, 1 vez/dia, por 4 dias;\n        Auxiliar em meningite bacteriana por Sthaphylococcus aures ou epidermidis: 600mg, VO, 1 vez/dia;\n        Hanseníase: Dose mensal de 600mg. Se < 35kg, a dose mensal deve ser de 450mg, VO. Dose máxima: Adulto e Pediatria: 600mg/dia. Nas infecções das vias urinárias, a dosagem diária sugerida é de 900 a 1200 mg.",
		renalFunction: "Nenhum ajuste de dose é necessário.",
		via: "VO",
		class: "Antituberculoso/Macrocíclico",
		actionMecanism: "Inibição da biossíntese do RNA bacteriano.",
		actionPlaces: "SNC/ Pulmão/Ossos/TGI",
		solubility: "Lipofílico",
		oralBioavailability: "70 - 90%",
		pkPd: "C/MIC",
		micCbm: "Bactericida",
		vol: "0,65 L/kg",
		lig: "80%",
		actionSpectrum:
			"Micobactérias, Gram Positivos e Gram Negativos: Escherichia coli, Pseudomonas sp., Proteus indol negativo e indol positivo, Klebsiella sp.,\nStaphylococcus aureus e estafilococos coagulase negativa, Neisseria meningitidis, Haemophilus influenzae,\nLegionella sp., M. tuberculosis, M. kansasii, M. intracellulare e M. avium.",

		id: "da0fef52-ab07-45b3-bc0b-896699e9fab2",
	},
	{
		name: "DAPSONA",
		indication:
			"Hanseníase; Pneumonia por Pneumocystis carinii; profilaxia de toxoplasmose; Dermatite herpetiforme bolhosa",
		presentation: "COMP 100 mg",
		dilution: "-",
		dose: "Adulto, VO: Haseníase, em associação com outros antimicobacterianos: 100 mg VO por dia; Profilaxia de pneumonia por P. carinii: 100 mg VO por dia ou 50 mg VO 12/12h, ou ainda, 50 mg VO por dia associada a pirimetamina + leucovorina ou 200 mg VO por semana associada a pirimetamina + leucovorina; Tratamento para pneumonia por P. carinii: 100 mg VO por dia associado a 5mg/kg de trimetoprima de 8/8h por 21 dias; Profilaxia de toxoplasmose: 50 mg VO por dia em associação com pirimetamina + leucovorina ou 200 mg por semana em associação com pirimetamina +leucovorina; Dermatite herpetiforme: iniciar com 50 mg VO por dia, dose de manutenção varia de 50 a 300mg VO por dia, conforme a resposta obtida.",
		renalFunction: "-",
		via: "VO",
		class: "Hansenostático (sulfona)",
		actionMecanism:
			"Antagonista competitivo do ácido para-aminobenzóico (PABA), impede que o microrganismo suscetível utilize PABA para a síntese de ácido fólico.",
		actionPlaces:
			"Distribuída na maioria dos tecidos, principalmente pele, músculos, rins e fígado.",
		solubility: "Hidrofílica",
		oralBioavailability: "70-100%",
		pkPd: "-",
		micCbm: "Bacteriostático",
		vol: "1,5 L/kg",
		lig: "70%",
		actionSpectrum:
			"Mycobacterium leprae; Pneumocystis jiroveci; Toxoplasma gondii (profilaxia)",

		id: "cdceab75-b01e-4c03-921b-1d8eae5b3c0f",
	},
	{
		name: "CLOFAZIMINA",
		indication:
			"Indivíduos que apresentem um ou mais dos sinais cardinais, análise laboratorial ou\ndermatológica e/ou biópsia positivos para o diagnóstico de Hanseníase e que necessitam de\npoliquimioterapia (PQT)",
		presentation: "COMP 100 mg ou 50 mg",
		dilution: "-",
		dose: "DOSE USUAL\n50 mg VO a cada 24 horas + 300 mg 1x/mês\nDOSE MÁXIMA\n300 mg/dia (100mg x 3).",
		renalFunction: "-",
		via: "VO",
		class: "Hansenostático",
		actionMecanism:
			"Mecanismo exato desconhecido; a atividade antibacteriana pode ser devida à ligação ao DNA do Mycobacterium leprae.",
		actionPlaces: "-",
		solubility: "Lipofílica",
		oralBioavailability: "45 - 62%",
		pkPd: "-",
		micCbm: "Bactericida",
		vol: "1300 L",
		lig: "10 mcg/mL",
		actionSpectrum: "Mycobacterium leprae; Micobacterium avium-intracellulare",

		id: "8411b6a3-a12b-43c7-bd98-40754da2b27f",
	},
	{
		name: "OSELTAMIVIR",
		indication: "Indefinido",
		presentation: "CÁPSULA 30 mg e 75 mg",
		dilution: "-",
		dose: "Indefinido",
		renalFunction: "Indefinido",
		via: "VO",
		class: "Agente antiviral",
		actionMecanism: "Inibe a neuraminidase do vírus influenza.",
		actionPlaces: "Indefinido",
		solubility: "Indefinido",
		oralBioavailability: "75%",
		pkPd: "Indefinido",
		micCbm: "Virustático",
		vol: "0,32 +- 0,9 L/kg",
		lig: "42%",
		actionSpectrum: "Vírus da influenza A e B",

		id: "15a574c4-28a2-4142-a7c5-66bef0ee517d",
	},
];
