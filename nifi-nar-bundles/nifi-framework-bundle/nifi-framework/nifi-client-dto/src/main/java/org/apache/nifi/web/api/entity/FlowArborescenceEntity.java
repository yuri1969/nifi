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
package org.apache.nifi.web.api.entity;

import io.swagger.annotations.ApiModelProperty;
import org.apache.nifi.web.api.dto.PermissionsDTO;
import org.apache.nifi.web.api.dto.flow.FlowArborescenceDTO;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.Set;

/**
 * A serialized representation of this class can be placed in the entity body of a request or response to or from the API. This particular entity holds a reference to a {@link FlowArborescenceDTO}.
 */
@XmlRootElement(name = "flowArborescenceEntity")
public class FlowArborescenceEntity extends Entity {
    private String id;
    private PermissionsDTO permissions;
    // private String versionedFlowState;
    private FlowArborescenceDTO arborescence;
    private Set<FlowArborescenceEntity> childArborescences;

    /**
     * The id for this ancestor ProcessGroup.
     *
     * @return The id
     */
    @ApiModelProperty(
            value = "The id of this ancestor ProcessGroup."
    )
    public String getId() {
        return id;
    }

    public void setId(final String id) {
        this.id = id;
    }

    /**
     * The permissions for this ancestor ProcessGroup.
     *
     * @return The permissions
     */
    @ApiModelProperty(
            value = "The permissions for this ancestor ProcessGroup."
    )
    public PermissionsDTO getPermissions() {
        return permissions;
    }

    public void setPermissions(final PermissionsDTO permissions) {
        this.permissions = permissions;
    }

    /**
     * The {@link FlowArborescenceDTO} that is being serialized.
     *
     * @return The {@link FlowArborescenceDTO} object
     */
    @ApiModelProperty(
            value = "This arborescence."
    )
    public FlowArborescenceDTO getArborescence() {
        return arborescence;
    }

    public void setArborescence(final FlowArborescenceDTO arborescence) {
        this.arborescence = arborescence;
    }

    /**
     * The child arborescences for this ancestor ProcessGroup.
     *
     * @return The child arborescences
     */
    @ApiModelProperty(
            value = "The child arborescences for this ancestor ProcessGroup."
    )
    public Set<FlowArborescenceEntity> getChildArborescences() {
        return childArborescences;
    }

    public void setChildArborescences(Set<FlowArborescenceEntity> childArborescences) {
        this.childArborescences = childArborescences;
    }
}
