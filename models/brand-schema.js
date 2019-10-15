/*
   Copyright 2018 Makoto Consulting Group, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

/**
 * Mongoose Schema definition - brand
 */

const mongoose = require('mongoose');
const ObjectId = mongoose.ObjectId;

let Schema = mongoose.Schema;

let brandSchema = new Schema({
    _id: { type: ObjectId, required: true },
    id: { type: ObjectId, required: true },
    description: { type: String, required: true },
    manufacturer: { type: String, required: false },
    address: { type: String, required: false },
    website: { type: String, required: false }
});

module.exports = mongoose.model('Brand', brandSchema);
