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
        define([],
            function () {
                return (nf.ng.ArborescenceDirective = factory());
            });
    } else if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = (nf.ng.ArborescenceDirective =
            factory());
    } else {
        nf.ng.ArborescenceDirective = factory();
    }
}(this, function () {
    'use strict';

    // return function (breadcrumbsCtrl) {
    return function () {
        return {
            // define element
            restrict: 'E',
            templateUrl: 'views/nf-ng-arborescence-directive-view.html',
            scope: {
                'arborescence': '='/*,
                'clickFunc': '=',
                'highlightCrumbId': '=',
                'separatorFunc': '=',
                'isTracking': '=',
                'getVersionControlClass': '=',
                'getVersionControlTooltip': '='*/
            }
            /*,
            link: function (scope, element, attrs) {
                // breadcrumbsCtrl.registerMouseWheelEvent(element);
            }*/
        };
    };
}));