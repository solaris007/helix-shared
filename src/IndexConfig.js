/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
const SchemaDerivedConfig = require('./SchemaDerivedConfig.js');
const { NamedMapHandler } = require('./NamedMapHandler');

class IndexConfig extends SchemaDerivedConfig {
  constructor() {
    super({
      filename: 'helix-query.yaml',
      schemas: {
        '^/$': 'indexconfig.schema.json',
        '^/indices/.*$': 'index.schema.json',
        '^/indices/.*/properties/.*$': 'property.schema.json',
        '^/indices/.*/queries/.*$': 'query.schema.json',
      },
      handlers: {
        '^/indices$': NamedMapHandler(),
        '^/indices/.*/properties$': NamedMapHandler(),
        '^/indices/.*/queries$': NamedMapHandler(),
      },
    });
  }

  /**
   *
   * @param {string} indexname name of the search index
   * @param {string} queryname name of the query
   * @param {object} params key-value pairs of the request parameters of the request
   */
  getQueryURL(indexname, queryname, params) {
    const [myindex] = this.indices.filter((index) => index.name === indexname);
    if (!myindex) {
      return;
    }
    const [myquery] = myindex.queries.filter((query) => query.name === queryname);
    if (!myquery) {
      return;
    }
    throw new Error('Work in progress', params);
  }
}

module.exports = IndexConfig;
