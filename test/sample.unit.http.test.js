/**
 * Copyright 2018, Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START functions_http_unit_test]
const test = require(`ava`);
const sinon = require(`sinon`);

const helloHttp = require(`..`).helloHttp;

test(`helloHttp: should print a name`, t => {
  // Initialize mocks
  const req = {
    body: {
      name: 'name'
    }
  };
  const res = { send: sinon.stub() };

  // Call tested function
  helloHttp(req, res);

  // Verify behavior of tested function
  t.true(res.send.calledOnce);
  t.deepEqual(res.send.firstCall.args, [`Hello name!`]);
});

test(`helloHttp: should print hello world`, t => {
  // Initialize mocks
  const req = {
    body: {}
  };
  const res = { send: sinon.stub() };

  // Call tested function
  helloHttp(req, res);

  // Verify behavior of tested function
  t.true(res.send.calledOnce);
  t.deepEqual(res.send.firstCall.args, [`Hello World!`]);
});
// [END functions_http_unit_test]
