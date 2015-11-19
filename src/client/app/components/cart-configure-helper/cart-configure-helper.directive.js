(function() {
  'use strict';

  angular.module('app.components')
    .factory('CartConfigureHelper', CartConfigureHelperFactory);

  /** @ngInject */
  function CartConfigureHelperFactory($modal) {
    var service = {
      showModal: showModal
    };

    return service;

    function showModal(project, productRow) {
      var modalOptions = {
        templateUrl: 'app/components/cart-configure-helper/cart-configure-helper.html',
        controller: CartConfigureHelperController,
        controllerAs: 'vm',
        resolve: {
          productDetails: resolveProductDetails,
          project: resolveProject,
          productRow: resolveProductRow
        },
        windowTemplateUrl: 'app/components/common/modal-window.html'
      };
      var modal = $modal.open(modalOptions);

      return modal.result;

      function resolveProductDetails(Product) {
        return Product.get({id: productRow.product.id, 'includes[]': ['product_type', 'provider']}).$promise;
      }

      function resolveProject() {
        return project;
      }

      function resolveProductRow() {
        return productRow;
      }
    }
  }

  /** @ngInject */
  function CartConfigureHelperController(project, productRow, productDetails) {
    var vm = this;

    var product = productRow.product;
    vm.selections = {
      name: productRow.service.name ? productRow.service.name : ''
    };
    vm.project = project;
    vm.productDetails = productDetails;
    vm.subHeading = [productDetails.name, productDetails.product_type.name].join(' :: ');

    activate();

    function activate() {
      initFields();
    }

    // Private
    function initFields() {
      vm.fields = [
        {
          key: 'name',
          type: 'text',
          templateOptions: {
            label: 'Service Name',
            required: true
          },
          validation: {
            messages: {
              required: '"A service name must be provided"'
            }
          }
        }
      ];
    }
  }
})();
