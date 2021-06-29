const normalServices = [
	{
		"Title": "Quimica Sanguinea (3), (6)",
		"Category": "Quimica Clinica"
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