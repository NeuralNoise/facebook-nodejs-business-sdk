/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * Place
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Place extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      location: 'location',
      name: 'name',
      overall_rating: 'overall_rating'
    });
  }

  get (fields, params): Place {
    return this.read(
      fields,
      params
    );
  }
}
