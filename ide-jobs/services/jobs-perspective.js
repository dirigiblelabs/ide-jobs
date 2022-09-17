/*
 * Copyright (c) 2010-2022 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */

const perspectiveData = {
    id: "jobs",
    name: "Jobs",
    link: "../ide-jobs/index.html",
    order: "750",
    image: "history", // deprecated
    icon: "/services/v4/web/resources/unicons/clock.svg",
};
if (typeof exports !== 'undefined') {
    exports.getPerspective = function () {
        return perspectiveData;
    }
}
