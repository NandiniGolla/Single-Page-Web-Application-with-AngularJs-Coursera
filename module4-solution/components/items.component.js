(function() {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'module4-solution/templates/items.component.html',
            bindings: {
                items: '<'
            }
        });
})();
