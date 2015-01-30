'use strict';

/**@ngInject*/
function ProductsAdminController(categories, clouds) {
  this.categories = categories;
  this.clouds = clouds;

  // TODO: Where are images stored and retrieved from?
  this.productImages = [
    'products/aws_ec2.png',
    'products/aws_rds.png',
    'products/aws_s3.png',
    'products/redhat.png',
    'products/ubuntu.png',
    'products/jira.png',
    'products/windows.png',
    'products/exchange.png',
    'products/confluence.png',
    'products/php.png',
    'products/java.png',
    'products/rails.png',
    'products/apache.png',
    'products/database.png',
    'products/postgresql.png',
    'products/dna.png',
    'products/hadoop.png',
    'products/kb.png',
    'products/teradata.png',
    'products/mssql.png',
    // Filling in with the project images
    'projects/1.png',
    'projects/2.png',
    'projects/3.png',
    'projects/4.png',
    'projects/5.png',
    'projects/10.png',
    'projects/11.png',
    'projects/12.png',
    'projects/13.png',
    'projects/14.png',
    'projects/15.png',
    'projects/16.png',
    'projects/17.png',
    'projects/18.png',
  ];
}

ProductsAdminController.resolve = {
  /**@ngInject*/
  categories: function(ProductTypesResource) {
    return ProductTypesResource.query({'includes[]': ["questions"]}).$promise;
  },
  /**@ngInject*/
  clouds: function(CloudsResource) {
    return CloudsResource.query().$promise;
  }

};

module.exports = ProductsAdminController;
