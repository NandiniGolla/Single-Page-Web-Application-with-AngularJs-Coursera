(function() {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
           templateUrl: 'module4-solution/templates/categories.component.html',
            bindings: {
                categories: '<'
            }
        });
})();
