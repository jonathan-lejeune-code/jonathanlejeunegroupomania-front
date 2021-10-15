<template>
  <v-app>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header color="grey lighten-1 black--text">
          Voir les commentaire
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <textarea
            type="text"
            id="comment"
            name="comment"
            class="form-control"
            placeholder="  Insérer votre commentaire..."
          ></textarea>
          <v-btn icon><v-icon color="teal">mdi-send</v-icon> </v-btn>
          <v-divider></v-divider>
          <div class="container3">
            <v-list id="example-2"
              ><v-list-item class="com">
                <v-list-item-content>
                  <v-list-item-title class="titlecom black--text">a dit:</v-list-item-title>
                  <v-list-item-subtitle class="pcom black--text"> </v-list-item-subtitle>
                  <v-list-item-subtitle class="pcom1 black--text">
                    Publié le à

                    <v-btn
                      @click="deleteCom(PostId, comment.id)"
                      icon
                      v-if="user.id == comments.userId || user.isAdmin == true"
                      color="red"
                      id="btn-sup"
                      type="submit"
                      class="btn"
                    >
                      <v-icon>mdi-delete-sweep</v-icon>
                    </v-btn></v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-app>
</template>
