const app = new Vue({
    el: "#table",
    data: {
      search: "",
      services: []
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
        fetch("../json/services.json")
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.services = data.Services;
          });
      }
    }
  });
  