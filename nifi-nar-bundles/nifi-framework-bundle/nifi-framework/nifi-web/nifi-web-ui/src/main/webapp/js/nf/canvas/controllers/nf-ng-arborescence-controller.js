/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global define, module, require, exports */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery',
                'nf.Common'],
            function ($, nfCommon) {
                return (nf.ng.ArborescenceCtrl = factory($, nfCommon));
            });
    } else if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = (nf.ng.ArborescenceCtrl =
            factory(require('jquery'),
                require('nf.Common')));
    } else {
        nf.ng.ArborescenceCtrl = factory(root.$,
            root.nf.Common);
    }
}(this, function ($, nfCommon) {
    'use strict';

    return function (serviceProvider) {
        'use strict';

        function ArborescenceCtrl() {
            this.arborescence = {};
        }

        ArborescenceCtrl.prototype = {
            constructor: ArborescenceCtrl,

            /**
             *  Register the arborescence controller.
             */
            register: function () {
                if (serviceProvider.arborescenceCtrl === undefined) {
                    serviceProvider.register('arborescenceCtrl', arborescenceCtrl);
                }
            },

            /**
             * Generate the arborescence.
             *
             * @param {object} arborescenceEntity  The arborescence
             */
            generateArborescence: function (arborescenceEntity) {
                this.arborescence = arborescenceEntity;
            },

            /**
             * Get the arborescence.
             */
            getArborescence: function () {
                return this.arborescence;
            },
        }

        var arborescenceCtrl = new ArborescenceCtrl();
        // self-register the controller
        arborescenceCtrl.register();
        return arborescenceCtrl;
    }
}));