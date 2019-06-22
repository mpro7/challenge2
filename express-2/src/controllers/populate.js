import boom from '@hapi/boom';
import helpers from '../helpers';

import models from '../models';
import datas from '../data';

class Populate {
  constructor() {

  }

  static populateCompanies(req, res, next) {
    helpers.LOGGER.info("populateCompanies - '/' - called");

    helpers.LOGGER.info(`datas.companyData - ${JSON.stringify(datas.companyData)}`);

    models.Company.insertMany(datas.companyData, (err, objs) => {
      if (err) {
        next(boom.badRequest(err));
      }

      return res.status(201).json(objs);
    });
  }

  static populateLocations(req, res, next) {
    helpers.LOGGER.info("populateLocations - '/' - called");

    helpers.LOGGER.info(`datas.locationData - ${JSON.stringify(datas.locationData)}`);

    models.Location.insertMany(datas.locationData, (err, objs) => {
      if (err) {
        next(boom.badRequest(err));
      }

      return res.status(201).json(objs);
    });
  }

  static cleanAll(req, res, next) {
    helpers.LOGGER.info("cleanAll - '/' - called");

    models.Company.deleteMany({}, function(err) { 
      models.Location.deleteMany({}, function(err) { 
        if (err) {
          next(boom.badRequest(err));
        }

        models.User.deleteMany({}, function(err) { 
          if (err) {
            next(boom.badRequest(err));
          }

          models.Shipment.deleteMany({}, function(err) { 
            if (err) {
              next(boom.badRequest(err));
            }

            models.Milestone.deleteMany({}, function(err) { 
              if (err) {
                next(boom.badRequest(err));
              }

              models.Event.deleteMany({}, function(err) { 
                if (err) {
                  next(boom.badRequest(err));
                }

                models.LogisticUnit.deleteMany({}, function(err) { 
                  if (err) {
                    next(boom.badRequest(err));
                  }

                  models.TradeUnit.deleteMany({}, function(err) { 
                    if (err) {
                      next(boom.badRequest(err));
                    }

                    models.ConsumableUnit.deleteMany({}, function(err) { 
                      if (err) {
                        next(boom.badRequest(err));
                      }
                
                      return res.status(201).json({});
                    });
                  });
                });
              });
            });
          });
        });
      });
    });

    models.Location.insertMany(datas.locationData, (err, objs) => {
      if (err) {
        next(boom.badRequest(err));
      }

      return res.status(201).json(objs);
    });
  }

}

export default Populate;