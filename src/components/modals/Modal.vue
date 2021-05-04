<!-- modal -->
                    <!-- <b-button v-b-modal.details-modal variant="lightblue">More details</b-button>
                    <b-modal 
                    id="details-modal" 
                    class="d-flex"
                    body-class="bg-dots p-4"
                    size="lg" 
                    centered 
                    :title="details.name"
                    ok-only
                    ok-variant="secondary"
                    ok-title="Close">
                        <h3 class="mb-3 mt-2">What It Looks Like:</h3>
                        <hr class="mx-0 mr-auto mb-4 bg-lightblue" style="width: 50px; height: 4px;"/>
                       /more details
                        <b-card-group columns> 
                            <b-card
                            class="shadow" 
                            v-for="item in details.moreDetail" :key="item.id">
                                <b-card-title>
                                    <info-icon class="text-lightblue"></info-icon>
                                </b-card-title>
                                <b-card-text v-html="item">
                                </b-card-text>
                                <b-card-text class="small text-muted" v-html="details.name"></b-card-text>
                            </b-card>
                        </b-card-group>   
                        /select this item if...
                        <h3 class="mb-3 mt-4">Select if:</h3>
                        <hr class="mx-0 mr-auto mb-4 bg-green" style="width: 50px; height: 4px;" />
                        <b-card-group columns> 
                            <b-card 
                            class="shadow"
                            v-for="item in details.selectIf" :key="item.id">
                                <b-card-title>
                                    <check-icon class="text-green"></check-icon>
                                </b-card-title>
                                <b-card-text v-html="item">
                                </b-card-text>
                                <b-card-text class="small text-muted" v-html="details.name"></b-card-text>
                            </b-card>
                        </b-card-group>   
                    </b-modal> -->