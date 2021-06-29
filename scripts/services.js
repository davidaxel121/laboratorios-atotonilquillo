const normalServices = [
	{
		"Title": "Citometría Hemática",
		"Category": "Hematologia"
	},
	{
		"Title": "Formula Roja",
		"Category": "Hematologia"
	},
	{
		"Title": "V.S.G",
		"Category": "Hematologia"
	},
	{
		"Title": "Recuento de Plaquetas",
		"Category": "Hematologia"
	},
	{
		"Title": "Reticulocitos",
		"Category": "Hematologia"
	},
	{
		"Title": "Tiempo de Sangrado y Coagulación",
		"Category": "Hematologia"
	},
	{
		"Title": "Tiempo de Protombina",
		"Category": "Hematologia"
	},
	{
		"Title": "Tiempo Parcial de Tromboplastina",
		"Category": "Hematologia"
	},
	{
		"Title": "Fibrinógeno",
		"Category": "Hematologia"
	},
	{
		"Title": "Células L.E",
		"Category": "Hematologia"
	},
	{
		"Title": "Grupo Sanguíneo y Factor Rh",
		"Category": "Hematologia"
	},
	{
		"Title": "P. de Coombs Directo",
		"Category": "Hematologia"
	},
	{
		"Title": "P. de Coombs Indirecto",
		"Category": "Hematologia"
	},
	{
		"Title": "Hierro Sérico",
		"Category": "Hematologia"
	},
	{
		"Title": "Citología Nasal",
		"Category": "Hematologia"
	},
	{
		"Title": "Hemoglobina Glicosilada",
		"Category": "Hematologia"
	},
	{
		"Title": "Dimero D",
		"Category": "Hematologia"
	},
	{
		"Title": "Tironina T3",
		"Category": "Hormonas"
	},
	{
		"Title": "Tironina T4",
		"Category": "Hormonas"
	},
	{
		"Title": "TSH (ultrasensible)",
		"Category": "Hormonas"
	},
	{
		"Title": "T3 Libre",
		"Category": "Hormonas"
	},
	{
		"Title": "T4 Libre",
		"Category": "Hormonas"
	},
	{
		"Title": "T3 Captación",
		"Category": "Hormonas"
	},
	{
		"Title": "Indice de Tiroxina",
		"Category": "Hormonas"
	},
	{
		"Title": "Perfil Tiroideo 3 ( ) 7",
		"Category": "Hormonas"
	},
	{
		"Title": "Prolactina",
		"Category": "Hormonas"
	},
	{
		"Title": "Progesterona",
		"Category": "Hormonas"
	},
	{
		"Title": "LH",
		"Category": "Hormonas"
	},
	{
		"Title": "FSH",
		"Category": "Hormonas"
	},
	{
		"Title": "Estradiol",
		"Category": "Hormonas"
	},
	{
		"Title": "Perfil Ovarico 5 ( )",
		"Category": "Hormonas"
	},
	{
		"Title": "Testosterona Total ( ) Libre",
		"Category": "Hormonas"
	},
	{
		"Title": "Sub-Unida Beta Sérica",
		"Category": "Hormonas"
	},
	{
		"Title": "Cuantificación de Fracción Beta HGC",
		"Category": "Hormonas"
	},
	{
		"Title": "General de Orina ",
		"Category": "Orinas"
	},
	{
		"Title": "Depuración de Creatinina, Orina 24 Hrs.",
		"Category": "Orinas"
	},
	{
		"Title": "Proteína en Orina 24 Hrs.",
		"Category": "Orinas"
	},
	{
		"Title": "Microalbuminuria en Orina 24 Hrs.",
		"Category": "Orinas"
	},
	{
		"Title": "BAAR Orina 24 Hrs.",
		"Category": "Orinas"
	},
	{
		"Title": "Quimica Sanguinea (3), (6)",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Glucosa",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Urea",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Creatina",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Ac. Urico",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Colesterol Total",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Triglicéridos",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Colesterol de Alta y Baja Densidad, VLDL",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Esteres de Colesterol",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Curva de Tolerancia a la Glucosa",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Glucosa Post-Prandial",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Lípidos Totales",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Perfil de Lípidos",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Proteínas Totales Relación A/G",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Fosfatasa Alcalina",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Fosfatasa Acida",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Fracción Prostática",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Troponina",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Bilirrubinas",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Transaminasa G. Pirúvica",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Transaminasa G. Oxalacética",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Deshidrogenasa Láctica",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Creatin Fosfoquinasa-CK",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Fracción CK-MB",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Amilasa",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Lipasa",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Electrolitos (Cl, Na, K)",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Calcio",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Fósforo",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Magnesio",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Litio",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Electroforesis de Lípidos",
		"Category": "Quimica Clinica"
	},
	{
		"Title": "Reacciones Febriles",
		"Category": "Serologia"
	},
	{
		"Title": "Antiestreptolisinas",
		"Category": "Serologia"
	},
	{
		"Title": "Proteina C. Reactiva",
		"Category": "Serologia"
	},
	{
		"Title": "Factor Reumatoide",
		"Category": "Serologia"
	},
	{
		"Title": "VDRL",
		"Category": "Serologia"
	},
	{
		"Title": "Toxoplasma IgG, IgM",
		"Category": "Serologia"
	},
	{
		"Title": "Torch Completo",
		"Category": "Serologia"
	},
	{
		"Title": "HIV",
		"Category": "Serologia"
	},
	{
		"Title": "ACS Anti Hepatitis A IgG, IgM",
		"Category": "Serologia"
	},
	{
		"Title": "ACS Anti Hepatitis B",
		"Category": "Serologia"
	},
	{
		"Title": "ACS Anti Hepatitis C",
		"Category": "Serologia"
	},
	{
		"Title": "Citomegaluvirus IgG, IgM",
		"Category": "Serologia"
	},
	{
		"Title": "Herpes I, IgG, IgM",
		"Category": "Serologia"
	},
	{
		"Title": "Herpes II, IgG, IgM",
		"Category": "Serologia"
	},
	{
		"Title": "Coproparasitoscópico (1), (3)",
		"Category": "Parasitologia"
	},
	{
		"Title": "Coprológico General ",
		"Category": "Parasitologia"
	},
	{
		"Title": "Rotavirus( ), Adenovirus ( )",
		"Category": "Parasitologia"
	},
	{
		"Title": "Azucares Reductores",
		"Category": "Parasitologia"
	},
	{
		"Title": "Leucocitos en Moco Fecal",
		"Category": "Parasitologia"
	},
	{
		"Title": "Inv. de Trofozoitos",
		"Category": "Parasitologia"
	},
	{
		"Title": "P. Graham (Oxiuros)",
		"Category": "Parasitologia"
	},
	{
		"Title": "Sangre Oculta en Heces",
		"Category": "Parasitologia"
	},
	{
		"Title": "Cultivo Faringeo",
		"Category": "Microbiologia"
	},
	{
		"Title": "Cultivo Vaginal",
		"Category": "Microbiologia"
	},
	{
		"Title": "Urocultivo",
		"Category": "Microbiologia"
	},
	{
		"Title": "Espermocultivo",
		"Category": "Microbiologia"
	},
	{
		"Title": "Coprocultivo",
		"Category": "Microbiologia"
	},
	{
		"Title": "Hemocultivo",
		"Category": "Microbiologia"
	},
	{
		"Title": "Cultivo Uretral",
		"Category": "Microbiologia"
	},
	{
		"Title": "Cultivo de Expectoración",
		"Category": "Microbiologia"
	},
	{
		"Title": "Cultivo Secreción",
		"Category": "Microbiologia"
	},
	{
		"Title": "Espermatobioscopía",
		"Category": "Microbiologia"
	},
	{
		"Title": "Frotis Al Gram",
		"Category": "Microbiologia"
	},
	{
		"Title": "Antigeno CA 15.3 (Mama)",
		"Category": "Marcadores Tumorales"
	},
	{
		"Title": "Antigeno CA 125 (Ovario)",
		"Category": "Marcadores Tumorales"
	},
	{
		"Title": "Antigeno CA 19.9 (Pancreas)",
		"Category": "Marcadores Tumorales"
	},
	{
		"Title": "Antigeno Carcinoembrionario (CEA)",
		"Category": "Marcadores Tumorales"
	},
	{
		"Title": "Alfafetoproteinas",
		"Category": "Marcadores Tumorales"
	},
	{
		"Title": "Antigeno Prostatico Especifico PSA",
		"Category": "Marcadores Tumorales"
	},
	{
		"Title": "Antigeno Prostatico PSA Libre",
		"Category": "Marcadores Tumorales"
	},
	{
		"Title": "Acs. Helicobacter Pylori (suero)",
		"Category": "Varios"
	},
	{
		"Title": "Ag. Helicobacter Pylori (heces)",
		"Category": "Varios"
	},
	{
		"Title": "Perfil de Drogas ()3, ()5",
		"Category": "Varios"
	},
	{
		"Title": "Inmunoglobulina IgG, IgM, IgA",
		"Category": "Varios"
	},
	{
		"Title": "Papanicolaou",
		"Category": "Varios"
	},
	{
		"Title": "BAAR Expectoración",
		"Category": "Varios"
	},
	{
		"Title": "Anfetaminas",
		"Category": "Varios"
	},
	{
		"Title": "Cocaína",
		"Category": "Varios"
	},
	{
		"Title": "Canabinoides",
		"Category": "Varios"
	},
	{
		"Title": "Barbituricos",
		"Category": "Varios"
	},
	{
		"Title": "Benzodiacepinas",
		"Category": "Varios"
	}
];

const app = new Vue({
	el: "#table",
	data: {
		search: "",
		services: [
			{
				"Title": "Citometría Hemática",
				"Category": "Hematologia"
			},]
	},
	created() {
		this.getServices;
	},
	computed: {
		filteredList() {
			return this.services.filter(info => {
				return info.Title.toLowerCase().includes(this.search.toLowerCase());
			});
		},
		getServices() {
			const services = normalServices;

			console.log(services);
			this.services = services;
		}
	}
});