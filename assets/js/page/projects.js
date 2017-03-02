var Projects = (function() {
    function ProjectsViewModel() {
        var self = this;
        self.title = "";
        self.text = "";
        self.year = "";
        self.url = "";
    }

    function ProjectsApiService() {
        var self = this;

        // retrieves all arrivals from the API
        self.getAll = function() {
            return new Promise(function(resolve, reject) {
                var request = new XMLHttpRequest();
                request.open('GET', './projects/api');

                request.onload = function() {
                    // success
                    if (request.status === 200) {
                        // resolve the promise with the parsed response text (assumes JSON)
                        resolve(JSON.parse(request.response));
                    } else {
                        // error retrieving file
                        reject(Error(request.statusText));
                    }
                };

                request.onerror = function() {
                    // network errors
                    reject(Error("Network Error"));
                };

                request.send();
            });
        };
    }

    function ProjectsAdapter() {
        var self = this;

        self.toProjectsViewModel = function(data) {
            if (data) {
                var vm = new ProjectsViewModel();
                vm.title = data.title;
                vm.text = data.text;
                vm.year = data.year;
                vm.url = data.url;
                return vm;
            }
            return null;
        };

        self.toProjectsViewModels = function(data) {
            if (data && data.length > 0) {
                return data.map(function(item) {
                    return self.toProjectsViewModel(item);
                });
            }
            return [];
        };
    }

    function ProjectsController(projectsApiService, projectsAdapter) {
        var self = this;

        self.getAll = function() {
            // retrieve all the arrivals from the API
            return projectsApiService.getAll().then(function(response) {
                return projectsAdapter.toProjectsViewModels(response);
            });
        };
    }


    // initialize the services and adapters
    var projectsApiService = new ProjectsApiService();
    var projectsAdapter = new ProjectsAdapter();

    // initialize the controller
    var projectsController = new ProjectsController(projectsApiService, projectsAdapter);

    return {
        loadData: function() {
            // retrieve all routes
            document.querySelector(".arrivals-list").classList.add('loading')
            projectsController.getAll().then(function(response) {
                // bind the arrivals to the UI
                Page.vm.projects(response);
                document.querySelector(".arrivals-list").classList.remove('loading')
            });
        }
    }

})();
